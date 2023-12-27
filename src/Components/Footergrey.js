import React from 'react';
import { useState, useRef, useEffect } from 'react';
import FooterLogo from '../images/Footerlogokaash.png';
import Partnershipicons from '../images/Partnershipicons.png';
import { Link } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setSelectedItem(null);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <footer class="bg-zinc-400">
      <div class="container px-6 py-6 mx-auto">
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div class="sm:col-span-2 col-start-1 col-span-2 ">
            <h1 class="max-w-lg text-xl font-light tracking-tight text-zinc-700 xl:text-2xl">
              Sign up for light stories !
            </h1>
            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                class="px-4 py-2 font-extralight text-zinc-50 bg-zinc-800 border square-md focus:border-orange-700 focus:outline-none focus:ring focus:ring-opacity-100 focus:ring-orange-700"
                placeholder="Your email"
              />

              <button class="w-full px-6 py-2 text-mg font-light tracking-wider text-zinc-50 transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-zinc-600 square-lg hover:bg-orange-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
            <p className="max-w-md text-xs font-extralight tracking-tight text-zinc-800 mt-5">
              By signing up to receive emails, you agree to our Privacy Policy.
              We treat your info responsibly. Unsubscribe anytime.
            </p>
          </div>

          <div>
            <p class="font-light text-zinc-800 :">Quick Links</p>
            <div class="flex flex-col items-start mt-1 space-y-1 text-zinc-300 w-40 text-sm 2xl:text-lg">
              <a
                href="#"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Contact
              </a>
              <a
                href="/ourprojects"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Projects
              </a>
              <a
                href="/whatwedo"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Services
              </a>
              <a
                href="/whoarewe"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Company
              </a>
              <a
                href="/lightfinder"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Light Finder
              </a>
              <a
                href="/carbonemission"
                class="!text-zinc-800 font-extralight transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Light Calculator
              </a>
            </div>
          </div>

          <div>
            <img
              class="h-auto w-3/4 md:w-2/4 2xl:w-2/3 ms-auto"
              src={Partnershipicons}
            />
          </div>
        </div>
        <hr class="my-4 border-zinc-700 md:my-6 " />
        <div class="flex items-center justify-between">
          <a href="#">
            <img class="w-auto h-6" src={FooterLogo} alt="" />
          </a>
          <div class="flex -mx-2">
            <a
              href="https://www.facebook.com/kaash.eu"
              target="_blank"
              class="mx-2 !text-zinc-700 transition-colors duration-300 hover:text-blue-500 text-3xl"
              aria-label="Reddit"
            >
              <GrFacebookOption />
            </a>
            <a
              href="https://www.instagram.com/kaash.eu/"
              target="_blank"
              class="mx-2 !text-zinc-700 transition-colors duration-300 hover:text-blue-500 text-3xl"
              aria-label="Facebook"
            >
              <GrInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/kaash/"
              target="_blank"
              class="mx-2 !text-zinc-700 transition-colors duration-300 hover:text-blue-500 text-3xl"
              aria-label="Github"
            >
              <GrLinkedinOption />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
