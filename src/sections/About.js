import React from "react";
import { peoplegrids } from "../exports";
import { MdAccountCircle } from "react-icons/md";
import PeopleGrid from "../components/PeopleGrid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, colors } from "@mui/material";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "50px", height: "50px", background: "red" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        background: "green",
        padding: "50px",
        alignContent: "center",
      }}
      onClick={onClick}
    />
  );
};

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,
  // };

  return (
    <section
      id="about"
      className="w-full flex flex-col gap-2 p-5 lg:pt-[2px] bg-slate-400"
    >
      <h1 className="text-center font-bold  text-2xl lg:text-4xl text-blue-900 py-1 lg:py-5">
        About Team Activists
      </h1>
      <span className="lg:px-20 text-[14px] lg:text-[16px]">
        Founder has taken the initiation of this IT and services firm
        horzontally alligned with their other operations sectors. As a team we
        set the Vision and directions of the company. So that, we can take up
        the decisions collectively to achieve the goals set. Some time CEO and
        HR infulences some strategies in effiecient ways which help all
        employees to achieve their goals. The company promotes and help
        employees to attend training programs and seminars to understand the
        upcoming technologies and innovatives done by experts , which helps in
        improving ongoing assignemnts and helps in delivering quality work.
      </span>
      <span className="lg:px-20 text-[14px] lg:text-[16px]">
        We have young and dynamic operational team with technical expertises,
        and have more than 15 years of industrial experience , worked with more
        than 25 clients from all over the globe. The team has high influenced
        technical people to work around with our innovations.
      </span>

      <div className="w-full lg:w-3/4 m-auto">
        {/* <div className="flex justify-center flex-row flex-wrap items-center"> */}
        <>
          <>
            <div className="hidden lg:block  mt-2 customShadowAbout">
              <Slider
                {...settings}
                className="flex items-center justify-center max-h-[300px]"
              >
                {peoplegrids.map((grid) => (
                  // return (
                  //   <div key={grid.name} className="w-full">
                  //     <PeopleGrid {...grid} />
                  //   </div>
                  // );
                  // <div className="flex flex-col justify-center items-center gap-2 bg-slate-300 rounded-lg m-2 p-2">

                  <div className="flex justify-center items-center py-5  bg-slate-200 my-5  rounded-xl px-10 lg:px-[20px]">
                    <div className="flex items-center justify-center">
                      {grid.image ? (
                        <img
                          src={grid.image}
                          alt="people image"
                          className="bg-green-400 rounded-full w-[20%] lg:w-[20%] border-green-800 border-2 hover:bg-green-500 cursor-pointer"
                        ></img>
                      ) : (
                        <div className="bg-green-400 rounded-full  text-6xl hover:bg-green-500 cursor-pointer ">
                          <MdAccountCircle />
                        </div>
                      )}
                    </div>

                    <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
                      {grid.name}
                    </h1>
                    <h1 className="text-[14px] text-center text-black font-semibold">
                      {grid.profile}
                    </h1>
                    <h1 className="text-[12px] text-center text-black">
                      {grid.about}
                    </h1>
                  </div>
                ))}
              </Slider>
            </div>
          </>

          <>
            <div className="lg:hidden px-2 customShadowAbout">
              <Slider
                {...settings1}
                className="flex items-center justify-center max-h-[310px]"
              >
                {peoplegrids.map((grid) => (
                  // return (
                  //   <div key={grid.name} className="w-full">
                  //     <PeopleGrid {...grid} />
                  //   </div>
                  // );
                  // <div className="flex flex-col justify-center items-center gap-2 bg-slate-300 rounded-lg m-2 p-2">

                  <div className="flex justify-center items-center py-2 my-5 bg-slate-200  rounded-xl px-10 lg:px-[20px]">
                    <div className="flex items-center justify-center">
                      {grid.image ? (
                        <img
                          src={grid.image}
                          alt="people image"
                          className="bg-green-400 rounded-full w-[20%] lg:w-[30%] border-green-800 border-2 hover:bg-green-500 cursor-pointer"
                        ></img>
                      ) : (
                        <div className="bg-green-400 rounded-full  text-6xl hover:bg-green-500 cursor-pointer ">
                          <MdAccountCircle />
                        </div>
                      )}
                    </div>

                    <h1 className="text-xl lg:text-2xl text-center text-green-600 font-semibold">
                      {grid.name}
                    </h1>
                    <h1 className="text-[14px] text-center text-black font-semibold">
                      {grid.profile}
                    </h1>
                    <h1 className="text-[12px] text-center text-black">
                      {grid.about}
                    </h1>
                  </div>
                ))}
              </Slider>
            </div>
          </>
        </>
      </div>
    </section>
  );
};

export default About;
