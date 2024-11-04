import React from "react";

const ProductGrid = ({ icon, text, label, heading }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:w-[90%]  items-center w-full bg-slate-200 rounded-lg p-4">
      <img
        src={icon}
        className="bg-green-400 rounded-full w-full lg:w-[20%]  hover:bg-green-500 cursor-pointer"
      ></img>

      <h1 className=" w-full text-xl lg:text-2xl text-green-600 font-semibold ">
        {heading}
      </h1>
      <h1 className="text-[18px] text-center text-slate-500">{text}</h1>
      {/* <p className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
        {label}
      </p> */}
    </div>
  );
};

export default ProductGrid;
