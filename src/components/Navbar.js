import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1A132F] ">
      <div className=" text-[#e359eb] font-[poppins] text-2xl">TalHa_dev</div>
      <div className="">
        <ul className="hidden md:flex font-[poppins] gap-5 cursor-pointer text-[#e359eb]">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div onClick={handleToggle} className="md:hidden z-10 text-[#e359eb]">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1A132F] flex justify-center flex-col items-center cursor-pointer"
        }
      >
        <li className="py-6 text-2xl text-[#e359eb]">
          {" "}
          <Link onClick={handleToggle} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#e359eb]">
          {" "}
          <Link onClick={handleToggle} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#e359eb]">
          {" "}
          <Link onClick={handleToggle} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl text-[#e359eb]">Contact</li>
        <li className="py-6 text-2xl text-[#e359eb]">Experience</li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] mb-[10px] h-[45px] flex justify-between items-center  ml-[-100px] hover:ml-[-0px] duration-300 bg-[#980F5A]">
            <a
              href="https://www.linkedin.com/in/talha-916837185/"
              target="blank"
              className="flex ml-[5px] font-[poppins] text-lg justify-between items-center w-full text-[#F7F5F2]"
            >
              LinkedIn <BsLinkedin className="mr-[10px]" size={30} />
            </a>
          </li>
          <li className="w-[150px]  h-[45px] mb-[10px] flex justify-between items-center  ml-[-100px] hover:ml-[-0px] duration-300 bg-[#980F5A]">
            <a
              href="https://github.com/talhahere0"
              target="blank"
              className="flex ml-[5px] font-[poppins] text-lg justify-between items-center w-full text-[#F7F5F2]"
            >
              Github <BsGithub className="mr-[10px]" size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[45px] flex justify-between items-center  ml-[-100px] hover:ml-[-0px] duration-300 bg-[#980F5A]">
            <a
              href="https://twitter.com/talha_dev1"
              target="blank"
              className="flex ml-[5px] font-[poppins] text-lg justify-between items-center w-full text-[#F7F5F2]"
            >
              Twitter <BsTwitter className="mr-[10px]" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
