import React from "react";
import hero_group from "../assets/img/webp/hero_group.webp";
import hero_wood from "../assets/img/png/heroPanda.png";
import Navbar from "../components/NavBar";
import heroGreen from "../assets/img/webp/hero_green_img.png";
import left_tree from "../assets/img/webp/hero_left_tree.png";
import right_tree from "../assets/img/webp/hero_right_tree.png";
import hero_badel from "../assets/img/webp/hero_badel.png";
import hero_rainbo from "../assets/img/webp/hero_rainbo.png";
export const Hero = () => {
  return (
    <>
      <div className="hero_bg d-flex flex-column vh_xl_100 position-relative z-3">
        <Navbar />
        <section className="hero_bg flex-grow-1 d-flex flex-column justify-content-center position-relative pt-sm-5 mt-5 pt-xxl-0 mt-xxl-0 z-1">
          <img
            className="position-absolute  heroRainbow"
            src={hero_rainbo}
            alt="rainbo"
          />
          <div className="position-absolute end-0 top-0 z-0">
            <img src={hero_badel} alt="badel" />
          </div>
          <img
            className="position-absolute heroWood pe-none"
            src={hero_wood}
            alt="wood_img"
          />
          <img
            className="position-absolute heroGreen"
            src={heroGreen}
            alt="green_img"
          />
          <div>
            <img
              className="position-absolute heroLeftTree w-100"
              src={left_tree}
              alt="tree"
            />
          </div>
          <div>
            <img
              className="position-absolute d-sm-block d-none heroRightTree w-100"
              src={right_tree}
              alt="tree"
            />
          </div>
          <div className="container position-relative z-3">
            <div className=" d-flex flex-column align-items-center">
              <p className="text-center fs_8xl fw-normal heroTextShadow mb-0 heroHeading headingSame">
                <span className="ff_bomb_one clr_orange300">Cozy</span>
                <span className="ff_cream clr_green2B ml-10">Capys</span>
                <span className="ff_bomb_one text-white d-sm-inline d-block lh-1 ml-10">
                  NFT
                </span>
              </p>
              <p className="text-white mx_758 text-center ff_sans fw-bold mb-0 mt-md-3 mt-2 fs_md">
                Cozy Capys is an impactful NFT project featuring 10,000 adorable
                capybara characters! 10% of all proceeds will go to wildlife
                conservation organizations!
              </p>
            </div>
            <div className="text-center pt-md-4 pt-2 mt-1 mb-sm-5 mb-md-0">
              <button className="joinBtn rounded-5 bg_blue4C border-0 ff_sans fw-bold text-center fs_xl position-relative">
                Join Us
              </button>
            </div>
            <div className="heroPandaGroup text-center pt-5 pt-sm-0 opacity-0">
              <img className="w-75" src={hero_group} alt="hero_group" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
