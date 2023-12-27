import React from "react";
import { useState, useRef, useEffect } from "react";
import vector from "../images/Arrowblack90right.png";
import "./whatwedo.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EllipseRed from "../images/EllipseRed.png";
import VectorLeft from "../images/Arrowblack90left.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Contactpop from "../Components/Contactpop";

function Whatwedo() {
  useEffect(() => {
    AOS.init();
  }, []);

  // ======== pop up info are here...................

  const [infopopup, setInfoPopup] = useState({
    heading: "",
    paragraph: "",
    textheading: "",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
  });

  const [ispopupOpen, setispopupOpen] = useState(false);

  const [blurBackground, setBlurBackground] = useState(false);

  const openPopup = (
    heading,
    paragraph,
    textheading,
    text1,
    text2,
    text3,
    text4,
    text5
  ) => {
    setInfoPopup({
      heading,
      paragraph,
      textheading,
      text1,
      text2,
      text3,
      text4,
      text5,
    });
    setispopupOpen(true);
    setBlurBackground(!blurBackground);
  };

  const closePopup = () => {
    setispopupOpen(false);
    setBlurBackground(!blurBackground);
  };

  const popupDetails = {
    humancenteric: {
      heading: "Human-centric design",
      paragraph:
        "Creating lighting solutions specific to your needs. With user centred design approach we optimise space use, promote user well-being, and enhance overall experience with light.",
      textheading: "Deliverables",
      text1: "Light visuals ",
      text2: "Light study",
      text3: "Tender document",
      text4: "Construction drawings",
      text5: "",
    },
    sustainable_process: {
      heading: "Sustainable spaces",
      paragraph:
        "Improving efficiency of your infrastructure, either a building or a city. With detailed light study we implement sustainable solutions to improve your energy efficiency and reduce carbon footprint. ",
      textheading: "Deliverables",
      text1: "Light audit ",
      text2: "Energy report",
      text3: "Carbon reduction",
      text4: "Project management",
      text5: "Before & After assessment",
    },
    light_engineering: {
      heading: "Light engineering",
      paragraph:
        "Light is scientific in its origin, a good lighting tool should be a well engineered product to deliver best performance. Through light engineering we identify the ideal lighting solution for your project to create the perfect lighting.",
      textheading: "Deliverables",
      text1: "Led assessment ",
      text2: "Product mock-ups",
      text3: "Light programming",
      text4: "Projection mapping",
      text5: "Scenography",
    },
  };

  //========= arrow text info are here.......................
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const ShowFirst = () => {
    setFirst(!first);
  };
  const showSecond = () => {
    setSecond(!second);
  };
  const showThird = () => {
    setThird(!third);
  };

  const handleButtonClick = (section) => {
    setFirst(false);
    setSecond(false);
    setThird(false);

    // Toggle the clicked section
    switch (section) {
      case "first":
        setFirst(!first);
        break;
      case "second":
        setSecond(!second);
        break;
      case "third":
        setThird(!third);
        break;
      default:
        break;
    }
  };

  // ======== contact popup.................................
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setBlurBackground(!blurBackground);
  };

  return (
    <>
      <div className={blurBackground ? "blur-background bg-black" : "bg-black"}>
        {/* ======== Navbar ======== */}
        <Navbar />
        <div className="">
          {/* ======== Red Ellpise ======== */}
          <img
            class="absolute right-0 ms-auto w-10/12 md:w-7/12"
            src={EllipseRed}
          />
          <div className="relative">
            {/* ======== What we do Top section ======== */}
            <div className="grid gap-y-9 md:gap-y-14 xl:gap-y-24 pt-12 px-10 sm:px-28 sm:pt-16 md:px-32 lg:pt-36 xl:pt-44">
              <h2 className="font-light text-5xl xl:text-9xl/tight lg:text-7xl/tight text-neutral-100 ">
                What we do?
              </h2>
              <h4 className="lg:text-xl text-xs font-light text-neutral-100 w-3/4 md:w-1/2">
                We use light to create spaces where people feel good. Using full
                potential of light we build comfortable homes, inspiring
                institutions and playful environments. Working towards
                sustainable human centric solutions, we help our clients find
                the perfect light for their project. <br />
                <br />
                From heritage buildings to modern offices we fuse intelligent
                technology with efficient solutions for a greener planet.
              </h4>
            </div>

            {/* ======== Our Services Setion====== */}
            <div className="py-44">
              <div className="font-light text-neutral-50 px-10 text-2xl sm:px-28 md:px-32 lg:text-4xl xl:text-5xl ">
                Our services
              </div>
              {/* == Human Centric == */}
              <div className="flex flex-col gap-8">
                <div className="bg-[#E5E7EB] mt-8 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl ">
                  <span className="font-light">Human centric design</span>
                  <div>
                    <button
                      onClick={() => {
                        openPopup(
                          popupDetails.humancenteric.heading,
                          popupDetails.humancenteric.paragraph,
                          popupDetails.humancenteric.textheading,
                          popupDetails.humancenteric.text1,
                          popupDetails.humancenteric.text2,
                          popupDetails.humancenteric.text3,
                          popupDetails.humancenteric.text4,
                          popupDetails.humancenteric.text5
                        );
                      }}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                {/* == Sustainable Process == */}
                <div className="bg-[#E5E7EB] mt-8 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                  <span className="font-light ">Sustainable spaces</span>
                  <button
                    onClick={() => {
                      openPopup(
                        popupDetails.sustainable_process.heading,
                        popupDetails.sustainable_process.paragraph,
                        popupDetails.sustainable_process.textheading,
                        popupDetails.sustainable_process.text1,
                        popupDetails.sustainable_process.text2,
                        popupDetails.sustainable_process.text3,
                        popupDetails.sustainable_process.text4,
                        popupDetails.sustainable_process.text5
                      );
                    }}
                  >
                    <FaArrowRight />
                  </button>
                </div>
                {/* == Light Engineering == */}
                <div className="bg-[#E5E7EB] mt-8 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                  <span className="font-light ">Light Engineering</span>
                  <button
                    onClick={() => {
                      openPopup(
                        popupDetails.light_engineering.heading,
                        popupDetails.light_engineering.paragraph,
                        popupDetails.light_engineering.textheading,
                        popupDetails.light_engineering.text1,
                        popupDetails.light_engineering.text2,
                        popupDetails.light_engineering.text3,
                        popupDetails.light_engineering.text4,
                        popupDetails.light_engineering.text5
                      );
                    }}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* ======== light project ======== */}
            <div className="">
              <div className="font-light text-neutral-50 px-10 text-lg sm:px-28 md:px-32 lg:text-4xl xl:text-5xl">
                <p>
                  Do you have a light project ? <br />
                  Check below for project pricing.
                </p>
              </div>
              <div className="">
                <div className="bg-[#E5E7EB] mt-8 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                  <span className="font-light ">Individual project</span>
                  <button onClick={() => handleButtonClick("first")}>
                    {first === true ? <FaArrowLeft /> : <FaArrowRight />}
                  </button>
                  {first && <div>3€ / m2</div>}
                </div>
                <div className="bg-[#E5E7EB] mt-16 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl ">
                  <span className="font-light ">
                    Public and private company
                  </span>
                  <button onClick={() => handleButtonClick("second")}>
                    {second === true ? <FaArrowLeft /> : <FaArrowRight />}
                  </button>
                  {second && <div> 9€ / m2</div>}
                </div>
                <div className="bg-[#E5E7EB] mt-16 xl:py-9 md:py-7 py-5 flex flex-row justify-between px-10 sm:px-32 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                  <span className="font-light ">Individual project</span>
                  <button onClick={() => handleButtonClick("third")}>
                    {third === true ? <FaArrowLeft /> : <FaArrowRight />}
                  </button>
                  {third && <div> 6€ / m2</div>}
                </div>
              </div>
            </div>

            {/* ======== Contact us button ======== */}
            <div className="py-28 ml-4 md:ml-28 xl:ml-32 mt-8 md:mt-32 xl:mt-40 mb-20 md:mb-36 xl:mb-56">
              <button
                className="px-4 py-2 bg-[#E5E7EB] text-base md:text-xl xl:text-2xl font-light"
                onClick={togglePopup}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {/* ======== All Popups are here ======== */}
      {ispopupOpen ? (
        <div className="bg-white whatwedo-popup ">
          <div className="px-10 sm:px-28 lg:px-32 pt-10">
            <div className="relative flex flex-row text-xl sm:text-3xl lg:text-5xl justify-between">
              <span className="">{infopopup.heading}</span>
              <button className="" onClick={closePopup}>
             <RxCross2 />
              </button>
            </div>
            <div className="relative flex flex-wrap my-8 gap-4 sm:my-10 sm:gap-16 lg:py-16 md:text-lg lg:text-xl">
              <div className="w-60 lg:w-96  ">
                <p>{infopopup.paragraph}</p>
              </div>
              <div className="">
                <strong>{infopopup.textheading}</strong>
                <p>{infopopup.text1}</p>
                <p>{infopopup.text2}</p>
                <p>{infopopup.text3}</p>
                <p>{infopopup.text4}</p>
                <p>{infopopup.text5}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="xl:px-96 px-10 w-screen  contactpop-section">
        {showPopup && <Contactpop onClose={togglePopup} />}
      </div>
    </>
  );
}

export default Whatwedo;
