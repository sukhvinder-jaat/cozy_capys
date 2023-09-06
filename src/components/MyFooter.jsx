import React from "react";
import footerLogo from "../assets/img/png/favicon.png";
import twetterFooter from "../assets/img/svg/twetterFooter.svg";
import discordFooter from "../assets/img/svg/discordFooter.svg";
import instaFooter from "../assets/img/svg/instaFooter.svg";
import footerLeft from "../assets/img/webp/footerLeft.webp";
import footerRight from "../assets/img/webp/footerRight.webp";

const MyFooter = () => {
  return (
    <>
      <section className="bg_orangeFC position-relative">
        <div className="bgFooter pt-sm-5">
          <div className="container pt-sm-5" data-aos="fade-down">
            <a href="#">
              <div className="d-flex justify-content-center align-items-center pt-5">
                <img
                  width={59}
                  height={83}
                  src={footerLogo}
                  alt="footer logo"
                />
                <p className="ps-2 mb-0 ff_chewy fw-normal fs_4xl clr_orange300 pt-4">
                  Cozy <span className="text-white">Capys</span>
                </p>
              </div>
            </a>
            <div className="pt-md-5 mt-5">
              <ul className="ps-0 mb-0 d-flex justify-content-center align-items-center gap-sm-4 gap-3 p-2 mt-3">
                <li className="ff_sans fs_sm fw-normal">
                  <a href="#" className="clr_black0D">
                    Home
                  </a>
                </li>
                <li className="ff_sans fs_sm fw-normal">
                  <a href="#About" className="clr_black0D">
                    About
                  </a>
                </li>
                <li className="ff_sans fs_sm fw-normal">
                  <a href="#Roadmap" className="clr_black0D">
                    Impact
                  </a>
                </li>
                <li className="ff_sans fs_sm fw-normal">
                  <a href="#Roadmap" className="clr_black0D">
                    Roadmap
                  </a>
                </li>
                <li className="ff_sans fs_sm fw-normal">
                  <a href="#FAQ" className="clr_black0D">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-4 pb-sm-5 pb-4 d-flex justify-content-center gap-4 align-content-center">
              <a href="https://twitter.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={twetterFooter}
                  alt="twitter footer logo"
                />
              </a>
              <a href="https://discord.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={discordFooter}
                  alt="discord footer logo"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  height={37}
                  width={37}
                  src={instaFooter}
                  alt="insta footer logo"
                />
              </a>
            </div>
          </div>
          <div className="footerLine"></div>
          <div className="py-4 text-center">
            <p className="ff_sans fs_xsm fw-normal color_black mb-0 opacity_07">
              Copyright ©2022 All rights reserved Plump Kittens
            </p>
          </div>
        </div>
        <div className="position-absolute start-0 bottom-0 d-sm-block d-none">
          <img
            src={footerLeft}
            alt="footer image left"
            className="footerLogo"
            data-aos="fade-right"
          />
        </div>
        <div className="position-absolute end-0 bottom-0 d-sm-block d-none">
          <img
            src={footerRight}
            alt="footer image right"
            className="footerLogo d-md-block d-none"
            data-aos="fade-left"
          />
        </div>
      </section>
    </>
  );
};

export default MyFooter;
