import React from 'react';
import './Victorian.css';
import vimage15 from '../../images/Blogvictoriadarkstreet.png';
import vimage14 from '../../images/Blogvictoriapalace1a.png';
import vimage14_1 from '../../images/Blogvictoriahybridlamp4.png';
import vmappa from '../../images/Blogvictoriakerosenelamp2.png';
import vmappa_1 from '../../images/Blogvictoriaargandlamp3.png';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';

export const Victorian = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
            Sustainable lighting from Victoria Era<br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={vimage14}
          />

          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-20 lg:p-30">
            <figure class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={vmappa} />
              <figcaption class='italic'>Kerosene Lamps</figcaption>
            </figure>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            The reign of Queen Victoria spanned the years 1837 to 1901, the era
            of technological advancements. In Victoria&#39;s time, candle lights
            and oil lamps were the only means of lighting houses and buildings.
            While the wealthiest used chandeliers or great candles for special
            occasions, luxury hotels in Italy and Spain were the first to use
            electric lights.&nbsp;&nbsp;At that time candles illuminated
            specific areas or the entire room. By consequence, too much of
            brightness was disturbing and gave the idea of a new source of
            lighting.
            </div>
          </div>

          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <figure class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={vmappa_1} />
              <figcaption class='italic'>Revolutionary innovation of the 18th century&nbsp;&nbsp;- Argand
              Lamps
              </figcaption>
            </figure>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            The 1880s also saw circular wick lamps, but as electric lighting
            became prevalent, people ceased using oil lamps in their daily
            lives. In addition, there were hand-blown glass period bulbs
            available. Furthermore, oil lamps and candles were often used alone,
            and electric power was used when there were guests. Consequently,
            the bulbs lasted a long time. Besides, light did not emit any smell,
            unlike oil and candles, so it made for a more pleasant atmosphere
            for people.
            <br />
            <br />
            In Victorian homes, wick lamps were quite popular, available flat
            and circular. Unlike other lamps, this has a flame spreader built
            into the burner which allowed the possibility of increasing or
            decreasing the illumination of a candle, hence adapting light levels
            to specific needs. An open ribbon of cotton makes up the wick, as
            capillary action sucked up paraffin oil through the wick, the choice
            to choose paraffin smell further personalised the experience.
            Paraffin was cheaper than fuel, but it wasn’t enough efficient to
            illuminate the entire rooms.
            </div>
          </div>

          {/* image */}
          <figure className=' flex flex-row justify-center align-items'>
          <img
            className="h-500"
            alt="Rectangle"
            src={vimage14_1}
          />
          </figure>
          <figcaption className='flex flex-row justify-center align-items italic'> 
            Efficiency and light control - magical powers of Circular wick lamps
          </figcaption>

          {/* image */}
          <div className=' flex flex-row justify-center align-items'>
          <img
            className="p-5 md:p-10 lg:p-20"
            alt="Rectangle"
            src={vimage15}
          />
          </div>

          {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            <br />
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Lights were first turned on Pall Mall in 1930s, now with energy
            crisis and climate change we are going back to dark ages with
            municipalities switching off the lights. Just like Victorian ages,
            it's time for us to explore new innovations and set an example with
            new technologies to create efficient systems in elder communities.
            </div>
          </div>

         
          
          
         
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Victorian;
