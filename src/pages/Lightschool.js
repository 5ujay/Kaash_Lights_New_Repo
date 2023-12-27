import { React, useState } from 'react';
import LightschoolLED from '../images/LightschoolLEDs.png';
import Lightschoolsports from '../images/Lightschoolsports.png';
import Lightschooltransport from '../images/Lightschooltransport.png';
import Lightschoolhome from '../images/Lightschoolhome.png';
import Lightschoolshop from '../images/Lightschoolshop.png';
import Lightschoolhotel from '../images/Projectchambre2.png';
import Lightschoolurbanpark from '../images/Lightschoolurbanpark.png';
import LightschoolMuseum from '../images/Projectgalerie1a.png';
import Lightschooloffice from '../images/Lightschooloffice.png';
import LightschoolIndustries from '../images/LightschoolIndustries.png';
import Lightschoolheritage from '../images/Lightschoolheritage.png';
import Lightschoolentertainment from '../images/Lightschoolentertainment.png';
import Ledpopup from '../images/Ledpopup.png';
import Heritagepopup from '../images/Heritagepopup.png';
import Sportspopup from '../images/Sportspopup.png';
import Mesuempopup from '../images/Mesuempopup.png';
import Transportpopup from '../images/Transportpopup.png';
import Hotelpopup from '../images/Hotelpopup.png';
import Shoppopup from '../images/Shoppopup.png';
import Entertainmentpopup from '../images/Entertainmentpopup.png';
import Parkpopup from '../images/Parkpopup.png';
import Homepopup from '../images/Homepopup.png';
import Officepopup from '../images/Officepopup.png';
import Industriespopup from '../images/Industriespopup.png';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './Lightschool.css';
import { FaArrowRight } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Lightschool = () => {
  const [modalContent, setModalContent] = useState({
    imageSrc: '',
    heading: '',
    Paraone: '',
    Paratwo: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blurBackground, setBlurBackground] = useState(false);

  const openModal = (imageSrc, heading, Paraone, Paratwo) => {
    setModalContent({ imageSrc, heading, Paraone, Paratwo });
    setIsModalOpen(true);
    setBlurBackground(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBlurBackground(false);
  };

  const popupDetails = {
    LEDpopup: {
      heading: 'LEDs',
      ParaOne:
        'Since their invention in 1942, LEDs have evolved to become powerful and versatile light source meeting the challenging needs of present world.  These semiconductors though simple to use, are technical instruments of modern engineering, driven by an array of technical factors to ensure durability in their use.',
      ParaTwo:
        "Lumen maintenance, colour rendition and damage factors are few nuances to consider while evaluation an optimal solution for your project. At Kaash, we follow a rigorous technical evaluation to ensure an ideal solution for your project. Let's build your project with light.",
    },
    Heritagepopup: {
      heading: 'Heritage',
      ParaOne:
        "Castles, forts, and other heritage architecture are noble embodiments of a society's evolving ideals, beliefs, cultures, and values. They serve as living relics of the past and also provide a glimpse into the future of today's civilisation. Often celebrated for tourism, this heritage is pivotal towards economic development along with culture conservation.",
      ParaTwo:
        'Light, as the fourth dimension of architecture, offers enormous value to these structures by illuminating them. Light enhance the architectural subtleties and the grandiosity of the structure. Light metric of colour, rendition, IP and IK are crucial parameters for monuments subjected to adverse weather conditions.',
    },
    Shoppopup: {
      heading: 'Shop',
      ParaOne:
        'Luxury retail and fast fashion are in a continuous endeavour to be unique and attractive. Good lighting create inviting environment and promote sales. Light is an immersive tool to create desired ambience to complement brand image, highlight product details - colour, texture, design and increase business prospects.',
      ParaTwo:
        'Dynamic displays in shop windows and adaptive lighting on the inside initiate positive engagement. Colour rendition, temperature and beam angle are crucial parameters for shop lighting, while ensuring minimal glare and maximum visual comfort for the shoppers.',
    },
    Museumpopup: {
      heading: 'Museum & Gallery',
      ParaOne:
        'Light is the absolute necessity to highlight the colours, contrast, and beauty of the artefacts. Light for art is about finding the perfect balance between light and darkness to create a specific mood and ambiance that complements the exhibits while enhancing every visitor’s experience.',
      ParaTwo:
        'As the most sensitive application, light quality is of utmost importance for the longitivtiy of art and successful turnaround for every gallery or a museum. Light damage factor, colour rendition, colour shift, harmonic distortions, and beam angles are few among many difficult answers to look for when you need light for art.',
    },
    Hotelpopup: {
      heading: 'Hotel',
      ParaOne:
        'Hotels are a great place to experience the design trends, technology and culture as business and leisure travellers fly around the world. A visitors impression builds from the facade to a gradual progression into the lobby, lounges and guest rooms. ',
      ParaTwo:
        'Light interaction with user and space function have unique influence on desired atmosphere and experience. Light accent highlight the details, create drama while ambient improves functional experience. Light colour, design, shape and size are significant along with LEDs quality to build a rich comforting environment. ',
    },
    Entertainmentpopup: {
      heading: 'Entertainment',
      ParaOne:
        'Light evokes emotions, with every colour triggering a different node. Using the sensorial power of light, immersive spaces are realised to support event theme and create desired ambience.',
      ParaTwo:
        'Control over DMX and mixing of RGBW LEDs synced with projection mapping can generate imaginative scenes in physical space, elevating the experience. Robust control gears with high switching cycles and flawless programming are must haves for a intuitive lighting experience.',
    },
    Parkpopup: {
      heading: 'Urban Spaces',
      ParaOne:
        'Urban landscape is presenting city planners with new challenges in creating a unified environment for public life which is safe, functional and yet sustainable. Lighting can help in many ways. Bringing communities together at night by providing a safe and comfortable environment for play and conversations and local businesses. ',
      ParaTwo:
        'Light pollution and low pollination is a rising issue in the urban environment, in the form of unwanted light. Light design with intelligent controls enable light to be reactive towards space use and build greener healthier communities while preserving the bio-diversity and reversing climate change.',
    },
    Homepopup: {
      heading: 'Home',
      ParaOne:
        'Our home is an impression of our life, persona and family. Living spaces are packed with collections and aspirations as art, photos, furniture and decor. Light design create a wonderful visual impression unique to our dream space by binding them together',
      ParaTwo:
        'Technology conceive flexible lighting to support different needs of the family throughout the day, from playful kids corner to dinner with friends or a quite reading corner. Home need a perfect balance of decorative light to complement decor and technical light to support space use with maximum flexibility.',
    },
    Transportpopup: {
      heading: 'Transport',
      ParaOne:
        'Connecting people beyond oceans, transport hubs have created a cohesive ecosystem. Operational 24x7, these spaces should be welcoming and sustainable while allowing travellers to rest, shop and eat.',
      ParaTwo:
        'Light for facade defines the architectural view at night and support different demands of travellers and businesses on the inside. Creating a brighter ambience to feel fresh from longer journeys is the prime function of light, while sustainable consumption and maintenance are the key challenges for operations. Connected lighting solutions helps easy maintenance of such heavy use facilities.',
    },
    Officepopup: {
      heading: 'Office',
      ParaOne:
        'Attractive, engaging, and dynamic work spaces helps create successful businesses. Flexible dynamic lighting allow offices to work better and smarter. With balance of natural and artificial light, we create human centric spaces to inspire and focus. ',
      ParaTwo:
        'Smart technologies of IOT, daylight harvesting and occupancy control can generate up to 80% energy savings. LEDs bio-safety and human circadian rhythm are important for healthy workspaces. While luminaire efficacy and sustainable light design allows to minimise carbon footprint.',
    },
    Sportspopup: {
      heading: 'Sports',
      ParaOne:
        "With it's ever growing popularity, stadiums, sports halls and parks demand advanced infrastructure. Built for multi-use, stadiums hosts concerts and sports hall ceremonies. In these multidimensional utility, flexible lighting becomes ultra important.",
      ParaTwo:
        'It will be a delight for urban skaters to see their park turning to party arena on weekend nights. Well designed lighting begins with minimal glare for players and maximum comfort for spectators. Connected lighting with different colours, beams along with high lumen maintenance for durable functional lighting solution',
    },
    Industriespopup: {
      heading: 'Industries',
      ParaOne:
        'A vibrant economy relies on manufacturing and logistical facilities as solid cornerstones. To be stronger, smarter, and faster productive workforce is a must. Light for factories and warehouses should support the safety and production with good quality illuminance but also enhance the well-being of workers by creating a vibrant work environment.',
      ParaTwo:
        'Daylight harvesting and volumetric brightness are key actors to do so. Integrated light solutions give real-time feedback about space use and light performance for cost-effective decisions. Good lighting creates productive and positive atmosphere to keep people focussed and aware.',
    },
  };
  return (
    <>
      <div className={blurBackground ? 'blur-background' : ''}>
        <header className="bg-[#101010]">
          <Navbar />
        </header>
        <main className="yellow-img py-20">
          <div className="px-6 md:px-16 py-16 lg:px-32">
            <h1 className="text-white pt-4 pb-12 text-7xl lg:text-9xl font-extralight">
              Light School
            </h1>
            <div className="grid md:grid-cols-2 gap-3">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Ledpopup,
                    popupDetails.LEDpopup.heading,
                    popupDetails.LEDpopup.ParaOne,
                    popupDetails.LEDpopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>01 - LEDs</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolLED}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div></div>
                <div
                  className="overflow-hidden cursor-pointer"
                  onClick={() =>
                    openModal(
                      Heritagepopup,
                      popupDetails.Heritagepopup.heading,
                      popupDetails.Heritagepopup.ParaOne,
                      popupDetails.Heritagepopup.ParaTwo
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>02 - Heritage</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschoolheritage}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 pt-3">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="overflow-hidden cursor-pointer"
                  onClick={() =>
                    openModal(
                      Shoppopup,
                      popupDetails.Shoppopup.heading,
                      popupDetails.Shoppopup.ParaOne,
                      popupDetails.Shoppopup.ParaTwo
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>03 - Shop</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschoolshop}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Mesuempopup,
                    popupDetails.Museumpopup.heading,
                    popupDetails.Museumpopup.ParaOne,
                    popupDetails.Museumpopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>04 - Museums & Galleries</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolMuseum}
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 pt-3">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Hotelpopup,
                    popupDetails.Hotelpopup.heading,
                    popupDetails.Hotelpopup.ParaOne,
                    popupDetails.Hotelpopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>05 - Hotel</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolhotel}
                  />
                </div>
              </div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Entertainmentpopup,
                    popupDetails.Entertainmentpopup.heading,
                    popupDetails.Entertainmentpopup.ParaOne,
                    popupDetails.Entertainmentpopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>06 - Entertainment</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolentertainment}
                  />
                </div>
              </div>
              <div></div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Parkpopup,
                    popupDetails.Parkpopup.heading,
                    popupDetails.Parkpopup.ParaOne,
                    popupDetails.Parkpopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>07 - Urban spaces</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolurbanpark}
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 pt-3">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Homepopup,
                    popupDetails.Homepopup.heading,
                    popupDetails.Homepopup.ParaOne,
                    popupDetails.Homepopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>08 - Home</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolhome}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="overflow-hidden cursor-pointer"
                  onClick={() =>
                    openModal(
                      Transportpopup,
                      popupDetails.Transportpopup.heading,
                      popupDetails.Transportpopup.ParaOne,
                      popupDetails.Transportpopup.ParaTwo
                    )
                  }
                >
                  <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                    <p>09 - Transport</p>
                    <FaArrowRight />
                  </div>
                  <div>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={Lightschooltransport}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 pt-3">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Officepopup,
                    popupDetails.Officepopup.heading,
                    popupDetails.Officepopup.ParaOne,
                    popupDetails.Officepopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center  clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>10 - Office</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschooloffice}
                  />
                </div>
              </div>
              <div></div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Sportspopup,
                    popupDetails.Sportspopup.heading,
                    popupDetails.Sportspopup.ParaOne,
                    popupDetails.Sportspopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>11 - Sports</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Lightschoolsports}
                  />
                </div>
              </div>

              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(
                    Industriespopup,
                    popupDetails.Industriespopup.heading,
                    popupDetails.Industriespopup.ParaOne,
                    popupDetails.Industriespopup.ParaTwo
                  )
                }
              >
                <div className="flex justify-between items-center clr-yellow mb-3 px-2 text-black font-light text-base lg:text-lg">
                  <p>12 - Industries</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={LightschoolIndustries}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      {isModalOpen && (
        <div className="popup bg-white p-3">
          <div className="grid grid-cols-1 sm:gap-4 px-1">
            <div className="flex justify-end items-center text-1xl">
              <button className="text-3xl" onClick={closeModal}>
                <RxCross1 />
              </button>
            </div>
            <div className="text-2xl md:text-4xl lg:text-6xl font-extralight pb-4">
              {modalContent.heading}
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <img
                  className="object-center object-cover h-full w-full"
                  src={modalContent.imageSrc}
                  alt="Modal Image"
                />
              </div>
              <div className="text-xs md:text-base 2xl:text-xl font-light">
                <p className="modal-detailsone">{modalContent.Paraone}</p>
                <p className="modal-detailstwo pt-2">{modalContent.Paratwo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightschool;
