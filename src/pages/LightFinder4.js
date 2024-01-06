import { React, useState } from "react";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";
import "../pages/LightFinder4.css";

// importing default images
import ceilingRec from "../images/Ceiling recessed.png";
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

// importing the images for selected states ie.White images
import Ceilingrecessed_white from "../images/Ceiling recessed_white.png";
import Ceilingsurface_white from "../images/Ceiling surface_white.png";
import Ceilingpendant_white from "../images/Ceiling pendant_white.png";
import Ceilngtrack_white from "../images/Ceilng track_white.png";
import Wallrecessed_white from "../images/Wall recessed_white.png";
import Wallsurface_white from "../images/Wall surface_white.png";
import Floorstanding_white from "../images/Floor standing_white.png";
import Floorin_ground_white from "../images/Floor in-ground_white.png";
import Underwater_white from "../images/Underwater_white.png";
import Undershelf_white from "../images/Under shelf_white.png";
import Ceilingcove_white from "../images/Ceiling cove_white.png";
import Wallcove_white from "../images/Wall cove_white.png";

// importing background ellipes image
import second_ellipes from "../Light_finder_images/Ellipse_17.png";

// Array of Icon and there name
const Data = [
  {
    name: "Ceiling recessed",
    defaultImage: ceilingRec,
    selectedImage: Ceilingrecessed_white,
    isSelected: false,
  },
  {
    name: "Ceiling surface",
    defaultImage: ceilingSurf,
    selectedImage: Ceilingsurface_white,
    isSelected: false,
  },
  {
    name: "Ceiling pendant",
    defaultImage: ceilingPend,
    selectedImage: Ceilingpendant_white,
    isSelected: false,
  },
  {
    name: "Ceiling track",
    defaultImage: ceilingTrack,
    selectedImage: Ceilngtrack_white,
    isSelected: false,
  },
  {
    name: "Wall recessed",
    defaultImage: wallRec,
    selectedImage: Wallrecessed_white,
    isSelected: false,
  },
  {
    name: "Wall surface",
    defaultImage: wallSurf,
    selectedImage: Wallsurface_white,
    isSelected: false,
  },
  {
    name: "Floor standing",
    defaultImage: floorStanding,
    selectedImage: Floorstanding_white,
    isSelected: false,
  },
  {
    name: "Floor in-ground",
    defaultImage: floorInGround,
    selectedImage: Floorin_ground_white,
    isSelected: false,
  },
  {
    name: "Underwater",
    defaultImage: underwater,
    selectedImage: Underwater_white,
    isSelected: false,
  },
  {
    name: "Under shelf",
    defaultImage: undershelf,
    selectedImage: Undershelf_white,
    isSelected: false,
  },
  {
    name: "Ceiling cove",
    defaultImage: ceilingCove,
    selectedImage: Ceilingcove_white,
    isSelected: false,
  },
  {
    name: "Wall cove",
    defaultImage: wallCove,
    selectedImage: Wallcove_white,
    isSelected: false,
  },
];

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

const LightFinder4 = () => {
  const [selectedImages, setSelectedImages] = useState(
    Array(Data.length).fill(false)
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];
    setSelectedImages(newSelectedImages);
  };
  return (
    <div className="px-20 lg:px-28 h-full select-none">
      {/* Ellipse */}
      <img
        className="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
        src={second_ellipes}
        alt="ellipes"
      />
      <div>
        <p className="sm:pl-8 pt-8 text-lg">
          3. Choose light position (select multiple if applicable).
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
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
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
                style={{
                  background:
                    hoveredIndex === index || selectedImages[index]
                      ? "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0) 100%)"
                      : "none",
                }}
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

export default LightFinder4;
