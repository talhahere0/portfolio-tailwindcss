import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1A132F] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-[poppins] text-[#e359eb]">Hi , my name is </p>
        <h1 className="font-[poppins] text-[#EFFFFD] text-4xl sm:text-7xl font-bold">
          Talha Zulfiqar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9facaa]">
          I'm a full stack Developer.
        </h2>
        <p className="text-[#9facaa] py-4 max-w-[700px]">
          I love to learn new techologies related to web applications. Currently
          i am working on blockchain project web 3.0 | smart contracts |
          solidity etc.
        </p>
        <div>
          <button className="text-[#EFFFFD] font-[poppins] group border-2 px-6 py-4 my-2 flex items-center hover:bg-[#980F5A] hover:border-[#980F5A]">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
