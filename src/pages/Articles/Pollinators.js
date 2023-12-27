import React from 'react';
import './Pollinators.css';
import Footer from '../../Components/Footergrey';
import Navbar from '../../Components/Navbar';
import image100 from '../../images/Blogpollination1.png';
import image98 from '../../images/Blogpollination2.png';
import image99 from '../../images/Blogpollination3.png';
import image104 from '../../images/Blogpollination4.png';
import image105 from '../../images/Blogpollination5.png';
import image103 from '../../images/Blogpollination6.png';

export const Pollinators = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="bg-zinc-200">

          {/* main heading and date */}
          <p className="bg-zinc-200 text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px md:top-233px left-4 md:left-32 w-full md:w-full p-16 md:p-20 lg:p-24">
            <span className="text-zinc-900 font-extralight text-6xl md:text-7xl lg:text-8xl leading-115.2px">
            Poor agriculture and dying pollinators can Urban lighting be
              blamed ? <br />
            </span>
            <span className="text-zinc-900 text-base md:text-lg lg:text-xl leading-43.2px">updated jan 2023</span>
          </p>

          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={image98}
          />


          {/* first grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div className="text-zinc-900 text-justify italic text-xl md:text-2xl lg:text-3xl leading-10 md:leading-30px pt-2 md:pt-20 lg:pt-30 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40 w-30">
            In Europe, pollinators support €14.2 billion worth of crops each
            year.
            </div>
            <div className="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl leading-36px pt-10">
            Pollinators such as bees, butterflies, and moths play a critical
            role in maintaining the bio-diversity of flora and fauna. In Europe,
            pollinators are responsible for pollinating around 84% of the crops,
            worth €14.2 billion each year.
            <br />
            <br />
            With the increasing use of light to make our cities&nbsp;&nbsp;safer
            and healthier, there is an increase in light pollution all around
            us. As the sun set, cities start shimmering in artificial light,
            most of which is uncontrolled, unregulated and unused. <br />
            </div>
          </div>



          {/* second grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img alt="Image" src={image100} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            To prevent excessive water, several plants bloom at night and
            nocturnal pollinators collaborate. It is shown that artificial light
            at night can modify diurnal plant-pollinator
            interactions.&nbsp;&nbsp;To find out the source of the problem, a
            European team of researchers conducted a study by illuminating
            natural plant-pollinator insects during the night with street-lamps
            and found out a change on interactions. They have observed a 62%
            decrease in visits by nocturnal pollinators (such as moths and
            certain Coleoptera). In addition, this has led to a 13% decrease in
            production of fruits for local plants.
            </div>
          </div>

           {/* third grid */}
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img alt="Image" src={image99} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            The impact of artificial lighting on nocturnal pollinators spread to
            diurnal pollinators, having a increased negative impact on the
            overall pollination. Another study conducted in the Netherlands
            about street light affecting the behaviour of bees, revealed that
            bees were attracted to street lighting and spent less time foraging
            for food, directly leading to a reduction in pollination activities
            and affecting crop yields.
            <br />
            <br />
            Existing assessments of the ecosystem service of pollination have
            been largely restricted to diurnal insects, with a particular focus
            on generalist foragers such as wild and honey bees. As knowledge of
            how these plant-pollinator systems function, their relevance to food
            security and biodiversity, and the fragility of these mutually
            beneficial interactions increases, attention is diverting to other,
            less well-studied pollinator groups. One such group are those that
            forage at night.
            </div>
          </div>


          {/* image */}
          <img
            className="left-0 w-full h-730"
            alt="Rectangle"
            src={image104}
          />

          {/* fourth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img alt="Image" src={image103} />
            </div>
            <div>
            The impact of street lighting on agriculture is not limited to
            pollination. A study by University of Haifa found that ALAN
            (Artificial light at night) can disrupt the circadian rhythms of
            plants, affecting their growth and development, through the means of
            early flowering, altered hormone levels, and reduced biomass
            production.
            <br />
            <br />
            Street lighting can also affect the timing of pollination.
            Pollinators are often attracted to flowers by their scent, which is
            released at specific times of the day. However, artificial lighting
            can interfere with the natural timing of flowers, which can lead to
            a mismatch between the flowering period and the activity of
            pollinators, thus reducing the amount of pollination that occurs and
            affect crop yields.
            <br />
            <br />
            The implications of the impact of street lighting on pollination and
            agriculture are significant. Europe is home to many important
            agricultural regions, and the reduction in crop yields due to light
            pollution can have serious economic and food security consequences.
            Furthermore, the loss of pollinators could have cascading effects on
            the broader ecosystem, leading to declines in plant diversity and
            ecosystem stability.
            </div>
          </div>

          {/* fifth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20">
            <div class="pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <img alt="Image" src={image105} />
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl">
            Fortunately, there are steps that can be taken to mitigate the
            impact of street lighting on pollination and agriculture. One
            approach is to use lighting technologies that are less disruptive to
            nocturnal pollinators, using the right wavelength of light in LEDs
            which are less attractive to insects.
            <br />
            <br />
            Another approach is to use lighting that is directional and
            shielded, reducing the amount of light that is emitted into the
            environment. Minimising light pollution and reducing the impact of
            street lighting on nearby agricultural landscapes.
            <br />
            <br />
            In addition, cities and municipalities can adopt policies and
            regulations to limit the amount of light emitted by streetlights and
            promote the use of energy-efficient and pollinator-friendly adaptive
            lighting technologies.
            </div>
          </div>

          {/* sixth grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-15 lg:p-20 mb-40">
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50 pl-2 md:pl-5 lg:pl-10 pr-10 md:pr-30 lg:pr-40">
              <br />
              If you would like to discuss further or find the ideal solution for
              your need, talk to our light experts at moien@kaash.eu.
            </div>
            <div class="text-zinc-900 text-justify font-regular text-base md:text-lg lg:text-xl pt-2 md:pt-10 lg:pt-50">
            In conclusion, the impact of street lighting on pollination and
            agriculture in Europe is a complex and multifaceted issue that
            requires attention and action. While street lighting is essential
            for modern urban environments, it is clear that its impact on
            nocturnal and diurnal pollinators and plants is significant. By
            taking a holistic approach to street lighting design and management,
            cities and municipalities can balance the need for visibility and
            security with the need to protect pollinators and support
            sustainable agriculture.
            </div>
          </div>


         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pollinators;
