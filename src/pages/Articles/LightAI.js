import React from 'react';
import aiiimage16 from '../../images/Blogaifacade.png';
import aiimage14 from '../../images/Blogaifacade2.png';
import aimappa from '../../images/Blogaihut.png';
import aiimage1410 from '../../images/Blogailandscape.png';
import Blogaishop from '../../images/Blogaishop.png'

import './LightAI.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footergrey';

export const LightAI = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
              Intelligence of Light
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={aiiimage16}
          />


           {/* first grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={Blogaishop} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            In one of his work, in 2004, John McCarthy, one of the founding
            fathers of artificial intelligence, defined it as the science and
            engineering of making intelligent machines, especially intelligent
            computer programs.
            <br />
            <br />
            <br />
            <br />
            High customer expectations, rising competition and climate
            challenges, the artificial lighting industry is demanding to improve
            both building lighting design and energy efficiency with smart
            lighting control systems. AI technology enabled building systems,
            it's faster to turn a sustainable design idea into an intelligent
            product and a vision into reality with AI algorithm.
            <br />
            <br />
            <br />
            Augmented reality and AI enabled lighting components already exist
            in our smart building system technologies. Let’s look at LEDs as
            light source, they are efficient with long lifetime and low energy
            consumption, but what makes them really smart is the integration of
            smart lighting control to automate energy efficiency and predict
            human behaviour with machine learning. Gradually reducing artificial
            light carbon footprint and improving user experience with
            innovation.
            </div>
          </div>

          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">

            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-5 lg:pt-10 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
            “Intelligent use of intelligent technology is the future for
            sustainable planet”
            </div>


            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
            Another example of lighting technology impact in our daily life is
            through Radar sensors and Lidar sensors driven lighting application
            that can present building owners or visitors with parking
            availability data on mobile app, allow employees to book meeting
            rooms or homeowners with personalised lighting and temperature
            setting based on human behaviour.
            </div>
          </div>


          {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={aiimage1410} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Machine learning is helping mankind with smart building
            infrastructure. About 80 percent of led lighting is attributed to
            professional applications such as building, office, industry or
            street lighting system, and about 20 percent to private residential
            lighting. Adjusting led lights levels or enabling other functions
            lead to ease of life and work with smart integration of existing
            technology into lights.
            <br />
            <br />
            <br />
            Now the talk of town, ChatGPT and DALL-E, interacting with users
            through text inputs to create ready to consume articles, concepts,
            renders and even the best practices examples. Every question has a
            well researched, thoughtfully curated professional answer just in
            matter of seconds (how much should the lighting fixtures and
            lighting control cost for a specific case, the function of
            architectural lighting designer, energy savings, smart home, history
            of Smart lighting).
            </div>
          </div>

          {/* fourth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={aimappa} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            AI in lighting design have changed our conception of the art. It’s
            easier to create images with thoughts, realistic renders from ideas.
            For planners, it's even easier in the time of context as instruments
            create realistic usable solutions.
            <br />
            <br />
            European energy policy is trying to shift towards renewable
            energy-based supply by 2050. Smarter integration of existing avenues
            with smart devices can accelerate the change by 30% just with
            lighting by doing what we already know. So, in the future we will
            get energy from wind and sun.
            </div>
          </div>

          {/* fifth grid */}

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            <br />
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Taking inspirations from geographical highlights can do wonders in
            creating exotic atmospheres. A smart example is the Icehotel in
            Sweden, Kiruna, handsculpted in 1989, a must-see in the bucket list
            for tourists and locals. Worldwide known to be the biggest hotel of
            ice and snow, it is a combination of ice rooms and elegant art
            suites, churches, decorations by local artists, all made of ice.
            Snow and ice are taken from Torne River, nearby. All in 2100 square
            meter. You can also attend a course on Scandivian cuisine. If you
            are ready to leave in a -5 °C (23 °F), between December and April,
            feel welcome.
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LightAI;
