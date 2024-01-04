import React from "react";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";
import "../pages/LightFinder4.css";

import ceilingRec from "../Light_finder_images/Light_position/Ceiling recessed.png";
import ceilingSurf from "../images/Ceiling surface.png";
import ceilingPend from "../images/Ceiling pendant.png";
import ceilingTrack from "../images/Ceilng track.png";
import wallRec from "../images/Wall recessed.png";
import wallSurf from "../images/Wall surface.png";
import floorStanding from "../images/Floor standing.png";
import floorInGround from "../images/Floor in-ground.png";
import underwater from "../images/underwater.png";
import undershelf from "../images/Under shelf.png";
import ceilingCove from "../images/Ceiling cove.png";
import wallCove from "../images/Wall cove.png";

// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";
// Array of Icon and there name

const Data = [
  {
    name: "Ceiling recessed",
    Image: ceilingRec,
  },
  {
    name: "Ceiling surface",
    Image: ceilingSurf,
  },
  {
    name: "Ceiling pendant",
    Image: ceilingPend,
  },
  {
    name: "Ceiling track",
    Image: ceilingTrack,
  },
  {
    name: "Wall recessed",
    Image: wallRec,
  },
  {
    name: "Wall surface",
    Image: wallSurf,
  },
  {
    name: "Floor standing",
    Image: floorStanding,
  },
  {
    name: "Floor in-ground",
    Image: floorInGround,
  },
  {
    name: "Underwater",
    Image: underwater,
  },
  {
    name: "Under shelf",
    Image: undershelf,
  },
  {
    name: "Ceiling cove",
    Image: ceilingCove,
  },
  {
    name: "Wall cove",
    Image: wallCove,
  },
];

const handleClick = (index) => {
  const targetElement = document.getElementById(index);
  let computedStyle = window.getComputedStyle(targetElement);
  if (computedStyle) {
    var backgroundColor = computedStyle.backgroundColor;
    if (backgroundColor === "rgb(244, 244, 245)") {
      targetElement.style.backgroundColor = "#7246FD";
    } else {
      targetElement.style.backgroundColor = "#F4F4F5";
    }
  }
};

const LightFinder4 = () => {
  return (
    <div className="px-8 md:px-20 pb-28 lg:pb-32 lg:px-28 select-none">
      {/* Ellipse */}
      <img
        class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
        src={second_ellipes}
      />
      <div>
        <p className="pl-4 lg:pl-8 pt-8 text-lg">
          3. Choose light position (select multiple if applicable).
        </p>
      </div>

      <div className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 md:gap-x-11  gap-y-4 pl-4 lg:pl-8 w-3/4 mt-5 relative z-10">
        {Data.map((image, index) => {
          const id = "id" + index;
          return (
            <div
              id={id}
              className="bg-[#F4F4F5] py-6 box rounded-md cursor-pointer"
              onClick={() => handleClick(id)}
            >
              <div className="mx-5 flex flex-col items-center text-center">
                <img className="w-16 icon" src={image.Image} alt={image.name} />
                <p className="pt-2">{image.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightFinder4;
