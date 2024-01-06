import { React, useState } from "react";
import "../pages/LightFinder5.css";

// importing default images
import victorian from "../images/victorian.png";
import classical from "../images/classical.png";
import neoClassical from "../images/Neo classical.png";
import brutalist from "../images/brutalist.png";
import eclectric from "../images/Eclectic.png";
import industrial from "../images/industrial.png";
import minimal from "../images/Minimal.png";
import functional from "../images/Functional.png";
import hybrid from "../images/Hybrid.png";
import hidden from "../images/Hidden.png";
import glamour from "../images/Glamour.png";
import abstract from "../images/Abstract.png";

// importing the images for selected states ie.White images
import Victorian_white from "../images/Victorian_white.png";
import Classical_white from "../images/Classical_white.png";
import Neoclassical_white from "../images/Neoclassical_white.png";
import Brutalist_white from "../images/Brutalist_white.png";
import Eclectic_white from "../images/Eclectic_white.png";
import Industrial_white from "../images/Industrial_white.png";
import Minimal_white from "../images/Minimal_white.png";
import Functional_white from "../images/Functional_white.png";
import Hybrid_white from "../images/Hybrid_white.png";
import Hidden_white from "../images/Hidden_white.png";
import Glamour_white from "../images/Glamour_white.png";
import Abstract_white from "../images/Abstract_white.png";

// importing background ellipes image
import second_ellipes from "../Light_finder_images/Ellipse_17.png";

// Array of Icon and there name
const Data = [
  {
    name: "Victorian",
    defaultImage: victorian,
    selectedImage: Victorian_white,
    isSelected: false,
  },
  {
    name: "Classical",
    defaultImage: classical,
    selectedImage: Classical_white,
    isSelected: false,
  },
  {
    name: "Neo classical",
    defaultImage: neoClassical,
    selectedImage: Neoclassical_white,
    isSelected: false,
  },
  {
    name: "Brutalist",
    defaultImage: brutalist,
    selectedImage: Brutalist_white,
    isSelected: false,
  },
  {
    name: "Eclectic",
    defaultImage: eclectric,
    selectedImage: Eclectic_white,
    isSelected: false,
  },
  {
    name: "Industrial",
    defaultImage: industrial,
    selectedImage: Industrial_white,
    isSelected: false,
  },
  {
    name: "Minimal",
    defaultImage: minimal,
    selectedImage: Minimal_white,
    isSelected: false,
  },
  {
    name: "Functional",
    defaultImage: functional,
    selectedImage: Functional_white,
    isSelected: false,
  },
  {
    name: "Hybrid",
    defaultImage: hybrid,
    selectedImage: Hybrid_white,
    isSelected: false,
  },
  {
    name: "Hidden",
    defaultImage: hidden,
    selectedImage: Hidden_white,
    isSelected: false,
  },
  {
    name: "Glamour",
    defaultImage: glamour,
    selectedImage: Glamour_white,
    isSelected: false,
  },
  {
    name: "Abstract",
    defaultImage: abstract,
    selectedImage: Abstract_white,
    isSelected: false,
  },
];

const LightFinder5 = () => {
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
export default LightFinder5;
