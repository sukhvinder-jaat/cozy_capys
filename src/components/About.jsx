import React from "react";
import { Container } from "react-bootstrap";
import shadow from "../assets/img/png/aboutShadow.png";
import aboutCut from "../assets/img/png/aboutBottomCut.png";
import aboutTree from "../assets/img/png/aboutTree.png";
export const About = () => {
  return (
    <div className="bg_pinkDC aboutPadding position-relative z-1" id="About">
      <img
        src={aboutCut}
        alt="aboutCut"
        className="w-100 position-absolute aboutCut pe-none"
      />
      <img
        src={aboutTree}
        alt="aboutTree"
        className="aboutTree position-absolute d-sm-block d-none w-100 pe-none"
        data-aos="zoom-out"
      />
      <img
        src={shadow}
        alt="shadow"
        className="w-100 h-75 position-absolute pe-none"
      />
      <Container className="position-relative sleppingPanda">
        <div className="cloudBg py-lg-5 py-3 px-lg-0 px-3 d-flex flex-column align-items-center position-relative z-2">
          <p
            className=" clr_pinkDC text-center ff_bomb_one fs_6xl fw-normal pinkShadow mb-0 pt-lg-5"
            data-aos="zoom-in-right"
          >
            About Us
          </p>
          <p
            className="opacity07 clr_black0D text-center ff_sans fs_md fw-normal mx707 mb-lg-5 pt-lg-4 pt-md-3 pb-lg-5"
            data-aos="zoom-in-left"
          >
            <span className="d-sm-block">
              Cozy Capys is an impactful NFT project featuring 10,000
            </span>
            adorable capybara characters! Capybaras are sweet, caring, and
            gentle creatures that can form strong bonds with anyone around them.
            By donating 10% of all proceeds to organizations that support
            wildlife conservation
            <span className="d-sm-inline d-none">
              , hosting inclusive community events, and offering real-life
              animal experiences, Cozy Capys aims to incorporate all the amazing
              qualities that these animals portray each and every day! Adopt
              your Cozy Capy today and join our wonderful community in giving
              back to the beautiful world around us
            </span>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};
