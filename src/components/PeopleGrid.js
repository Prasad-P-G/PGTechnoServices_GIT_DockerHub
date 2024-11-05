import React from "react";
import { MdAccountCircle } from "react-icons/md";

const PeopleGrid = ({ image, about, name, profile }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-slate-300 rounded-lg m-2 p-2 lg:p-4 ">
      {image ? (
        <img
          src={image}
          alt="people image"
          className="bg-green-400 rounded-full w-[25%] lg:w-1/2 border-green-800 border-2 hover:bg-green-500 cursor-pointer"
        ></img>
      ) : (
        <div className="bg-green-400 rounded-full  text-6xl hover:bg-green-500 cursor-pointer ">
          <MdAccountCircle />
        </div>
      )}

      <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
        {name}
      </h1>
      <h1 className="text-[18px] text-center text-black font-semibold">
        {profile}
      </h1>
      <h1 className="text-[14px] text-center text-black">{about}</h1>
    </div>
  );
};

export default PeopleGrid;
