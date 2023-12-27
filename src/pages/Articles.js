import React from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footergrey";
import "./Articles.css";
import Blogpollination from "../images/Blogpollination.png";
import Bloghotellight1b from "../images/Bloghotellight1b.png";
import Bloglightfestival1a from "../images/Bloglightfestival1a.png";
import Blogaifacade2 from "../images/Blogaifacade2.png";
import Bloglighttourism1 from "../images/Bloglighttourism1.png";
import Blogsustainability01 from "../images/Blogsustainabilitychart3.png";
import Blogvictoriapalace1a from "../images/Blogvictoriapalace1a.png";
import Bloghumancentriclight1 from "../images/Bloghumancentriclight1.png";
import Bloglightluxurybar from "../images/Bloglightluxurybar.png";
import Bloglightconcert1 from "../images/Bloglightconcert1.png";
import blog1 from "../images/blog-1.png";
import blog2 from "../images/blog-2.png";
import blog3 from "../images/blog-3.png";
import blog4 from "../images/blog-4.png";
import blog5 from "../images/blog-5.png";
import blog6 from "../images/blog-6.png";
import blog7 from "../images/blog-7.png";
import blog8 from "../images/blog-8.png";
import blog9 from "../images/blog-9.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const Articles = () => {
  useEffect(() => {
    AOS.init({ once: "true" });
  }, []);

  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main>
        <section className="hero px-28 relative py-10">
          <h1 className="pt-28 text-9xl text-white">Blog</h1>
          <h2 className="pt-44 text-5xl text-white">
            Poor agriculture and dying pollinators can Urban lighting be blamed
            ?
          </h2>
        </section>
        <section className="img-gallery">
          <div className="grid md:grid-cols-2 gap-3 p-24 pb-4">
            <a href="/immersive">
              <div className="border-2 border-red-500 overflow-hidden">
                <figure>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={blog1}
                  />
                </figure>
                <div className="px-3 py-8">
                  <p className="font-semibold">Immersive hotels with Light</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="/festivals">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog2}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">
                      Lights in Bergamo and Brescia
                    </p>
                  </div>
                </div>
              </a>

              <a href="/lightai">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog3}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">Intelligence of Light</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 px-24 ">
            <div className="grid grid-cols-2 gap-3">
              <a href="/victorian">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog4}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">
                      Sustainable lighting from victorian era.
                    </p>
                  </div>
                </div>
              </a>

              <a href="/ecosystem">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog5}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">
                      Light carbon in sustainable ecosystem.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <a href="/tourism">
              <div className="border-2 border-red-500 overflow-hidden h-full">
                <figure>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={blog6}
                  />
                </figure>
                <div className="px-3 py-8">
                  <p className="font-semibold">
                    Re-inventing tourism with Light
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-3 px-24 pt-4 pb-24">
            <a href="/human">
              <div className="border-2 border-red-500 overflow-hidden">
                <figure>
                  <img
                    className="object-center object-cover h-full w-full"
                    src={blog9}
                  />
                </figure>
                <div className="px-3 py-8">
                  <p className="font-semibold">Human centric lighting design</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="/lighting">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog8}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">Luxury of lighting design</p>
                  </div>
                </div>
              </a>

              <a href="/dancing">
                <div className="border-2 border-red-500 overflow-hidden">
                  <figure>
                    <img
                      className="object-center object-cover h-full w-full"
                      src={blog7}
                    />
                  </figure>
                  <div className="px-3 py-8">
                    <p className="font-semibold">Dancing to light tunes</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Articles;