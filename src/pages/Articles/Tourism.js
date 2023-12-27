import React from 'react';

import timage8 from '../../images/Bloglighttourism.png';
import timage9 from '../../images/Bloglighttourism1.png';
import timage35 from '../../images/Bloglighttourism2.png';
import timage14 from '../../images/Bloglighttourism3.png';
import timage11 from '../../images/Bloglighttourism4.png';
import './Tourism.css';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';

export const Tourism = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
            Re-inventing tourism with Light
              <br />
              <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>


          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={timage9}
          />

          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">

            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-10 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
            “Paris and Dubai witnessed an increase of 20-30% in night tourism
            footfalls since up-gradation of monument lighting”
            </div>
            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
            People are striving for entertainment, exploring new territories,
            visiting cities, basking in culture through food, people and
            monuments. For several centuries, the ancient castles, forts,
            administrative buildings, as well as contemporary architecture have
            lived as noble embodiments of a society&#39;s ever-evolving ideals,
            beliefs, cultures, and values. These structures serve as living
            relics of the past and also provide a glimpse into the future of
            today&#39;s civilisation. <br />
            <br />
            </div>
          </div>

          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={timage14} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Often visited by tourists and these structures contribute
            significantly to the economy of the nation, it is of foremost
            relevance to provide them with a distinct persona when it is night
            time. Over the years, the discovery and improvement of lighting has
            opened a range of opportunities, including night tourism. With
            cities spending a good fortune to attract tourism, urban lighting
            and light-scapes showcase the vibrant cityscape.
            </div>
          </div>

          {/* third grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={timage35} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Even before modern illumination was invented, light has always been
            a significant element of many festivals. Lights, lamps, lanterns and
            fireworks hold deep meaning in various cultures. While Chinese Lunar
            Year, Diwali in India, Fête des Lumières in France, Christmas in
            Brazil, etc, are very popular festivals, many countries have
            spectacular not so popular ones, Bala Chaturdashi in Kathmandu,
            Nepal; Hogmanay in Scotland; Winter Illuminations Festival in Japan;
            Bonfire Night in Lewes, England; are few to name. During a festival,
            a light&#39;s accentuation of a location serves as more than just
            illumination; it also serves as a symbol of the culture and a deep
            seated faith.
            </div>
          </div>

          {/* fourth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img class="h-100" alt="Image" src={timage8} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Light brings an interesting dimension to the intersection of tourism
            and night. As the fourth dimension of architecture, it offers
            enormous value to these structures. Using light to enhance the
            architectural subtleties, the grandiosity of the structure, the
            depth and the textures of the materials creates an immersive
            experience. Moving on from well illuminated museums and galleries,
            lighting now plays a bigger role in influencing the city scape by
            creating a unique ambience and experiential aspects of the night
            that relies on darkness itself to function. #eiffeltower,
            #burjkhalifa, #empirestatebuilding and others, stand tall as city
            icons are well celebrated with light. As the sun sets in Paris, the
            sparkle of dazzling Eiffel awakens the city scape beyond daylight.
            Shimmering into the darkness of night, it attracts people from all
            over the world. While the Eiffel Tower shines, Burj Khalifa turns
            into a billboard, connecting brands with audiences. Often questioned
            investment of more than a million dollars now generates multi-folds
            of revenue for property owners. An interesting blend of light and
            sound show running every hours brings people together and light in
            its true sense connect communities.
            </div>
          </div>

          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={timage11}
          />

          {/* fifth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
            <br />
            If you would like to discuss further or you have an interesting
            light story to share, write to us at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            There&#39;s an ever increasing demand on 24 hours illuminated cities
            but light pollution and dark sky compliance cannot be neglected.
            Smart sensory lighting, presents a good tool to celebrate cities but
            preserve ecology. The dark will be the new light. The cities will be
            accentuated into newly discovered light colors. Lighting will be
            crucially planned for every little thing. As it is said, ‘Light is
            Future'. <br />
            (Images - internet)
            </div>
          </div>

          
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Tourism;
