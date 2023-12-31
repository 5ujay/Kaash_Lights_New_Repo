import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../pages/LightFinder8.css";

import backbtn from "../images/backbtn.png";
import nextbtn from "../images/nextbtn.png";

import progress1 from "../images/progress1.png";
import progresslastblue from "../images/progress-last-blue.png";

import prrectblue from "../images/prrectblue.png";
import deco from "../images/deco positions.png";

const LightFinder5 = () => {
  const [text, setText] = useState("");
  // const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  // const handleTextChange = (event) => {
  //   setText(event.target.value);
  // };

  // let [selectedColor1, setSelectedColor1] = useState(""); // State to store the selected color
  // let [selectedColor2, setSelectedColor2] = useState(""); // State to store the selected color
  // let [selectedColor3, setSelectedColor3] = useState(""); // State to store the selected color

  // // Function to handle radio button change
  // const handleColorChange1 = (e) => {
  //   setSelectedColor1(e.target.value); // Update the selected color when a radio button is clicked
  // };

  // // Function to handle radio button change
  // const handleColorChange2 = (e) => {
  //   setSelectedColor2(e.target.value); // Update the selected color when a radio button is clicked
  // };
  // // Function to handle radio button change
  // const handleColorChange3 = (e) => {
  //   setSelectedColor3(e.target.value); // Update the selected color when a radio button is clicked
  // };

  return (
    <>
      <div className="bg-[#e4e4e7] h-full w-full px-10 sm:px-20 lg:px-28 pt-20">
        <div>
          <div>
            <p className="text-base sm:text-lg md:text-xl">
              9. &nbsp; How do you wish to be contacted.
            </p>
          </div>
          <div className="grid grid-cols-2 h-32 gap-2 text-base mt-6 sm:h-20 sm:grid-cols-3 sm:w-full sm:gap-6 md:w-3/4 lg:gap-10 lg:text-lg xl:w-1/2 ">
            <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
              <p>Via e-mail</p>
            </div>
            <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
              <p>Schedule a call</p>
            </div>
            <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
              <p>Fix a meeting</p>
            </div>
          </div>
        </div>

        <div className="pt-14">
          <p className="text-base sm:text-lg md:text-xl">
            10. &nbsp; Write below if you would like to add any comments. (Max
            1000Words)
          </p>
          <div className="w-full pt-5">
            <textarea
              className="w-full h-40 p-4 border-gray-400 border-2 outline-none"
              placeholder="Write here..."
            />
          </div>
        </div>

        <div className="pt-10">
          <p className="text-base sm:text-lg md:text-xl">
            11. &nbsp; Enter your email
          </p>
          <div className="py-5">
            <input
              className="border-gray-400 border-2 outline-none px-2 w-4/5 lg:w-1/3 py-2 text-lg"
              type="email"
              name="email"
              id=""
              placeholder="hello@email.com"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightFinder5;
