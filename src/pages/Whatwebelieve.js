import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Ellipsepurpule from "../images/Ellipse14.png";
import "./Whatwebelieve.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactpop from "../Components/Contactpop";

const Whatwebelieve = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [textone, setTextone] = useState(false);
  const [texttwo, setTexttwo] = useState(false);
  const [textthree, setTextthree] = useState(false);

  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setTextone(false);
    setTexttwo(false);
    setTextthree(false);

    // Toggle the clicked section
    switch (section) {
      case "textone":
        setTextone(!textone);
        break;
      case "texttwo":
        setTexttwo(!texttwo);
        break;
      case "textthree":
        setTextthree(!textthree);
        break;
      default:
        break;
    }
  };

  // contact pop up section
  const [showPopup, setShowPopup] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setBlurBackground(!blurBackground);
  };

  return (
    <>
      <section className={blurBackground ? "blur-background" : ""}>
        <div className="what-we-belive bg-[#000000]">
          {/* ========== navbar section ========== */}
          <Navbar />
          {/* main content what we belive */}
          <div className="main-body-section">
            <div>
              <img
                className="absolute px-24 py-60 ms-auto"
                src={Ellipsepurpule}
                alt=""
              />
            </div>
            {/* ========== top section ========== */}
            <div className="relative top-section py-8 sm:py-12 md:py-20 lg:py-32 xl:py-40">
              <div className="font-light text-neutral-50 px-10 text-4xl sm:px-20 sm:text-5xl md:px-28 md:text-6xl lg:px-40 lg:text-7xl xl:pl-44 xl:text-8xl 2xl:pl-52 2xl:text-9xl ">
                <p>What we Believe ?</p>
              </div>
              <div className="text-neutral-50 flex flex-col font-normal justify-center leading-8 text-sm px-10 mt-10 sm:px-20 lg:mt-20 md:text-base md:px-28 lg:px-40 xl:px-44 2xl:px-52 ">
                <p>
                  We use light to create spaces where people feel good. Using
                  full <br />
                  potential of light we build comfortable spaces, inspiring
                  institutions and <br />
                  playful environments. Working towards sustainable human
                  centric <br />
                  solutions, we help our clients find the perfect light for
                  their project.
                  <br />
                  <br />
                  From heritage buildings to modern offices we fuse intelligent{" "}
                  <br />
                  technology with efficient solutions for a greener planet!
                </p>
              </div>
            </div>

            {/*=========== center body ==========*/}

            <div className="relative text-neutral-50 center-body flex flex-col gap-y-10 mt-10 px-10 sm:px-20 md:px-28 lg:px-40 lg:gap-y-14 xl:px-44 xl:gap-y-28 2xl:px-52">
              <div>
                <div className="flex flex-row gap-8 font-light text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
                  <div>
                    <button onClick={() => handleButtonClick("textone")}>
                      {textone === true ? "-" : "+"}
                    </button>
                  </div>
                  <div>
                    <p>Human centric</p>
                  </div>
                </div>
                <div className="text-xs px-12 mt-4 md:text-sm lg:px-16 lg:mt-6 lg:text-base xl:px-24 xl:mt-10 2xl:text-xl">
                  {textone && (
                    <p>
                      Light is needed for people, their space and its
                      architecture, hence begins our vision of Human-centric
                      lighting design. <br />
                      <br />
                      Every space is conceived with an idea, either to improve{" "}
                      people’s wellbeing, support economy or deliver business{" "}
                      growth. Light as a layer is crucial to complement these{" "}
                      visions and their respective functions.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-row gap-8 font-light text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
                  <div>
                    <button onClick={() => handleButtonClick("texttwo")}>
                      {texttwo === true ? "-" : "+"}
                    </button>
                  </div>
                  <div>
                    <p>Technology</p>
                  </div>
                </div>
                <div className="text-xs px-12 mt-4 md:text-sm lg:px-16 lg:mt-6 lg:text-base xl:px-24 xl:mt-10 2xl:text-xl">
                  {texttwo && (
                    <p>
                      Maximising potential of light and communication to create{" "}
                      <br />
                      intelligent safe infrastructure. Deep analysis of
                      electronics <br />
                      to identify the ideal solution for your project.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-row gap-8 font-light text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
                  <div>
                    <button onClick={() => handleButtonClick("textthree")}>
                      {textthree === true ? "-" : "+"}
                    </button>
                  </div>
                  <div>
                    <p>Sustainability</p>
                  </div>
                </div>
                <div className="text-xs px-12 mt-4 md:text-sm lg:px-16 lg:mt-6 lg:text-base xl:px-24 xl:mt-10 2xl:text-xl">
                  {textthree && (
                    <p>
                      Fusing light with technology to reduce carbon footprints
                      and <br />
                      increase efficiency of your infrastructure.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ============contact us button========== */}
            <div className="relative px-10 mt-24 sm:px-20 md:px-28 lg:mt-60 lg:px-40 xl:px-44 2xl:px-52">
              {/* <button
              onClick={togglePopup}
              className=" w-44 h-12 text-2xl font-normal bg-white  text-black hover:bg-slate-200 border "
            >
              Contact us
            </button> */}
              <button
                className=" px-4 py-2 my-44 bg-neutral-100 text-xl mt-10 font-light"
                onClick={togglePopup}
              >
                Contact us
              </button>
            </div>
          </div>
          {/* =========== footer section ========== */}
          <div className="">
            <Footer />
          </div>
        </div>
      </section>
      <div className="xl:px-96 px-10 w-screen  contactpop-section">
        {showPopup && <Contactpop onClose={togglePopup} />}
      </div>
    </>
  );
};
export default Whatwebelieve;
