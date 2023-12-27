import React from 'react';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import '../pages/LightFinder5.css';

// import transitional from '../images/transitional.png'
// import victorian from '../images/victorian.png'
// import brutalist from '../images/brutalist.png'
// import classical from '../images/classical.png'
// import modern from '../images/modern.png'
// import industrial from '../images/industrial.png'
// import neoClassical from '../images/neo-classical.png'
// import bohemian from '../images/bohemian.png'
// import eclectric from '../images/eclectric.png'
// import architectural from '../images/architectural.png'

import victorian from '../images/victorian.png'
import classical from '../images/classical.png'
import neoClassical from '../images/Neo classical.png'
import brutalist from '../images/brutalist.png'
import eclectric from '../images/Eclectic.png'
import industrial from '../images/industrial.png'
import minimal from '../images/Minimal.png'
import functional from '../images/Functional.png'
import hybrid from '../images/Hybrid.png'
import hidden from '../images/Hidden.png'
import glamour from '../images/Glamour.png'
import abstract from '../images/Abstract.png'

import backbtn from '../images/backbtn.png'
import nextbtn from '../images/nextbtn.png'
import deco from '../images/deco positions.png'

import progress1 from '../images/progress1.png'
import progressblackrect from '../images/progressblackrect.png'
import progresslast from '../images/progresslast.png'

import prrectblue from '../images/prrectblue.png'


