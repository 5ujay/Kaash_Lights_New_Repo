import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes, Route, useNavigate} from 'react-router-dom';
import One from '../images/PurpOne.png';
import Two from '../images/PurpTwo.png';
import Three from '../images/PurpThree.png';
import "./LightFinder9.css";
import { Link } from 'react-router-dom';
import download from '../images/downloadarrow.png'

const LightFinder9 = () => {

  return (
    <>
        <div className='light'>
            <Navbar />
            <div className='gradient'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1212" height="820" viewBox="0 0 1512 720" fill="none">
                    <g filter="url(#filter0_f_4441_30510)">
                        <path d="M1712.22 -298.046C1713.09 230.117 1285.63 658.982 757.469 659.851C229.307 660.719 -199.558 233.263 -200.427 -294.9C-201.296 -823.062 226.16 -1251.93 754.323 -1252.8C1282.49 -1253.66 1711.35 -826.208 1712.22 -298.046Z" fill="url(#paint0_radial_4441_30510)"/>
                    </g>
                <defs>
                    <filter id="filter0_f_4441_30510" x="-260.43" y="-1312.8" width="2032.65" height="2032.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_4441_30510"/>
                    </filter>
                    <radialGradient id="paint0_radial_4441_30510" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(756.162 -245.027) rotate(96.2763) scale(910.501)">
                        <stop offset="0.197618" stop-color="#FFFF00"/>
                        <stop offset="0.345811" stop-color="#7246FD"/>
                        <stop offset="0.412797" stop-color="#6234F4"/>
                        <stop offset="0.64375" stop-color="#D9D9D9" stop-opacity="0"/>
                    </radialGradient>
                </defs>
                </svg>
            </div>
            <div className='thank'>Thank you!</div>
            <div className='process'>
                <p>Please be patient, as we process your inputs.<br />One of our expert will reach out to you soon.<br />Say... within 48hrs.</p>
            </div>
            <button className='download-btn'>
                Download report
                <img src={download}/>
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" width="1296" height="4" viewBox="0 0 1296 4" fill="none" className='horizon'>
                <path d="M0 2.42188H1296" stroke="#7246FD" stroke-width="3"/>
            </svg>
            <div className='mean-time'>
            In the meantime you can browse through other projects to explore more about light!
            </div>
            <Link to="/ourprojects">
            <button className='projects-btn'>
                Projects
            </button>
            </Link>
        </div>

    </>
  )
}
export default LightFinder9;
