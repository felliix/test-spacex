import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import Modal from "react-modal";
import { getSpaceXList, searchSpaceX } from "apis/queries";
import { Launch } from "apis/type";
import DetailModal from "components/DetailModal";
import CompareModal from "components/CompareModal";
import Resource from "components/Resource";
import Header from "components/Header";
import useApiCall from "hooks/useApiCall";

Modal.setAppElement("#spacex");

const responseResolver = (
  res: { launchesPast: Launch[] },
  prevData: Launch[] | null
) => {
  if (prevData === null) {
    return res.launchesPast;
  } else {
    return prevData.concat(res.launchesPast);
  }
};

const Home: NextPage = () => {
  const limit = 18;
  const [detailModalIsOpen, setDetailModalIsOpen] = useState<boolean>(false);
  const [compareModalIsOpen, setCompareModalIsOpen] = useState<boolean>(false);
  const [resource, setResource] = useState<Launch>();
  const [filteredList, setFilteredList] = useState<Launch[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [querySpaceXListStatus, resourceList, querySpaceXList] = useApiCall<
    Launch[]
  >(getSpaceXList, responseResolver);
  const [querySpaceXSearchStatus, searchList, querySearchSpaceX] =
    useApiCall<Launch[]>(searchSpaceX);

  const lists = isSearching ? searchList : resourceList;
  const isLoading = isSearching
    ? querySpaceXSearchStatus
    : querySpaceXListStatus;

  useEffect(() => {
    querySpaceXList(limit, 0);
  }, [querySpaceXList]);

  const handleSearch = useCallback(
    (keyword: string) => {
      querySearchSpaceX(keyword);
      setIsSearching(true);
    },
    [querySearchSpaceX]
  );

  const handleScroll = useCallback(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom && !isSearching) {
      const count = lists?.length;
      querySpaceXList(limit, count);
    }
  }, [isSearching, querySpaceXList, lists?.length]);

  const handleSelect = useCallback(
    (id?: string) => {
      let currentItems: Launch[] = filteredList;
      const filterItem = lists?.find((resource) => resource.id === id);
      if (filteredList.some((item) => item.id === id)) {
        currentItems = currentItems.filter((item) => item.id !== id);
        setFilteredList(currentItems);
      } else {
        filterItem !== undefined &&
          setFilteredList((prev) => prev.concat(filterItem));
      }
    },
    [filteredList, lists]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="w-full relative" id="spacex">
        <Header
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSearch={handleSearch}
        />
        <div className="flex flex-wrap justify-center gap-10 pt-4 pb-8 px-10 lg:px-20 mt-20">
          {isLoading ? (
            <>
              {lists?.length !== 0 && !isSearching ? (
                <>
                  {lists?.map((resource) => (
                    <div key={resource.id}>
                      <Resource
                        key={resource.id}
                        resource={resource}
                        filteredList={filteredList}
                        setCompareModalIsOpen={setCompareModalIsOpen}
                        handleSelect={handleSelect}
                        setDetailModalIsOpen={setDetailModalIsOpen}
                        setResource={setResource}
                      />
                    </div>
                  ))}
                  {Array(18)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="flex flex-col rounded-lg p-3 hover:cursor-pointer w-64 h-96 skeleton-loader-box"
                      />
                    ))}
                </>
              ) : (
                Array(18)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col rounded-lg p-3 hover:cursor-pointer w-64 h-96 skeleton-loader-box"
                    />
                  ))
              )}
            </>
          ) : (
            lists?.length !== 0 ?
            lists?.map((resource) => (
              <div key={resource.id}>
                <Resource
                  key={resource.id}
                  resource={resource}
                  filteredList={filteredList}
                  setCompareModalIsOpen={setCompareModalIsOpen}
                  handleSelect={handleSelect}
                  setDetailModalIsOpen={setDetailModalIsOpen}
                  setResource={setResource}
                />
              </div>
            )) :
            <div>Nothing here to display</div>
          )}
        </div>
      </div>

      <DetailModal
        detailModalIsOpen={detailModalIsOpen}
        setDetailModalIsOpen={setDetailModalIsOpen}
        resource={resource}
      />

      <CompareModal
        compareModalIsOpen={compareModalIsOpen}
        setCompareModalIsOpen={setCompareModalIsOpen}
        filteredList={filteredList}
      />
    </>
  );
};

export default Home;
