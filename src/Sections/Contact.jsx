import React from "react";
import PageTitle from "../Components/Title.jsx/PageTitle";
import { contactDetailse } from "../Constants/Index";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#7BD3EA] rounded">
      <div>
        <div>
          <div className=" py-4">
            <PageTitle
              heading=" contact"
              className="bg-transparent text-violet-500"
            />
          </div>
          {contactDetailse &&
            contactDetailse.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center capitalize text-md gap-3 text-white"
              >
                <p>{item.icon}</p>
                <p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {item.title}
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
