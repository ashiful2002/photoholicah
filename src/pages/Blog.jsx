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
            <PageTitle heading="Photoholic Blog" title="Blog" />
          </div>
          < PageTitle heading="5 basic tips for photography" className="bg-slate-600" />
          <div className="border shadow-md p-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {blog.map((item) => (
              <div key={item.id} className="border shadow my-3 rounded p-2 ">
                <h4 className="capitalize bg-blue-500 text-white inline px-1 rounded-sm">
                  {item.blogTitle}
                </h4>
                {
                  <ul className="" >
                    {item.blogDesc1 && <li>1.{item.blogDesc1}</li>}
                    {item.blogDesc2 && <li>2.{item.blogDesc2}</li>}
                    {item.blogDesc3 && <li>3.{item.blogDesc3}</li>}
                   
                  </ul>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
