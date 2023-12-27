import React from "react";
import { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Ellipsefullyellow from "../images/Ellipsefullyellow.png";
import { Card } from "./Card";
import Footer from "../Components/Footer";
import Vector from "../images/Vector_(2).png";
import Image106 from "../images/AboutcollabCBA.png";
import Image108 from "../images/Aboutcollabdiddeleng.png";
import Image110 from "../images/Aboutcollabjellyfish.png";
import Image111 from "../images/AboutcollabSAF.png";
import Image155 from "../images/Aboutcollabkolla.png";
import Footerlogoluxinn from "../images/Footerlogoluxinn.png";
import { FaArrowRight } from "react-icons/fa";
import "./whoarewe.css";
// import AOS from "aos";
import "aos/dist/aos.css";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

export const Whoarewe = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    // const totalPanels = panels.current.length;
    // gsap.to(panels.current, {
    //   xPercent: -100 * (totalPanels - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: panelsContainer.current,
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (totalPanels - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => "+=" + panelsContainer.current.offsetWidth
    //   }
    // });
    // AOS.init();
  }, []);

  return (
    <section className="bg-[#101010]  w-full h-full text-white">
      {/* ============navbar============= */}
      <div className="text-black">
        <Navbar />
      </div>
      <div className="">
        {/* <div className="box"> */}
        <img
          className="absolute xl:px-52 md:px-10 mt-15  ms-auto"
          src={Ellipsefullyellow}
          alt=""
        />
        {/* </div> */}

        {/*=========Top section who we are======== */}
        <div className="relative w-full flex flex-col px-9 sm:px-32 xl:px-44 2xl:px-52">
          <div className="text-neutral-50 font-normal text-4xl pt-14 sm:text-5xl sm:mt-20 md:text-7xl md:mt-24 lg:text-8xl lg:mt-16 xl:text-9xl drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] ">
            <h1 className=" ">Who we are?</h1>
          </div>
          <div className="text-neutral-50  flex flex-col font-normal justify-center  leading-7 mt-10 text-sm sm:mt-14 sm:text-base md:mt-22 md:text-lg lg:mt-28">
            <p>
              Kaash Light Engineers is a young and dynamic lighting studio,{" "}
              <br />
              working towards sustainable human centric lighting solutions for{" "}
              <br />
              people, their cities and its architecture. <br />
              <br />
              <br />
              Using full potential of light we create comfortable living spaces,{" "}
              <br />
              inspiring institutions and playful environments. We help <br />
              businesses go green in their energy consumption and create <br />
              healthier communities with inclusive ecosystem.
            </p>
          </div>
        </div>

        {/*==========Red bar 1st section======= */}
        <div className="relative bg-[#EE3224] flex items-center justify-evenly  text-white mt-12 h-12 lg:mt-24 lg:h-24 lg:text-2xl md:h-20 md:text-3xl xl:h-28 xl:text-4xl font-semibold">
          <div className="">+100 projects</div>
          <div className="">+10 years</div>
          <div className="">+7 countries</div>
        </div>

        {/* ===========patners section========== */}
        <div className="relative patners-section px-9 mt-20 sm:px-32 lg:mt-48 xl-mt-72 xl:px-44 2xl:px-52  ">
          <div className="text-neutral-50 text-3xl sm:text-4xl font-normal  ">
            Partners
          </div>
          <div className="grid grid-flow-row gap-4 mt-7 sm:grid-cols-2 md:max-w-md md:flex-row md:mt-8 lg:max-w-5xl lg:grid-cols-4 ">
            {/* ==== user1 ==== */}
            <div className="sm:w-fit w-44">
              <div className="flex flex-row justify-between items-center border border-spacing-1 p-2">
                <div>
                  <p>Tech genius - VJ</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="border my-2 p-2 flex items-center justify-center">
                <img className="p-2" alt="Icon user" src={Vector} />
              </div>
            </div>
            {/* ==== user2 ==== */}
            <div className="sm:w-fit w-44">
              <div className="flex flex-row justify-between items-center border border-spacing-1 p-2">
                <div>
                  <p>Social bee - LP</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="border my-2 p-2 flex items-center justify-center">
                <img className="p-2" alt="Icon user" src={Vector} />
              </div>
            </div>
            {/* ==== user3 ==== */}
            <div className="sm:w-fit w-44">
              <div className="flex flex-row justify-between items-center border border-spacing-1 p-2">
                <div>
                  <p>Light guru - AG</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="border my-2 p-2 flex items-center justify-center">
                <img className="p-2" alt="Icon user" src={Vector} />
              </div>
            </div>
            {/* ==== user3 ==== */}
            <div className="sm:w-fit w-44">
              <div className="flex flex-row justify-between items-center border border-spacing-1 p-2">
                <div>
                  <p>LoremIpsum - LI</p>
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="border my-2 p-2 flex items-center justify-center">
                <img className="p-2" alt="Icon user" src={Vector} />
              </div>
            </div>
          </div>
        </div>

        {/* ========ellpise yellow two======== */}
        <div className="absolute ml-24 lg:ml-96 py-10">
          <img className="ms-auto" src={Ellipsefullyellow} alt="" />
        </div>

        <section className="relative">
          {/* ==========contributers section========== */}
          <div className=" px-9 mt-20 sm:px-32 lg:mt-40  xl:mt-48 xl:px-44 2xl:px-52  ">
            <div className="text-neutral-50  text-3xl sm:text-4xl font-normal ">
              Contributors
            </div>
            <div className="mt-4 grid sm:grid-flow-col  sm:grid-cols-2 sm:mt-12 ">
              <div className="body-1 text-[16px] sm:text-[20px] flex flex-col leading-10 sm:gap-2 ">
                <div>
                  <a
                    className="!text-white cursor-pointer "
                    href="https://www.linkedin.com/in/mriveracoria/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Amaldeviya Ogulbagt
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer "
                    href="https://www.linkedin.com/in/mriveracoria/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Mayra Rivera Coria
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/leonardodolfi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Dolfi Leonardo
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/sakshi-goel-0ba948248/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Goel Sakshi
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/shashank-gupta-5014a6205/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gupta Shashank
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/carolina-marques-350b19253/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Marques Carolina
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/sakshi-modi-a09197191/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Modi Sakshi
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/marcopellegrino039/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pellegrino Marco
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/adityarai0607/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Rai Aditya
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/hanae-sahir-15485924b/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sahir Hanae
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/sachin-sharma-71ab6b228/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sharma Sachin
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/piyush-kumar-singh-22a2671a6/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Singh Piyush Kumar
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/lunavignolo/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Vignolo Luna
                  </a>
                </div>
              </div>

              <div className="body-2 text-[16px] sm:text-[20px] flex flex-col leading-10 sm:gap-2 ">
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/iqbal-bakht-buland-66261422a/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buland Iqbal Bakht
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/ilaria-daniele-489b461bb/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Daniele Ilaria
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/barbara-demurtas-2685ba208/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demurtas Barbara
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/labdhi-gala-35245b234/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gala Labdhi
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/mariaisabellagrandi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Grandi Maria Isabella
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/goda-leonaviciute/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Leonavičiūtė Goda
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/shankar-merugu-63656a273/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Merugu Shankar
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/lejla-nurkovic-b2ab3a24b/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nurkovic Lejla
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/listyanputri/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Putri Listyan
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/lobalricotti/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ricotti Linda Loba
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/rahul-gawde-b17048219/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Gawde Rahul
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/maria-slivaeva-dmitrievna/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Silvaeva Maria
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/elham-solgi-b56116226/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Solgi Elham
                  </a>
                </div>
                <div>
                  <a
                    className="!text-white cursor-pointer"
                    href="https://www.linkedin.com/in/harshada-warrier-a6571b169/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Warrier Harshada
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========collaboration========== */}
        <div className="relative px-9 my-20 sm:px-32 lg:mt-40 xl-48 xl:px-44 2xl:px-52">
          <div className="text-neutral-50 text-3xl sm:text-4xl font-normal">
            Collaboration
          </div>
          <div className="relative mt-8 flex flex-wrap items-center gap-4 sm:gap-12">
            <img
              className="cursor-pointer h-28 lg:h-36"
              alt="Image"
              src={Image106}
            />
            <img
              className="cursor-pointer h-28 lg:h-36"
              alt="Image"
              src={Image108}
            />
            <div className="cursor-pointer w-48 lg:w-72  ">
              <img className="lg:h-[75px]" alt="Image" src={Footerlogoluxinn} />
              <img className="lg:h-[75px] " alt="Image" src={Image110} />
            </div>
            <img
              className="cursor-pointer h-24 lg:h-36"
              alt="Image"
              src={Image111}
            />
            <img
              className="cursor-pointer h-24 lg:h-36 "
              alt="Image"
              src={Image155}
            />
          </div>
        </div>
        {/* ===========footer section=========== */}
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
