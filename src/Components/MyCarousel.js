import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Inspiringstoriesoffice from '../images/Inspiringstoriesoffice.png';
import Inspiringstorieschurch from '../images/Inspiringstorieschurch.png';
import Inspiringstorieshalldelocomotives from '../images/Inspiringstorieshalldelocomotives.png';
import InspiringstoresGreenwall from '../images/InspiringstoresGreenwall.png';
import InspiringstoriesPark from '../images/InspiringstoriesPark.png';
import Inspiringstoriestriennial from '../images/Inspiringstoriestriennial.png';
import InspiringstoriesLightAI from '../images/InspiringstoriesLightAI.png';
import Inspiringstoriesvictorian from '../images/Inspiringstoriesvictorian.png';
import Inspiringstoriesflyingsaucer from '../images/Inspiringstoriesflyingsaucer.png';
import InspiringstoriesMuseum from '../images/InspiringstoriesMuseum.png';
import Inspiringstoriestourism from '../images/Inspiringstoriestourism.png';
import Inspiringstoriesmosque from '../images/Inspiringstoriesmosque.png';
import Inspiringstoriespollination from '../images/Inspiringstoriespollination.png';
import { FaArrowRight } from 'react-icons/fa';

const MyCarousel = () => {
  const handleSwipe = (isNext) => {
    if (isNext) {
      carouselRef.current.next();
    } else {
      carouselRef.current.previous();
    }
  };

  // const arrowStyles = {
  //   fontSize: '24px',
  // };

  // const indicatorStyles = {
  //   width: '10px',
  //   height: '10px',
  // };

  const carouselRef = React.useRef(null);

  return (
    <div className="carding">
      <Carousel
        ref={carouselRef}
        emulateTouch
        swipeable
        swipeScrollTolerance={5}
        showStatus={false}
        showThumbs={false}
        swipeableProps={{
          onSwipedDown: () => handleSwipe(false),
          onSwipedUp: () => handleSwipe(true),
        }}
        id="car"
      >
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden ">
                <div className=" cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>01 - Studio</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer  border border-black">
                    {' '}
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Inspiringstoriesoffice}
                    />
                  </div>
                </figure>
              </div>
              <div></div>
            </div>
            <div className="overflow-hidden ">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>04 - Parc de Merl</p>
                <FaArrowRight />
              </div>
              <figure>
                <div className="cursor-pointer  border border-black">
                  <img
                    className=" object-center object-cover h-full w-full"
                    src={InspiringstoriesPark}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-rows-2 gap-3">
              <div className="overflow-hidden ">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>02 - Cathedral</p>
                  <FaArrowRight />
                </div>
                <figure className="cursor-pointer">
                  <img
                    className=" object-center object-cover h-full w-full"
                    src={Inspiringstorieschurch}
                  />
                </figure>
              </div>
              <div className="overflow-hidden">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>05 - Green</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer border border-black">
                    <img
                      className="object-center object-cover h-full w-full"
                      src={InspiringstoresGreenwall}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="overflow-hidden ">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>03 - Hall de loc</p>
                <FaArrowRight />
              </div>
              <figure className="cursor-pointer">
                <img
                  className="object-center object-cover h-full w-full"
                  src={Inspiringstorieshalldelocomotives}
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>06 - Triennial</p>
                <FaArrowRight />
              </div>
              <div className="cursor-pointer border border-black">
                <img
                  className="object-center object-cover h-full w-full"
                  src={Inspiringstoriestriennial}
                />
              </div>
            </div>
            <div className="grid grid-rows-2 col-3">
              <div className="overflow-hidden">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>07 - Light AI</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer border border-black">
                    <img
                      className=" object-center object-cover h-full w-full"
                      src={InspiringstoriesLightAI}
                    />
                  </div>
                </figure>
              </div>
              <div></div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div></div>
              <div className="overflow-hidden ">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>08 - Victorian</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer border border-black">
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Inspiringstoriesvictorian}
                    />
                  </div>
                </figure>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>09 - Flying saucer</p>
                <FaArrowRight />
              </div>
              <figure className="cursor-pointer">
                <img
                  className="cursor-pointer object-center object-cover h-full w-full"
                  src={Inspiringstoriesflyingsaucer}
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div></div>
              <div className="overflow-hidden">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>10 - Pollination</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer border border-black">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={Inspiringstoriespollination}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>13 - Galerie</p>
                <FaArrowRight />
              </div>
              <figure>
                <div className="cursor-pointer border border-black">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={InspiringstoriesMuseum}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden">
              <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                <p>11 - Mosque</p>
                <FaArrowRight />
              </div>
              <div className="cursor-pointer  border border-black">
                <img
                  className=" object-center object-cover h-full w-full"
                  src={Inspiringstoriesmosque}
                />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="overflow-hidden ">
                <div className="cursor-pointer flex justify-between items-center border border-black mb-3 px-2 text-neutral-950 font-light text-base lg:text-lg">
                  <p>12 - Tourism</p>
                  <FaArrowRight />
                </div>
                <figure>
                  <div className="cursor-pointer border border-black">
                    <img
                      className=" object-center object-cover h-full w-full"
                      src={Inspiringstoriestourism}
                    />
                  </div>
                </figure>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
