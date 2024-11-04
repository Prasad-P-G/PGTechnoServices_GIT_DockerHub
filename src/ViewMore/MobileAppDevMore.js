import React from "react";
import madev from "../assets/Mobile App/madev.jpeg";
import { FaFeatherPointed } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const MobileAppDevMore = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  ">
      <div className="w-full lg:w-[35%] gap-2 flex flex-col items-start mt-5 bg-slate-50 justify-start">
        <h1 className="text-green-600 lg:text-3xl font-bold text-lg px-5 mt-5 text-center">
          Mobile Application Development
        </h1>
        <h1 className="px-2 font-sans w-full text-justify lg:text-wrap tex-sm lg:text-lg">
          We create software for mobile devices, such as smartphones, tablets,
          and digital assistants. The Mobile app development needs organized
          process,tools,testing,platforms,features and we need backend database
          to hadle the live data.
        </h1>
        <img
          src={madev}
          alt="mobile add dev Image"
          className="h-fit w-[50%] lg:w-[70%] m-10 rounded-md"
        />
      </div>

      <div className="w-full lg:w-[75%] flex flex-col flex-wrap items-center justify-center m-5 gap-5">
        <div className="w-full  rounded-2xl">
          <h1 className="font-bold rounded-full bg-[#ccbfdd] p-5 text-lg lg:text-2xl text-center border-2">
            <text className="text-blue-950 capitalize">
              Our Practicals and knowledge based Measures
            </text>
          </h1>
        </div>

        <div className="flex flex-row gap-2 lg:gap-5 bg-[#1F7BCB] items-center justify-between w-full p-2">
          <div className="flex flex-row items-center justify-center p-2">
            <span className="text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>

            {/* <h1 className="font-bold  p-5 text-lg lg:text-2xl">Process</h1> */}
            <ReactTyped
              className="font-bold  p-5 text-lg lg:text-2xl"
              strings={["Process.", "Process."]}
              typeSpeed={20}
              backSpeed={50}
              loop
            ></ReactTyped>
          </div>
          <div>
            <h1 className=" font-sans text-slate-100  p-2">
              The process of developing a mobile app typically involves several
              phases, including strategy, planning, design, development,
              testing, and release.
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-2 lg:gap-5 p-2 bg-[#1F7BCB] items-center justify-between w-full">
          <div className="flex flex-row items-center justify-center p-2">
            <span className=" text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>
            <h1 className="font-bold  p-5 text-lg lg:text-2xl">Tools</h1>
          </div>
          <div>
            <h1 className=" font-sans text-slate-100 p-2">
              The programming languages and tools used to develop a mobile app
              depend on the platform and the app's nature. Some tools used for
              mobile app development include Expo Go, Visual Studio Code,
              CodeRunner, Kubernetes, Buddy, Xcode 14, Android Studio, and
              Charles Proxy
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-5  bg-[#1F7BCB] items-center justify-between w-full">
          <div className="flex flex-row items-center justify-center p-2">
            <span className=" text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>
            {/* <h1 className="font-bold  p-5 text-lg lg:text-2xl">Testing</h1> */}
            <ReactTyped
              className="font-bold  p-5 text-lg lg:text-2xl"
              strings={["Testing.", "Testing."]}
              typeSpeed={20}
              backSpeed={50}
              loop
            ></ReactTyped>
          </div>
          <div>
            <h1 className="font-sans text-slate-100 px-2">
              Testing and quality assurance (QA) are important parts of the
              mobile app development process. Testing teams identify and fix
              bugs, errors, and usability issues.
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-[#1F7BCB] items-center  w-full">
          <div className="flex flex-row items-center justify-center p-2">
            <span className=" text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>
            <h1 className="font-bold  p-5 text-lg lg:text-2xl">Platforms</h1>
          </div>
          <div>
            <h1 className="font-sans text-slate-100 px-2">
              The most common platforms for mobile apps are Android and iOS.
              However, it's possible to create apps for other platforms.
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-[#1F7BCB] items-center w-full ">
          <div className="flex flex-row items-center justify-center p-2">
            <span className=" text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>
            {/* <h1 className="font-bold  p-5 text-lg lg:text-2xl">Features</h1> */}
            <ReactTyped
              className="font-bold  p-5 text-lg lg:text-2xl"
              strings={["Features.", "Features."]}
              typeSpeed={20}
              backSpeed={50}
              loop
            ></ReactTyped>
          </div>
          <div className="flex justify-start">
            <h1 className="font-sans text-slate-100 px-2">
              Mobile apps can use native features on a device, such as GPS,
              Bluetooth, a camera, and microphone.
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-[#1F7BCB] items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center p-2">
            <span className=" text-2lg lg:text-4xl text-green-500">
              <FaFeatherPointed />
            </span>
            <h1 className="font-bold  p-2 text-lg lg:text-2xl">
              {" "}
              APIs & Backend Database
            </h1>
          </div>
          <div>
            <h1 className="font-sans text-slate-100 px-2 px-2">
              Mobile apps typically use backend services, such as data access
              with an API, to interact with external servers and databases.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevMore;
