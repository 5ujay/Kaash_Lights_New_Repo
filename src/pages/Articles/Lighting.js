import React from 'react';
import './Lighting.css';
import dimage9 from '../../images/Bloglightluxurybar.png';
import dimage8 from '../../images/Bloglightluxurybedroom.png';
import dimage35 from '../../images/Bloglightluxuryoffice.png';
import dimage14 from '../../images/Bloglightluxury.png';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';

export const Lighting = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-300">


           {/* main heading and date */}
           <p className="bg-zinc-300 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
            Luxury of lighting design
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

           {/* image */}
           <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={dimage14}
          />

          {/* first grid  */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
              <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-10 lg:pt-20 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
              “Designing with multi dimensional identity of light as art, form,
                function and emotion”
              </div>
              <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
              </div>
          </div>



          {/* second grid  */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={dimage8} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            Design and style evolve over time. Some gradually altering
            themselves along the way while others disappear in favour of newer
            expressions. Looking for personality reflection in products and
            lifestyle, people&#39;s desire for luxury is endless, lately
            expressed in NFTs.
            <br />
            <br />
            In a built environment, a luxurious affair is complemented by
            upscale amenities, sumptuous furnishings, and opulent accents.
            Exotic art collections, celebrated designs, and breath-taking views
            are never enough. Bringing this experience together is the unsung
            hero of light. Often limited to beautifully crafted chandeliers and
            tabletop icons, light adds immense depth to the built environment.
            </div>
          </div>

          {/* third grid  */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={dimage9} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            As an art form, it can influence human emotions and spatial
            feelings, adding an invisible character to the environment. A richly
            constructed space gets its much-needed spirit from sophisticated
            lighting design. The lighting world is trying to eliminate the
            indifference towards light planning by impressing people with the
            possibilities of thoughtful human-centric light planning.
            </div>
          </div>


           {/* image */}
           <figure>
           <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={dimage35}
          />
          <figcaption class='flex flex-row justify-center content-center italic'> Conceptual representation of futuristic lighting in hospitality</figcaption>
          </figure>


           {/* fourth grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <br />
              If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 ">
            The way light falls and reflects creates a desired environment to
            support space function and drive people’s moods. Accents of light,
            precisely highlighting the masterpieces of paintings, sculptures, or
            even furniture, can create drama for an intriguing atmosphere. Soft
            illumination of architecture or vertical surfaces adds warmth to the
            environment. Just like furnishings, color tones from light can set
            the mood for a cozy, business or tropical environment. Moving from
            all things bright for attraction or all things dark for drama,
            spaces need to be adorned with the play of light and shadow, enough
            to support function yet dramatic to attract. The first layer of
            light begins with space planning in conjunction with interior
            design, adding on more layers as the function evolves.
            <br />
            Controlled light can create an intimate space in a public
            environment or raise the pulse with color and speed. This power of
            light, when used thoughtfully, adds a layer of luxury. Well-crafted
            light scenes set a benchmark of luxury and opulence.
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>
  );
};
export default Lighting;
