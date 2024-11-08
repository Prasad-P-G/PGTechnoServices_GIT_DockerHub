import React from "react";
import heroimage from "../assets/images/heroimg.png";
import { ReactTyped } from "react-typed";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between w-full items-center gap-2 h-auto lg:h-full">
      <div className=" flex justify-center items-start flex-col gap-4 w-full lg:w-1/2 px-10 py-5 lg:px-20 lg:py-10">
        <div className="text-xl lg:text-5xl font-bold bg-green-500 text-white lg:p-10">
          <ReactTyped
            strings={["Research.", "Innovation.", "Discover.", "Adoption."]}
            typeSpeed={70}
            backSpeed={50}
            loop
            className="py-20 mx-10"
          ></ReactTyped>
        </div>
        <h1 className="text-green-600 font-bold text-2xl lg:text-4xl">
          One-Place for Your Innovative Ideas
        </h1>
        <span className="text-slate-400 text-sm lg:text-xl  text-justify">
          We are a place where together can learn new things and be innovative,
          and where all can feel comfortable to take risks and grow. To learn
          innovative things, we first adopt culture,Changes,methods,skills and
          many more
        </span>

        <div className="flex justify-center items-center gap-2 mt-2">
          <NavLink to="/homemore">
            <button className="bg-green-800 text-white px-2 lg:px-4 py-2 rounded-md text-[18px] hover:bg-black cursor-pointer">
              View More
            </button>
          </NavLink>
          <button className=" text-green-800  px-2 lg:px-4 py-2 rounded-md text-[18px] hover:border-black hover:text-black cursor-pointer border-2 border-green-800">
            Watch Videos
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center items-center w-1/2 px-5 py-5 object-cover"> */}
      <div className="flex justify-center lg:items-center lg:justify-start w-fit px-2 py-2 object-cover">
        <img
          src={heroimage}
          className="w-3/4 lg:w-1/2 rounded-lg lg:rounded-md"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
