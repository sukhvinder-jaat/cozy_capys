import { React, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/img/png/navLogo.png";
import twitter_logo from "../assets/img/svg/tweeter.svg";
import discord_logo from "../assets/img/svg/discord.svg";
import insta_logo from "../assets/img/svg/insta.svg";
const MyNav = () => {
  const [Show, setShow] = useState(true);
  function showNav() {
    setShow(
      !Show,
      document.getElementById("nav_bar_animation").classList.toggle("openNav"),
      document.getElementById("dis_none").classList.toggle("logo_not_visible")
    );
  }
  if (!Show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="bg_blue position-relative z-3 w-100 py_10 flex-grow-0">
        <div className="my_container container d-flex justify-content-between align-items-center">
          <div id="dis_none" className="d-flex align-items-center">
            <a href="#">
              <img
                width={42}
                height={60}
                src={nav_logo}
                alt="page logo"
                className="w-100"
              />
            </a>
            <p className="ff_chewy fs_3xl fw-normal clr_orange300 orangeShadowText mb-0 ps-2">
              Cozy <span className="greenShadowText clr_green2B">Capys</span>
            </p>
          </div>
          <div className="d-lg-flex align-items-center justify-content-between d-none d-lg-block">
            <ul className="d-flex justify-content-between align-items-center mb-0 gap-4 p-2">
              <li>
                <a href="#Home" className="text-white ">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#Impact" className="text-white">
                  Impact
                </a>
              </li>
              <li>
                <a href="#Roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#FAQ" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-2 d-sm-flex d-none">
            <div className="navSocalIcon">
              <img
                height={15}
                width={18}
                src={twitter_logo}
                alt="twitter logo"
              />
            </div>
            <div className="navSocalIcon">
              <img
                height={15}
                width={20}
                src={discord_logo}
                alt="discord logo"
              />
            </div>
            <div className="navSocalIcon">
              <img height={19} width={19} src={insta_logo} alt="insta logo" />
            </div>
          </div>
          <div
            className="d-flex justify-content-between flex-column d-lg-none "
            onClick={showNav}
          >
            <h2 className="position-relative text-white fs_3xl">
              {Show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className={`d-flex navBar d-lg-none ${Show ? "" : "start-0"}`}>
            <ul
              id="nav_bar_animation"
              className="d-flex justify-content-between flex-column gap-3 align-items-center mb-0 ps-0 navAnimation"
            >
              <li onClick={showNav}>
                <a href="#">Home</a>
              </li>
              <li onClick={showNav}>
                <a href="#About">About</a>
              </li>
              <li onClick={showNav}>
                <a href="#Impact">Impact</a>
              </li>
              <li onClick={showNav}>
                <a href="#Roadmap">Roadmap</a>
              </li>
              <li onClick={showNav}>
                <a href="#FAQ">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;
