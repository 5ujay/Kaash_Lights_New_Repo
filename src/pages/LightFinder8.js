import React, { useState } from "react";
import "../pages/LightFinder8.css";
import ellpise_lighfinder_bg1 from "../images/ellpise_lighfinder_bg1.png";
import ellpise_lighfinder_bg2 from "../images/ellpise_lighfinder_bg2.png";
// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";

const LightFinder5 = () => {
  const [selectContact, setSelectContact] = useState(null);

  const handleClickContact = (index) => {
    setSelectContact(index);
  };
  return (
    <>
      <div className="bg-[#e4e4e7] h-full px-10 sm:px-20 lg:px-36 pt-10 pb-4">
        <img
          class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
          src={second_ellipes}
          alt="ellipes"
        />
        <div className="relative z-10">
          <div>
            <div>
              <p className="text-base sm:text-lg md:text-lg">
                9. &nbsp; How do you wish to be contacted.
              </p>
            </div>
            <div className="grid grid-cols-2 h-32 gap-2 text-base mt-6 sm:h-16 sm:grid-cols-3 sm:w-full sm:gap-6 md:w-3/4 lg:gap-10  lg:text-lg xl:w-1/2 ">
              <div
                className={`${
                  selectContact === 0
                    ? "bg-[#7246fd] text-white"
                    : "bg-white text-black"
                } flex items-center justify-center rounded-sm cursor-pointer`}
                onClick={() => handleClickContact(0)}
              >
                <p>Via e-mail</p>
              </div>
              <div
                className={`${
                  selectContact === 1
                    ? "bg-[#7246fd] text-white"
                    : "bg-white text-black"
                } flex items-center justify-center rounded-sm cursor-pointer`}
                onClick={() => handleClickContact(1)}
              >
                <p>Schedule a call</p>
              </div>
              <div
                className={`${
                  selectContact === 2
                    ? "bg-[#7246fd] text-white"
                    : "bg-white text-black"
                } flex items-center justify-center rounded-sm cursor-pointer`}
                onClick={() => handleClickContact(2)}
              >
                <p>Fix a meeting</p>
              </div>
            </div>
          </div>

          <div className="pt-14">
            <p className="text-base sm:text-lg md:text-lg">
              10. &nbsp; Write below if you would like to add any comments. (Max
              1000Words)
            </p>
            <div className="w-3/4 pt-5">
              <textarea
                className="w-full h-32 p-4 border-gray-400 border-2 outline-none"
                placeholder="Write here..."
              />
            </div>
          </div>

          <div className="pt-10">
            <p className="text-base sm:text-lg md:text-lg">
              11. &nbsp; Enter your email
            </p>
            <div className="py-5">
              <input
                className="border-gray-400 border-2 outline-none px-2 w-4/5 lg:w-1/3 py-2 text-lg"
                type="email"
                name="email"
                id=""
                placeholder="hello@email.com"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightFinder5;
