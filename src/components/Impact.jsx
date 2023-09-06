import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gifImg from "../assets/img/gif/impactGif.gif";
import sideRanbow from "../assets/img/png/impactSide.png";
import sideCloud from "../assets/img/png/impactCloud.png";
import cut from "../assets/img/png/impactBottomCut.png";
import impactTree from "../assets/img/png/impactTree.png";
export const Impact = () => {
  return (
    <div className="py-5 bg_blue93 position-relative" id="Impact">
      <div className="position-absolute end-0 sideRanbow d-md-block d-none pe-none">
        <img
          src={sideRanbow}
          alt="sideRanbow"
          className="w-100 h-100 pe-none "
          data-aos="fade-left"
        />
      </div>
      <img
        src={sideCloud}
        alt="sideCloud"
        className="w-100 position-absolute impactCloud start-0 pe-none"
      />
      <div className="position-absolute impactCut z-2 pe-none">
        <img
          src={cut}
          alt="cut"
          className="w-100 position-relative z-1 pe-none"
        />
      </div>
      <img
        src={impactTree}
        alt="impactTree"
        data-aos="fade-left"
        className="w-100 position-absolute end-0 imapctTree pe-none d-sm-block d-none"
      />
      <Container className="py-lg-5 pt-sm-5 my-xl-5 mt-3 position-relative z-2">
        <Row className=" align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6} xs={12}>
            <p
              className="text-white ff_bomb_one fs_6xl fw-normal impactShadow mb-0 text-center text-lg-start pt-lg-0 pt-4"
              data-aos="fade-down-right"
            >
              Impact
            </p>
            <p
              className=" clr_black0D ff_sans fs_md fw-normal pt-lg-4 pt-md-3 text-center text-lg-start"
              data-aos="fade-down-right"
            >
              Cozy Capys, an NFT project centered around adorable capybara
              characters, aims to create a positive social impact. It achieves
              this through initiatives such as donating 10% of proceeds to
              wildlife conservation organizations, hosting inclusive community
              events
              <span className=" d-sm-inline d-none">
                , and offering real-life animal experiences. By combining the
                popularity of NFTs, the endearing nature of capybaras, and
                meaningful initiatives, Cozy Capys fosters a sense of
                responsibility, empathy, and community among its members,
                contributing to wildlife conservation and environmental
                preservation
              </span>
              .
            </p>
          </Col>
          <Col xl={1} className=" d-none d-xl-block"></Col>
          <Col xl={5} md={6} xs={11}>
            <div className="gifImg position-relative z-2" data-aos="fade-left">
              <img src={gifImg} alt="gifImg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
