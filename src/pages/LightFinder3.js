import React from "react";
import { useState } from "react";
import "../pages/LightFinder3.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import generalIllumination from "../images/General illumination.png";
import softDirect from "../images/Soft direct.png";
import softIndirect from "../images/Soft indirect.png";
import taskLight from "../images/Task light.png";
import highArt from "../images/Highlight art.png";
import highObject from "../images/Highlight object.png";
import highWall from "../images/Highlight wall.png";
import decorative from "../images/Decorative light.png";
import colourfulLight from "../images/Colourful light.png";
import projection from "../images/projection.png";
import specialApplication from "../images/Special application.png";
import therapuetic from "../images/Therapuetic.png";

import progress1 from "../images/progress1.png";
import progressblackrect from "../images/progressblackrect.png";
import progresslast from "../images/progresslast.png";

import backbtn from "../images/backbtn.png";
import nextbtn from "../images/nextbtn.png";
import deco from "../images/deco positions.png";

import prrectblue from "../images/prrectblue.png";

const LightFinder3 = () => {
  let [selectedColor1, setSelectedColor1] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange1 = (e) => {
    setSelectedColor1(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor2, setSelectedColor2] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange2 = (e) => {
    setSelectedColor2(e.target.value); // Update the selected color when a radio button is clicked
  };
  let [selectedColor3, setSelectedColor3] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange3 = (e) => {
    setSelectedColor3(e.target.value); // Update the selected color when a radio button is clicked
  };
  let [selectedColor4, setSelectedColor4] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange4 = (e) => {
    setSelectedColor4(e.target.value); // Update the selected color when a radio button is clicked
  };
  let [selectedColor5, setSelectedColor5] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange5 = (e) => {
    setSelectedColor5(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor6, setSelectedColor6] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange6 = (e) => {
    setSelectedColor6(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor7, setSelectedColor7] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange7 = (e) => {
    setSelectedColor7(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor8, setSelectedColor8] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange8 = (e) => {
    setSelectedColor8(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor9, setSelectedColor9] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange9 = (e) => {
    setSelectedColor9(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor10, setSelectedColor10] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange10 = (e) => {
    setSelectedColor10(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor11, setSelectedColor11] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange11 = (e) => {
    setSelectedColor11(e.target.value); // Update the selected color when a radio button is clicked
  };

  let [selectedColor12, setSelectedColor12] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange12 = (e) => {
    setSelectedColor12(e.target.value); // Update the selected color when a radio button is clicked
  };

  const [selectedRadio1, setSelectedRadio1] = useState(null);

  const handleRadioChange1 = (event) => {
    setSelectedRadio1(event.target.value);
  };

  const divStyle1 = {
    backgroundColor: selectedRadio1 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio2, setSelectedRadio2] = useState(null);

  const handleRadioChange2 = (event) => {
    setSelectedRadio2(event.target.value);
  };

  const divStyle2 = {
    backgroundColor: selectedRadio2 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio3, setSelectedRadio3] = useState(null);

  const handleRadioChange3 = (event) => {
    setSelectedRadio3(event.target.value);
  };

  const divStyle3 = {
    backgroundColor: selectedRadio3 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio4, setSelectedRadio4] = useState(null);

  const handleRadioChange4 = (event) => {
    setSelectedRadio4(event.target.value);
  };

  const divStyle4 = {
    backgroundColor: selectedRadio4 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio5, setSelectedRadio5] = useState(null);

  const handleRadioChange5 = (event) => {
    setSelectedRadio5(event.target.value);
  };

  const divStyle5 = {
    backgroundColor: selectedRadio5 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio6, setSelectedRadio6] = useState(null);

  const handleRadioChange6 = (event) => {
    setSelectedRadio6(event.target.value);
  };

  const divStyle6 = {
    backgroundColor: selectedRadio6 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio7, setSelectedRadio7] = useState(null);

  const handleRadioChange7 = (event) => {
    setSelectedRadio7(event.target.value);
  };

  const divStyle7 = {
    backgroundColor: selectedRadio7 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio8, setSelectedRadio8] = useState(null);

  const handleRadioChange8 = (event) => {
    setSelectedRadio8(event.target.value);
  };

  const divStyle8 = {
    backgroundColor: selectedRadio8 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio9, setSelectedRadio9] = useState(null);

  const handleRadioChange9 = (event) => {
    setSelectedRadio9(event.target.value);
  };

  const divStyle9 = {
    backgroundColor: selectedRadio9 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio10, setSelectedRadio10] = useState(null);

  const handleRadioChange10 = (event) => {
    setSelectedRadio10(event.target.value);
  };

  const divStyle10 = {
    backgroundColor: selectedRadio10 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio11, setSelectedRadio11] = useState(null);

  const handleRadioChange11 = (event) => {
    setSelectedRadio11(event.target.value);
  };

  const divStyle11 = {
    backgroundColor: selectedRadio11 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  const [selectedRadio12, setSelectedRadio12] = useState(null);

  const handleRadioChange12 = (event) => {
    setSelectedRadio12(event.target.value);
  };

  const divStyle12 = {
    backgroundColor: selectedRadio12 ? "#7246FD" : "transparent", // Change the color as needed
    // padding: '10px',
    borderRadius: "5px",
  };

  return (
    <div className="light">
      <Navbar />
      <div className="need-light">
        2. Choose type of lighting (select multiple if applicable).
      </div>

      <div className="flexbox-container1">
        <div className="flexbox-roww">
          <div className="">
            <div
              className="color-display"
              id="general-illu"
              style={{ backgroundColor: selectedColor1 }}
            >
              <div style={divStyle1}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor1 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={selectedColor1 = '#7246FD'}
                    // onChange={handleColorChange1}

                    checked={selectedRadio1 === "option1"}
                    onChange={handleRadioChange1}
                    id="general-illu"
                  />

                  <img src={generalIllumination} />
                  <p>General Illumination</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="soft-direct"
              style={{ backgroundColor: selectedColor2 }}
            >
              <div style={divStyle2}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor2 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor2 = "#7246FD")}
                    // onChange={handleColorChange2}
                    checked={selectedRadio2 === "option1"}
                    onChange={handleRadioChange2}
                    id="soft-direct"
                  />
                  <img src={softDirect} />
                  <p>Soft Direct</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="soft-indirect"
              style={{ backgroundColor: selectedColor3 }}
            >
              <div style={divStyle3}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor3 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor3 = "#7246FD")}
                    // onChange={handleColorChange3}
                    checked={selectedRadio3 === "option1"}
                    onChange={handleRadioChange3}
                    id="soft-indirect"
                  />
                  <img src={softIndirect} />
                  <p>Soft Indirect</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="task-light"
              style={{ backgroundColor: selectedColor4 }}
            >
              <div style={divStyle4}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor4 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor4 = "#7246FD")}
                    // onChange={handleColorChange4}
                    checked={selectedRadio4 === "option1"}
                    onChange={handleRadioChange4}
                    id="task-light"
                  />
                  <img src={taskLight} />
                  <p>Task Light</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="high-art"
              style={{ backgroundColor: selectedColor5 }}
            >
              <div style={divStyle5}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor5 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor5 = "#7246FD")}
                    // onChange={handleColorChange5}
                    checked={selectedRadio5 === "option1"}
                    onChange={handleRadioChange5}
                    id="high-art"
                  />
                  <img src={highArt} />
                  <p>Highlight Art</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="high-object"
              style={{ backgroundColor: selectedColor6 }}
            >
              <div style={divStyle6}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor6 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor6 = "#7246FD")}
                    // onChange={handleColorChange6}
                    checked={selectedRadio6 === "option1"}
                    onChange={handleRadioChange6}
                    id="high-object"
                  />
                  <img src={highObject} />
                  <p>Highlight Object</p>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flexbox-roww">
          <div className="">
            <div
              className="color-display"
              id="high-wall"
              style={{ backgroundColor: selectedColor7 }}
            >
              <div style={divStyle7}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor7 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor7 = "#7246FD")}
                    // onChange={handleColorChange7}
                    checked={selectedRadio7 === "option1"}
                    onChange={handleRadioChange7}
                    id="high-wall"
                  />
                  <img src={highWall} />
                  <p>Highlight Wall</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="decorative"
              style={{ backgroundColor: selectedColor8 }}
            >
              <div style={divStyle8}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor8 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor8 = "#7246FD")}
                    // onChange={handleColorChange8}
                    checked={selectedRadio8 === "option1"}
                    onChange={handleRadioChange8}
                    id="decorative"
                  />
                  <img src={decorative} />
                  <p>Decorative</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="colourful-light"
              style={{ backgroundColor: selectedColor9 }}
            >
              <div style={divStyle9}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor9 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor9 = "#7246FD")}
                    // onChange={handleColorChange9}
                    checked={selectedRadio9 === "option1"}
                    onChange={handleRadioChange9}
                    id="colourful-light"
                  />
                  <img src={colourfulLight} />
                  <p>Colourful Light</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="projection"
              style={{ backgroundColor: selectedColor10 }}
            >
              <div style={divStyle10}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor10 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor10 = "#7246FD")}
                    // onChange={handleColorChange10}
                    checked={selectedRadio10 === "option1"}
                    onChange={handleRadioChange10}
                    id="projection"
                  />
                  <img src={projection} />
                  <p>Projection</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="special-app"
              style={{ backgroundColor: selectedColor11 }}
            >
              <div style={divStyle11}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor11 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor11 = "#7246FD")}
                    // onChange={handleColorChange11}
                    checked={selectedRadio11 === "option1"}
                    onChange={handleRadioChange11}
                    id="special-app"
                  />
                  <img src={specialApplication} />
                  <p>Special Application</p>
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="color-display"
              id="therapeutic"
              style={{ backgroundColor: selectedColor12 }}
            >
              <div style={divStyle12}>
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor12 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    // checked={(selectedColor12 = "#7246FD")}
                    // onChange={handleColorChange12}
                    checked={selectedRadio12 === "option1"}
                    onChange={handleRadioChange12}
                    id="therapeutic"
                  />
                  <img src={therapuetic} />
                  <p>Therapeutic</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder2">
          <button className="back-btn" id="back-btn">
            <img src={backbtn} />
            Back
          </button>
        </Link>
        <Link to="/lightfinder4">
          <button className="next-btn" id="next-btn">
            Next
            <img src={nextbtn} />
          </button>
        </Link>
      </div>

      <div className="progress-cont1">
        <img src={progress1} />
        <img src={prrectblue} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progresslast} />
        <div className="num-cont">
          <p className="first-num">2</p>
          <p className="second-num">/7</p>
        </div>
      </div>
      <img src={deco} className="deco" />
    </div>
  );
};

export default LightFinder3;
