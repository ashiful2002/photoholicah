import React from "react";
import PageTitle from "../Components/Title.jsx/PageTitle";
import holud from "../assets/holud.jpg";
import { galleryImages } from "../Constants/Index";
const Gallery = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div>
          <div>
            <PageTitle heading="Photo Gallery" />
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row">
            <div className="p-3 border shadow rounded">
              {galleryImages &&
                galleryImages.map((item) => (
                  <div className="p-2">
                    <img src={item.url} alt={item.title} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Gallery;
