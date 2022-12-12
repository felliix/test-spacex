import React from "react";
import Image from "next/image";
import { Launch } from "apis/type";
import imgArticle from "assets/icons/article.svg";
import imgVideo from "assets/icons/video.svg";

export interface ResourceProps {
  resource?: Launch;
  filteredList: Launch[];
  setCompareModalIsOpen: (val: boolean) => void;
  handleSelect: (val?: string) => void;
  setDetailModalIsOpen: (val: boolean) => void;
  setResource: (val?: Launch) => void;
}

const Resource: React.FC<ResourceProps> = ({
  resource,
  filteredList,
  setCompareModalIsOpen,
  handleSelect,
  setDetailModalIsOpen,
  setResource,
}) => (
  <div className="flex flex-col border border-neutral-300 rounded-lg px-3 py-4 hover:shadow-lg w-64	h-96">
    <div>
      <div className="flex justify-between items-center">
        <h6 className="text-sm leading-7 font-bold text-zinc-500">
          Mission Name:
        </h6>
        <div className="flex items-center gap-1">
          {filteredList.length == 2 &&
            filteredList.some((item) => item.id === resource?.id) && (
              <button
                className="text-sm font-normal cursor-pointer px-2 bg-indigo-100 rounded-lg"
                onClick={() => setCompareModalIsOpen(true)}
              >
                compare
              </button>
            )}
          <input
            className="cursor-pointer"
            type="checkbox"
            id={resource?.id}
            name="select"
            onChange={() => handleSelect(resource?.id)}
          />
        </div>
      </div>
      <span className="ml-3 text-sm leading-6 font-semibold text-slate-600 text-ellipsis line-clamp-1">
        {resource?.mission_name}
      </span>
    </div>
    <div className="border-b border-neutral-100 my-2"></div>
    <div>
      <h6 className="text-sm leading-7 font-bold text-zinc-500">
        LaunchSite Name:
      </h6>
      <div className="ml-3 text-sm leading-6 font-semibold text-slate-600 text-ellipsis line-clamp-2">
        {resource?.launch_site.site_name_long}
      </div>
    </div>
    <div className="border-b border-neutral-100 my-2"></div>
    <div>
      <h6 className="text-sm leading-7 font-bold text-zinc-500">
        Rocket Name:
      </h6>
      <span className="ml-3 text-sm leading-6 font-semibold text-slate-600">
        {resource?.rocket.rocket_name}
      </span>
    </div>
    <div className="border-b border-neutral-100 my-2"></div>
    <div className="flex justify-between items-center">
      <div>
        <h6 className="text-sm leading-7 font-bold text-zinc-500">
          Ships count:
        </h6>
        <span className="ml-3 text-sm leading-6 font-semibold text-slate-600">
          {resource?.ships.length}
        </span>
      </div>
      <div className="flex">
        <a href={resource?.links.article_link}>
          <Image
            src={imgArticle}
            className="w-8 h-8 mr-1 hover:cursor-pointer"
            alt="article"
          />
        </a>
        <a href={resource?.links.article_link}>
          <Image
            src={imgVideo}
            className="w-8 h-8 ml-1 hover:cursor-pointer"
            alt="video"
          />
        </a>
      </div>
    </div>
    <div className="border-b border-neutral-100 my-2"></div>
    <button
      className="mt-4 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold rounded-lg px-5 py-1"
      onClick={() => {
        setDetailModalIsOpen(true);
        setResource(resource);
      }}
    >
      Show more
    </button>
  </div>
);

export default Resource;
