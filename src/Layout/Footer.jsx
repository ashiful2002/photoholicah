import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p>
              all right reserved by <span>react</span>
            </p>
          </div>
          <p>
            developed by{" "}
            <a href="#" target="_blank">
              mukto
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
