import React from "react";
import { peoplegrids } from "../exports";
import PeopleGrid from "../components/PeopleGrid";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col gap-2 p-10 lg:py-[100px]"
    >
      <h1 className="text-center font-bold text-4xl text-blue-900">
        About Team Activists
      </h1>
      <span className="lg:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo
        est impedit quidem consectetur id eum nam voluptas animi sunt omnis, sed
        vel delectus repudiandae ut sit odit accusamus quod. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sint voluptas, culpa amet odit
        fugiat in laudantium cumque ea, excepturi id atque veritatis doloremque,
        iusto animi quae maiores aliquid quisquam. Aspernatur? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sint voluptas, culpa amet odit
        fugiat in laudantium cumque ea, excepturi id atque veritatis doloremque,
        iusto animi quae maiores aliquid quisquam. Aspernatur?
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
