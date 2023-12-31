import React from "react";
import "./LightFinder9.css";
import { Link } from "react-router-dom";
import download from "../images/downloadarrow.png";
import ellpise_lightfinder_report_bg from "../images/ellpise_lightfinder_report_bg.png";

const LightFinder9 = () => {
  return (
    <div className="bg-[#e4e4e7]">
      <img
        src={ellpise_lightfinder_report_bg}
        className="absolute top-0 ms-auto"
        alt=""
      />
      <div className="relative pt-40 pb-24 flex flex-col items-center justify-center gap-5">
        <div>
          <h1 className="text-[#7246FD] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light">
            Thank You !
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-base lg:text-xl w-2/5 text-center">
            Please be patient, as we process your inputs.One of our expert will
            reach out to you soon. Say... within 48hrs.
          </p>
        </div>
        <div>
          <button className="flex text-white items-center gap-5 bg-[#7246FD] px-4 py-2 ">
            Download report <img src={download} alt="" />
          </button>
        </div>
        <div className="w-3/4 mx-auto border-t-2 border-[#7246FD] my-4"></div>
        <div className="flex justify-center">
          <p className="px-10 md:px-0 text-center">
            In the meantime you can browse through other projects to explore
            more about light!
          </p>
        </div>
        <div>
          <Link to="/ourprojects">
            <button className="text-white bg-[#7246FD] px-10 py-2 ">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LightFinder9;
