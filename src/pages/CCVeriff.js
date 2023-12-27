import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './CCVeriff.css';
// import Ellipse_16 from '../images/Ellipse_16.png';
// import Ellipse_17 from '../images/Ellipse_17.png';
import CCGetres from './CCGetres';

const CCVerif2 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Function to handle OTP input change
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move focus to the next input box
    if (value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <>
      {/* <div className="box16">
        <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
      </div>
      <div className="box17">
        <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
      </div>  */}
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="bg-[#E4E4E7] min-h-screen relative">
        <section className="px-24">
          <ul class="flex flex-row items-center justify-start pb-20 pt-28">
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
          </ul>
          <p>Enter the 5-digit code we have sent you to h***o@gmail.com</p>
          <div className="mt-16 flex items-center">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                className="py-1.5 w-12 h-12 mr-2.5 bg-white text-[#18181B] border-2 border-[#E4E4E7] text-center"
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <div className="md:flex items-center my-4">
            <p>Did you not receive the email?</p>
            <Link to="/CCVerif">
              <button className="text-[#03B829] ml-2 underline">
                Resend the code
              </button>
            </Link>
          </div>
          <Link to="/CCGetres" className="mt-8">
            <button className="bg-[#03B829] px-5 py-1.5 text-white text-xl ">
              Get Results!
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default CCVerif2;
