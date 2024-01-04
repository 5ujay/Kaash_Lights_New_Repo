import React from "react";
import "../pages/LightFinder3.css";

//importing icons default State
import generalIllumination from "../Light_finder_images/Types_of_lighting/General_illumination.png";
import softDirect from "../Light_finder_images/Types_of_lighting/Soft direct.png";
import softIndirect from "../Light_finder_images/Types_of_lighting/Soft indirect.png";
import taskLight from "../Light_finder_images/Types_of_lighting/Task light.png";
import highArt from "../Light_finder_images/Types_of_lighting/Highlight art.png";
import highObject from "../Light_finder_images/Types_of_lighting/Highlight object.png";
import highWall from "../Light_finder_images/Types_of_lighting/Highlight wall.png";
import decorative from "../Light_finder_images/Types_of_lighting/Decorative light.png";
import colourfulLight from "../Light_finder_images/Types_of_lighting/Colourful light.png";
import projection from "../Light_finder_images/Types_of_lighting/Projection.png";
import specialApplication from "../Light_finder_images/Types_of_lighting/Special application.png";
import therapuetic from "../Light_finder_images/Types_of_lighting/Therapuetic.png";

// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";

// Array of Icon and there name

const Data = [
  {
    name: "General illumination",
    Image: generalIllumination,
  },
  {
    name: "Soft direct",
    Image: softDirect,
  },
  {
    name: "Soft indirect",
    Image: softIndirect,
  },
  {
    name: "Task light",
    Image: taskLight,
  },
  {
    name: "Highlight art",
    Image: highArt,
  },
  {
    name: "Highlight object",
    Image: highObject,
  },
  {
    name: "Highlight wall",
    Image: highWall,
  },
  {
    name: "Decorative",
    Image: decorative,
  },
  {
    name: "Colourful light",
    Image: colourfulLight,
  },
  {
    name: "Projection",
    Image: projection,
  },
  {
    name: "Special application",
    Image: specialApplication,
  },
  {
    name: "Therapeutic",
    Image: therapuetic,
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

const LightFinder3 = () => {
  return (
    <div className="px-8 md:px-20 lg:px-28 pb-28 lg:pb-32 select-none">
      {/* Ellipse */}
      <img
        class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
        src={second_ellipes}
        alt="ellipes"
      />
      {/* <div className="gradient h-[10rem] w-[5rem]"></div> */}
      <div>
        <p className="pl-4 lg:pl-8 pt-8 text-lg">
          2. Choose type of lighting (select multiple if applicable).
        </p>
      </div>

      <div className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 md:gap-x-11 gap-y-4 pl-4 lg:pl-8 w-3/4 mt-5 relative z-10">
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

export default LightFinder3;
