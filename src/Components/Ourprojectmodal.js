import React from "react";
import { IoArrowDown } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Ourprojectmodal = ({
  isOpen,
  closeModal,
  bigImageSrc,
  thumbnails,
  handleThumbnailClick,
  heading,
  Description1,
  Description2,
  Description3,
  Description4,
  Description5,
  Collab,
  Collabinfo1,
  Collabinfo2,
  Collabinfo3,
  Date,
}) => {
  const modalStyles = {
    modal: {
      position: "fixed",
      top: "5%",
      right: "0%",
      left: "0%",
    },
  };
  return (
    isOpen &&
    thumbnails &&
    thumbnails.length > 0 && ( // Null check added here
      <div
        className="w-full h-full z-50 flex flex-col justify-center items-center px-10 sm:px-20 "
        style={modalStyles.modal}
      >
        <div className="bg-[#101010] text-white max-w-4xl w-full h-full p-2 overflow-y-auto overflow-hidden scroll-smooth ">
          <div
            onClick={closeModal}
            className="text-3xl font-semibold flex place-content-end cursor-pointer"
          >
            <RxCross1 />
          </div>
          <div className="sm:mb-4 sm:mt-4">
            <h2 className="font-light text-start md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>
          <div className="gap-1 mt-2 grid sm:grid-cols-3 sm:mt-6 h-fit w-fit">
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-1 cursor-pointer h-fit w-fit">
              {thumbnails.map((thumbnail, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(thumbnail)}
                >
                  <img src={thumbnail} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>
            <div className="overflow-hidden col-span-2 pr-1 sm:pr-0 cursor-pointer ">
              <img
                className="object-center object-cover -mb-10 "
                src={bigImageSrc}
                alt="Big Image"
              />
            </div>
          </div>
          <div className="grid px-4 py-3 leading-6 text-xs sm:py-6 sm:grid-cols-3 sm:px-6 font-light sm:text-sm gap-10 lg:text-base">
            <div>
              <p>{Description1}</p>
              <div className=" py-4 sm:py-8">
                <p className="italic">{Collab}</p>
                <p>{Collabinfo1}</p>
                <p>{Collabinfo2}</p>
                <p>{Collabinfo3}</p>
                <p>{Date}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-2 gap-5 sm:gap-10 pb-24">
              <p>{Description2}</p>
              <p>{Description3}</p>
              <p>{Description4}</p>
              <p>{Description5}</p>
            </div>
          </div>
          {/* <div className="flex place-content-center text-4xl pb-10">
            <IoArrowDown />
          </div> */}
        </div>
      </div>
    )
  );
};

export default Ourprojectmodal;
