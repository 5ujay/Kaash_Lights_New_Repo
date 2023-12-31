import React from "react";
import "./LightFinder.css";
import { Link } from "react-router-dom";
import Navbargrey from "../Components/Navbargrey";
import Ellpise_lightfinder_purple from "../images/EllipseFinderpurple.png";
const LightFinder = () => {
  return (
    <>
      <section className="bg-[#E4E4E7]  w-full h-full">
        {/* ============navbar============= */}
        <div>
          <Navbargrey />
        </div>
        <img
          class="absolute right-0 w-96 md:w-1/2 ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] "
          src={Ellpise_lightfinder_purple}
          alt="ellipes"
        />
        <div className="text-black relative py-12 px-10 sm:px-16 md:px-24">
          <div className="">
            <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-light">
              Light Finder
            </h1>
            <h2 className="pt-6 sm:pt-12 text-sm sm:text-base lg:text-lg">
              Light finder is a digital tool to help you find the perfect <br />
              lighting solution for your home, office, shop, or any other
              project.
            </h2>
          </div>

          <div className="pt-6">
            <p className="text-lg font-semibold">How does it Work?</p>
            <div>
              <div className="flex flex-row items-center gap-5 py-4">
                <div className="bg-[#7246FD] text-white w-8 h-8 rounded-full flex justify-center items-center">
                  <p>1</p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base w-60 sm:w-full">
                  Answer 5 simple questions.
                </p>
              </div>

              <div className="flex flex-row items-center gap-5 py-4">
                <div className="bg-[#7246FD] text-white w-8 h-8 rounded-full flex justify-center items-center">
                  <p>2</p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base w-60 sm:w-full">
                  Upload visual information of your project, where you need
                  light. Share any photographs, architectural plans, 3D models.
                </p>
              </div>

              <div className="flex flex-row items-center gap-5 py-4">
                <div className="bg-[#7246FD] text-white w-8 h-8 rounded-full flex justify-center items-center">
                  <p>3</p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base w-60 sm:w-full">
                  Submit, and our team will contact you with a solution.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <Link to="/lightfinder2">
              <button className="bg-[#7246FD] px-14 py-2 text-white text-xl">
                Start
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default LightFinder;
