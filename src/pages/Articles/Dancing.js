import React from 'react';
import './Dancing.css';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';
import Bloglightconcert1 from '../../images/Bloglightconcert1.png';
import Bloglightconcert2 from '../../images/Bloglightconcert2.png';
import Bloglightconcert3 from '../../images/Bloglightconcert3.png';
import Bloglightconcert4 from '../../images/Bloglightconcert4.png';
import Bloglightconcert5 from '../../images/Bloglightconcert5.png';

export const Dancing = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">


          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-light text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-wrapper-11">
              Dancing with light tunes
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={Bloglightconcert2}
          />

          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloglightconcert5} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Lighting adds a layer of immersive experience in live concerts,
            triggering the sensorial receptors of our mind and body. The result
            is an atmosphere with positive vibes and feelings.
            <br />
            <br />
            <br />
            Lighting is built into concerts, addressing four major sections of
            the stage: downstage right, centre, left and upstage centre. Along
            with specific attention from soft ambient lighting and spotlights
            for added contrast. Then there are ancient par cans, which are
            essentially metal-encased car headlights. A dash of colour will
            fresnel and you have the great combination for stage lighting.
            <br />
            <br />
            <br />
            Traditionally, stage lighting came to life with theatres and music
            shows, eventually upgrading the infrastructure with LED lights.
            which on flick of a button switches the colour and light effect,
            with possibilities of millions of colours, shapes and shades.
            </div>
          </div>

          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloglightconcert1} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            When was it conceived that lighting systems are as important as the
            concert itself? It all started out with strobe lights which then
            became laser displays. The first band to use it was Led Zeppelin in
            1975, followed by many artists such as Marylin Manson in 2009 who
            performed with lights everywhere (from the stage to his fingertips)
            as the main characters. The curious thing is that he is blind, but
            he wanted to better involve his public and make they live a unique
            experience.
            <br />
            <br />
            Laser displays are also used by Indie artist to create a better
            ambiance for the public and breathtaking results. For example, indie
            electronic artist Dan Deacon created a free app for his concert that
            interacts with the concerts and make the public live a memorable
            experience.
            </div>
          </div>

          {/* images */}
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img class="h-100 w-full" alt="Image" src={Bloglightconcert4} />
            </div>
            <div>
              <img class="h-100 w-full" alt="Image" src={Bloglightconcert3} />
            </div>
          </div>

           {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 pt-2 md:pt-10 lg:pt-50">
              <br />
              If you would like to discuss further or you have an interesting
              light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 mb-40">
            With technology came programmable wristbands, synchronised colour
            flickers add another dimension to audience experience.
            <br />
            Tools are extremely advanced and intelligent, however the human
            evolution with the use of light power is not commendable. Over the
            last 50 years, the light effects have primarily improvised to laser
            strobes but the personalised lighting design approach to a concert
            is still missing. The inconsistent splash of colour with random
            strobes have not done much in elevating a music lover experience,
            the stages have definitely become fancier with crazy venues.
            <br />
            <br />
            It will be interesting to see the evolution of lighting design into
            concert planning where lighting is used as a visual element along
            with sound to complement each other. One can steal some tips from
            the theatre lighting guide book.
            </div>
          </div>




        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dancing;
