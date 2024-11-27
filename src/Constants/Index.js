import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

import holud from "../assets/holud.jpg";
import landscape from "../assets/landscape.jpg";
import khoma from "../assets/khoma.jpg";

import { IoTimeOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";

export const navItems = [
  {
    id: "0",
    title: "home",
    url: "/#home",
  },
  {
    id: "1",
    title: "feature",
    url: "/#feature",
  },
  {
    id: "2",
    title: "packages",
    url: "/#packages",
  },
  {
    id: "3",
    title: "contact",
    url: "/#contact",
  },
  {
    id: "4",
    title: "blog",
    url: "/blog",
  },
  {
    id: "5",
    title: "gallery",
    url: "/gallery",
  },
  
];

export const packages = [
  {
    id: "0",
    package: "basic",
    desc1: "2-3 hour's ",
    desc2: " limited images captures.",
    desc3: "10-15 edited",
  },
  {
    id: "1",
    package: "standard",
    desc1: "5 hour's ",
    desc2: " 40-50 images captures.",
    desc3: "20-25 edited",
  },
  {
    id: "2",
    package: "primium",
    desc1: "full day",
    desc2: " unlimited images captures.",
    desc3: "10-15 edited",
    desc4: "photo album",
  },
  {
    id: "3",
    package: "custom",
    desc1: "",
    desc2: "",
    desc3: "",
    customPackage: "contact messages is here",
  },
];

export const carouselItems = [
  {
    id: "0",
    img: carousel1,
    title: "beside truck",
  },
  {
    id: "1",
    img: carousel2,
    title: "black and white",
  },
  {
    id: "2",
    img: carousel3,
    title: "",
  },
  {
    id: "2",
    img: carousel2,
    title: "",
  },
];

export const blog = [
  {
    id: "0",
    blogTitle: "blog1",
    blogDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit pariatur, magni veritatis culpa tenetur dolorum eveniet deserunt est dicta sed porro maxime odio ipsum quas necessitatibus laborum non earum.",
  },
  {
    id: "1",
    blogTitle: "blog number 2",
    blogDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit pariatur, magni veritatis culpa tenetur dolorum eveniet deserunt est dicta sed porro maxime odio ipsum quas necessitatibus laborum non earum.",
  },
  {
    id: "2",
    blogTitle: "blog 3",
    blogDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit pariatur, magni veritatis culpa tenetur dolorum eveniet deserunt est dicta sed porro maxime odio ipsum quas necessitatibus laborum non earum.",
  },
  {
    id: "3",
    blogTitle: "blog 3",
    blogDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit pariatur, magni veritatis culpa tenetur dolorum eveniet deserunt est dicta sed porro maxime odio ipsum quas necessitatibus laborum non earum.",
  },
  {
    id: "4",
    blogTitle: "fourth blog",
    blogDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit pariatur, magni veritatis culpa tenetur dolorum eveniet deserunt est dicta sed porro maxime odio ipsum quas necessitatibus laborum non earum.",
  },
];

export const contactDetailse = [
  {
    id: "0",
    title: "+880 1611-928537",
    url: "tel:+880 1611-928537",
    icon: "phone icon",
  },
  {
    id: "2",
    title: "whatsapp",
    url: "https://wa.me/+8801727475744",
    icon: "whatsapp icon",
  },
  {
    id: "3",
    title: "dhaka banglaedsh",
    url: "https://maps.app.goo.gl/9CbXna1iGdtYtiMF7",
    icon: "map icon",
  },
];

export const galleryImages = [
  {
    id: "0",
    title: "holud",
    url: holud,
  },
  {
    id: "1",
    title: "khoma",
    url: khoma,
  },
  {
    id: "2",
    title: "landscape",
    url: landscape,
  },
];
