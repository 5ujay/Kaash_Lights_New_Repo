import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./LightFinder7.css";
import filedrop from "../images/file-drop1.png";
import backbtn from "../images/backbtn.png";
import nextbtn from "../images/nextbtn.png";
import progress1 from "../images/progress1.png";
import progresslast from "../images/progresslast.png";
import prrectblue from "../images/prrectblue.png";
import deco from "../images/deco positions.png";

const LightFinder7 = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const inputStyle = {
    color: "white", // Text color
    backgroundColor: "#7246FD", // Background color
    border: "none", // Remove the default border
    borderRadius: "5px", // Add some border radius for styling
    padding: "5px", // Add padding for better appearance
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
  };

  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const handleFileDrop1 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile1(file);
  };

  const handleDragOver1 = (event) => {
    event.preventDefault();
  };

  const clearSelectedFile1 = () => {
    setSelectedFile1(null);
  };

  const [selectedFile2, setSelectedFile2] = useState(null);

  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
  };

  const handleFileDrop2 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile2(file);
  };

  const handleDragOver2 = (event) => {
    event.preventDefault();
  };

  const clearSelectedFile2 = () => {
    setSelectedFile2(null);
  };

  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const [showww, setShowww] = useState(false);

  const [buttons, setButtons] = useState([]);
  const [buttons1, setButtons1] = useState([]);

  const addMoreButton = () => {
    console.log(buttons);
    setButtons([
      ...buttons,
      <button
        key={buttons.length}
        className={"upload-btn1"}
        onClick={() => setShowww(true)}
      >
        Upload
      </button>,
    ]);
    setButtons1([
      ...buttons1,
      <button
        key={buttons1.length}
        className={"upload-btn2"}
        onClick={() => setShowww(true)}
      >
        Upload
      </button>,
    ]);
  };

  return (
    <div>
      <Navbar />
      <div className="need-light">
        7. Upload files (if any). Images, Photos, Plan, Drawings, 3D Models,
        Notes etc.
      </div>
      <div className="btn-contain">
        <button className="upload-btn" onClick={() => setShow(true)}>
          Upload
        </button>
        <button className="upload-btn" onClick={() => setShoww(true)}>
          Upload
        </button>
        {buttons.map((button, index) => (
          <div key={index}>{button} </div>
        ))}
      <button onClick={addMoreButton} className="add-more">
        + Add More
      </button>
      </div>
      <div>
        {show ? (
          <div>
            {selectedFile ? (
              <div className="file-info1">
                <p>{selectedFile.name}</p>
                <button onClick={clearSelectedFile} className="file-cross">
                  ✖
                </button>
              </div>
            ) : (
              <>
                <div className="file-drop">
                  <div className="upload-text">
                    Upload File
                    <button className="cross" onClick={() => setShow(false)}>
                      ✖
                    </button>
                  </div>
                  <div
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    style={{
                      height: "350px",
                      width: "700px",
                      position: "relative",
                      top: "7px",
                      left: "25px",
                      background: "#FFF",
                      border: "4px dashed #7246FD",
                      margin: "20px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      borderRadius: "25px",
                      zIndex: "1",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                      onChange={handleFileInputChange}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" className="fileInput">
                      <img src={filedrop} className="fileimg" />
                      <p className="drag">
                        Drag and drop your file here or <span>browse.</span>
                      </p>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>

      <div>
        {showw ? (
          <div>
            {selectedFile1 ? (
              <div className="file-info2">
                <p>{selectedFile1.name}</p>
                <button onClick={clearSelectedFile1} className="file-cross">
                  ✖
                </button>
              </div>
            ) : (
              <>
                <div className="file-drop">
                  <div className="upload-text">
                    Upload File
                    <button className="cross" onClick={() => setShoww(false)}>
                      ✖
                    </button>
                  </div>
                  <div
                    onDrop={handleFileDrop1}
                    onDragOver={handleDragOver1}
                    style={{
                      height: "350px",
                      width: "700px",
                      position: "relative",
                      top: "7px",
                      left: "25px",
                      background: "#FFF",
                      border: "4px dashed #7246FD",
                      margin: "20px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      borderRadius: "25px",
                      zIndex: "1",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                      onChange={handleFileInputChange1}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" className="fileInput">
                      <img src={filedrop} className="fileimg" />
                      <p className="drag">
                        Drag and drop your file here or <span>browse.</span>
                      </p>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>

      <div>
        {showww ? (
          <div>
            {selectedFile2 ? (
              <div className="file-info3">
                <p>{selectedFile2.name}</p>
                <button onClick={clearSelectedFile2} className="file-cross">
                  ✖
                </button>
              </div>
            ) : (
              <>
                <div className="file-drop">
                  <div className="upload-text">
                    Upload File
                    <button className="cross" onClick={() => setShowww(false)}>
                      ✖
                    </button>
                  </div>
                  <div
                    onDrop={handleFileDrop2}
                    onDragOver={handleDragOver2}
                    style={{
                      height: "350px",
                      width: "700px",
                      position: "relative",
                      top: "7px",
                      left: "25px",
                      background: "#FFF",
                      border: "4px dashed #7246FD",
                      margin: "20px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      borderRadius: "25px",
                      zIndex: "1",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                      onChange={handleFileInputChange2}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" className="fileInput">
                      <img src={filedrop} className="fileimg" />
                      <p className="drag">
                        Drag and drop your file here or <span>browse.</span>
                      </p>
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>

      <div className="budget-line">
        8. Do you have a budget in mind, if not our team will help you identify
        one.
      </div>
      <div className="slider1">
        <input
          type="range"
          min={0}
          max={999999999}
          value={sliderValue}
          onChange={handleSliderChange}
          className="slide1"
          style={inputStyle}
        />
        <input
          type="text"
          value={sliderValue + "€"}
          onChange={(event) => setSliderValue(event.target.value)}
          className="slide-value1"
        />
      </div>

      <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}

        <Link to="/lightfinder6">
          <button className="back-btn" id="back-btn">
            <img src={backbtn} />
            Back
          </button>
        </Link>
        <Link to="/lightfinder8">
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
        <img src={progresslast} />
        <div className="num-cont">
          <p className="first-num">6</p>
          <p className="second-num">/7</p>
        </div>
      </div>
      <img src={deco} className="deco" />
    </div>
  );
};

export default LightFinder7;
