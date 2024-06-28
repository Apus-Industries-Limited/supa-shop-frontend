import { BsCart3, BsFacebook, BsHeart, BsHouse, BsInstagram, BsLinkedin, BsPersonCircle, BsSearch, BsTiktok, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Icon from "../assets/image/logo5.png"
import { Image } from "@nextui-org/react";


const MobileFooter = () => {
  return (
    <footer className="rounded-t-2xl bg-neutral-100 md:hidden">
      {/* Mobile Footer */}
      <div className="flex justify-evenly md:hidden py-8">
        <Link to="/" className="text-center">
          <BsHouse className="mx-auto text-[#ff7900]" size={20} />
          <p className="text-xs text-center">Home</p>
        </Link>
        <Link to="/" className="text-center">
          <BsSearch className="mx-auto text-[#ff7900]" size={20} />
          <p className="text-xs text-center">Categories</p>
        </Link>
        <Link to="/" className="text-center">
          <BsHeart className="mx-auto text-[#ff7900]" size={20} />
          <p className="text-xs text-center">Saved</p>
        </Link>
        <Link to="/" className="text-center">
          <BsCart3 className="mx-auto text-[#ff7900]" size={20} />
          <p className="text-xs text-center">Cart</p>
        </Link>
        <Link to="/profile" className="text-center">
          <BsPersonCircle className="mx-auto text-[#ff7900]" size={20} />
          <p className="text-xs text-center">Account</p>
        </Link>
      </div>
      {/* Desktop Footer */}
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 p-8 bg-[#ff7900] text-white">
      <div>
        <p className="md:text-xl font-bold">Contact Us</p>
        <p>If you have any questions, please contact us at <a href="mailto:joinsupashop@gmail.com">joinsupashop@gmail.com</a></p>
        <div className="mt-3 grid grid-cols-5">
          <Link rel="noopener noreferrer" to="https://www.instagram.com/joinsupashop" target="_blank">
            <BsInstagram />
          </Link>
          <Link rel="noopener noreferrer" to="https://www.facebook.com/p/SupaShop-61558748537592/" target="_blank">
            <BsFacebook />
          </Link>
          <Link rel="noopener noreferrer" to="https://www.linkedin.com/in/joinsupashop" target="_blank" >
            <BsLinkedin />
          </Link>
          <Link rel="noopener noreferrer" to="https://www.twitter.com/joinsupashop" target="_blank">
            <BsTwitterX />
          </Link>
          <Link rel="noopener noreferrer" to="https://www.tiktok.com/@joinsupashop" target="_blank">
            <BsTiktok />
          </Link>
        </div>
      </div>
      <div>
        <p className="md:text-xl font-bold">About Us</p>
        <p>SupaShop is a shopping brand that sells electronics, gadgets, clothes, shoes, accessories and others for everyone. We are committed to providing high-quality products at affordable prices. Our goal is to make shopping simplified to everyone.</p>
      </div>
      <div className="flex flex-col">
        <p className="md:text-xl font-bold">Make Money with SupaShop</p>
        <Link className=" underline hove:font-bold text-medium" to="/seller">Sell on SupaShop</Link>
        <Link className=" underline hove:font-bold text-medium" to="/seller">Become a logistic Partner</Link>
        <Link className=" underline hove:font-bold text-medium" to="/consultant">Become a Sales Consultant</Link>
        <Link className=" underline hove:font-bold text-medium" to="/careers">SupaShop Careers</Link>
      </div>

      <div>
        <Image src={ Icon } width={300} height={300} />
      </div>
    </footer>
  )
}

export default Footer;
export {MobileFooter};