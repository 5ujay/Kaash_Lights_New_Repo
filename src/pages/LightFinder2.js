import React, { useState, useEffect } from "react";
import "../pages/LightFinder2.css";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";

import "./LightFinder2.css";
import { RxCross2 } from "react-icons/rx";

// importing popup details from lightfinder2.js
import popupDeatils from "./LightFinder2Info";

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

// importing background ellipes image

import second_ellipes from "../Light_finder_images/Ellipse_17.png";

const LightFinder2 = () => {
  // selection of div..................................
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSelect = (category) => {
    // Check if the category is already selected
    if (selectedCategory === category && !isPopupOpen) {
      // If yes, remove the selection and open the popup
      setSelectedCategory(null);
      setSelectedDiv(null);
      resetFilter(category);
      openPopupDetails(category);
    } else {
      // If no, reset the filter on the previously selected div
      if (selectedDiv) {
        resetFilter(selectedDiv);
      }
      // Select the new category
      setSelectedCategory(category);
      setSelectedDiv(category);
      applyFilter(category);
      openPopupDetails(category);
    }
  };

  const openPopupDetails = (category) => {
    const imageElement = document.getElementById(`image-${category}`);
    if (imageElement) {
      imageElement.style.background =
        "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 100) 100%)";
    }
    setIsPopupOpen(true);
  };

  const applyFilter = (category) => {
    if (category) {
      const imageElement = document.getElementById(`image-${category}`);
      if (imageElement) {
        // Apply brightness and invert filter properties
        imageElement.style.filter = "brightness(0) invert(1)";
        imageElement.style.background =
          "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 100) 100%)";
      }
    }
  };

  const resetFilter = (category) => {
    if (category) {
      const imageElement = document.getElementById(`image-${category}`);
      if (imageElement) {
        // Reset filter properties
        imageElement.style.filter = "";
      }
    }
  };

  const getCategoryStyle = (category) => {
    return {
      background:
        selectedCategory === category
          ? "linear-gradient(to bottom, transparent 2%, rgba(255, 255, 0, 100) 98%)"
          : "",
    };
  };

  const renderDiv = (category, imageSrc, label) => (
    <div
      className={`bg-${
        selectedDiv === category ? "[#7246FD]" : "[#F4F4F5]"
      } w-3/4 p-4 flex flex-col items-center justify-center rounded-sm cursor-pointer`}
      onClick={() => handleSelect(category)}
      onDoubleClick={() => handleSelect(category)}
      onMouseEnter={() => handleHoverEnter(category)}
      onMouseLeave={() => handleHoverLeave(category)}
    >
      <div>
        <img
          style={getCategoryStyle(category)}
          id={`image-${category}`}
          className="w-16"
          src={imageSrc}
          alt=""
        />
      </div>
      <p
        className={`pt-2 text-sm sm:text-base ${
          selectedCategory === category ? "text-white" : ""
        }`}
      >
        {label}
      </p>
    </div>
  );
  const handleHoverEnter = (category) => {
    if (selectedCategory !== category) {
      const imageElement = document.getElementById(`image-${category}`);
      if (imageElement) {
        imageElement.style.background =
          "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 0, 100) 100%)";
      }
    }
  };
  const handleHoverLeave = (category) => {
    if (selectedCategory !== category) {
      const imageElement = document.getElementById(`image-${category}`);
      if (imageElement) {
        imageElement.style.background =
          selectedDiv === category ? "[#7246FD]" : "";
      }
    }
  };

  const handleConfirm = () => {
    setIsopenpopup(false);
    setBlurBackground(false);

    if (selectedDiv) {
      // Here you can apply your filter logic based on the selectedDiv and checkbox states
      const checkboxes = document.querySelectorAll(
        '.popup input[type="checkbox"]'
      );
      const selectedCheckboxes = Array.from(checkboxes).filter(
        (checkbox) => checkbox.checked
      );

      // Example: Log the selected div and checked checkboxes
      console.log("Selected Div:", selectedDiv);
      console.log("Selected Checkboxes:", selectedCheckboxes);

      // Apply your filter logic based on the selectedDiv and checkboxes
      // ...

      // Reset the background color
      document.getElementById("image-" + selectedDiv).style.background =
        "[#7246FD]";
    }
  };

  // Const LightFinder Popup Checkboxes.........................
  const [isopenPopup, setIsopenpopup] = useState(false);
  // blur background on open of popup ..................
  const [blurBackground, setBlurBackground] = useState(false);

  const [popupContent, setPopupContent] = useState({
    heading: "",
    check1: "",
    check2: "",
    check3: "",
    check4: "",
    check5: "",
    check6: "",
    check7: "",
    check8: "",
    check9: "",
    check10: "",
    check11: "",
    check12: "",
    check13: "",
    check14: "",
    check15: "",
    check16: "",
    check17: "",
    check18: "",
    check19: "",
    check20: "",
    check21: "",
    check22: "",
    check23: "",
    check24: "",
    check25: "",
  });

  const openPopup = (
    heading,
    check1,
    check2,
    check3,
    check4,
    check5,
    check6,
    check7,
    check8,
    check9,
    check10,
    check11,
    check12,
    check13,
    check14,
    check15,
    check16,
    check17,
    check18,
    check19,
    check20,
    check21,
    check22,
    check23,
    check24,
    check25
  ) => {
    setPopupContent({
      heading,
      check1,
      check2,
      check3,
      check4,
      check5,
      check6,
      check7,
      check8,
      check9,
      check10,
      check11,
      check12,
      check13,
      check14,
      check15,
      check16,
      check17,
      check18,
      check19,
      check20,
      check21,
      check22,
      check23,
      check24,
      check25,
    });
    setIsopenpopup(true);
    setBlurBackground(true);
  };

  const closePopup = () => {
    setIsopenpopup(false);
    setIsPopupOpen(false);
    setBlurBackground(false);

    if (selectedDiv) {
      // Reset the background color and filter properties
      const imageElement = document.getElementById(`image-${selectedDiv}`);
      if (imageElement) {
        imageElement.style.background = selectedCategory
          ? "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)"
          : "white";
        imageElement.style.filter = "";
      }

      // Reset the selected div
      setSelectedDiv(null);
      setSelectedCategory(null);
    }
  };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  //   // ... (rest of the closePopup logic)
  // };

  // checkboxes ...........................................
  const renderCheckboxes = () => {
    const checkboxes = [];
    for (let i = 1; i <= 25; i++) {
      const checkboxKey = `check${i}`;
      const checkboxContent = popupContent[checkboxKey];

      if (checkboxContent) {
        checkboxes.push(
          <div className="flex gap-4" key={checkboxKey}>
            <input type="checkbox" className="w-4 h-4" id={`checkbox-${i}`} />
            <p>{checkboxContent}</p>
          </div>
        );
      }
    }
    return checkboxes;
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;

    // Select or deselect all checkboxes
    for (let i = 1; i <= 25; i++) {
      const checkbox = document.getElementById(`checkbox-${i}`);
      if (checkbox) {
        checkbox.checked = isChecked;
      }
    }
  };

  return (
    <>
      <div className={blurBackground ? "blur-background" : ""}>
        <div className="px-20 lg:px-28 h-full">
          <img
            class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
            src={second_ellipes}
            alt="ellipes"
          />
          <div>
            <div className="relative">
              <p className="sm:pl-8 pt-8 text-lg">Where do you need light ?</p>
            </div>

            {/*===== images start here===== */}
            <div className="relative z-10 text-black text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-4 sm:px-8 mt-5 mb-10 ">
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Home.heading,
                    popupDeatils.Home.check1,
                    popupDeatils.Home.check2,
                    popupDeatils.Home.check3,
                    popupDeatils.Home.check4,
                    popupDeatils.Home.check5,
                    popupDeatils.Home.check6,
                    popupDeatils.Home.check7,
                    popupDeatils.Home.check8,
                    popupDeatils.Home.check9,
                    popupDeatils.Home.check10,
                    popupDeatils.Home.check11,
                    popupDeatils.Home.check12
                  )
                }
              >
                {renderDiv("Home", Home_default, "Home")}
              </div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Office.heading,
                    popupDeatils.Office.check1,
                    popupDeatils.Office.check2,
                    popupDeatils.Office.check3,
                    popupDeatils.Office.check4,
                    popupDeatils.Office.check5,
                    popupDeatils.Office.check6,
                    popupDeatils.Office.check7,
                    popupDeatils.Office.check8,
                    popupDeatils.Office.check9,
                    popupDeatils.Office.check10,
                    popupDeatils.Office.check11,
                    popupDeatils.Office.check12,
                    popupDeatils.Office.check13,
                    popupDeatils.Office.check14,
                    popupDeatils.Office.check15,
                    popupDeatils.Office.check16,
                    popupDeatils.Office.check17
                  )
                }
              >
                {renderDiv("Office", Office3_default, "Office")}
              </div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Hotel.heading,
                    popupDeatils.Hotel.check1,
                    popupDeatils.Hotel.check2,
                    popupDeatils.Hotel.check3,
                    popupDeatils.Hotel.check4,
                    popupDeatils.Hotel.check5,
                    popupDeatils.Hotel.check6,
                    popupDeatils.Hotel.check7,
                    popupDeatils.Hotel.check8,
                    popupDeatils.Hotel.check9,
                    popupDeatils.Hotel.check10,
                    popupDeatils.Hotel.check11,
                    popupDeatils.Hotel.check12,
                    popupDeatils.Hotel.check13,
                    popupDeatils.Hotel.check14,
                    popupDeatils.Hotel.check15,
                    popupDeatils.Hotel.check16,
                    popupDeatils.Hotel.check17,
                    popupDeatils.Hotel.check18,
                    popupDeatils.Hotel.check19,
                    popupDeatils.Hotel.check20,
                    popupDeatils.Hotel.check21
                  )
                }
              >
                {renderDiv("Hotel", Hotel_default, "Hotel")}
              </div>
              <div>{renderDiv("Cafe", Cafe_default, "Cafe")}</div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Restaurant.heading,
                    popupDeatils.Restaurant.check1,
                    popupDeatils.Restaurant.check2,
                    popupDeatils.Restaurant.check3,
                    popupDeatils.Restaurant.check4,
                    popupDeatils.Restaurant.check5,
                    popupDeatils.Restaurant.check6
                  )
                }
              >
                {renderDiv("Restaurant", Restaurant_default, "Restaurant")}
              </div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Shop.heading,
                    popupDeatils.Shop.check1,
                    popupDeatils.Shop.check2,
                    popupDeatils.Shop.check3,
                    popupDeatils.Shop.check4,
                    popupDeatils.Shop.check5,
                    popupDeatils.Shop.check6
                  )
                }
              >
                {renderDiv("Shop", shop_default, "Shop")}
              </div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Museum.heading,
                    popupDeatils.Museum.check1,
                    popupDeatils.Museum.check2,
                    popupDeatils.Museum.check3,
                    popupDeatils.Museum.check4,
                    popupDeatils.Museum.check5,
                    popupDeatils.Museum.check6,
                    popupDeatils.Museum.check7,
                    popupDeatils.Museum.check8,
                    popupDeatils.Museum.check9,
                    popupDeatils.Museum.check10,
                    popupDeatils.Museum.check11,
                    popupDeatils.Museum.check12,
                    popupDeatils.Museum.check13,
                    popupDeatils.Museum.check14,
                    popupDeatils.Museum.check15
                  )
                }
              >
                {renderDiv("Museum", Museum_default, "Museum")}
              </div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Factory.heading,
                    popupDeatils.Factory.check1,
                    popupDeatils.Factory.check2,
                    popupDeatils.Factory.check3,
                    popupDeatils.Factory.check4,
                    popupDeatils.Factory.check5,
                    popupDeatils.Factory.check6,
                    popupDeatils.Factory.check7,
                    popupDeatils.Factory.check8,
                    popupDeatils.Factory.check9,
                    popupDeatils.Factory.check10,
                    popupDeatils.Factory.check11,
                    popupDeatils.Factory.check12,
                    popupDeatils.Factory.check13,
                    popupDeatils.Factory.check14,
                    popupDeatils.Factory.check15,
                    popupDeatils.Factory.check16,
                    popupDeatils.Factory.check17,
                    popupDeatils.Factory.check18
                  )
                }
              >
                {renderDiv("Factory", Factory_default, "Factory")}
              </div>

              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Warehouse.heading,
                    popupDeatils.Warehouse.check1,
                    popupDeatils.Warehouse.check2,
                    popupDeatils.Warehouse.check3,
                    popupDeatils.Warehouse.check4,
                    popupDeatils.Warehouse.check5,
                    popupDeatils.Warehouse.check6,
                    popupDeatils.Warehouse.check7,
                    popupDeatils.Warehouse.check8,
                    popupDeatils.Warehouse.check9,
                    popupDeatils.Warehouse.check10,
                    popupDeatils.Warehouse.check11,
                    popupDeatils.Warehouse.check12,
                    popupDeatils.Warehouse.check13,
                    popupDeatils.Warehouse.check14,
                    popupDeatils.Warehouse.check15,
                    popupDeatils.Warehouse.check16
                  )
                }
              >
                {renderDiv("Warehouse", Warehouse_default, "Warehouse")}
              </div>
              <div>
                {renderDiv("Corporate", Corporate_default, "Corporate")}
              </div>
              <div>{renderDiv("Concert", Concert_default, "Concert")}</div>
              <div>
                {renderDiv("Celebration", Celebration_default, "Celebration")}
              </div>
              <div>{renderDiv("Sports", Sports_default, "Sports")}</div>
              <div
                onClick={() =>
                  openPopup(
                    popupDeatils.Hospital.heading,
                    popupDeatils.Hospital.check1,
                    popupDeatils.Hospital.check2,
                    popupDeatils.Hospital.check3,
                    popupDeatils.Hospital.check4,
                    popupDeatils.Hospital.check5,
                    popupDeatils.Hospital.check6,
                    popupDeatils.Hospital.check7,
                    popupDeatils.Hospital.check8,
                    popupDeatils.Hospital.check9,
                    popupDeatils.Hospital.check10,
                    popupDeatils.Hospital.check11,
                    popupDeatils.Hospital.check12,
                    popupDeatils.Hospital.check13,
                    popupDeatils.Hospital.check14,
                    popupDeatils.Hospital.check15,
                    popupDeatils.Hospital.check16,
                    popupDeatils.Hospital.check17,
                    popupDeatils.Hospital.check18,
                    popupDeatils.Hospital.check19,
                    popupDeatils.Hospital.check20,
                    popupDeatils.Hospital.check21,
                    popupDeatils.Hospital.check22,
                    popupDeatils.Hospital.check23
                  )
                }
              >
                {renderDiv("Hospital", Hospital_default, "Hospital")}
              </div>

              <div>{renderDiv("Street", Street_default, "Street")}</div>
              <div>{renderDiv("Park", Park_default, "Park")}</div>
              <div>{renderDiv("Garden", Garden_default, "Garden")}</div>
              <div>{renderDiv("Facade", Facade_default, "Facade")}</div>
              <div>{renderDiv("Yacht", Yacht_default, "Yacht")}</div>
              <div>{renderDiv("Airplane", Airplane_default, "Airplane")}</div>
              <div>{renderDiv("Locomotives", Loco_default, "Locomotives")}</div>
            </div>

            {/* <div className=" px-8 mt-8 flex gap-5 ">
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
            </div> */}
          </div>
        </div>
      </div>

      {isopenPopup && (
        <div className="popup bg-[#ffffff] p-5 z-10">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold">{popupContent.heading}</h1>
            <button className="text-4xl" onClick={closePopup}>
              <RxCross2 />
            </button>
          </div>
          {/* Crossclick */}
          <div className="grid sm:grid-cols-2 w-fit sm:gap-10 pt-5 text-xl">
            <p>Choose as applicable</p>

            <div className="flex flex-row items-center gap-5">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={(event) => handleSelectAll(event)}
              />
              <p>All</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-1  ">
            {renderCheckboxes()}
          </div>

          <div className="pt-5 flex float-right">
            <button
              onClick={handleConfirm}
              className="bg-[#7246FD] text-white px-6 py-2"
            >
              confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LightFinder2;
