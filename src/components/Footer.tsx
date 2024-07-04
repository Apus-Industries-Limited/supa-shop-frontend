import { BsArrowDown, BsCart3, BsEnvelope, BsFacebook, BsHeart, BsHouse, BsInstagram, BsLinkedin, BsPersonCircle, BsSend, BsShop, BsTiktok, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Icon from "../assets/image/logo4.png"
import { Avatar, Button, Image, Input } from "@nextui-org/react";
import useBuyerContext from "../hooks/useBuyerContext";
import avatar from "../assets/image/avatar.jpg";


const MobileFooter = () => {
  const {user} = useBuyerContext()
  return (
    <footer className="rounded-t-2xl bg-neutral-100 md:hidden">
      {/* Mobile Footer */}
      <div className="flex justify-evenly items-center md:hidden py-8">
        <Link to="/" className="text-center">
          <BsHouse className="mx-auto text-[#ff7900]" size={25} />
          <p className="text-xs text-center">Home</p>
        </Link>
        <Link to="/shop" className="text-center">
          <BsShop className="mx-auto text-[#ff7900]" size={25} />
          <p className="text-xs text-center">Shops</p>
        </Link>
        <Link to="/wishlist" className="text-center">
          <BsHeart className="mx-auto text-[#ff7900]" size={25} />
          <p className="text-xs text-center">Saved</p>
        </Link>
        <Link to="/cart" className="text-center">
          <BsCart3 className="mx-auto text-[#ff7900]" size={25} />
          <p className="text-xs text-center">Cart</p>
        </Link>
        <Link to={user?.name ? '/profile' : "/login"} className="text-center">
          {!user?.name ? (
            <>
              <BsPersonCircle className="mx-auto text-[#ff7900]" size={25} />
              <p className="text-xs text-center">Login</p>
            </>
          ) : (
              <>
                {user?.dp ? (
              <Avatar src={ user.dp } size="sm" className="mx-auto"/>
            ) : (
              <Avatar src={avatar} size="sm" className="mx-auto"/>
            )}
                <p className="text-xs text-center">Account</p>
              </>
          )}
        </Link>
      </div>
      {/* Desktop Footer */}
    </footer>
  );
};

const Footer = () => {
  const {user} = useBuyerContext()
  return (
    <footer className="hidden md:block bg-[#2a2a2a] text-white mx-auto p-8">
      <div className="flex justify-evenly items-center">
        <Image src={ Icon } />
        <p className="text-3xl lg:text-4xl font-mont-bold flex-grow uppercase text-center">shopping with comfort</p>
      </div>
      <div className="flex justify-between my-12">
        <div className="me-4">
          <p className="text-md lg:text-lg uppercase mb-4">contact us</p>
          <p>If you have any question, you can kindly contact us through our socials </p>
          <p className="my-3">(234)9029566734</p>
          <Link className="mb-3" to="mailto:joinsupashop@gmail.com">joinsupashop@gmail.com</Link>

          <div className="flex justify-between items-center my-4">
            <Link to="https://x.com/joinsupashop" target="_blank" className="p-2 bg-white text-primary rounded-full">
              <BsTwitterX size={20}/>
            </Link>
            <Link to="https://facebook.com/61558748537592" target="_blank" className="p-2 bg-white text-primary rounded-full">
              <BsFacebook size={20}/>
            </Link>
            <Link to="https://instagram.com/joinsupashop" target="_blank" className="p-2 bg-white text-primary rounded-full">
              <BsInstagram size={20}/>
            </Link>
            <Link to="https://linkedin.com/in/joinsupashop" target="_blank" className="p-2 bg-white text-primary rounded-full">
              <BsLinkedin size={20}/>
            </Link>
            <Link to="https://tiktok.com/@joinsupashop" target="_blank" className="p-2 bg-white text-primary rounded-full">
              <BsTiktok size={20}/>
            </Link>
          </div>
        </div>
        <div className="mx-4">
          <p className="text-md lg:text-lg uppercase mb-4">quick links</p>
          <Link to="/" className="my-2 block">Home</Link>
          <Link to="/about" className="my-2 block">About</Link>
          <Link to="/shop" className="my-2 block">Shop</Link>
          <Link to="/cart" className="my-2 block">Cart</Link>
          <Link to="/wishlist" className="my-2 block">Wishlist</Link>
          <Link to={user?.name ? "/profile" : "/login"} className="my-2 block">Account</Link>
        </div>
        <div className="mx-4">
          <p className="text-md lg:text-lg uppercase mb-4">quick shopping</p>
          <Link to="/new-deals" className="my-2 block">New Deals</Link>
          <Link to="/flash-sales" className="my-2 block">Flash Sales</Link>
          <Link to="/new-product" className="my-2 block">New Arrival</Link>
          <Link to="/limited-stock" className="my-2 block">Limited Stock</Link>
          <Link to="/partnership-deal" className="my-2 block">Partnership Deals</Link>
          <Link to={user?.name ? "/profile" : "/login"} className="my-2 block">Account</Link>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-white text-black rounded-full h-32 w-32 flex flex-col items-center justify-center mb-8">
            <p className="uppercase">News <br /> leter</p>
            <BsArrowDown size={30}/>
          </div>
          <p className="uppercase text-end mb-4">SUBSCRIBE TO OUR NEWS LETTER FOR QUICK NOTIFICATION FROM YOUR FAVORITES</p>
          <Input type="email" variant="underlined" placeholder="Enter your email" color="primary" startContent={ <BsEnvelope size={30} color="#ff7900"/> } endContent={<Button size="sm" color="primary"><BsSend size={20}/></Button>} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
export {MobileFooter};