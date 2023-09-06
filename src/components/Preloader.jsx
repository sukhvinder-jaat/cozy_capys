import React from "react";
export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 4000);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="z-10 d-inline-block">
          <p className="text-center fs_8xl fw-normal heroTextShadow mb-0 heroHeading2 headingSame">
            <span className="ff_bomb_one clr_orange300">Cozy</span>
            <span className="ff_cream clr_green2B ml-10">Capys</span>
            <span className="ff_bomb_one text-white d-sm-inline d-block lh-1 ml-10">
              NFT
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
