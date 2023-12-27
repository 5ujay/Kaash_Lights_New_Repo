import React from 'react';
import Blogsustainability from '../../images/Blogsustainability.png';
import Blogsustainabilitychart from '../../images/Blogsustainabilitychart.png';
import Blogsustainabilitychart3 from '../../images/Blogsustainabilitychart3.png';
import '../../App.css'
import './Ecosystem.css';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';

export const Ecosystem = () => {
  return (
    <>
      <Navbar />
      <div class=" flex flex-row justify-center">
    <div class="bg-zinc-200">

      {/* main heading and date */}
      <p class="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
        <span class="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
          Light carbon in sustainable ecosystem
        </span>
        <br/>
        <br/>
        <span class="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">
          updated jan 2023
        </span>
      </p>


      {/* image */}
      <div>
          <img class="left-0 w-full h-730" alt="Group" src={Blogsustainability} />
      </div>


      {/* first grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
        <div class="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-20 lg:pt-60 px-2 md:px-20 lg:px-40 w-30">
        “Human-centric light planning creates impactful designs but also
            reduce carbon emissions of light infrastructure”
        </div>
        <div>
          <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
                The world has been a witness to surging temperatures and rising sea
                levels, thanks to complications of global warming and climate
                change. As long as we don&#39;t make the essential lifestyle
                adjustments, these issues will continue to wreak havoc.
                <br />
                <br />
                <br />
                Among many comes light, something so mechanical yet intuitive. In
                between the mesmerising hues of dusk and dawn, lies the real need of
                artificial lighting. City streets, commercial centres, office
                complexes or transport hubs, light is a necessity to function.
                According to estimates, electricity accounts for about half of our
                carbon footprint, with lighting accounting for good quarter in
                buildings.
          </div> 
          <div class="text-justify pt-10 md:pt-20 lg:pt-60 text-zinc-900 font-regular text-base md:text-lg lg:text-xl">
            Lighting carbon emissions have reduced by half over a decade given
            the widespread usage of LEDs. Despite all efforts, they seem to have
            fallen short in light of the current climate crisis. Governments and
            organisations have been trying smart solutions, as sustainability
            moved up on their agenda. When a mayor in a European city ordered
            turning off streetlights after midnight to save energy, the chaos by
            residents finally caused the order to be reversed. Such measures are
            not only frivolous, but also question the competence of the
            authorities. The popularity of intelligent lighting systems has been
            growing for years, but only a few examples are available to
            illustrate their utility. Technical incompetence or economic
            challenges with unjustified returns on investments may be the
            primary reasons behind this.
          </div>

        </div>
      </div>


      {/* second-grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-16 md:p-20 lg:p-30">
        <div class="pl-2 md:pl-20 lg:pl-30">
          <img class="h-100" alt="Image" src={Blogsustainabilitychart3} />
        </div>
        <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Concept of human centric light planning can be a stepping stone
            toward carbon neutral Europe by 2050. Starting with light planning
            for space function, its user and architecture, the wasteful flooding
            of lights in grid ceilings for the obsession of lux (lust) level can
            be avoided. Blending daylight in light planning further improves the
            efficiency. In the outdoor environment, simplistic occupancy
            controllers can significantly reduce municipal light bills by up to
            80% further with a big boost to reduction in carbon emissions. There
            are a number of cost-effective solutions with good
            return-on-investment, waiting for the action to improve the health
            of our planet.
        </div>
      </div>


      {/* third-grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8  p-16 md:p-20 lg:p-30">
        <div class="pl-2 md:pl-20 lg:pl-30">
          <img class="h-100" alt="Image" src={Blogsustainabilitychart}></img>
          
        </div>

        <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Standing at the quarter of 21st century, fired by passion and driven
            by innovation, we may end up with the finest technologies available
            out there. Be that as it may, smart groups of individuals are still
            required to materialise the best of all ideas. As lighting
            consultants, we&#39;ve come a long way, yet the question still
            remains: “Is our approach towards creating sustainable lighting
            designs good enough? “ “Is it?”
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8  p-16 md:p-20 lg:p-40 mb-40">
      <p class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            <br />
                  If you would like to discuss further or you have an interesting
                  light story to share, write to us at moien@kaash.eu.
      </p>
      </div>
      <Footer />






      {/* OLD CODE */}
      {/* <div className="blog-sustainable">
        <div className="div-2">
          <p className="light-carbon-in">
            <span className="text-wrapper-11">
              Light carbon in sustainable ecosystem
              <br />
              <br />
            </span>
            <span className="text-wrapper-12">updated jan 2023</span>
          </p>
          <p className="the-world-has-been-a">
            The world has been a witness to surging temperatures and rising sea
            levels, thanks to complications of global warming and climate
            change. As long as we don&#39;t make the essential lifestyle
            adjustments, these issues will continue to wreak havoc.
            <br />
            <br />
            <br />
            <br />
            Among many comes light, something so mechanical yet intuitive. In
            between the mesmerising hues of dusk and dawn, lies the real need of
            artificial lighting. City streets, commercial centres, office
            complexes or transport hubs, light is a necessity to function.
            According to estimates, electricity accounts for about half of our
            carbon footprint, with lighting accounting for good quarter in
            buildings.
          </p>
          <p className="text-wrapper-13">
            Lighting carbon emissions have reduced by half over a decade given
            the widespread usage of LEDs. Despite all efforts, they seem to have
            fallen short in light of the current climate crisis. Governments and
            organisations have been trying smart solutions, as sustainability
            moved up on their agenda. When a mayor in a European city ordered
            turning off streetlights after midnight to save energy, the chaos by
            residents finally caused the order to be reversed. Such measures are
            not only frivolous, but also question the competence of the
            authorities. The popularity of intelligent lighting systems has been
            growing for years, but only a few examples are available to
            illustrate their utility. Technical incompetence or economic
            challenges with unjustified returns on investments may be the
            primary reasons behind this.
          </p>
          <p className="text-wrapper-14">
            Concept of human centric light planning can be a stepping stone
            toward carbon neutral Europe by 2050. Starting with light planning
            for space function, its user and architecture, the wasteful flooding
            of lights in grid ceilings for the obsession of lux (lust) level can
            be avoided. Blending daylight in light planning further improves the
            efficiency. In the outdoor environment, simplistic occupancy
            controllers can significantly reduce municipal light bills by up to
            80% further with a big boost to reduction in carbon emissions. There
            are a number of cost-effective solutions with good
            return-on-investment, waiting for the action to improve the health
            of our planet.
          </p>
          <p className="standing-at-the">
            Standing at the quarter of 21st century, fired by passion and driven
            by innovation, we may end up with the finest technologies available
            out there. Be that as it may, smart groups of individuals are still
            required to materialise the best of all ideas. As lighting
            consultants, we&#39;ve come a long way, yet the question still
            remains: “Is our approach towards creating sustainable lighting
            designs good enough? “ “Is it?”
          </p>

          <img className="group" alt="Group" src={Blogsustainability} />
          <img className="image" alt="Image" src={Blogsustainabilitychart} />
          <img className="image-2" alt="Image" src={Blogsustainabilitychart3} />
          <p className="if-you-would-like-to">
            <br />
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
          </p>
          <p className="text-wrapper-15">
            “Human-centric light planning creates impactful designs but also
            reduce carbon emissions of light infrastructure”
          </p>
        </div>
      </div> */}
      {/* <Footer /> */}


    </div>
    </div>
    </>
  );
};
export default Ecosystem;

