import React from 'react';
import Ellipse59 from '../images/Calculatorellipsegreenbottom.png';
import group9676 from '../images/Group9676.svg';
import Vector7151 from '../images/Vector1751.png';
import './CCGetres.css';
import Navbar from '../Components/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDown } from 'react-icons/io';
import { AiOutlineExclamation } from 'react-icons/ai';

export const CCGetres = () => {
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="bg-[#E4E4E7] relative">
        <section className="px-24 py-20 pt-36">
          <div>
            <div className=" flex items-center justify-around">
              <div>
                <h2 className="text-center">
                  Your current light <br /> carbon footprint
                </h2>
                <div className="w-40 h-40 p-2 text-center border-[#585858] rounded-full  flex justify-center items-center my-4 outline outline-8 outline-[#585858]">
                  Annual emission of co2
                </div>
              </div>
              <ul>
                <li className="text-[#03B829] text-2xl">
                  <FaArrowRight />
                </li>
              </ul>
              <div>
                <h2 className="text-[#03B829] text-center">
                  Carbon saving <br /> potential
                </h2>
                <div className="w-40 h-40 p-2 text-center outline-8 outline-[#03B829] border-[#03B829] rounded-full outline  flex justify-center items-center my-4">
                  Energy and carbon savings annually
                </div>
              </div>
              <div>
                <div className="my-5">
                  <h2 className="text-[#03B829] text-2xl font-semibold">
                    8590{' '}
                    <span className=" font-normal text-xl text-[#18181B]">
                      Euros
                    </span>{' '}
                  </h2>
                  <p>Approximate cost for light upgradation</p>
                </div>
                <div>
                  <h2 className="text-[#03B829] text-2xl font-semibold">
                    18{' '}
                    <span className=" font-normal text-xl text-[#18181B]">
                      Months
                    </span>
                  </h2>
                  <p>ROI - return of investment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-12">
            <div className="flex items-center my-6 mt-16">
              <span className="w-5 h-5  flex justify-center text-[#03B829] items-center rounded-full border-2 border-[#03B829]">
                <AiOutlineExclamation />
              </span>
              <h3 className="mx-2">Why to upgrade lighting?</h3>
            </div>
            <div className="flex items-center">
              <button className="bg-[#03B829]  border-2 border-[#03B829] px-5 py-1.5 text-white flex justify-center items-center">
                Download Report{' '}
                <span className="text-xl">
                  <IoMdArrowDown />
                </span>
              </button>
              <button className="mx-5 border-2 border-[#03B829] px-5 py-1.5 text-[#03B829]">
                Repeat the test
              </button>
            </div>
          </div>
          <div className="px-12 py-3">
            <div className="w-full h-0.5 bg-[#03B829]"></div>
          </div>
          <div className="py-12 text-center">
            <p>
              To know more about your savings and what to do next, contact us!
            </p>
            <button className="px-6 py-1.5 bg-[#03B829] text-white my-5 text-xl">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      {/* <div className="carbon-calculator">
        <div className="divres">
          <div className="overlap">
            <div className="overlap-group">
              <img className="Ellipse59" alt="Ellipse" src={Ellipse59} />
              <p className="p">Approximate cost for light upgradation</p>
              <p className="text-wrappe-2">ROI - return of investment</p>
              <div className="text-wrappe-3">Carbon saving potential</div>
              <div className="energy-and-carbon">
                Energy and carbon
                <br />
                savings annually
              </div>
              <p className="element-euros">
                <span className="span">8590</span>
                <span className="text-wrappe-4">&nbsp;</span>
                <span className="text-wrappe-5">Euros</span>
              </p>
              <p className="element-months">
                <span className="span">18</span>
                <span className="text-wrappe-4">&nbsp;</span>
                <span className="text-wrappe-5">Months</span>
              </p>
              <div className="text-wrappe-6">85%</div>
              <div className="ellipse-2" />
              <img className="img" alt="Ellipse" src="ellipse-58.svg" />
              
              <div className="group">
                <button
                  className="button-instance"
                  divClassName="button-1-instance"
                  property1="default"
                  text=""
                >
                  Repeat the test
                </button>
                <div className="group-2">
                  <div className="text-wrappe-7">Why to upgrade lighting?</div>
                  <div className="overlap-group-wrappe">
                    <div className="overlap-group-2">
                      <div className="ellipse-3" />
                      <div className="rectangle" />
                      <div className="ellipse-4" />
                    </div>
                  </div>
                </div>
                <div className="overlap-wrappe">
                  <div className="overlap-2">
                    <button className="button-2">
                      <div className="button-2t">Download report</div>
                    </button>
                    <img className="group-3" alt="Group" src={group9676} />
                  </div>
                </div>
                <img className="vector-2" alt="Vector" src={Vector7151} />
              </div>
              <p className="text-wrappe-8">
                To know more about your savings and what to do next, contact us!
              </p>
            </div>
            <p className="text-wrappe-9">Your current light carbon footprint</p>
            <div className="overlap-3">
              <div className="text-wrappe-10">Annual emission of CO2</div>
              <p className="element-kg">
                <span className="text-wrappe-11">74638</span>
                <span className="text-wrappe-12">&nbsp;</span>
                <span className="text-wrappe-13">Kg</span>
              </p>
              <div className="ellipse-5" />
            </div>
            
          </div>
          <div className="expand-text">
            <div className="flexcontainer">
              <p className="text-i">
                <span className="text-wrappe-14">
                  Benefit from government subsidies
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Lighting consumes up to 30% of energy for building and cities.
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Upgrading light sources to efficient solution leads to direct
                  reduction in carbon footprint.
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Review light study of your facility to analyse the existing
                  energy consumption.
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Identify the potential of energy savings.
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Observe the plan with solutions and their impact in achieving
                  your sustainability goals.
                  <br />
                </span>
              </p>
              <p className="text-i">
                <span className="text-wrappe-15">
                  Record the direct impact in light carbon reduction.
                </span>
              </p>
            </div>
            <div className="group-4">
              <div className="text-wrappe-16">Why to upgrade lighting?</div>
              <img className="vector-3" alt="Vector" src="vector-1746.svg" />
            </div>
          </div>
          <img className="group-5" alt="Group" src="group-9676.png" />
        </div>
      </div>
      <button className="buttonc">
        <div>Contact Us</div>
      </button> */}
    </>
  );
};
export default CCGetres;

