import React from "react";
import heroimage from "../assets/images/heroimg.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-slate-100 h-auto lg:h-screen">
      <div className=" flex justify-center items-start flex-col gap-4 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20">
        <div className="text-xl lg:text-5xl font-bold bg-green-500 text-white lg:p-10">
          <ReactTyped
            strings={["Research.", "Innovation.", "Discover.", "Adoption."]}
            typeSpeed={70}
            backSpeed={50}
            loop
            className="py-20 mx-10"
          ></ReactTyped>
        </div>
        <h1 className="text-green-600 font-bold text-3xl lg:text-6xl">
          One-Place for Your Innovative Ideas
        </h1>
        <p className="text-slate-90 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis non
          atque velit beatae maxime temporibus quo doloribus culpa laboriosam.
          Aliquam a ipsam nulla omnis aspernatur fugiat expedita similique iure
          deserunt!
        </p>

        <div className="flex justify-center items-center gap-7">
          <button className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black cursor-pointer">
            View More
          </button>
          <button className=" text-green-800  px-4 lg:px-8 py-3 rounded-md text-[18px] hover:border-black hover:text-black cursor-pointer border-2 border-green-800">
            Watch Videos
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center items-center w-1/2 px-5 py-5 object-cover"> */}
      <div className="flex justify-center items-center w-fit px-5 py-5 object-cover">
        <img src={heroimage} alt="hero Image" className="lg:w-1/2"></img>
      </div>
    </section>
  );
};

export default Hero;
