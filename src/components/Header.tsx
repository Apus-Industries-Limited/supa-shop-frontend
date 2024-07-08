import logo from "../assets/image/logo3.png";
import search from "../assets/image/search.png";
import setting from "../assets/image/setting.png";
import { Close } from "@mui/icons-material";
import cart from "../assets/image/cart.png";
import { Link } from "react-router-dom";
import "../styles/customMediaQuery.css";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen);
    console.log("biiiiii");
  };

  return (
    <div className="h-[13vh] bg-white flex w-screen justify-between items-center px-5">
      <img src={logo} alt="Logo" className="w-[150px]" />
      <div className="flex customfade text-neutral-600 gap-3 ">
        <Link to="/home">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/home">Shop</Link>
        <Link to="/home">Checkout </Link>
        <Link to="/home">Wishlist</Link>
        <Link to="/home">Account</Link>
      </div>
      <div className="hidden md:flexhidden md:flex justify-between gap-5">
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
      <div className="flex md:hidden text-neutral-600 ">
        <Menu onClick={toggleIsOpen} />
      </div>
      <div className="absolute w-screen transition duration-300">
        <div
          className={`fixed p-10 bg-white flex flex-col text-neutral-600 gap-8 top-0 ${
            isOpen ? " right-[-100%]" : "right-0"
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
    </div>
  );
};

export default Header;
