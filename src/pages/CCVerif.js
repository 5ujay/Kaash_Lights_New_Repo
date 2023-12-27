import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './CCVerif.css';
import Ellipse_16 from '../images/Ellipse_16.png';
import Ellipse_17 from '../images/Ellipse_17.png';
const CCVerif = () => {
  const navigate = useNavigate();

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
          <div>
            <ul class="flex flex-row items-center justify-start pb-20 pt-28">
              <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
              <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
              <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            </ul>
            <h2>To access results, kindly verify email address</h2>
            <div className="my-5">
              <label htmlFor="countrySelect" className="block my-1">
                Enter your email
              </label>
              <input
                className="block py-1.5 px-3 mr-2.5 bg-white italic text-[#18181B] border-2 border-[#F4F4F5]"
                type="text"
                placeholder="hello@gmail.com"
              />
              <Link to="/CCVeriff">
                <button className="mt-4 bg-[#03B829] py-1.5 px-5 text-white text-xl">
                  Send code
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CCVerif;
