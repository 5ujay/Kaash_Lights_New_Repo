import { React, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const CCMoreinfoEnergy = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="relative bg-[#E4E4E7] min-h-screen">
        <section className="px-24">
          <ul class="flex flex-row items-center justify-start pb-20 pt-28">
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
          </ul>
          <div className="w-2/4 bg-[#F4F4F5] p-5">
            <h3>Enter the light energy consumption of your facility</h3>
            <div className="flex justify-between items-center pt-5">
              <div className="flex items-center">
                <input
                  className="block py-1.5 px-2 mr-2.5 bg-white italic text-[#18181B]"
                  type="number"
                  placeholder="Ex :    130000"
                />
                <span className="italic">KW</span>
              </div>
              <div>
                <button className="bg-[#03B829] px-4 py-1 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between sm:justify-start mt-10">
            <div className="mr-4">
              <button
                className="bg-white px-12 border-2 border-[#03B829] py-1.5 text-[#03B829] text-xl"
                onClick={() => navigate('/CCMoreinfo')}
              >
                Back
              </button>
            </div>
            <div>
              <button
                className="bg-[#03B829] border-2 border-[#03B829] px-12 py-1.5 text-white text-xl"
                onClick={() => navigate('/CCVerif')}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CCMoreinfoEnergy;
