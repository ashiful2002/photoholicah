import React from "react";
import PageTitle from "../Components/Title.jsx/PageTitle";
import { blog } from "../Constants/Index";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="p-2 m">
            <PageTitle heading="Photoholic Blog" title="Blog" />
          </div>
          < PageTitle heading="5 essential tips for photography" className=" mt-4 bg-slate-600" />
          <div className="border shadow-md p-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {blog.map((item) => (
              <div key={item.id} className="border shadow my-2 rounded p-2 ">
                <h4 className="capitalize bg-blue-500 text-white inline px-1 rounded-sm">
                  {item.blogTitle}
                </h4>
                {
                  <ol className="list- list-disc" >
                    {item.blogDesc1 && <li className="">{item.blogDesc1}</li>}
                    {item.blogDesc2 && <li className="">{item.blogDesc2}</li>}
                    {item.blogDesc3 && <li className="">{item.blogDesc3}</li>}
                   
                  </ol>
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
