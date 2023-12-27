import React from 'react';
import { useState } from 'react';
import ProjectartKNMA from '../images/ProjectartKNMA.png';
import ProjectGalerie1 from '../images/ProjectGalerie1.png';
import ProjectcoworkingFlyingSaucer from '../images/ProjectcoworkingFlyingSaucer.png';
import Projectchambre from '../images/Projectchambre.png';
// import Projectmosque1a from "../images/Projectmosque1a.png";
import Projecttriennial1a from '../images/Projecttriennial1a.png';
// import Projectoffice1 from "../images/Projectoffice1.png";
// import InspiringstoriesPark from "../images/InspiringstoriesPark.png";
import Projectchurch6 from '../images/Projectchurch6.png';
import ProjectKolla from '../images/ProjectKolla.png';
import Projecthalldelocomotives from '../images/Projecthalldelocomotives.png';
import ProjectSkatepark from '../images/ProjectSkatepark.png';
import popuptriennial1 from '../images/popup-triennial1.png';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Ourprojectmodal from '../Components/Ourprojectmodal';
import imageThumbnails from '../Components/projectmodalInfo';

import Greenwall_img from '../images/Greenwall_img.png';
import ParcdeMerl_img from '../images/ParcdeMerl_img.png';
import Architectural_img from '../images/Architectural_img.png';
import Galerie_img from '../images/Galerie_img.png';
import Mosque_img from '../images/Mosque_img.png';

// ourproject home page images
import hallthelocomotived_homepage_img from '../images/project_hallthelocomotives_homepage_img.png';
import project_greenwall_homepage_img from '../images/project_greenwall_homepage_img.png';
import project_trennial_homepage_img from '../images/project_trennial_homepage_img.png';
import project_parcdemerl_homepage_img from '../images/project_parcdemerl_homepage_img.png';
import project_arc_studio_homepage_img from '../images/project_arc_studio_homepage_img.png';
import project_chruch_homepage_img from '../images/project_chruch_homepage_img.png';
import project_galerei_homepage_img from '../images/project_galerei_homepage_img.png';
import project_KNMA_homepage_img from '../images/project_KNMA_homepage_img.png';
import project_mosque_homepage_img from '../images/project_mosque_homepage_img.png';
import project_flyingsaucer_homepage_img from '../images/project_flyingsaucer_homepage_img.png';
import project_lachambre_homepage_img from '../images/project_lachambre_homepage_img.png';
import project_skatepark_homepage_img from '../images/project_skatepark_homepage_img.png';
import project_kolla_homepage_img from '../images/project_kolla_homepage_img.png';

// contact popup.................................
import Contactpop from '../Components/Contactpop.js';

// Big images imported here..........................................
import Projecthalldelocomotives_bigimg from '../images/Projecthalldelocomotives_bigimg.png';
import Greenwall_bigimg from '../images/Greenwall_bigimg.png';
import parcedemarl_bigimg from '../images/Parcdemerl_bigimg.png';
import Architectural_bigimg from '../images/Architectural_bigimg.png';
import Cathedral_bigimg from '../images/Cathedral_bigimg.png';
import Galerie_bigimg from '../images/Galerie_bigimg.png';
import KNMA_bigimg from '../images/KNMA_bigimg.png';
import Mosque_bigimg from '../images/Mosque_bigimg.png';
import Flyingsaucer_bigimg from '../images/Flyingsaucer_bigimg.png';
import Lachambre_bigimg from '../images/Lachambre_bigimg.png';
import Skatepark_bigimg from '../images/Skatepark_bigimg.png';
import LightatKolla_bigimg from '../images/LightatKolla_bigimg.png';

