import React from "react";

import heroImage from "../assets/react.svg";
import photoholic from "../assets/photoholic.jpg"
import PageTitle from "../Components/Title.jsx/PageTitle";
const Hero = () => {
  return (

    <div className="bg-amber-100" id="home">

    
    <div className="container mx-auto" >
        {/* <PageTitle heading="hero section " title="home"/> */}
      <div className=" flex items-center justify-center gap-5 flex-col">
        <div className="pt-5">
          <img  className="rounded-md shadow " width={300} src={photoholic} alt="heroImage" />
        </div>
        <div>
          <h1 className="capitalize font-serif">photoholic ah</h1>
          <p className="font-mono leading-5">
           a passionate photographer who loves to capture the moments of happines
           a passionate photographer who loves to capture the moments of happines
           a passionate photographer who loves to capture the moments of happines
           a passionate photographer who loves to capture the moments of happines
           a passionate photographer who loves to capture the moments of happines
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
