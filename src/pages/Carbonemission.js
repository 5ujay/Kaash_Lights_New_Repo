import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Ellipsecarbon from "../images/Ellipse-carbon.png";

const Carbonemission = () => {
  const navigate = useNavigate();
  const carbonStyles = {
    carbonImg: {
      backgroundImage: "url('../images/Ellipse-carbon.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="relative">
        <section
          style={{
            ...carbonStyles.carbonImg,
            backgroundImage: `url(${Ellipsecarbon})`,
          }}
          className="md:pb-64 bg-[#E4E4E7]"
        >
          <div
            className=" 
            px-24 "
          >
            <div className="py-8">
              <h1 className="text-7xl font-extralight pt-28">
                Carbon calculator
              </h1>
              <h2 className="pt-12 text-lg px-4">
                This tool allows you to calculate the carbon emissions of <br />{" "}
                your lighting and estimate the scope of energy savings.
              </h2>
              <p className="px-4 py-2 text-sm italic">
                *Ideally suited for large buildings and municipalities
              </p>
              <div className="px-4 pt-6">
                <h3 className="text-xl">How it Works: </h3>
                <div className="flex items-center bg-[#F4F4F5] p-2 md:w-3/5 my-3">
                  <div>
                    <h4 className="">1- Enter information about light use</h4>
                    <p className="text-sm">
                      Share your country, daily usage hours, and annual
                      operation days for accurate results.
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-[#F4F4F5] p-2 md:w-3/5 my-3">
                  <div>
                    <h4 className="">2- Input Lighting Details</h4>
                    <p className="text-sm">
                      Enter kW usage or choose lamps from our dropdown menu for
                      quick energy calculations
                    </p>
                  </div>
                </div>
                <div className="flex bg-[#F4F4F5] p-2 my-3 md:w-3/5">
                  <div>
                    <h4 className="">3- Unlock Insights</h4>
                    <p>Estimates for:</p>
                    <p className="text-sm">
                      <span className="font-black mr-2 text-xl">.</span>Carbon
                      Emissions
                    </p>

                    <p className="text-sm">
                      <span className="font-black mr-2 text-xl">.</span>Light
                      Savings
                    </p>
                    <p className="text-sm">
                      <span className="font-black mr-2 text-xl">.</span>Upgrade
                      Costs
                    </p>
                  </div>
                </div>
                <div className="pt-16">
                  <button
                    className="bg-[#03B829] px-16 py-3 text-white text-xl"
                    onClick={() => navigate("/Energyconsump")}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Carbonemission;