const LightFinder5 = () => {

    let [selectedColor1, setSelectedColor1] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange1 = (e) => {
      setSelectedColor1(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor2, setSelectedColor2] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange2 = (e) => {
      setSelectedColor2(e.target.value); // Update the selected color when a radio button is clicked
    };
    let [selectedColor3, setSelectedColor3] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange3 = (e) => {
      setSelectedColor3(e.target.value); // Update the selected color when a radio button is clicked
    };
    let [selectedColor4, setSelectedColor4] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange4 = (e) => {
      setSelectedColor4(e.target.value); // Update the selected color when a radio button is clicked
    };
    let [selectedColor5, setSelectedColor5] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange5 = (e) => {
      setSelectedColor5(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor6, setSelectedColor6] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange6 = (e) => {
      setSelectedColor6(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor7, setSelectedColor7] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange7 = (e) => {
      setSelectedColor7(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor8, setSelectedColor8] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange8 = (e) => {
      setSelectedColor8(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor9, setSelectedColor9] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange9 = (e) => {
      setSelectedColor9(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor10, setSelectedColor10] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange10 = (e) => {
      setSelectedColor10(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor11, setSelectedColor11] = useState(''); // State to store the selected color

    // Function to handle radio button change
    const handleColorChange11 = (e) => {
      setSelectedColor11(e.target.value); // Update the selected color when a radio button is clicked
    };

    let [selectedColor12, setSelectedColor12] = useState(''); // State to store the selected color

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
    <>
        <Navbar />
        <div className='need-light'>4. Choose a design style.</div>

        <div className="flexbox-container">

      <div className="flexbox-roww">

      <div className="">
            <div
        className="color-display"
        id="vic"
        style={{ backgroundColor: selectedColor1, }}
      >
        <div style={divStyle1}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor1, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio1 === "option1"}
                onChange={handleRadioChange1}
                id='vic' />
                <img src={victorian} />
                <p>Victorian</p>
            </label>
      </div>
        </div>
        </div>  

        <div className="">
            <div
        className="color-display"
        id="clas"
        style={{ backgroundColor: selectedColor2, }}
      >
        <div style={divStyle2}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor2, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio2 === "option1"}
                onChange={handleRadioChange2}
                id='clas' />
                <img src={classical} />
                <p>Classical</p>
            </label>
      </div>
        </div>
        </div>

        <div className="">
            <div
        className="color-display"
        id="neo"
        style={{ backgroundColor: selectedColor3, }}
      >
        <div style={divStyle3}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor3, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio3 === "option1"}
                onChange={handleRadioChange3}
                id='neo' />
                <img src={neoClassical} />
                <p>Neo<br/>Classical</p>
            </label>
      </div>
        </div>
        </div>

        <div className="">
            <div
        className="color-display"
        id="brut"
        style={{ backgroundColor: selectedColor4, }}
      >
        <div style={divStyle4}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor4, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio4 === "option1"}
                onChange={handleRadioChange4}
                id='brut' />
                <img src={brutalist} />
                <p>Brutalist</p>
            </label>
      </div>
        </div>
        </div>
        

        <div className="">
            <div
        className="color-display"
        id="ecl"
        style={{ backgroundColor: selectedColor5, }}
      >
        <div style={divStyle5}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor5, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio5 === "option1"}
                onChange={handleRadioChange5}
                id='ecl' />
                <img src={eclectric} />
                <p>Eclectic</p>
            </label>
      </div>
        </div>
        </div>


        <div className="">
            <div
        className="color-display"
        id="indus"
        style={{ backgroundColor: selectedColor6, }}
      >
        <div style={divStyle6}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor6, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio6 === "option1"}
                onChange={handleRadioChange6}
                id='indus' />
                <img src={industrial} />
                <p>Industrial</p>
            </label>
      </div>
        </div>
        </div>

      </div>


      <div className="flexbox-roww">

      <div className="">
            <div
        className="color-display"
        id="min"
        style={{ backgroundColor: selectedColor7, }}
      >
        <div style={divStyle7}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor7, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio7 === "option1"}
                onChange={handleRadioChange7}
                id='min' />
                <img src={minimal} />
                <p>Minimal</p>
            </label>
      </div>
        </div>
        </div>

        <div className="">
            <div
        className="color-display"
        id="func"
        style={{ backgroundColor: selectedColor8, }}
      >
        <div style={divStyle8}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor8, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio8 === "option1"}
                onChange={handleRadioChange8}
                id='func' />
                <img src={functional} />
                <p>Functional</p>
            </label>
      </div>
        </div>
        </div>
        
        <div className="">
            <div
        className="color-display"
        id="hyd"
        style={{ backgroundColor: selectedColor9, }}
      >
        <div style={divStyle9}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor9, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio9 === "option1"}
                onChange={handleRadioChange9}
                id='hyd' />
                <img src={hybrid} />
                <p>Hybrid</p>
            </label>
      </div>
        </div>
        </div>
        
        <div className="">
            <div
        className="color-display"
        id="hidd"
        style={{ backgroundColor: selectedColor10, }}
      >
        <div style={divStyle10}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor10, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio10 === "option1"}
                onChange={handleRadioChange10}
                id='hidd' />
                <img src={hidden} />
                <p>Hidden</p>
            </label>
      </div>
        </div>
        </div>

        <div className="">
            <div
        className="color-display"
        id="glam"
        style={{ backgroundColor: selectedColor11, }}
      >
        <div style={divStyle11}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor11, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio11 === "option1"}
                onChange={handleRadioChange11}
                id='glam' />
                <img src={glamour} />
                <p>Glamour</p>
            </label>
      </div>
        </div>
        </div>

        <div className="">
            <div
        className="color-display"
        id="abs"
        style={{ backgroundColor: selectedColor12, }}
      >
        <div style={divStyle12}>
            <label className="radio-button1 checkboxes" style={{ backgroundColor: selectedColor12, }}>
            <input              
              type="radio"
                name="color"
                value="#7246FD"
                // checked={selectedColor1 = '#7246FD'}
                // onChange={handleColorChange1}
                checked={selectedRadio12 === "option1"}
                onChange={handleRadioChange12}
                id='abs' />
                <img src={abstract} />
                <p>Abstract</p>
            </label>
      </div>
        </div>
        </div>
        
      </div>


      
    </div>
    <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder4">
            <button className='back-btn' id='back-btn'><img src={backbtn} />Back</button>
        </Link>
        <Link to="/lightfinder6">
            <button className='next-btn' id='next-btn'>Next<img src={nextbtn} /></button>
        </Link>
    </div>

    <div className='progress-cont1'>
        <img src={progress1}/>
        <img src={prrectblue}/>
        <img src={prrectblue}/>
        <img src={prrectblue}/>
        <img src={progressblackrect}/>
        <img src={progressblackrect}/>
        <img src={progresslast}/>
        <div className='num-cont'>
            <p className='first-num'>4</p>
            <p className='second-num'>/7</p>
        </div>
    </div>
        <img src={deco} className="deco" />
    </>
  )
}

export default LightFinder5;
