import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import imgClose from "assets/icons/close.svg";
import { Launch } from "apis/type";

export interface CompareModalContainerStyles {
  compareModalIsOpen: boolean;
  setCompareModalIsOpen: (val: boolean) => void;
  filteredList: Launch[];
}

const compareModalContainerStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px 30px",
  },
};

const CompareModal: React.FC<CompareModalContainerStyles> = ({
  compareModalIsOpen,
  setCompareModalIsOpen,
  filteredList,
}) => (
  <Modal
    isOpen={compareModalIsOpen}
    onRequestClose={() => setCompareModalIsOpen(false)}
    style={compareModalContainerStyles}
    contentLabel="Compare Info"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-xl leading-8 font-bold text-neutral-600">
        Compare Details
      </h2>
      <Image
        src={imgClose}
        className="w-5 h-5 hover:cursor-pointer"
        alt="article"
        onClick={() => setCompareModalIsOpen(false)}
      />
    </div>
    <div className="flex items-center mt-3">
      <div className="flex flex-col w-full">
        <div className="flex flex-row sm:flex-col">
          <div className="flex flex-col">
            <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
              MissionName:{" "}
            </h6>
            <div className="flex flex-col lg:flex-row">
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[0]?.mission_name}
              </span>
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[1]?.mission_name}
              </span>
            </div>
          </div>
          <div className="mt-0 lg:mt-3 flex flex-col">
            <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
              Launch Date:{" "}
            </h6>
            <div className="flex flex-col lg:flex-row">
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[0]?.launch_date_local}
              </span>
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[1]?.launch_date_local}
              </span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="w-3/5 mt-3 flex flex-col">
            <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
              Launch Site Name:{" "}
            </h6>
            <div className="sm:!flex flex-col lg:flex-row !inline-block">
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[0]?.launch_site.site_name_long}
              </span>
              <span className="w-1/2 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                {filteredList[1]?.launch_site.site_name_long}
              </span>
            </div>
          </div>
          <div className="ml-3 sm:ml-0 w-2/5 flex flex-col">
            <div className="mt-3 flex flex-col">
              <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
                Article Link:{" "}
              </h6>
              <div className="grid grid-cols-2">
                <a
                  className="w-fit lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900 hover:cursor-pointer hover:underline"
                  href={filteredList[0]?.links.article_link}
                >
                  <span className="w-fit">click here</span>
                </a>
                <a
                  className="w-fit lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900 hover:cursor-pointer hover:underline"
                  href={filteredList[1]?.links.article_link}
                >
                  <span className="w-fit">click here</span>
                </a>
              </div>
            </div>
            <div className="mt-3 flex flex-col">
              <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
                Video Link:{" "}
              </h6>
              <div className="grid grid-cols-2">
                <a
                  className="w-fit lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900 w-fit hover:cursor-pointer hover:underline"
                  href={filteredList[0]?.links.video_link}
                >
                  click here
                </a>
                <a
                  className="w-fit lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900 w-fit hover:cursor-pointer hover:underline"
                  href={filteredList[1]?.links.video_link}
                >
                  click here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <h6 className="text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
            RocketName:{" "}
          </h6>
          <div className="flex">
            <span className="w-1/2 lg:ml-3 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
              {filteredList[0]?.rocket.rocket_name}
            </span>
            <span className="w-1/2 lg:ml-3 lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
              {filteredList[1]?.rocket.rocket_name}
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col">
          <div className="mt-2 lg:ml-3 flex flex-col">
            <h6 className="mr-2 text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 underline w-fit p-1">
              FirstStage:{" "}
            </h6>
            <div className="flex flex-col lg:flex-row">
              <div className="w-1/2">
                {filteredList[0]?.rocket.first_stage.cores.map(
                  (core, index) => (
                    <div key={index} className="lg:ml-3 flex">
                      <span className="text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        flight: {core.flight}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        reuse count: {core.core.reuse_count}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        status: {core.core.status ? core.core.status : "n/a"}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="w-1/2">
                {filteredList[1]?.rocket.first_stage.cores.map(
                  (core, index) => (
                    <div key={index} className="lg:ml-3 flex">
                      <span className="text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        flight: {core.flight}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        reuse count: {core.core.reuse_count}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        status: {core.core.status ? core.core.status : "n/a"}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="lg:ml-3 mt-2 flex flex-col">
            <h6 className="mr-2 text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 underline w-fit p-1">
              SecondStage:{" "}
            </h6>
            <div className="flex flex-col lg:flex-row">
              <div className="w-1/2">
                {filteredList[0]?.rocket.second_stage.payloads.map(
                  (payload, index) => (
                    <div key={index} className="lg:ml-3 flex">
                      <span className="text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        Type: {payload.payload_type}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        {payload.payload_mass_kg} kg
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        {payload.payload_mass_lbs} lb
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="w-1/2">
                {filteredList[1]?.rocket.second_stage.payloads.map(
                  (payload, index) => (
                    <div key={index} className="lg:ml-3 flex">
                      <span className="text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        Type: {payload.payload_type}
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        {payload.payload_mass_kg} kg
                      </span>
                      <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                        {payload.payload_mass_lbs} lb
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col mt-3">
          <h6 className="mr-2 text-sm leading-4 lg:text-lg lg:leading-6 font-semibold text-neutral-600 border w-fit p-1">
            Ships Info:{" "}
          </h6>
          <div className="flex">
            <div className="w-1/2 flex flex-col">
              {filteredList[0]?.ships.length < 1 ? (
                <div className="lg:ml-3">n/a</div>
              ) : (
                filteredList[0]?.ships.map((ship, index) => (
                  <div
                    key={index}
                    className="lg:ml-3 flex justify-start items-center"
                  >
                    <Image src={ship.image} width={20} height={20} alt="ship" />
                    <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                      Name: {ship?.name}
                    </span>
                    <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                      HomePort: {ship?.home_port}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div className="w-1/2 flex flex-col">
              {filteredList[1]?.ships.length < 1 ? (
                <div className="lg:ml-3">n/a</div>
              ) : (
                filteredList[1]?.ships.map((ship, index) => (
                  <div
                    key={index}
                    className="lg:ml-3 flex justify-start items-center"
                  >
                    <Image src={ship.image} width={20} height={20} alt="ship" />
                    <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                      Name: {ship?.name}
                    </span>
                    <span className="lg:ml-3 text-sm leading-4 lg:text-lg lg:leading-6 font-normal text-neutral-900">
                      HomePort: {ship?.home_port}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

export default CompareModal;