// const LampCalculator = () => {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     let totalEnergyConsumption = 0;
//     lampDetails.forEach((lamp) => {
//       totalEnergyConsumption += lamp.wattage * lamp.quantity;
//     });

//     const hours = parseInt(event.target.hours.value);
//     const days = parseInt(event.target.days.value);
//     const selectedCountry = event.target.countries.value;

//     let footprintEfficiency = 0;
//     switch (selectedCountry) {
//       case 'Luxembourg':
//         footprintEfficiency = 0.61;
//         break;
//       case 'France':
//         footprintEfficiency = 0.74;
//         break;
//       case 'Germany':
//         footprintEfficiency = 0.54;
//         break;
//       default:
//         break;
//     }

//     const carbonFootprint = (
//       (totalEnergyConsumption * hours * days * footprintEfficiency) /
//       1000
//     ).toFixed(4);

//     console.log('Total Energy Consumption:', totalEnergyConsumption);
//     console.log('Carbon Footprint:', carbonFootprint);
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="hours">Hours:</label>
//         <input type="number" id="hours" name="hours" />
//         <label htmlFor="days">Days:</label>
//         <input type="number" id="days" name="days" />
//         <label htmlFor="countries">Select Country:</label>
//         <select id="countries" name="countries"></select>

//         <button type="submit">Calculate</button>
//       </form>
//     </div>
//   );
// };
