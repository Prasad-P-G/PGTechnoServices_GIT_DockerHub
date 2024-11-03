import React from "react";
import { serviceMoregrids } from "../exports";

const ServicesMore = () => {
  return (
    <div className="w-full  flex flex-col flex-wrap lg:flex-row gap-5 h-fit justify-center items-center p-2">
      {/* <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">
          Software Maintenance
        </h1>
      </div>

      <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">
          Software Project Management
        </h1>
      </div>

      <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">
          Customer relationship management
        </h1>
      </div>

      <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">
          Software support and maintenance
        </h1>
      </div>

      <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">System integration</h1>
      </div>

      <div className="w-full flex items-center justify-center lg:w-[25%] bg-slate-300">
        <h1 className="font-bold text-sm lg:text-xl p-2">
          Outsourcing software development
        </h1>
      </div> */}
      {/* <div className="flex  lg:py-[20px] items-center w-full lg:w-1/2 flex-wrap"> */}
      {serviceMoregrids.map((grid) => {
        return (
          <div
            key={grid.label}
            className="w-full flex flex-col items-center justify-center lg:w-[25%] bg-slate-300"
          >
            {/* <ServiceGrid {...grid} /> */}
            <h1 className="font-bold text-sm lg:text-xl p-2">{grid.heading}</h1>
            <img
              src={grid.icon}
              alt="icon"
              className="bg-green-400 rounded-full w-1/2 hover:bg-green-500 cursor-pointer"
            ></img>
            <h1 className="font-normal text-xs lg:text-sm p-2">{grid.text}</h1>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default ServicesMore;
