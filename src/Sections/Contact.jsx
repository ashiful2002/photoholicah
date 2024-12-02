import React from "react";
import PageTitle from "../Components/Title.jsx/PageTitle";
import { contactDetailse } from "../Constants/Index";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="">
      <div className="container">
        <div>
          <div className=" py-4">
            <PageTitle
              heading=" contact"
              className="bg-transparent text-violet-500"
            />
          </div>

          <div className="flex items-center justify-between p-3">
            <div className="flex flex-col justify-start items-center">
              <h3>Contact</h3>
              <ul>
                <li><a href="#">phone</a></li>
                <li><a href="#">email</a></li>
                <li><a href="#">whatsapp</a></li>
                <li><a href="#">map</a></li>
              </ul>
            </div>
            <div className="flex flex-col justify-end items-center">
              <h3>follow on</h3>
              <ul>
                <li><a href="#">facebook</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">youtube</a></li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="mx-40  py-3">
              {contactDetailse &&
                contactDetailse.map((item) => (
                  <div key={item.id} className="">
                    <div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-neutral-100 flex items-center justify-start text-md gap-3"
                      >
                        <span>
                          <img
                            className="w-5 "
                            src={item.icon}
                            alt={item.title}
                          />
                        </span>
                        <span> {item.title}</span>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
