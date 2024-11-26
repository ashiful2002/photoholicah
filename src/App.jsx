import React from "react";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features.jsx";
import Package from "./Sections/Package.jsx";
import Featured from "./Sections/Featured.jsx";

const App = () => {
  return (
    <div className=" ">
      {/* <Features />
       */}
      <Featured />
      <Hero />
      <Package />
    </div>
  );
};

export default App;
