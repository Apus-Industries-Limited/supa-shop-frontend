import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { X, Facebook, Instagram, LinkedIn } from "@mui/icons-material";


const Footer = () => {
  return (
    <div className=" bg-[#ff7900] gap-5 py-[30px] px-5 flex flex-wrap justify-between">
      <div className="min-w-[150px] flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg"> Contact Us</h3>
        <p className="text-white text-sm">
          {" "}
          Please Contact us at admin@supashop.com
        </p>
        <img src={logo} className="w-[100px]" alt="" />
      </div>
      <div className="min-w-[100px] flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg"> Footer #1</h3>
        <Link to="/about" className="text-white text-sm">
          About
        </Link>
        <Link to="/about" className="text-white text-sm">
          Home
        </Link>
        <div className="flex gap-2 ">
          <X />
          <Facebook />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className="min-w-[100px] flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg"> Footer #1</h3>
        <Link to="/about" className="text-white text-sm">
          About
        </Link>
        <Link to="/about" className="text-white text-sm">
          Home
        </Link>
      </div>
      <div className="min-w-[100px] flex flex-col gap-2">
        <FaArrowRightFromBracket />
      </div>
    </div>
  );
};

export default Footer;