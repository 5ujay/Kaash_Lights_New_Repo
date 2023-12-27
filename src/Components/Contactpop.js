import React from 'react';
import './Contactpop.css';
import { RxCross1 } from 'react-icons/rx';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Contactpop = ({ onClose }) => {
  return (
    <>
      <div className="max-w-2xl bg-neutral-200 relative border border-black">
        <div className="flex justify-end items-center px-5 text-xl ">
          <button className="text-3xl pt-3" onClick={onClose}>
            <RxCross1 />
          </button>
        </div>
        <form className="px-6 md:px-12 py-3 pr-12">
          <div>
            <h1 className="text-3xl md:7xl font-extralight">Contact us</h1>
          </div>
          <div className="pt-5">
            <h2 className="text-xl md:text-2xl font-extralight">
              Let’s talk about light.
            </h2>
          </div>
          <input
            className="my-1 bg-neutral-50 border-b border-black text-start w-full px-1 font-extralight"
            type="text"
            placeholder="Contact Name"
          />
          <input
            className="my-1 bg-neutral-50 border-b border-black text-start w-full px-1 font-extralight"
            type="text"
            placeholder="Address"
          />
          <div className="flex items-center">
            <input
              className="my-1 bg-neutral-50 border-b border-black text-start mr-2 w-3/4 px-1 font-extralight"
              type="text"
              placeholder="Country"
            />
            <input
              className="my-1 bg-neutral-50 border-b border-black text-start w-1/2 px-1 font-extralight"
              type="number"
              placeholder="Postcode"
            />
          </div>
          <input
            className="my-1 bg-white border-b border-black text-start w-full px-1 font-extralight"
            type="text"
            placeholder="Contact Phone"
          />
          <input
            className="my-1 bg-white border-b border-black text-start w-full px-1 font-extralight"
            type="text"
            placeholder="E-mail"
          />
          <input
            className="my-1 bg-white border-b border-black text-start w-full px-1 font-extralight"
            type="text"
            placeholder="Tell us something about your project"
          />
          <div className="flex items-center font-extralight">
            <input type="checkbox" />
            <p className="ml-2">Kindly contact me for my requirement</p>
          </div>
          <div className="my-2">
            <button className="red-card text-white py-1 px-5">Submit</button>
          </div>
        </form>
        <div className="grid md:grid-cols-3 gap-2 px-6 md:px-12">
          <div className="px-2 flex">
            <div className="mr-2">
              <FaPhoneVolume />
            </div>
            <div className="text-sm font-extralight">
              <p>Phone</p>
              <p>+352 691 566 820</p>
            </div>
          </div>
          <div className="px-2 flex">
            <div className="mr-2">
              <IoMdMail />
            </div>
            <div className="text-sm font-extralight">
              <p>E-mail</p>
              <p>moien@kaash.eu</p>
            </div>
          </div>
          <div className="px-2 flex font-extralight">
            <div className="mr-2">
              <IoMdMail />
            </div>
            <div className="text-sm pb-1.5">
              <p>Address</p>
              <p>41a rue des romains, L8041 Luxembourg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpop;
