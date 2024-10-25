import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [iconToggle, seticonToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    seticonToggle(!iconToggle);
  };
  useState(() => {
    setMenuClass(
      !toggle
        ? "transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform translate-y-full opacity-0"
    );
  }, [toggle]);

  return (
    <section className="w-full bg-black text-white flex justify-between items-center px-8 py-6 sticky top-0 z-40">
      <a href="/">
        <h1 className="text-2xl font-bold text-white">PG TECHNO DOMAIN</h1>
      </a>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a
              href="/"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#products"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden flex-col">
        {iconToggle ? (
          <MdClose
            className="text-2xl cursor-pointer"
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <RiMenu4Line
            className="text-2xl cursor-pointer"
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}

        {toggle && (
          <div
            id="mob-menu"
            className={`bg-green-500 text-white p-4 absolute top-20 right-0 w-1/2 ${menuClass}`}
          >
            <ul className="flex flex-col justify-center  items-center">
              <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full text-center border-b justify-center py-3">
                <a href="/">Home</a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full text-center border-b py-3">
                <a
                  href="#services"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Services
                </a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                <a
                  href="#products"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Products
                </a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                <a
                  href="#about"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  About
                </a>
              </li>
              <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                <a
                  href="#contact"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
