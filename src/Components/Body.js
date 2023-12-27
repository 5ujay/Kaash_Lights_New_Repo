import React from "react";
import { useState, useEffect } from "react";
import Weatkaash1 from "../images/Weatkaash1.png";
import WeatKaash2 from "../images/WeatKaash2.png";
import arrow from "../images/Arrowwhite45.png";
import Ellipselightstory from "../images/Ellipselightstory.png";
import MyCarousel from "./MyCarousel";
import Contactpop from "./Contactpop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { neonCursor } from "threejs-toys";
import "./Body.css";

export const Body = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setBlurBackground(!blurBackground);
  };
  // useEffect(() => {
  //   const initNeonCursor = () => {
  //     neonCursor({
  //       el: document.getElementById('neon'),
  //       shaderPoints: 20,
  //       curvePoints: 120,
  //       curveLerp: 0.5,
  //       radius1: 5,
  //       radius2: 30,
  //       velocityTreshold: 0.1,
  //       velocityTreshold: 0.1,
  //       sleepRadiusX: 100,
  //       sleepRadiusY: 100,
  //       sleepTimeCoefX: 0.0025,
  //       sleepTimeCoefY: 0.0025,
  //     });
  //   };

  //   initNeonCursor();
  // }, []);
  return (
    <>
      <main className={blurBackground ? "blur-background" : ""}>
        <div className="absolute w-full">
          <Navbar />
        </div>
        <div className="relative">
          <div id="neon">
            <div className="py-96 md:px-48 px-12  flex justify-center items-center">
              <p className="font-extralight md:text-4xl text-4xl text-neutral-50 py-24">
                light defines spatial experience as it falls and reflects
              </p>
            </div>
          </div>
        </div>
        <section>
          <div className="px-4 py-40 bg-black grid md:grid-cols-2 md:gap-20 lg:gap-28 gap-12 justify-center md:px-20 xl:px-30 sm:px-12">
            <div>
              <p className="font-extralight text-neutral-50 text-4xl md:text-7xl xl:text-7xl 2xl:text-9xl py-2">
                We at Kaash are fascinated about Light
              </p>
              <img src={Weatkaash1} />
            </div>
            <div className="lg:pt-60">
              <div className="xl:pt-96 pb-16">
                <p className="text-lg pb-3 text-neutral-50 font-extralight max-w-xl ">
                  The endless possibilities of light, inspire us to purpose its
                  potential. With light we create comfortable spaces, inspiring
                  institutions and playful environments. Aspiring to build
                  healthier communities and greener planet we believe in the
                  sustainable human centric lighting.
                </p>
                <img src={WeatKaash2} />
              </div>
            </div>
          </div>
        </section>
        <section className="yellow-card py-10 flex justify-center items-center">
          <div className="">
            {" "}
            <h2 className="mb-2 text-center md:text-5xl text-3xl font-light text-neutral-950">
              Calculate light carbon
            </h2>
            <div className="md:px-40 px-4 py-4">
              <p className="mb-2 max-w-xl text-center md:text-2xl text-base/tight font-light ">
                {" "}
                Calculate the carbon emissions of your lighting. Know your
                savings potential with cost estimate and return of investment.
              </p>
            </div>
            <div className="text-center">
              {" "}
              <button className="border border-black py-1 px-6 text-neutral-950 font-light md:text-2xl hover:bg-neutral-50">
                Calculate
              </button>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-16 py-8 lg:px-36 lg:py-36 bg-neutral-200">
          <h1 className="text-left font-light text-4xl md:text-7xl lg:text-9xl md:pb-10 lg:pb-20">
            Inspiring Stories
          </h1>
          <MyCarousel />
        </section>
        <section className="red-card py-10 flex justify-center items-center">
          <div className="items-center">
            {" "}
            <h2 className="mb-2 text-center md:text-5xl text-3xl font-extralight text-neutral-50">
              Find your light
            </h2>
            <div className="md:px-40 px-4 py-4">
              <p className="mb-2 max-w-xl text-center md:text-2xl text-base/tight font-light text-neutral-50">
                {" "}
                Do you need light product or design service for your home,
                office or any other project. Answer these simple questions to
                find out the perfect light for you.
              </p>
            </div>
            <div className="text-center">
              {" "}
              <button className="border border-white py-1 px-12 md:text-2xl text-neutral-50 font-light hover:bg-[neutral-950]">
                Start
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#000000] relative py-20">
          <img class="ms-auto w-64 md:w-1/3" src={Ellipselightstory} />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 
            overflow-hidden bg-fixed"
          >
            <div className="pt-28 xl:pt-40 xl:pl-40 md:pl-24 pl-5 w-2/3 md:w-3/5">
              <h2 className="font-extralight text-4xl/tight md:text-6xl xl:text-7xl/tight 2xl:text-8xl/tight text-neutral-100 ">
                Let’s create your story with light
              </h2>
              <div className="flex justify-left md:justify-start items-left">
                {" "}
                <div className="w-2/12">
                  <img className="pt-10 lg:pt-20" src={arrow} />{" "}
                </div>
              </div>
              <div className="flex justify-left text-center md:text-start lg:py-20">
                {" "}
                <button
                  className=" px-4 py-2 bg-neutral-100 text-xl mt-10 font-light"
                  onClick={togglePopup}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <Footer />
        </div>
      </main>
      <div className="xl:px-96 px-10 w-screen contactpop-section">
        {showPopup && <Contactpop onClose={togglePopup} />}
      </div>
    </>
  );
};

export default Body;