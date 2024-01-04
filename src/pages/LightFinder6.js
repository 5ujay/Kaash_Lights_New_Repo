import React from "react";
import "./LightFinder6.css";
import LengthDropdown from "../Components/LengthDropdown";
import AreaDropdown from "../Components/areaDropdown";
import ellpise_lighfinder_bg1 from "../images/ellpise_lighfinder_bg1.png";
import ellpise_lighfinder_bg2 from "../images/ellpise_lighfinder_bg2.png";
// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";

const LightFinder6 = () => {
  return (
    <>
      <section className="bg-[#e4e4e7] h-full w-full">
        <img
          class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
          src={second_ellipes}
          alt="ellipes"
        />
        <div className="relative z-10 px-10 sm:px-20 lg:px-28 pt-5">
          {/* ====== 6th point ====== */}
          <div>
            <div>
              <p className="text-lg md:text-xl">
                5. &nbsp; Choose the application area.
              </p>
            </div>
            <div className="flex flex-row gap-2 md:gap-20 text-base md:text-lg pt-8 pl-8">
              <div className="bg-white w-48 h-20 flex items-center justify-center rounded-sm hover:bg-[#7246fd] hover:text-white">
                <p>Interior</p>
              </div>
              <div className="bg-white w-48 h-20 flex items-center justify-center rounded-sm hover:bg-[#7246fd] hover:text-white">
                <p>Exterior</p>
              </div>
              <div className="bg-white w-48 h-20 flex items-center justify-center rounded-sm hover:bg-[#7246fd] hover:text-white">
                <p>Mix-use</p>
              </div>
            </div>
          </div>

          {/* ======7th point ====== */}
          <div className="pt-16">
            <div>
              <p className="text-lg md:text-xl">
                6. &nbsp; Enter space dimensions or area.
              </p>
            </div>

            <div className="pt-5 pb-5 flex flex-col xl:flex-row text-base lg:text-xl">
              <div className="sm:pl-8 grid gap-8 ">
                <div className="flex flex-row items-center">
                  <span className="w-20 md:w-28">Length</span>
                  <div className="flex justify-center items-center gap-6 xl:gap-10">
                    <input
                      className="py-3 md:w-48 px-2 w-32"
                      type="number"
                      min="0"
                    ></input>
                    <LengthDropdown />
                  </div>
                </div>

                <div className="flex items-center ">
                  <span className="w-20 md:w-28">Breadth</span>
                  <div className="flex justify-center items-center gap-6 xl:gap-10">
                    <input
                      className="py-3 md:w-48 px-2 w-32"
                      type="number"
                      min="0"
                    ></input>
                    <LengthDropdown />
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-20 md:w-28">Height</span>
                  <div className="flex justify-center items-center gap-6 xl:gap-10">
                    <input
                      className="py-3 md:w-48 px-2 w-32"
                      type="number"
                      min="0"
                    ></input>
                    <LengthDropdown />
                  </div>
                </div>

                <div className="sm:hidden flex items-center">
                  <span className="w-20 md:w-28">Area</span>
                  <div className="flex justify-center items-center gap-6 xl:gap-10">
                    <input
                      className="py-3 md:w-48 px-2 w-32"
                      type="number"
                      min="0"
                    ></input>
                    <AreaDropdown />
                  </div>
                </div>
              </div>

              <div className="pl-8 ">
                <ul class=" hidden xl:flex flex-col items-center mx-10">
                  <li class=" h-32 border-l border-[#000000] font-medium"></li>
                  <li class="my-4 text-xl font-semibold">OR</li>
                  <li class="h-28 border-l border-[#000000] font-medium"></li>
                </ul>
              </div>

              <div className="hidden sm:block sm:pl-8 pt-8 xl:pt-0  ">
                <div className="flex items-center">
                  <span className="w-20 md:w-28">Area</span>
                  <div className="flex justify-center items-center gap-6 xl:gap-10">
                    <input
                      className="py-3 md:w-48 px-2 w-32"
                      type="number"
                      min="0"
                    ></input>
                    <AreaDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LightFinder6;
