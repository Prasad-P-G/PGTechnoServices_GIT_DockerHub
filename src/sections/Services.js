import React, { useEffect } from "react";
//import { servicegrids } from "../exports";
import ServiceGrid from "../components/ServiceGrid";
import { servicegrids } from "../exports";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 flex flex-col customShadow gap-2 px-7 py-2 lg:px-16 lg-py-3 max-h-full"
    >
      <div className="flex lg:py-[20px] flex-col gap-2 lg:w-1/2 m-auto customShadow justify-center items-center">
        <h1 className=" font-bold text-xl lg:text-2xl px-5 rounded-lg text-white py-5 w-fit bg-[#6AA9E1]  text-center customShadowHome">
          Our Services and activities
        </h1>
        <p className=" text-sm lg:text-large p-2 text-slate-500">
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

      <div className="flex flex-col gap-2 lg:flex-row lg:py-[1px] w-full customShadow">
        {servicegrids.map((grid) => {
          return (
            <div
              key={grid.label}
              className=" w-full justify-center customShadow"
            >
              <ServiceGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
