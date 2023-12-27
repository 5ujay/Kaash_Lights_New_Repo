import React from 'react';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';
import './Festivals.css';
import Bloglightfestival from '../../images/Bloglightfestival.png';
import Bloglightfestival1a from '../../images/Bloglightfestival1a.png';
import Bloglightfestival1 from '../../images/Bloglightfestival1.png';
import Bloglightfestival2 from '../../images/Bloglightfestival2.png';
import Bloglightfestival3 from '../../images/Bloglightfestival3.png';
import Bloglightconcert2 from '../../images/Bloglightconcert2.png';
import Bloglightconcert3 from '../../images/Bloglightconcert3.png';
import Bloglightconcert4 from '../../images/Bloglightconcert4.png';
import Bloglightconcert5 from '../../images/Bloglightconcert5.png';


export const Festivals = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-24 md:p-28 lg:p-28">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
              Lights in Bergamo and Brescia
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

          {/* image */}
          <img
            className="left-0 w-full h-658"
            alt="Rectangle"
            src={Bloglightfestival1}
          />


          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">

            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-20 lg:pt-30 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
            “Light festivals are the excellent visiting card of a city”
            </div>
            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
              Are you ready to light up your life? Well, in Bergamo and Brescia
              they did just that with the &#34;Light is Life&#34; festival! Held
              in February to bring together renewable sources of energy and
              tourism in a dazzling display of lights.
              <br />
              <br />
              The festival had a noble cause too, with the aim of raising
              awareness for energy consumption and promoting social well-being.
              Funds raised were donated to the Energy Bank to support local
              families, who were hit hard by the pandemic. A2A, a lighting
              society, even donated a sum equivalent to the volume of energy used!
              <br />
              Lighting map of the city
            </div>
          </div>

          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloglightfestival3} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            The festival was organized by some big names from around the world,
            including Angelo Bonelli, the founder of Kitonb Creative Studio and
            Pam Show, the curator of the Light Art Collection in Amsterdam.
            Students from both cities worked tirelessly to create installations
            that expressed their feelings about art.
            <br />
            <br />
            Art lighting with AL in an architectural context
            <br />
            The festival in Bergamo featured the Upper Town, which covered all
            the must-see historic and cultural spots. The heart of Bergamo’s
            ancient city, Piazza Vecchia, was illuminated with masterpieces of
            light engineering. And to top it off, the Choir of the Gaetano
            Donizetti Conservatory accompanied video projections on the Angelo
            Mai Civic Library.
            </div>
          </div>


          {/* image */}
          <img
            className="left-0 w-full h-658"
            alt="Rectangle"
            src={Bloglightfestival2}
          />

          {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            Art lighting in Bergamo&#39;s historic centre
            <br />
            The festival was such a hit that the mayors of both cities
            couldn&#39;t stop talking about it! Brescia&#39;s mayor, Emilio Del
            Bono, called it an &#34;excellent visiting card&#34; for the year
            ahead. While Bergamo&#39;s mayor, Giorgio Gori, hailed it as
            &#34;one of the most important and spectacular events in the
            capital&#34;. The festival brought national and international light
            art expressions to Bergamo for the first time, and the installations
            were designed to enhance the city&#39;s rich cultural heritage.
            </div>
          </div>

          {/* image */}
          <div className=' flex flex-row justify-center align-items'>
          <img
            className="h-500"
            alt="Rectangle"
            src={Bloglightfestival}
          />
          </div>

          {/* fourth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            So, if you missed out on this festival, don&#39;t worry. Keep an eye
            out for next year&#39;s &#34;Light is Life&#34; festival and
            experience the magic of light and art in Bergamo and Brescia.
            It&#39;s an event that&#39;s sure to leave you feeling energized and
            illuminated!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Festivals;
