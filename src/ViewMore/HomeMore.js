import React from "react";
import { ReactTyped } from "react-typed";

const HomeMore = () => {
  return (
    <div className="w-full  flex flex-col lg:flex-row gap-5 h-fit justify-center items-center p-2">
      <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 lg:m-5  gap-10 z-20">
        <div className="flex   flex-col items-center bg-green-200 gap-2 p-5 rounded-3xl">
          <h1 className="text-3xl lg:text-5xl font-semibold p-3 text-[#FD6C26] text-justify -tracking-tighter">
            Research
          </h1>
          <ReactTyped
            className="font-bold"
            strings={["Research.", "Research.", "Discover.", "Research."]}
            typeSpeed={40}
            backSpeed={70}
            loop
          ></ReactTyped>
          <span className="text-black">
            We Involve in the process of creating new ideas, processes,
            technologies, services, or techniques that are new to the world.
            Research involves using resources like money, equipment, and human
            time to create knowledge
          </span>
          <span className="text-black">
            Research involves, understanding technogies from their origin to
            till date, tyring with proof of concepts for our new ideas using new
            tools provided by respective technologies. New Ideas need tools to
            implement and also we think of the compatibility with respect to
            cross platforms. We really drive into making something new in hand
            mobile and runnig OS outside your environment.
          </span>
        </div>

        <div className="flex  flex-col items-center bg-green-200 gap-2 p-10 rounded-3xl">
          <h1 className="text-3xl lg:text-5xl font-semibold p-3 text-[#6939A5] -tracking-tighter">
            Innovation
          </h1>
          <ReactTyped
            className="font-bold"
            strings={["Innovation.", "Innovation.", "Discover.", "Innovation."]}
            typeSpeed={40}
            backSpeed={70}
            loop
          ></ReactTyped>
          <span className="text-black">
            We always try to introduce something new to our customers and
            parteners, which may or may not be new to the world. This can can
            add value to our customers and employees to know better the market
            and technologies.
          </span>
          <span className="text-black">
            We believe , our research work always keeps us to do innovative
            things, and believe us to try something new where customers are
            challenging as its a new domain or technology.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
