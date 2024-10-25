import React from "react";
import { FaPhone } from "react-icons/fa6";
import { fb } from "../assets/icons/fb.png";
import { insta } from "../assets/icons/insta.png";
import sms from "../assets/icons/sms.png";
import { twitter } from "../assets/icons/twitter.png";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-5 h-fit justify-center items-center"
    >
      <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 lg:m-5  gap-5 z-20">
        <div className="flex justify-center items-start flex-col gap-4 w-full">
          <h1 className="text-green-600 font-bold text-[25px]">
            Contact Information
          </h1>

          <div
            id="phone"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-3 rounded-full">
              <FaPhone />
            </span>
            +91 9333026364
          </div>

          <div
            id="email"
            className="flex justify-center items-center gap-4 
             font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-3 rounded-full text">
              <FaMailBulk />
            </span>
            admin@pgtechnoservices.com
          </div>

          <div
            id="address"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-3 rounded-full">
              <FaMapMarkerAlt />
            </span>
            Bangalore,Karnataka,India-560040
          </div>

          <div
            id="logos"
            className="flex justify-center 
            items-center gap-4 mx-2 mt-5"
          >
            <spa className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaFacebook />
            </spa>

            <spa className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaInstagramSquare />
            </spa>

            <spa className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaTwitterSquare />
            </spa>

            <spa className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaYoutubeSquare />
            </spa>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center  gap-2 w-full lg:py-20">
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800"
          ></input>

          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800"
          ></input>

          <textarea
            className="px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800"
            cols={30}
            rows={5}
            placeholder="Enter your message"
          ></textarea>
          <button className="bg-green-700 text-white px-4 py-3 w-2/3 rounded-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
