import { useState } from "react";

import Navbargrey from "../Components/Navbargrey";
import LightFinder1 from "./LightFinder1";
import LightFinder2 from "./LightFinder2";
import LightFinder3 from "./LightFinder3";
import LightFinder4 from "./LightFinder4";
import LightFinder5 from "./LightFinder5";
import LightFinder6 from "./LightFinder6";
import LightFinder7 from "./LightFinder7";
import LightFinder8 from "./LightFinder8";
import LightFinder9 from "./LightFinder9";

import first_ellipes from "../Light_finder_images/Ellipse 16.png";

const LightFinder = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const coloredNavigation = [];
  for (let i = 1; i < count; i++) {
    if (count == 7 && i == count - 1) {
      coloredNavigation.push(
        <div className="bg-[#7246FD] h-3.5 w-20 rounded-r-lg"></div>
      );
    } else {
      coloredNavigation.push(<div className="bg-[#7246FD] h-3.5 w-20"></div>);
    }
  }

  const navigation = [];
  for (let i = count; i < 6; i++) {
    navigation.push(<div className="bg-[#D4D4D8] h-3.5 w-20"></div>);
  }

  return (
    <div className="h-full relative min-h-screen bg-[#E4E4E7]">
      <div>
        <Navbargrey />
      </div>
      {count === 0 && <LightFinder1 />}
      {count === 1 && <LightFinder2 />}
      {count === 2 && <LightFinder3 />}
      {count === 3 && <LightFinder4 />}
      {count === 4 && <LightFinder5 />}
      {count === 5 && <LightFinder6 />}
      {count === 6 && <LightFinder7 />}
      {count === 7 && <LightFinder8 />}
      {count === 8 && <LightFinder9 />}

      <div className="px-8 md:px-20 lg:px-28 relative select-none">
        {count > 0 && count < 8 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-11 xl:gap-x-14 gap-y-4 pl-4 lg:pl-8 w-3/4 items-center pb-28">
            <img
              class="absolute  w-96 md:w-1/4 left-0 top-1/3 ms-auto translate-x-[0%] translate-y-[-100%] select-none"
              src={first_ellipes}
              alt="ellipes"
            ></img>
            <div className=" flex gap-5 cursor-pointer relative z-10">
              <div
                className="flex gap-6 bg-transparent border-2 border-solid border-[#7246FD] px-5 py-.5 hover:bg-[#7246FD] hover:text-white  text-[#7246FD] bg-[#D4D4D8]"
                onClick={decreaseCount}
              >
                <div className="text-2xl lg:text-3xl font-light">
                  {"\u003C"}
                </div>
                <button className="font-semibold text-base md:text-lg">
                  Back
                </button>
              </div>
              <div
                className="flex gap-6 bg-[#7246FD] border-2 border-solid border-[#7246FD] px-5 py-.5 text-white"
                onClick={increaseCount}
              >
                <button className="font-semibold text-base md:text-lg">
                  Next
                </button>
                <div className="text-2xl lg:text-3xl font-light">
                  {"\u003E"}
                </div>
              </div>
            </div>
            <div className="flex gap-x-1 items-center">
              <div className="bg-[#7246FD] h-3.5 w-20 rounded-l-lg"></div>
              {coloredNavigation}
              {navigation}
              {count < 7 && (
                <div className="bg-[#D4D4D8] h-3.5 w-20 rounded-r-lg"></div>
              )}
              <div className="ml-5 text-xl font-semibold">
                <text className="text-[#7246FD]">{count}</text>
                <text className="text-[#9c7dfd]">/7</text>
              </div>
            </div>
          </div>
        )}
        {count == 0 && (
          <div className="pb-40 select-none" onClick={increaseCount}>
            <button className="bg-[#7246FD] lg:-ml-7 px-14 py-2 text-white text-xl">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LightFinder;
