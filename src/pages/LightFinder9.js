import React from "react";
import "./LightFinder9.css";
import { Link } from "react-router-dom";
import download from "../images/downloadarrow.png";
import ellpise_lightfinder_report_bg from "../images/ellpise_lightfinder_report_bg.png";
import lightfinder_report_logo from "../images/lightfinder_report_logo.png";

const LightFinder9 = () => {
  return (
    <>
      <div className="bg-[#e4e4e7]">
        <img
          src={ellpise_lightfinder_report_bg}
          className="absolute top-0 ms-auto"
          alt=""
        />
        <div className="relative pt-40 pb-24 flex flex-col items-center justify-center gap-5">
          <div>
            <h1 className="text-[#7246FD] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light">
              Thank You !
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-base lg:text-xl w-2/5 text-center">
              Please be patient, as we process your inputs.One of our expert
              will reach out to you soon. Say... within 48hrs.
            </p>
          </div>
          <div>
            <button className="flex text-white items-center gap-5 bg-[#7246FD] px-4 py-2 ">
              Download report <img src={download} alt="" />
            </button>
          </div>
          <div className="w-3/4 mx-auto border-t-2 border-[#7246FD] my-4"></div>
          <div className="flex justify-center">
            <p className="px-10 md:px-0 text-center">
              In the meantime you can browse through other projects to explore
              more about light!
            </p>
          </div>
          <div>
            <Link to="/ourprojects">
              <button className="text-white bg-[#7246FD] px-10 py-2 ">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bg-white w-1/2">
        <div className="px-14 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1>Report No : </h1>
            </div>
            <img src={lightfinder_report_logo} alt="" />
          </div>

          <div className="w-full mx-auto border-t-2 border-black my-4"></div>

          <div className="py-2">
            <h1 className="text-6xl text-[#7246FD] font-bold">Light Finder</h1>
          </div>

          <div className="grid gap-2 pt-2 w-fit">
            <div className="grid grid-cols-2">
              <p className="font-bold "> Email</p>
              <p className="text-gray-600">hello@gamil.com</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Date</p>
              <p className="text-gray-600">1/1/2024</p>
            </div>
          </div>

          <div className="pt-16 grid gap-6">
            <div className="grid grid-cols-2">
              <p className="font-bold">Location</p>
              <p className="text-gray-600">Hotel</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Type of lighting</p>
              <p className="text-gray-600">Soft Indirect, Decorative</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Light position</p>
              <p className="text-gray-600">Wall Surface</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Design Style</p>
              <p className="text-gray-600">Minimal</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Application area</p>
              <p className="text-gray-600">Interior</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">
                Space dimensions <br /> (Length, Breadth, Height)
              </p>
              <p className="text-gray-600">13 m, 14m, 2m</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Space Area</p>
              <p className="text-gray-600">m2</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">File's uploaded</p>
              <p className="text-gray-600">Plan1031.pdf</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Budget</p>
              <p className="text-gray-600">€ 3.800</p>
            </div>
          </div>

          <div className="w-full mx-auto border-t-2 border-black my-4"></div>

          <div className="grid grid-cols-2">
            <p className="font-bold">Whishes to be contacted </p>
            <p className="text-gray-600">Via e-mail</p>
          </div>

          <div>
            <p className="font-bold">Comment(s)</p>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet. Non temporibus consequatur et delectus
              voluptatem qui voluptatibus consequatur sed accusantium officia.
              Vel dolor facilis ut voluptate odio eum velit voluptatem qui iusto
              officia eos maiores sint ea Quis natus eum minus commodi! Ab nihil
              laboriosam est internos autem ad quisquam voluptas id officia
              voluptas.
            </p>
          </div>

          <div className="w-full mx-auto border-t-2 border-black my-4"></div>

          <div className="grid grid-cols-3">
            <div className="w-48">
              <p>Kaash Light Engineers 4la rue des romains 8041, Luxembourg</p>
            </div>
            <div className="">
              <p>moien@kaash.eu</p>
              <p>+352 691 566 820</p>
              <p>
                <a href="#">www.kaash.eu</a>
              </p>
            </div>
            <div className="">
              <p>
                Registre De Commerce Et Des Sociétés - A43604 LU Business
                registration - 10133294/0 BGL BNP IBAN LU55 0030 1840 5176 0000
                VAT LU34096506
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default LightFinder9;
