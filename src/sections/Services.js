import React from "react";
//import { servicegrids } from "../exports";
import ServiceGrid from "../components/ServiceGrid";
import ssm from "../assets/icons/ssm.png";
import { servicegrids } from "../exports";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg-py-12"
    >
      <div className="flex lg:py-[100px]  items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-600 font-bold text-3xl lg:text-6xl">
          Our Services and activities
        </h1>
        <p className="text-slate-950 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          perspiciatis. Corporis dolorum amet voluptates? Labore magnam cum quod
          dignissimos quas distinctio doloribus quis, vel commodi atque sint
          similique debitis illum?
        </p>
        <button className="bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
          Read More
        </button>
      </div>

      <div className="flex  lg:py-[100px] items-center w-full lg:w-1/2 flex-wrap">
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
