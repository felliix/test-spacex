import React from "react";

export interface HeaderProps {
  searchKey: string;
  setSearchKey: (val: string) => void;
  handleSearch: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchKey,
  setSearchKey,
  handleSearch,
}) => (
  <div className="fixed top-0  w-full z-50 flex flex-col justify-center sm:justify-between sm:flex-row items-center bg-cyan-50 h-20 px-5 lg:px-20">
    <div
      className="text-neutral-600 font-bold text-2xl cursor-pointer"
      onClick={() => (window.location.href = "/")}
    >
      SpaceX
    </div>
    <div>
      <input
        className="border border-grey rounded-lg w-52 h-8 focus-visible:outline-neutral-200 text-xs text-neutral-500 px-2 py-1 ml-2 mt-1 sm:ml-0 sm:mt-0"
        type="text"
        placeholder="Search by mission or rocket name ..."
        value={searchKey}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(searchKey);
          }
        }}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button
        className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-1 hidden sm:inline"
        onClick={() => handleSearch(searchKey)}
      >
        Search
      </button>
    </div>
  </div>
);

export default Header;
