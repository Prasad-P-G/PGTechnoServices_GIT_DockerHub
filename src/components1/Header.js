import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-[#207FD2] p-2">
      <div className="max-w-[1240px] max-auto flex justify-between p-2 items-center">
        <div className="text-3xl font-semibold">PG Techno Services</div>
        <AiOutlineMenu className="text-white text-2xl md:hidden block" />
        {/* <AiOutlineClose className="text-white text-2xl md:hidden block" /> */}
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
