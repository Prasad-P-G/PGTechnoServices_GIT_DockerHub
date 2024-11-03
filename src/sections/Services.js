import React from "react";
//import { servicegrids } from "../exports";
import ServiceGrid from "../components/ServiceGrid";
import ssm from "../assets/icons/ssm.png";
import { servicegrids } from "../exports";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-5 lg:gap-10 h-auto px-7 py-4 lg:px-16 lg-py-8"
    >
      <div className="flex lg:py-[20px]  items-start flex-col gap-8 lg:w-1/2">
        <h1 className=" font-bold text-2xl lg:text-4xl text-blue-900 py-10 w-full bg-yellow-100 text-center">
          Our Services and activities
        </h1>
        <p className="text-black text-sm lg:text-xl">
          We use best practices in our process and development activities, and
          available team always work on the utilities to develope for our team ,
          helping them to imporove their productivity collaborating in team
          activities and also build test cases for their work to test with our
          customers giving our utilities as value added services
        </p>
        {/* <button className="bg-green-800 text-white px-2 lg:px-4 py-2 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
          Read More
        </button> */}
      </div>

      <div className="flex  lg:py-[20px] items-center w-full lg:w-1/2 flex-wrap">
        {servicegrids.map((grid) => {
          return (
            <div key={grid.label} className="w-full lg:w-1/2">
              <ServiceGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
