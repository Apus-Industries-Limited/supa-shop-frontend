import logo from "../assets/image/logo3.png";
import search from "../assets/image/search.png";
import setting from "../assets/image/setting.png";
import { Close } from "@mui/icons-material";
import cart from "../assets/image/cart.png";
import { Link } from "react-router-dom";
import "../styles/customMediaQuery.css";
import { useState } from "react";
import menuBar from "../assets/image/menuBar.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[13vh] bg-white flex flex-row-reverse md:flex-row w-screen justify-between items-center px-5">
      <img src={cart} alt="" className="flex md:hidden"/>
      <img src={logo} alt="Logo" className="w-1/2 md:w-[150px]" />
      <div className="flex customfade text-neutral-600 gap-3 ">
        <Link to="/home">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/home">Shop</Link>
        <Link to="/home">Checkout </Link>
        <Link to="/home">Wishlist</Link>
        <Link to="/home">Account</Link>
      </div>
      <div className="hidden  md:flex justify-between gap-5">
        <div className="relative flex  items-center ">
          <img src={search} alt="" className="absolute left-3" />
          <input
            type="search"
            name="search"
            className="rounded-xl p-1 border-neutral-500 pl-10 w-[200px] text-neutral-400 "
            placeholder="Search here.."
          />
        </div>
        <img src={setting} alt="" />
        <img src={cart} alt="" />
      </div>
      <div className="absolute w-screen block md:hidden transition duration-300">
        <div
          className={`fixed p-10 bg-white flex flex-col text-neutral-600 gap-8 top-0 ${
            isOpen ? " left-[-100%]" : "left-0"
          } h-screen w-1/2 transition duration-300`}
        >
          <Close className="text-neutral-600" onClick={toggleIsOpen} />
          <Link to="/home" className="border-b ">
            Home
          </Link>
          <Link to="/home" className="border-b ">
            About
          </Link>
          <Link to="/home" className="border-b ">
            Shop
          </Link>
          <Link to="/home" className="border-b ">
            Checkout{" "}
          </Link>
          <Link to="/home" className="border-b ">
            Wishlist
          </Link>
          <Link to="/home">Account</Link>
        </div>
      </div>
      <div className="flex  md:hidden text-neutral-600 ">
        <img
          src={menuBar}
          alt="menuBar"
          onClick={toggleIsOpen}
          className="w-[30px]"
        />
      </div>
    </div>
  );
};

export default Header;
