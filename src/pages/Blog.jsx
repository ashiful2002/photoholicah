import React from "react";
import PageTitle from "../Components/Title.jsx/PageTitle";
import { blog } from "../Constants/Index";
import { isTwoCNChar } from "antd/es/button";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="p-2 m">
            <PageTitle heading="Blog" title="Blog" />
          </div>
          <div className="border shadow-md p-2 ">
            {blog.map((item) => (
              <div key={item.id} className="border shadow my-3 rounded p-2">
                <h2 className="capitalize bg-blue-500 text-white inline px-4 rounded-sm">{item.blogTitle}</h2>
                {item.blogDesc && <p>{item.blogDesc}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
