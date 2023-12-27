import React from 'react';
import './Human.css';
import Bloghumancentriclight from '../../images/Bloghumancentriclight.png';
import Bloghumancentriclight1 from '../../images/Bloghumancentriclight1.png';
import Bloghumancentriclight2 from '../../images/Bloghumancentriclight2.png';
import Bloghumancentriclight3 from '../../images/Bloghumancentriclight3.png';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';

export const Human = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">


          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
            Human-centric lighting design
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>


          {/* image  */}
          <img
            className="px-2 md:px-5 lg:px-10 w-full h-730"
            alt="Rectangle"
            src={Bloghumancentriclight}
          />


          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px  pt-2 md:pt-10 lg:pt-30 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
            “Designing with light for activity, architecture and atmosphere”
            </div>
            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
            The advent of artificial light has transformed human lives. It&#39;s
            becoming more common in our contemporary life to work in
            environments that lack natural light - basements, dark rooms or
            workplaces with artificial lighting till far into the night.
            </div>
          </div>

           {/* second grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={Bloghumancentriclight3} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            {' '}
            In view of the fact that the most of our time is spent indoors,
            it&#39;s imperative to understand the role of lighting in
            influencing our mental health and, by extension, the well-being of
            others who reside in the space.
            <br />
            <br />
            Emerging light technologies focusing on the data power of light and
            its impact on people is growing fast. Human Centric Lighting (HCL)
            is a comprehensive technique of examining the impact of light on
            humans.
            </div>
          </div>

           {/* third grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={Bloghumancentriclight2} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            The fundamentals revolves around mimicking behaviour of natural
            light in indoor environment based on the time and location. Many
            solution providers limit themselves to simple uplight solution with
            changing colors from warm to cool with day time, as even the billion
            dollar enterprise struggle to get back buck for money in providing a
            solution synchronised with day, time and location. Maybe the boring
            company will have a solution someday.
            </div>
          </div>


           {/* image */}
           <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={Bloghumancentriclight1}
          />

           {/* fourth grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            <br />
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Working with light for more than a decade, we are of strong opinion
            that the concept of HCL goes beyond technology into holistic light
            planning. Light is for people, their task and its environment, which
            is where the idea of human centric lighting begins - with people at
            it core.
            <br />
            In this endeavour, light application, tool selection, technical
            parameters, and human comfort are evaluated in synthesis. A
            functional yet comfortable space is pivotal in increasing health and
            well being of its user. Studies have proven the positive impact on
            happiness quotient in healthcare facilities, increased productivity
            in offices and healthy engagement in urban spaces. We are on a
            mission to establish a seamless sync of the mind, body, and light by
            incorporating people centric design approach. Come join the
            revolution.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Human;