// our project modal section here ..........................................
const Ourprojects = () => {
  const defaultBigImages = {
    Projecthalldelocomotives: Projecthalldelocomotives_bigimg,
    ProjectGreenwall4: Greenwall_bigimg,
    Projecttriennial1a: popuptriennial1,
    ParcdeMerl: parcedemarl_bigimg,
    Architectural: Architectural_bigimg,
    Cathedral: Cathedral_bigimg,
    Galerie: Galerie_bigimg,
    KNMA: KNMA_bigimg,
    Mosque: Mosque_bigimg,
    Flyingsaucer: Flyingsaucer_bigimg,
    Lachambre: Lachambre_bigimg,
    Skatepark: Skatepark_bigimg,
    LightatKolla: LightatKolla_bigimg,
  };
  const [currentImageKey, setCurrentImageKey] = useState(
    'Projecthalldelocomotives'
  );
  const [bigImageSrc, setBigImageSrc] = useState(
    defaultBigImages[currentImageKey]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentThumbnails, setCurrentThumbnails] = useState(
    imageThumbnails[currentImageKey].images
  );
  const [modalHeading, setModalHeading] = useState('');
  const [modalDescription1, setModalDescription1] = useState('');
  const [modalDescription2, setModalDescription2] = useState('');
  const [modalDescription3, setModalDescription3] = useState('');
  const [modalDescription4, setModalDescription4] = useState('');
  const [modalDescription5, setModalDescription5] = useState('');
  const [modalCollab, setModalCollab] = useState('');
  const [modalCollabInfo1, setModalCollabInfo1] = useState('');
  const [modalCollabInfo2, setModalCollabInfo2] = useState('');
  const [modalCollabInfo3, setModalCollabInfo3] = useState('');
  const [modalDate, setModalDate] = useState('');

  const openModal = (imageKey) => {
    setCurrentImageKey(imageKey);
    setBigImageSrc(defaultBigImages[imageKey]);
    setCurrentThumbnails(imageThumbnails[imageKey].images);
    setModalHeading(imageThumbnails[imageKey].heading);
    setModalDescription1(imageThumbnails[imageKey].Description1);
    setModalDescription2(imageThumbnails[imageKey].Description2);
    setModalDescription3(imageThumbnails[imageKey].Description3);
    setModalDescription4(imageThumbnails[imageKey].Description4);
    setModalDescription5(imageThumbnails[imageKey].Description5);
    setModalCollab(imageThumbnails[imageKey].Collab);
    setModalCollabInfo1(imageThumbnails[imageKey].Collabinfo1);
    setModalCollabInfo2(imageThumbnails[imageKey].Collabinfo2);
    setModalCollabInfo3(imageThumbnails[imageKey].Collabinfo3);
    setModalDate(imageThumbnails[imageKey].Date);
    setIsModalOpen(true);
    setBlurBackground(!blurBackground);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBlurBackground(!blurBackground);
  };

  const handleThumbnailClick = (selectedImage) => {
    setBigImageSrc(selectedImage);
  };

  // blur background................................
  const [blurBackground, setBlurBackground] = useState(false);

  // contact popup...................................
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setBlurBackground(!blurBackground);
  };

  return (
    <>
      <div className={blurBackground ? 'blur-background' : ''}>
        <header className="bg-black">
          <Navbar />
        </header>
        <main className="px-6 md:px-16 py-16 lg:px-32 bg-black">
          <h1 className="text-white pt-4 pb-12 text-9xl font-extralight">
            Our Projects
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="overflow-hidden"
              onClick={() => openModal('Projecthalldelocomotives')}
            >
              <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                <p>Hall de locomotives</p>
                <FaArrowRight />
              </div>
              <div>
                <img
                  className="cursor-pointer object-center object-cover h-fit w-fit"
                  src={hallthelocomotived_homepage_img}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div></div>
              <div
                className="overflow-hidden "
                onClick={() => openModal('ProjectGreenwall4')}
              >
                <div className=" cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Greenwall</p>
                  <FaArrowRight />
                </div>
                <div className="">
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_greenwall_homepage_img}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 pt-3">
            <div className="grid grid-cols-2 gap-5">
              <div
                className="overflow-hidden "
                onClick={() => openModal('Projecttriennial1a')}
              >
                <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Architecture Triennial</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_trennial_homepage_img}
                  />
                </div>
              </div>
              <div className="grid grid-rows-2 col-3">
                <div></div>
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    openModal('Architectural');
                  }}
                >
                  <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                    <p>Architectural studio</p>
                    <FaArrowRight />
                  </div>
                  <div className="">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={project_arc_studio_homepage_img}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div
                className="overflow-hidden"
                onClick={() => openModal('ParcdeMerl')}
              >
                <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Parc de Merl</p>
                  <FaArrowRight />
                </div>
                <div className="">
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_parcdemerl_homepage_img}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div></div>
                <div
                  className="overflow-hidden"
                  onClick={() => openModal('Cathedral')}
                >
                  <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                    <p>Cathedral an der stad</p>
                    <FaArrowRight />
                  </div>
                  <div className="">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={project_chruch_homepage_img}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 pt-3">
            <div className="grid grid-rows-2 gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    openModal('Galerie');
                  }}
                >
                  <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                    <p>Galerie</p>
                    <FaArrowRight />
                  </div>
                  <div className="">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={project_galerei_homepage_img}
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div
                className="overflow-hidden "
                onClick={() => {
                  openModal('Flyingsaucer');
                }}
              >
                <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Flying saucer</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_flyingsaucer_homepage_img}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-rows-2 gap-3">
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    openModal('KNMA');
                  }}
                >
                  <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                    <p>KNMA</p>
                    <FaArrowRight />
                  </div>
                  <div className="">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={project_KNMA_homepage_img}
                    />
                  </div>
                </div>
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    openModal('Lachambre');
                  }}
                >
                  <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                    <p>La chambre</p>
                    <FaArrowRight />
                  </div>
                  <div className="">
                    <img
                      className="cursor-pointer object-center object-cover h-full w-full"
                      src={project_lachambre_homepage_img}
                    />
                  </div>
                </div>
              </div>
              <div
                className="overflow-hidden"
                onClick={() => {
                  openModal('Mosque');
                }}
              >
                <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Mosque in KSA</p>
                  <FaArrowRight />
                </div>
                <div className="">
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_mosque_homepage_img}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div className="grid grid-cols-2 gap-3">
              <div></div>
              <div
                className="overflow-hidden"
                onClick={() => {
                  openModal('Skatepark');
                }}
              >
                <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                  <p>Skatepark</p>
                  <FaArrowRight />
                </div>
                <div>
                  <img
                    className="cursor-pointer object-center object-cover h-full w-full"
                    src={project_skatepark_homepage_img}
                  />
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden"
              onClick={() => {
                openModal('LightatKolla');
              }}
            >
              <div className="cursor-pointer flex justify-between items-center border border-white mb-3 px-2 text-white font-light text-base lg:text-lg">
                <p>Light at Kolla</p>
                <FaArrowRight />
              </div>
              <div>
                <img
                  className="cursor-pointer object-center object-cover h-full w-full"
                  src={project_kolla_homepage_img}
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center items-center">
            <h2 className="text-white text-base sm:text-xl">
              Would you like to discuss a project ?
            </h2>
            <button
              onClick={togglePopup}
              className="bg-white ml-6 sm:py-1 px-5 sm:px-3"
            >
              Contact us
            </button>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Ourprojectmodal
        isOpen={isModalOpen}
        closeModal={closeModal}
        bigImageSrc={bigImageSrc}
        thumbnails={currentThumbnails}
        handleThumbnailClick={handleThumbnailClick}
        heading={modalHeading}
        Description1={modalDescription1}
        Description2={modalDescription2}
        Description3={modalDescription3}
        Description4={modalDescription4}
        Description5={modalDescription5}
        Collab={modalCollab}
        Collabinfo1={modalCollabInfo1}
        Collabinfo2={modalCollabInfo2}
        Collabinfo3={modalCollabInfo3}
        Date={modalDate}
      />
      <div className="xl:px-96 px-10 w-screen contactpop-section">
        {showPopup && <Contactpop onClose={togglePopup} />}
      </div>
    </>
  );
};

export default Ourprojects;
