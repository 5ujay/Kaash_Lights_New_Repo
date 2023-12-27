import React, { useState, useEffect } from "react";
import "../pages/LightFinder2.css";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";

import "./LightFinder2.css";
import { RxCross2 } from "react-icons/rx";

// importing default states images ................................
import Home_default from "../images/Home_default.png";
import Office3_default from "../images/Office3.png";
import Hotel_default from "../images/Hotel.png";
import Cafe_default from "../images/Cafe.png";
import Restaurant_default from "../images/Restaurant.png";
import shop_default from "../images/Shop.png";
import Museum_default from "../images/Exhibition.png";

import Factory_default from "../images/Factory.png";
import Warehouse_default from "../images/Warehouse2.png";
import Corporate_default from "../images/Corporate event.png";
import Concert_default from "../images/Concerts.png";
import Celebration_default from "../images/Celebration.png";
import Sports_default from "../images/Sports.png";
import Hospital_default from "../images/Hospital.png";

import Street_default from "../images/Street.png";
import Park_default from "../images/Park.png";
import Garden_default from "../images/Garden.png";
import Facade_default from "../images/Facade.png";
import Yacht_default from "../images/Yacht.png";
import Airplane_default from "../images/Airplane.png";
import Loco_default from "../images/Locomotives.png";

// importing back and next btn arrow image..................
import backbtn from "../images/backbtn.png";
import nextBtn from "../images/nextbtn.png";

// importing bg image
import EllipseFinderdecobg from "../images/EllipseFinderdecobg.png";

const LightFinder2 = () => {
  const lightStyles = {
    LightImg: {
      backgroundImage: "url('../images/EllipseFinderdecobg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };

  // selection of div..................................
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (category) => {
    // Check if the category is already selected
    if (selectedCategory === category) {
      // If yes, remove the selection
      setSelectedCategory(null);
    } else {
      // If no, select the category
      setSelectedCategory(category);
    }
    // const selectedImg = document.getElementById("image");
    // if (selectedImg) {
    //   selectedImg.style.background =
    //     "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)";
    // }
  };

  const getCategoryStyle = (category) => {
    return {
      background:
        selectedCategory === category
          ? "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)"
          : "white",
    };
  };
  const renderDiv = (category, imageSrc, label) => (
    <div
      className={`bg-${
        selectedCategory === category ? "[#7246FD]" : "white"
      } w-3/4 p-4 flex flex-col items-center justify-center rounded-md`}
      onClick={() => handleSelect(category)}
      onDoubleClick={() => handleSelect(category)}
    >
      <div
        className=""
        onMouseEnter={() => {
          if (selectedCategory !== category) {
            document.getElementById("image-" + category).style.background =
              "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)";
          }
        }}
        onMouseLeave={() => {
          if (selectedCategory !== category) {
            document.getElementById("image-" + category).style.background =
              "white";
          }
        }}
      >
        <img
          style={getCategoryStyle(category)}
          id={`image-${category}`}
          className="w-16 box "
          src={imageSrc}
          alt=""
        />
      </div>
      <p
        className={`pt-2 ${selectedCategory === category ? "text-white" : ""}`}
      >
        {label}
      </p>
    </div>
  );

  return (
    <div className=" h-full relative">
      <div>
        <Navbargrey />
      </div>
      <div
        className="px-28 md:pb-64 bg-[#E4E4E7]"
        style={{
          ...lightStyles.LightImg,
          backgroundImage: `url(${EllipseFinderdecobg})`,
        }}
      >
        <div>
          <p className="pl-8 pt-8 text-lg">Where do you need light ?</p>
        </div>

        {/*===== images start here===== */}
        <div className="text-black text-center grid grid-cols-7 gap-4 px-8  mt-5 ">
          {renderDiv("Home", Office3_default, "Home")}
          {renderDiv("Office", Office3_default, "Office")}
          {renderDiv("Hotel", Hotel_default, "Hotel")}
          {renderDiv("Cafe", Cafe_default, "Cafe")}
          {renderDiv("Restaurant", Restaurant_default, "Restaurant")}
          {renderDiv("shop", shop_default, "shop")}
          {renderDiv("Museum", Museum_default, "Museum")}

          {renderDiv("Factory", Factory_default, "Factory")}
          {renderDiv("Warehouse", Warehouse_default, "Warehouse")}
          {renderDiv("Corporate", Corporate_default, "Corporate")}
          {renderDiv("Concert", Concert_default, "Concert")}
          {renderDiv("Celebration", Celebration_default, "Celebration")}
          {renderDiv("Sports", Sports_default, "Sports")}
          {renderDiv("Hospital", Hospital_default, "Hospital")}

          {renderDiv("Street", Street_default, "Street")}
          {renderDiv("Park", Park_default, "Park")}
          {renderDiv("Garden", Garden_default, "Garden")}
          {renderDiv("Facade", Facade_default, "Facade")}
          {renderDiv("Yactch", Yacht_default, "Yactch")}
          {renderDiv("Airplane", Airplane_default, "Airplane")}
          {renderDiv("Locomotives", Loco_default, "Locomotives")}
        </div>

        <div className=" px-8 mt-8 flex gap-5 ">
          <Link to="/lightfinder">
            <div className="flex gap-6 bg-transparent border-2 border-solid border-[#7246FD] px-6 py-2 hover:bg-[#7246FD] hover:text-white ">
              <img src={backbtn} alt="" />
              <button>Back</button>
            </div>
          </Link>
          <Link to="/lightfinder3">
            <div className="flex gap-6 bg-[#7246FD] border-2 border-solid border-[#7246FD] px-6 py-2 ">
              <button className="text-white">Next</button>
              <img src={nextBtn} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LightFinder2;
