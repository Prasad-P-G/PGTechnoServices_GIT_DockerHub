import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section
      className="w-full bg-black text-white flex flex-col lg:flex-row  
     gap-1 lg:gap-2 px-10  lg:px-20 lg:py-1 mt-2"
    >
      <div className="flex flex-col justify-center items-start w-full lg:w-[40%]">
        <h1 className="text-green-600 font-bold text-[16px]">
          BPG TECHNO DOMAIN Private Limited
        </h1>
        <p className="text-[10px] text-slate-200 ">SINCE 2021</p>
        <p className="text-sm text-slate-200 ">
          Innovate. Learn. Discover. Research
        </p>
        <div className="flex justify-center items-center gap-2 mt-2" id="logos">
          <span className=" p-1 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaFacebook />
          </span>
          <span className=" p-1 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaInstagramSquare />
          </span>
          <span className=" p-1 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaTwitterSquare />
          </span>
          <span className=" p-1 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaYoutubeSquare />
          </span>
        </div>
      </div>

      {/* <div className="flex flex-row justify-center items-center  w-full lg:w-50%  lg:p-1">
        <ul className="flex flex-row justify-center items-center gap-5 px-10">
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <NavLink to="/services"> Services</NavLink>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <NavLink to="/products"> Products</NavLink>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <NavLink to="/contact"> Contact</NavLink>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Footer;
