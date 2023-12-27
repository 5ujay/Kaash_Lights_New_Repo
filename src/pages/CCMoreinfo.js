import React from 'react';
import Navbar from '../Components/Navbar';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './CCMoreinfo.css';
// import Ellipse_16 from '../images/Ellipse_16.png';
// import Ellipse_17 from '../images/Ellipse_17.png';
import lightlogo from '../images/lightlogo.png';
import lightlogo2 from '../images/lightlogo2.png';
import Ellipsegreen from '../images/Ellipse-green.png';
import Calculatorellipseleft from '../images/Calculatorellipseleft.png';
import CCMoreinfoLamp from './CCMoreinfoLamp';

const CCMoreinfo = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="box16">
          <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
        </div>
        <div className="box17">
          <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
        </div>
      </div>  */}
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="bg-[#E4E4E7] relative min-h-screen">
        <section className="px-32 py-8">
          <ul class="flex flex-row items-center justify-start pb-8 pt-20">
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
          </ul>
          <div className="flex items-center pt-8">
            <Link className="w-2/4 cursor-pointer" to="/CCMoreinfoLamp">
              <div className="bg-[#F4F4F5] px-5 py-16">
                <p className="text-center text-[#18181B]">
                  Select your lamp type along with wattage and quantity to
                  compile your list
                </p>
                <figure className="flex justify-center items-center">
                  <img className="w-1/4 mt-6" src={lightlogo2} />
                </figure>
              </div>
            </Link>
            <ul class="flex flex-col items-center mx-10">
              <li class="h-32 border-l border-[#000000] font-medium"></li>
              <li class="my-4 font-semibold">OR</li>
              <li class="h-28 border-l border-[#000000] font-medium"></li>
            </ul>
            <Link className="w-2/4 cursor-pointer" to="/CCMoreinfoEnergy">
              <div className="bg-[#F4F4F5] px-5 py-16">
                <p className="text-center text-[#18181B]">
                  Enter the light energy consumption of your facility
                </p>
                <figure className="flex justify-center items-center">
                  <img className="w-1/4 mt-10" src={lightlogo} />
                </figure>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CCMoreinfo;
