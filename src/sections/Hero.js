import React, { useEffect, useContext } from "react";
import heroimage from "../assets/images/heroimg.png";
import { ReactTyped } from "react-typed";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { homegrids } from "../exports";
import { changeContext } from "../App";

const Hero = () => {
  const handleChange = useContext(changeContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
  };

  useEffect(() => {
    handleChange(true);
  }, []);
  return (
    <section className="flex flex-col lg:flex-row justify-between w-full items-center gap-2 h-auto lg:h-full">
      <div className=" flex justify-center items-start flex-col gap-2 w-full lg:w-1/2 px-10 py-2 lg:px-20 lg:py-10 customShadowHome">
        <div className="text-xl lg:text-5xl font-bold bg-green-500 text-white lg:p-5">
          <ReactTyped
            strings={["Research.", "Innovation.", "Discover.", "Adoption."]}
            typeSpeed={70}
            backSpeed={50}
            loop
            className="py-10 mx-10"
          ></ReactTyped>
        </div>
        <h1 className="text-green-600 font-bold text-2xl lg:text-4xl">
          One-Place for Your Innovative Ideas
        </h1>
        <span className="text-slate-400 text-sm lg:text-xl  text-justify">
          We are a place where together can learn new things and be innovative,
          and where all can feel comfortable to take risks and grow. To learn
          innovative things, we first adopt culture,Changes,methods,skills and
          many more
        </span>

        <div className="flex justify-center items-center gap-2">
          <NavLink to="/homemore">
            <button className="bg-green-800 text-white px-2 lg:px-4 py-1 rounded-md text-[10px] lg:text-[18px] hover:bg-black cursor-pointer">
              View More
            </button>
          </NavLink>
          <button className=" text-green-800  px-2 lg:px-4 py-1 rounded-md text-[10px] lg:text-[18px] hover:border-black hover:text-black cursor-pointer border-2 border-green-800">
            Watch Videos
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center items-center w-1/2 px-5 py-5 object-cover"> */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* <img
          src={heroimage}
          className="w-3/4 lg:w-1/2 rounded-lg lg:rounded-md"
        ></img> */}
        <div className="hidden lg:block py-2 max-w-full  customShadowHomeSlider">
          <Slider
            {...settings}
            className="flex items-center justify-center w-[400px] my-2"
          >
            {homegrids.map((grid) => (
              <NavLink
                to={grid.label}
                className="flex justify-center items-center py-5  bg-slate-200 my-5  rounded-xl px-10 lg:px-[20px]"
              >
                <div className="flex items-center justify-center">
                  {grid.image ?? (
                    <img
                      src={grid.icon}
                      alt="No Image"
                      className="bg-green-400 rounded-full border-green-800 border-2 hover:bg-green-500 cursor-pointer"
                    ></img>
                  )}
                </div>
                <h1 className="text-lg lg:text-xl text-center text-green-600 font-semibold">
                  {grid.heading}
                </h1>
                {/* <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
                  {grid.heading}
                </h1>
                <h1 className="text-[14px] text-center text-black font-semibold">
                  {grid.text}
                </h1> */}
                {/* <h1 className="text-[12px] text-center text-black">
                  {grid.label}
                </h1> */}
              </NavLink>
            ))}
          </Slider>
        </div>

        <div className="flex items-center justify-center lg:hidden w-full lg:w-full customShadowHomeSlider">
          <Slider
            {...settings}
            className=" flex items-center justify-center w-full max-w-full"
          >
            {homegrids.map((grid) => (
              <NavLink
                to={grid.label}
                className="flex justify-center items-center py-5  bg-slate-200  my-1 lg:my-5  rounded-xl px-10 lg:px-[20px]"
              >
                <div className="flex items-center justify-center w-full lg:w-full">
                  {grid.image ?? (
                    <img
                      src={grid.icon}
                      alt="No Image"
                      className="bg-green-400 items-center rounded-full border-green-800 border-2 hover:bg-green-500 cursor-pointer"
                    ></img>
                  )}
                </div>
                <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
                  {grid.heading}
                </h1>
                {/* <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
                  {grid.heading}
                </h1>
                <h1 className="text-[14px] text-center text-black font-semibold">
                  {grid.text}
                </h1> */}
                {/* <h1 className="text-[12px] text-center text-black">
                  {grid.label}
                </h1> */}
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
