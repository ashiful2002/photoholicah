import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between capitalize px-2 flex-col">
          <div>
            <p>Copyright © {fullYear} Photoholic AH. All Rights Reserved</p>
          </div>
          <p>
            developed by{" "}
            <a href="https://ashiful-islam.vercel.app/">
              mukto
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
