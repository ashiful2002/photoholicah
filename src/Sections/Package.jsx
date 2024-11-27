import React from "react";

import { packages } from "../Constants/Index";
import { Button, Card } from "react-bootstrap";

import PageTitle from "../Components/Title.jsx/PageTitle";
import { IoTimeOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { BiSolidCustomize } from "react-icons/bi";

const Package = () => {
  return (
    <div className="bg-[#A1EEBD] rounded" id="packages">
      <div>
        <div className="container mx-auto">
          <PageTitle
            heading="packages"
            className="text-violet-500 bg-transparent "
          />
          <div className="grid grid-cols-1 md:grid-cols-4">
            {packages.map((item) => (
              <div className="p-3" key={item.id}>
                <Card className="shadow-md p-2 ">
                  <Card.Body className="-my-2 capitalize">
                    <Card.Title className="bg-slate-600 uppercase  text-white text-center rounded py-2">
                      {item.package}
                    </Card.Title>
                    <ul className="bg-pink-200  text-slate-900 rounded py-2 hover:shadow-xl shadow-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer   transition-colors ">
                      <li>
                        {item.desc1 && (
                          <Card.Text className="my-1">
                            <IoTimeOutline className="inline" /> {item.desc1}
                          </Card.Text>
                        )}
                      </li>
                      <li>
                        {item.desc2 && (
                          <Card.Text className="my-1">
                            {" "}
                            <CiImageOn className="inline" /> {item.desc2}
                          </Card.Text>
                        )}
                      </li>
                      <li>
                        {item.desc3 && (
                          <Card.Text className="my-1">
                            {" "}
                            <MdOutlineDesignServices className="inline" />{" "}
                            {item.desc3}
                          </Card.Text>
                        )}
                      </li>
                      <li>
                        {item.desc4 && (
                          <Card.Text className="my-1">
                            {" "}
                            <BiSolidPhotoAlbum className="inline" />{" "}
                            {item.desc4}
                          </Card.Text>
                        )}
                      </li>
                      <li>
                        {item.customPackage && (
                          <Card.Text className="my-1">
                            {" "}
                            <BiSolidCustomize className="inline" />{" "}
                            {item.customPackage}
                          </Card.Text>
                        )}
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
