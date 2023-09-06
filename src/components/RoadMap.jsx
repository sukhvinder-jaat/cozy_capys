import React from "react";
import roadmap_left from "../assets/img/webp/left_abs_img.png";
import cut from "../assets/img/png/faqut.png";
import tree from "../assets/img/png/aboutTree.png";
import roadmap_arrow from "../assets/img/svg/arrow.svg";
import { Card1, Card2, Card3, Card4 } from "./common/icon";
export const RoadMap = () => {
  return (
    <>
      <section
        class="bg_green9A d-flex py-sm-5 py-4 position-relative"
        id="Roadmap"
      >
        <div class="position-absolute left_img d-none d-md-block">
          <img src={roadmap_left} alt="img" />
        </div>
        <div className="position-absolute roadTree d-sm-block d-none">
          <img src={tree} alt="tree" className="w-100 position-relative z-1" />
        </div>
        <img src={cut} alt="cut" className="w-100 position-absolute faqCut" />
        <div class="container py-sm-5 pt-2 pb-5" data-aos="fade-right">
          <h1 class="mainHeading ff_bomb_one text-white fw-normal">Roadmap</h1>
          <p class=" ff_sans text-white fw-normal fs_md main_para">
            Nam duis feugiat tellus metus arcu pharetra arcu. Sed ultrices
            ullamcorper
            <span class="d-lg-block">
              urna interdum. Maecenas neque augue mattis.
            </span>
          </p>
          <div id="small_card">
            <div class="row">
              <div class="col-xl-7 col-lg-6" data-aos="fade-right">
                <div class="roadmapCard d-flex justify-content-between">
                  <div class="d-flex flex-column justify-content-between">
                    <p class=" ff_sans fs_2x8l fw-bold text-white">Phase</p>
                    <div>
                      <h2 class="numberHeading mb-0">01</h2>
                      <p class=" ff_sans text-white fw-normal fs_md mb-0 pointer">
                        Preparation
                        <img
                          class="ms-2 cardArrow"
                          height="20"
                          width="20"
                          src={roadmap_arrow}
                          alt="img"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="py-5 my-2 pe-sm-5 me-sm-3 svgImg">
                    <Card1 />
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                <div class="roadmapCard h-100">
                  <div class="row h-100">
                    <div class="col-6 d-flex flex-column justify-content-between">
                      <p class="ff_sans fs_2x8l fw-bold text-white">Phase</p>
                      <h2 class="numberHeading mb-0 pt-5 mt-4">02</h2>
                      <p class="ff_sans text-white fw-normal fs_md whiteNowrap mb-0 pointer">
                        Community Engagement & Growth
                        <img
                          class="ms-2 cardArrow"
                          height="20"
                          width="20"
                          src={roadmap_arrow}
                          alt="img"
                        />
                      </p>
                    </div>
                    <div class="col-6 d-flex justify-content-end justify-content-sm-center">
                      <div class="svgImg mt-2 my-3 pe-sm-5 pe-md-0 pe-lg-5 me-lg-5 py-5">
                        <Card2 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 mt-4" data-aos="fade-right">
                <div class="roadmapCard d-flex justify-content-between">
                  <div class="d-flex flex-column justify-content-between">
                    <p class="ff_sans fs_2x8l fw-bold text-white">Phase</p>
                    <div>
                      <h2 class="numberHeading mb-0">03</h2>
                      <p class="ff_sans text-white fw-normal fs_md mb-0 pointer">
                        Launch
                        <img
                          class="ms-2 cardArrow"
                          height="20"
                          width="20"
                          src={roadmap_arrow}
                          alt="arrow"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="py-5 my-2 pe-sm-5 me-sm-3 svgImg">
                    <Card3 />
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6 mt-4" data-aos="fade-left">
                <div class="roadmapCard d-flex justify-content-between">
                  <div class="d-flex flex-column justify-content-between">
                    <p class="ff_sans fs_2x8l fw-bold text-white">Phase</p>
                    <div>
                      <h2 class="numberHeading mb-0">04</h2>
                      <p class="ff_sans text-white fw-normal fs_md mb-0 pointer">
                        Real-life
                        <img
                          class="ms-2 cardArrow"
                          height="20"
                          width="20"
                          src={roadmap_arrow}
                          alt="arrow"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="py-5 my-2 pe-sm-5 me-sm-3 svgImg">
                    <Card4 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
