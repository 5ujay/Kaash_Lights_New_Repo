import React from 'react';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';
import './Immersive.css';
import Bloghotellight1b from '../../images/Bloghotellight1b.png';
import Bloghotellight1 from '../../images/Bloghotel1.png';
import Bloghotellight2 from '../../images/Bloghotel2.png';
import Bloghotellight4 from '../../images/Bloghotel4.png';

export const Immersive = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
              Immersive hotels with Light <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>


          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={Bloghotellight1b}
          />

          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">

            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-20 lg:pt-30 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
              “Light defines the identity and brand image”
            </div>


            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
              <span className="text-wrapper-19">
                Le Corbusier, a great Swiss architect and designer, stated:{' '}
              </span>
              <span className="text-wrapper-20">
                &#34;Light creates ambience and feel of a place, as well as the
                expression of a structure”
              </span>
              <span className="text-wrapper-19">
                . In fact, light can determine the ambience of an environment and
                alter our way of life. It's important to what we choose in the
                lighting system, as it defines the identity and brand image we
                desire to present. An expert opinion adds functional yet aesthetic
                value by elevating the experience which an architect or an
                interior designer may not be an expert of. <br />
              </span>
            </div>
          </div>




          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloghotellight4} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
              The ironical truth is the awareness of light importance, yet the
              limited actions to deliver. Let's explore about architectural
              lighting with digital media systems and sustainable technology for
              hospitality. Architecture and space design creates a interactive
              experience for all ages. New technologies represent a value for the
              economy, supporting user experience in the hospitality journey.
              Interior design for every hotel exclaims the brand identity in its
              own unique style. Lighting here can play dual roles - function and
              design. The design of decorative lights sets the mood for all
              spaces. From industrial pendants to delicate flowing patterns or
              minimal sleek solutions, the space often dominated by interior
              design experts and off the shelves light sellers. The second role
              come into action in the form of architectural lighting. The crucial
              and intelligent use of light to support material design and space
              function. From beam angles to delivered lumens, relative lighting
              and contrast are crucial parameters.
            </div>
          </div>

         



          {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloghotellight2} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Space experience is influenced by lighting design, and integrating
            natural light is the perfect starting point. Identification of
            interior and exterior details is necessary to separate hot lights
            and soft lights. Soft lights complement the morning freshness for
            breakfast and evening warmth for dinners, while hot lights add to
            contrast and differentiation of primary and secondary spaces, adding
            to an overall personalised experience. Rooms are a bit tricky, often
            tagged as spaces with boring, flat and insufficient lighting.
            Integrating layers of light with pre-set themes to support every
            user demand can be good way to resolve the ancient mystery of poor
            lighting in hotel rooms. Transitional spaces, such as corridors,
            lounges or even fitness areas play its own role in building the
            overall visitor experience in a hotel. From short coffee moments to
            long workouts, lighting should support space function and complement
            its design. The influence of indirect lighting in these areas can be
            very impactful.
            </div>
          </div>


          {/* fourth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="px-2 md:px-5 lg:px-10">
              <img class="h-100" alt="Image" src={Bloghotellight1} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-80 lg:pt-120">
            Decorative lighting in hospitality comes first. In order, the prime
            element to consider is the entrance to impress visitors (chandeliers
            for example); the check-in point with decorative lighting lamps;
            bright and indirect light and soft tones functional to the small
            size of bathroom; optimal lighting in the corridors to facilitate
            the orientation of the guests (vitally important for outdoors pools
            and garden as well, with floor lamps).
            </div>
          </div>


          {/* fifth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <br />
              If you would like to discuss further or find the ideal solution for
              your need, talk to our light experts at moien@kaash.eu.
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
export default Immersive;
