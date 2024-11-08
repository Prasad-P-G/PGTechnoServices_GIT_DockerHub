import React from "react";
import { NavLink } from "react-router-dom";

const ServiceGrid = ({ icon, text, label, heading }) => {
  return (
    <div className="flex w-full flex-col customShadow  border-2 items-center gap-2 bg-white rounded-lg m-2 p-2 lg:p-2">
      <img
        src={icon}
        alt="service image"
        className="bg-green-400 rounded-full  w-[75%] lg:w-[70%]  hover:bg-green-500 cursor-pointer"
      ></img>

      <h1 className="text-xl lg:text-2xl text-center customShadow  text-green-600 font-semibold ">
        {heading}
      </h1>
      <div className=" text-[14px] lg:text-[16px] text-center justify-center items-center text-slate-700 lg:text-starttext-slate-500">
        <p>{text}</p>
      </div>

      {(label === "/ServicesMore" || label === "/MobileAppDevMore") && (
        <NavLink to={label}>
          <p className="bg-green-800 text-white px-3 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
            View More
          </p>
        </NavLink>
      )}
    </div>
  );
};

export default ServiceGrid;
