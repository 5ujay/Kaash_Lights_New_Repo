import React, { useState } from "react";
import "../pages/LightFinder3.css";

//importing icons default State
import generalIllumination from "../images/General illumination.png";
import softDirect from "../images/Soft direct.png";
import softIndirect from "../images/Soft indirect.png";
import taskLight from "../images/Task light.png";
import highArt from "../images/Highlight art.png";
import highObject from "../images/Highlight object.png";
import highWall from "../images/Highlight wall.png";
import decorative from "../images/Decorative light.png";
import colourfulLight from "../images/Colourful light.png";
import projection from "../images/Projection.png";
import specialApplication from "../images/Special application.png";
import therapuetic from "../images/Therapuetic.png";

// importing the images for selected states ie.White images
import Generalillumination_white from "../images/Generalillumination_white.png";
import Softdirect_white from "../images/Softdirect_white.png";
import Softindirect_white from "../images/Softindirect_white.png";
import Tasklight_white from "../images/Tasklight_white.png";
import Highlightart_white from "../images/Highlightart_white.png";
import Highlightobject_white from "../images/Highlightobject_white.png";
import Highlightwall_white from "../images/Highlightwall_white.png";
import Decorativelight_white from "../images/Decorativelight_white.png";
import Colourfullight_white from "../images/Colourfullight_white.png";
import Projection_white from "../images/Projection_white.png";
import Specialapplication_white from "../images/Specialapplication_white.png";
import Therapuetic_white from "../images/Therapuetic_white.png";

// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";

// Array of Icon and there name

const Data = [
  {
    name: "General illumination",
    defaultImage: generalIllumination,
    selectedImage: Generalillumination_white,
    isSelected: false,
  },
  {
    name: "Soft direct",
    defaultImage: softDirect,
    selectedImage: Softdirect_white,
    isSelected: false,
  },
  {
    name: "Soft indirect",
    defaultImage: softIndirect,
    selectedImage: Softindirect_white,
    isSelected: false,
  },
  {
    name: "Task light",
    defaultImage: taskLight,
    selectedImage: Tasklight_white,
    isSelected: false,
  },
  {
    name: "Highlight art",
    defaultImage: highArt,
    selectedImage: Highlightart_white,
    isSelected: false,
  },
  {
    name: "Highlight object",
    defaultImage: highObject,
    selectedImage: Highlightobject_white,
    isSelected: false,
  },
  {
    name: "Highlight wall",
    defaultImage: highWall,
    selectedImage: Highlightwall_white,
    isSelected: false,
  },
  {
    name: "Decorative",
    defaultImage: decorative,
    selectedImage: Decorativelight_white,
    isSelected: false,
  },
  {
    name: "Colourful light",
    defaultImage: colourfulLight,
    selectedImage: Colourfullight_white,
    isSelected: false,
  },
  {
    name: "Projection",
    defaultImage: projection,
    selectedImage: Projection_white,
    isSelected: false,
  },
  {
    name: "Special application",
    defaultImage: specialApplication,
    selectedImage: Specialapplication_white,
    isSelected: false,
  },
  {
    name: "Therapeutic",
    defaultImage: therapuetic,
    selectedImage: Therapuetic_white,
    isSelected: false,
  },
];

// const handleClick = (index) => {
//   const targetElement = document.getElementById(index);

//   if (targetElement) {
//     const imgElement = targetElement.querySelector("img");

//     if (imgElement) {
//       const computedStyle = window.getComputedStyle(imgElement);
//       const backgroundColor = computedStyle.background;

//       if (
//         backgroundColor ===
//         "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 100) 100%)"
//       ) {
//         // If already selected, reset to default state
//         targetElement.style.backgroundColor = "#F4F4F5";
//         imgElement.style.background = "none"; // Reset image background
//       } else {
//         // If not selected, apply the purple background and gradient effect
//         targetElement.style.backgroundColor = "#7246FD";
//         imgElement.style.background =
//           "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 100) 100%)";
//       }
//     }
//   }
// };

// const handleDoubleClick = (index) => {
//   const targetElement = document.getElementById(index);

//   if (targetElement) {
//     const imgElement = targetElement.querySelector("img");

//     if (imgElement) {
//       // Reset to default state on double-click
//       targetElement.style.backgroundColor = "#F4F4F5";
//       imgElement.style.background = "none";
//     }
//   }
// };

// const handleClick = (index) => {
//   const targetElement = document.getElementById(index);
//   let computedStyle = window.getComputedStyle(targetElement);
//   if (computedStyle) {
//     var backgroundColor = computedStyle.backgroundColor;
//     if (backgroundColor === "rgb(244, 244, 245)") {
//       targetElement.style.backgroundColor = "#7246FD";
//     } else {
//       targetElement.style.backgroundColor = "#F4F4F5";
//     }
//   }
// };

const LightFinder3 = () => {
  const [selectedImages, setSelectedImages] = useState(
    Array(Data.length).fill(false)
  );

  const handleClick = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];
    setSelectedImages(newSelectedImages);
  };

  return (
    <div className="px-20 lg:px-28 h-full w-full select-none">
      {/* Ellipse */}
      <img
        className="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
        src={second_ellipes}
        alt="ellipes"
      />
      <div>
        <p className="sm:pl-8 pt-8 text-lg">
          2. Choose the type of lighting (select multiple if applicable).
        </p>
      </div>

      <div className="relative z-10 text-black text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 gap-x-8 sm:px-8 mt-5 mb-10 max-w-5xl  ">
        {Data.map((image, index) => (
          <div
            key={index}
            className={`bg-${
              selectedImages[index] ? "[#7246FD]" : "[#F4F4F5]"
            } py-6 box rounded-sm cursor-pointer`}
            onClick={() => handleClick(index)}
          >
            <div className="mx-5 flex flex-col items-center justify-center">
              <img
                className="w-16 icon"
                src={
                  selectedImages[index]
                    ? image.selectedImage
                    : image.defaultImage
                }
                alt={image.name}
              />
              <p
                className={`pt-2 ${selectedImages[index] ? "text-white" : ""}`}
              >
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightFinder3;
