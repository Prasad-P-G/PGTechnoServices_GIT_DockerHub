import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14  lg:px-20 lg:py-5 lg:mt-5 mt-5">
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className="text-green-600 font-bold text-4xl">PG TECHNO DOMAIN</h1>
        <p className="text-lg text-slate-200 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          excepturi, explicabo eveniet porro laborum fugit minima voluptas
          accusantium dolorem sapiente dolorum fugiat asperiores illum
          voluptates quia veniam possimus neque distinctio!
        </p>
        <div className="flex justify-center items-center gap-4 mt-7" id="logos">
          <spa className=" p-2 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaFacebook />
          </spa>
          <spa className=" p-2 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaInstagramSquare />
          </spa>
          <spa className=" p-2 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaTwitterSquare />
          </spa>
          <spa className=" p-2 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
            <FaYoutubeSquare />
          </spa>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-50% lg:p-5">
        <ul className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl font-semibold"> PAGES</h1>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <a href="/"> Home</a>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <a href="#services"> Services</a>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <a href="#products"> Products</a>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <a href="#about"> About</a>
          </li>
          <li className="text-slate-300 cursor-pointer hover:bg-green-600 p-1">
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
