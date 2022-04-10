import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javasc.png";
import MONGODB from "../assets/mongo.png";
import NODE from "../assets/node.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#1A132F] text-[#EFFFFD] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold font-[poppins] inline border-b-4 border-[#980F5A]">
            Skills
          </p>
          <p className="py-4 font-[poppins]">
            ** These are the technologies I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={HTML} alt="html icon" />
            <p className="py-4 font-[poppins]">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={CSS} alt="html icon" />
            <p className="py-4 font-[poppins]">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={JAVASCRIPT} alt="html icon" />
            <p className="py-4 font-[poppins]">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={REACT} alt="html icon" />
            <p className="py-4 font-[poppins]">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={NODE} alt="html icon" />
            <p className="py-4 font-[poppins]">NODE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={MONGODB} alt="html icon" />
            <p className="py-4 font-[poppins]">MONGODB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={TAILWIND} alt="html icon" />
            <p className="py-4 font-[poppins]">TAILWIND CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={GITHUB} alt="html icon" />
            <p className="py-4 font-[poppins]">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
