import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1A132F] text-[#EFFFFD]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-[poppins] font-bold inline border-b-4 border-[#980F5A]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-4xl font-bold font-[poppins]">
              Hi, I'm Talha, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="font-[poppins]">
              I am passionate about building execllent software that improves
              the lives of those around me. I specialize in create web
              applications for clients ranging from individuals and
              small-business all the way to large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
