import React from "react";
import { peoplegrids } from "../exports";
import PeopleGrid from "../components/PeopleGrid";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col gap-2 p-5 lg:pt-[2px]">
      <h1 className="text-center font-bold text-4xl text-blue-900 py-5">
        About Team Activists
      </h1>
      <span className="lg:px-20">
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
      <span className="lg:px-20">
        We have young and dynamic operational team with technical expertises,
        and have more than 15 years of industrial experience , worked with more
        than 25 clients from all over the globe. The team has high influenced
        technical people to work around with our innovations.
      </span>

      <div className="flex flex-col lg:grid lg:grid-cols-5 justify-center items-center w-fit">
        {/* <div className="flex justify-center flex-row flex-wrap items-center"> */}
        {peoplegrids.map((grid) => {
          return (
            <div key={grid.name} className="w-full">
              <PeopleGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
