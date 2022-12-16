import React from "react";
import { Link } from "react-router-dom";

// icons
import logoIcon from "../assets/logo.webp";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 w-[95%] md:w-[90%] lg:w-[90%] 3xl:[80%] mx-auto">
      <Link to="/">
        <img src={logoIcon} alt="babyname" className="h-7 lg:h-9" />
      </Link>
      <ul className=" justify-between items-center xl:gap-6 2xl:gap-7 3xl:gap-10 text-[0.95rem] hidden xl:flex ">
        <Link className="hover:text-[#333]">Home</Link>
        <Link className="hover:text-[#333]">Testimonials</Link>
        <Link className="hover:text-[#333]">About</Link>
        <Link className="hover:text-[#333]">Services</Link>
        <Link className="hover:opacity-90 text-[#4d72ce]">Plans</Link>
        <Link className="hover:text-[#333]">Doctors</Link>
        <Link className="hover:text-[#333]">Baby Tools</Link>
        <Link className="hover:text-[#333]">Blog</Link>
        <Link className="hover:text-[#333]">FAQs</Link>
        <Link className="hover:text-[#333]">Contact</Link>
      </ul>
      <AiOutlineMenu className="cursor-pointer flex xl:hidden" />
    </nav>
  );
};

export default Navbar;
