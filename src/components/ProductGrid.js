import React from "react";

const ProductGrid = ({ icon, text, label, heading }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-center lg:justify-start w-full bg-slate-200 rounded-lg p-4 customShadow">
      <img
        src={icon}
        alt="product image"
        className="bg-green-400 rounded-full w-[75%] lg:w-[20%] mx-2 hover:bg-green-500 cursor-pointer"
      ></img>

      <span className=" text-lg w-full lg:w-[30%] text-center lg:text-2xl rounded-b-2xl lg:rounded-r-2xl text-white font-semibold bg-gray-700 opacity-1 p-3">
        {heading}
      </span>
      <h1 className="text-[14px] lg:text-[16px]  w-full lg:w-[60%] text-center text-slate-500">
        {text}
      </h1>
      {/* <p className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
        {label}
      </p> */}
    </div>
  );
};

export default ProductGrid;
