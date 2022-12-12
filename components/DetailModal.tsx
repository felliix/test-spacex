import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import imgClose from "assets/icons/close.svg";
import { Launch } from "apis/type";

export interface DetailModalProps {
  detailModalIsOpen: boolean;
  setDetailModalIsOpen: (val: boolean) => void;
  resource?: Launch;
}

const detailModalContainerStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
  },
};

const DetailModal: React.FC<DetailModalProps> = ({
  detailModalIsOpen,
  setDetailModalIsOpen,
  resource,
}) => (
  <Modal
    isOpen={detailModalIsOpen}
    onRequestClose={() => setDetailModalIsOpen(false)}
    style={detailModalContainerStyles}
    contentLabel="Detail Info"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-xl leading-8 font-bold text-neutral-600">
        {resource?.mission_name}
      </h2>
      <Image
        src={imgClose}
        className="w-5 h-5 hover:cursor-pointer"
        alt="article"
        onClick={() => setDetailModalIsOpen(false)}
      />
    </div>
    <div className="flex items-center mt-3">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h6 className="text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            Launch Date:{" "}
          </h6>
          <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
            {resource?.launch_date_local}
          </span>
        </div>
        <div className="flex flex-col mt-2">
          <h6 className="text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            Launch Site Name:{" "}
          </h6>
          <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
            {resource?.launch_site.site_name_long}
          </span>
        </div>
        <div className="flex mt-2">
          <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            Article Link:{" "}
          </h6>
          <a
            className="text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900 hover:cursor-pointer hover:underline"
            href={resource?.links.article_link}
          >
            click here
          </a>
        </div>
        <div className="flex mt-2">
          <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            Video Link:{" "}
          </h6>
          <a
            className="text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900 hover:cursor-pointer hover:underline"
            href={resource?.links.video_link}
          >
            click here
          </a>
        </div>
        <div className="flex mt-2">
          <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            RocketName:{" "}
          </h6>
          <span className="text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
            {resource?.rocket.rocket_name}
          </span>
        </div>
        <div className="sm:ml-3 mt-2 flex flex-col">
          <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            FirstStage:{" "}
          </h6>
          {resource?.rocket.first_stage.cores.map((core, index) => (
            <div key={index} className="sm:ml-3 flex flex-col sm:flex-row">
              <span className="text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                flight: {core.flight}
              </span>
              <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                reuse count: {core.core.reuse_count}
              </span>
              <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                status: {core.core.status ? core.core.status : "n/a"}
              </span>
            </div>
          ))}
        </div>
        <div className="sm:ml-3 mt-2 flex flex-col">
          <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
            SecondStage:{" "}
          </h6>
          {resource?.rocket.second_stage.payloads.map((payload, index) => (
            <div key={index} className="sm:ml-3 flex flex-col sm:flex-row">
              <span className="text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                Type: {payload.payload_type}
              </span>
              <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                {payload.payload_mass_kg} kg
              </span>
              <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                {payload.payload_mass_lbs} lb
              </span>
            </div>
          ))}
        </div>
        {resource && resource?.ships.length > 0 && (
          <div className="flex flex-col mt-3">
            <h6 className="mr-2 text-sm sm:text-lg leading-4 sm:leading-6 font-semibold text-neutral-600">
              Ships Info:{" "}
            </h6>
            <div className="flex flex-col">
              {resource?.ships.map((ship, index) => (
                <div
                  key={index}
                  className="sm:ml-3 flex justify-start items-start flex-col sm:flex-row sm:items-center"
                >
                  <Image src={ship.image} width={40} height={40} alt="ship" />
                  <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                    Name: {ship?.name}
                  </span>
                  <span className="sm:ml-3 text-sm sm:text-lg leading-4 sm:leading-6 font-normal text-neutral-900">
                    HomePort: {ship?.home_port}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </Modal>
);

export default DetailModal;
