import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./LightFinder6.css";

import backbtn from "../images/backbtn.png";
import nextbtn from "../images/nextbtn.png";

import progress1 from "../images/progress1.png";
import progressblackrect from "../images/progressblackrect.png";
import progresslast from "../images/progresslast.png";

import prrectblue from "../images/prrectblue.png";
import LengthDropdown from "../Components/LengthDropdown";
import AreaDropdown from "../Components/areaDropdown";
import deco from "../images/deco positions.png";

const LightFinder6 = () => {
  return (
    <div>
      <Navbar />
      <div className="need-light">5. Choose the application area.</div>

      {/* <select className='flex-container'>
            <option className='btn'>Interior</option>
            <option className='btn'>Exterior</option>
            <option className='btn'>Mix-use</option>
        </select> */}
      <div className="flex-container">
        <label class="radio-button">
          <input type="radio" name="options" value="Interior" className="btn" />
          Interior
        </label>
        <label class="radio-button">
          <input type="radio" name="options" value="Exterior" className="btn" />
          Exterior
        </label>
        <label class="radio-button">
          <input type="radio" name="options" value="Mix-use" className="btn" />
          Mix-use
        </label>
      </div>

      <div className="need-light1">6. Enter space dimensions or area.</div>

      <div className="dimensions">
        <div className="length">
          <span>Length</span>
          <div className="input">
            <input type="number" min="0"></input>
            <LengthDropdown />
          </div>
        </div>
        <div className="breadth">
          <span>Breadth</span>
          <div className="input">
            <input type="number" min="0"></input>
            <LengthDropdown />
          </div>
        </div>
        <div className="height">
          <span>Height</span>
          <div className="input">
            <input type="number" min="0"></input>
            <LengthDropdown />
          </div>
        </div>
      </div>

      <p className="or">OR</p>

      <div className="area">
        <span>Area</span>
        <div className="input">
          <input type="number" min="0"></input>
          <AreaDropdown />
        </div>
      </div>

      <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder5">
          <button className="back-btn" id="back-btn">
            <img src={backbtn} />
            Back
          </button>
        </Link>
        <Link to="/lightfinder7">
          <button className="next-btn" id="next-btn">
            Next
            <img src={nextbtn} />
          </button>
        </Link>
      </div>

      <div className="progress-cont1">
        <img src={progress1} />
        <img src={prrectblue} />
        <img src={prrectblue} />
        <img src={prrectblue} />
        <img src={prrectblue} />
        <img src={progressblackrect} />
        <img src={progresslast} />
        <div className="num-cont">
          <p className="first-num">5</p>
          <p className="second-num">/7</p>
        </div>
      </div>
      <img src={deco} className="deco" />
    </div>
  );
};

export default LightFinder6;
