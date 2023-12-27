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
import deco from '../images/deco positions.png'

const LightFinder5 = () => {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  let [selectedColor1, setSelectedColor1] = useState(''); // State to store the selected color
  let [selectedColor2, setSelectedColor2] = useState(''); // State to store the selected color
  let [selectedColor3, setSelectedColor3] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange1 = (e) => {
      setSelectedColor1(e.target.value); // Update the selected color when a radio button is clicked
    };

    // Function to handle radio button change
    const handleColorChange2 = (e) => {
      setSelectedColor2(e.target.value); // Update the selected color when a radio button is clicked
    };
    // Function to handle radio button change
    const handleColorChange3 = (e) => {
      setSelectedColor3(e.target.value); // Update the selected color when a radio button is clicked
    };

  return (
    <>
      <Navbar />
      <div className="flex-total">
        <div className="need-light">9. How do you wish to be contacted.</div>
            <form>
        <div className="btnn-container">
          <div className="">
            <div
        style={{ backgroundColor: selectedColor1,
        color: 'white' }}
      >
        <div className="">
            <label className="radio-button" style={{ backgroundColor: selectedColor1, }}>
            <input              
              type="radio"
                name="options"
                value="e-mail"
                checked={selectedColor1 = '#7246FD'}
                onChange={handleColorChange1}
                />
                Via e-mail
            </label>

      </div>
        </div>
        </div>

        <div className="">
            <div
        style={{ backgroundColor: selectedColor2,
        color: 'white' }}
      >
        <div className="">
            <label className="radio-button" style={{ backgroundColor: selectedColor2, }}>
            <input              
              type="radio"
                name="options"
                value="call"
                checked={selectedColor2 = '#7246FD'}
                onChange={handleColorChange2}
                className="btn"
                />
                Schedule a call
            </label>

      </div>
        </div>
        </div>

        <div className="">
            <div
        style={{ backgroundColor: selectedColor3,
        color: 'white' }}
      >
        <div className="">
            <label className="radio-button" style={{ backgroundColor: selectedColor3, }}>
            <input              
              type="radio"
                name="options"
                value="meet"
                checked={selectedColor3 = '#7246FD'}
                onChange={handleColorChange3}
                className="btn"
                />
                Fix a meeting
            </label>

      </div>
        </div>
        </div>
        </div>
</form>

        <div className="comment">
          <div className="comment-line">
            Write below if you would like to add any comments.
          </div>
          <textarea
            className="comment-area"
            placeholder="Write here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <p className="comment-count">{wordCount}/1000 words</p>
        </div>
        <div>
          <div className="mail-text">Enter your mail</div>
          <input
            type="email"
            placeholder="hello@email.com"
            className="mail-input"
          />
        </div>
      </div>

      <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder7">
          <button className="back-btn" id="back-btn">
            <img src={backbtn} />
            Back
          </button>
        </Link>
        <Link to="/lightfinder9">
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
        <img src={prrectblue} />
        <img src={progresslastblue} />
        <div className="num-cont">
          <p className="first-num">7</p>
          <p className="second-num">/7</p>
        </div>
      </div>
      <img src={deco} className="deco" />
    </>
  );
};

export default LightFinder5;
