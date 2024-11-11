import React from "react";
import { SiStartrek } from "react-icons/si";
import organizations from "../assets/New/organizations.png";
import partners from "../assets/New/partners.jpg";
import startups from "../assets/New/startups.png";

const New = () => {
  return (
    <section className="flex flex-col w-full lg:w-[90%] m-auto h-auto lg:h-full">
      {/* Educational Organizations */}
      <div className="flex flex-col w-full lg:flex-row lg:gap-5 m-2 px-5 p-2 bg-[#c4ced7] justify-center items-center  customShadow">
        <div className="flex flex-row items-center justify-center px-5 w-full lg-w-[40%]">
          <img
            src={organizations}
            alt="people image"
            className="bg-green-400 rounded-full w-[60%] lg:w-[40%] border-green-800 border-2 hover:bg-green-500 cursor-pointer"
          ></img>

          <h1 className="font-bold  w-[40%] lg:w-full p-2 lg:ml-10 text-[14px] lg:text-[18px]">
            Our Association with Educational Organizations
          </h1>
        </div>

        <div className=" flex justify-center w-full lg:w-[90%]">
          <p className="text-sm  lg:text-[16px] text-black px-2">
            Our involvement in Educational Organizations or institutions is to
            improve the quality of the students to achieve their success in
            getting into right industries by understanding current market
            competetions and evolving technolgies. We try to boost the candiates
            with extra skills and qualities required by the market competators
            before they start their search in their interests. We try to make
            positive outcome in terms of knowing what they need to prepare for
            the their success. Our motto is to help candidates and their
            organizations to be on right track in the journey of Education. For
            this reason we have been involved in presenting the webinars and
            training required for the candidates in need.
          </p>
        </div>
      </div>

      {/* Startups Collaboration */}
      <div className="flex flex-col w-full lg:flex-row lg:gap-5 m-2 px-5 p-2 bg-[#c4ced7] justify-center items-center  customShadow">
        <div className="flex flex-row items-center justify-center px-5 w-full lg-w-[40%]">
          <img
            src={startups}
            alt="people image"
            className="bg-green-400 rounded-full w-[60%] lg:w-[40%] border-green-800 border-2 hover:bg-green-500 cursor-pointer"
          ></img>

          <h1 className="font-bold lg:ml-10  w-[40%] lg:w-full p-2 text-[14px] lg:text-[18px]">
            Working with Start-ups
          </h1>
        </div>
        <div className=" flex justify-center w-full lg:w-[90%]">
          <h1 className="text-sm  lg:text-[16px] text-black px-2">
            We are engaged in collaberating with startups , individuals and
            small scale industries too. The purpose is to understand their
            ideas, requirements and challenges they have faced in the current
            evolving technologies. We have been involved in understanding
            industry standards and embeded systems where we are leveraging our
            approaches and knowledge in implementing the need to make things
            automotive. It involves lots of time and effort in our learning
            process. We are always there to get involved in their ideas
            implementations , and making ourself open to the multiple domains
            and technologies. Its quite challenging and fun in learning though.
          </h1>
        </div>
      </div>

      {/* Our Partners */}

      <div className="flex flex-col w-full lg:flex-row lg:gap-5 m-2 px-5 p-2 bg-[#c4ced7] justify-center items-center  customShadow">
        <div className="flex flex-row items-center justify-center px-5 w-full lg-w-[40%]">
          <img
            src={partners}
            alt="people image"
            className="bg-green-400 rounded-full w-[60%] lg:w-[40%] border-green-800 border-2 hover:bg-green-500 cursor-pointer"
          ></img>

          <h1 className="font-bold lg:ml-10 w-[40%] lg:w-full p-2 text-[14px] lg:text-[18px]">
            Collaboration with Parteners
          </h1>
        </div>
        <div className=" flex justify-center w-full lg:w-[90%]">
          <p className="text-sm  lg:text-[16px] text-black px-2">
            We are collaborating with our partnerns and their partners , in
            understanding B2B and B2C Models and trying opportunities and
            possibilities to place our ideas and skills to imporve their
            bussiness and challages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default New;
