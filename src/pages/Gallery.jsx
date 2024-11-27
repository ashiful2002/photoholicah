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
            <PageTitle heading="some of my best captures" className="bg-transparent text-violet-500 shadow mb-8" />
          </div>
          <div className="">
            <div className="p-3 border shadow rounded grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 hover:text-white">
              {galleryImages &&
                galleryImages.map((item) => (
                  <div className=" p-2 my-2 rounded hover:bg-violet-300 shadow-xl  hover:transition ease-out  delay-250">
                    <img src={item.url} alt={item.title} />
                    <p className="text-center capitalize text-slate-700 ">
                      {item.title}
                    </p>
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
