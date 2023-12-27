import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import One from "../images/One_lightfinder_srno.png";
import Two from "../images/Two_lightfinder_srno.png";
import Three from "../images/Three_lightfinder_srno.png";
import "./LightFinder.css";
import { Link } from "react-router-dom";
import Navbargrey from "../Components/Navbargrey";
import Ellpise_lightfinder_purple from "../images/EllipseFinderpurple.png";
const LightFinder = () => {
  const lightStyles = {
    LightImg: {
      backgroundImage: "url('../images/EllipseFinderpurple.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };
  return (
    <>
      <div>
        <Navbargrey />
      </div>
      <div className="relative bg-[#E4E4E7] h-full w-full">
        <section
          style={{
            ...lightStyles.LightImg,
            backgroundImage: `url(${Ellpise_lightfinder_purple})`,
          }}
          className="md:pb-64 bg-[#E4E4E7]"
        >
          <div className="px-8 sm:px-24">
            {/* <div className="bg-[#E4E4E7] w-full">
              <img
                className="absolute right-0 w-2/4"
                src={Ellpise_lightfinder_purple}
                alt=""
              />
            </div> */}
            <div className="py-24">
              <h1 className="text-6xl md:text-8xl lg:text-9xl">Light finder</h1>
              <h2 className="pt-12 text-base sm:text-lg sm:px-4">
                Light finder is a digital tool to help you find the perfect{" "}
                <br />
                lighting solution for your home, office, shop, or any other
                project.
              </h2>

              <div className="sm:px-4 pt-6">
                <h3 className="text-lg font-bold">How does it work ?</h3>

                <div className="flex flex-row items-center gap-5 py-4">
                  <div>
                    <img className="sm:w-8 md:w-fit" src={One} alt="" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base w-60 sm:w-full">
                      Answer 5 simple questions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-5 py-4">
                  <div>
                    <img className="sm:w-8  md:w-fit" src={Two} alt="" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base w-60 sm:w-96 lg:w-2/4">
                      Upload visual information of your project, where you need
                      light. Share any photographs, architectural plans, 3d
                      models.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-5 py-4">
                  <div>
                    <img className="sm:w-8 md:w-fit" src={Three} alt="" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base w-60 md:w-full">
                      Submit and our team will contact you with a solution.
                    </p>
                  </div>
                </div>

                <div className="pt-16">
                  <Link to="/lightfinder2">
                    <button className="bg-[#7246FD] px-16 py-3 text-white text-xl">
                      Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default LightFinder;
