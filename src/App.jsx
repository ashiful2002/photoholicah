import React from "react";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features.jsx";
import Package from "./Sections/Package.jsx";
import Featured from "./Sections/Featured.jsx";
import Contact from "./Sections/Contact.jsx";

const App = () => {
  return (
    <div className="bg-[#F6F7C4] rounded ">
      {/* <Features />
       */}
      <Featured />
      <Hero />
      <Package />
      <Contact />
    </div>
  );
};

export default App;
