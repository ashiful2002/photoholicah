import React from "react";

import heroImage from "../assets/react.svg";
import photoholic from "../assets/logo.png";
import PageTitle from "../Components/Title.jsx/PageTitle";

const Hero = () => {
  return (
    <div className="bg-[#F6F7C4] rounded" id="feature">
      <div className="container mx-auto">
        {/* <PageTitle heading="hero section " title="home"/> */}
        <div className=" flex items-center justify-center gap-5 flex-col">
          <div className="pt-5">
            <img
              className="rounded-md shadow bg-slate-900"
              width={300}
              src={photoholic}
              alt="heroImage"
            />
          </div>
          <div>
            <h1 className="capitalize font-serif">photoholic ah</h1>
            <p className="font-mono leading-5">
              Photoholic is a dedicated photographer with a passion for
              capturing the essence of life through his lens. He believes that
              every moment tells a story, and his mission is to preserve these
              fleeting instances for eternity. With an artistic eye and a deep
              understanding of light, composition, and emotion, Photoholic
              transforms ordinary scenes into extraordinary memories. Whether
              it’s the vibrant energy of a bustling city or the serene beauty of
              nature, he finds inspiration in every frame. His work reflects his
              love for storytelling and his ability to connect with people and
              their unique experiences through photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
