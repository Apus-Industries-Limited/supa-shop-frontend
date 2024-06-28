import { Link, useLocation } from "react-router-dom";
import Icon from "../assets/image/6.png"
import "../styles/customMediaQuery.css";
import { useState } from "react";
import { Badge, Button, Image, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem,Avatar, User } from "@nextui-org/react"
import { BsBell, BsCart3, BsGear, BsList, BsMoon, BsPersonCircle, BsQuestionCircle, BsSearch, BsSunFill, BsXLg } from "react-icons/bs";
import useBuyerContext from "../hooks/useBuyerContext";
import avatar from "../assets/image/avatar.jpg";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useBuyerContext()
  const {pathname} = useLocation()

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen);
    console.log(pathname)
  };

  const mobileLinks = [
    {
      name: "Apparel",
      link: "/apparel"
    },
    {
      name: "Home & Furniture",
      link: "/furniture"
    },
    {
      name: "Electronics",
      link: "/electronics"
    },
    {
      name: "Beauty & Personal Care",
      link: "/beauty"
    },
    {
      name: "Sport | Outdoors",
      link: "/sport"
    },
    {
      name: "Toy | Games",
      link: "/game"
    },
    {
      name: "Health | Wellness",
      link: "/health"
    },
    {
      name: "Jewelry | Accessories",
      link: "/accessories"
    },
    {
      name: "Automobile",
      link: "/automobile"
    },
    {
      name: "Groceries",
      link: "/food"
    }
  ]

  return (
    <Navbar className="shadow px-3" position="sticky" isBlurred maxWidth="full">
      
      <NavbarBrand>
        <Link to="/" className="md:flex hidden items-center">
          <Image src={Icon} height={36} width={36} />
          <p className="font-bold text-inherit font-mont hidden md:inline-block">SupaShop</p>
        </Link>
        {user?.name ? (
          <Link to="/profile" className="flex md:hidden items-center">
            <User name={ user.username } description="Let's get you shopping today!" avatarProps={{ src: user.dp? user.dp : avatar  }} />
          </Link>
        ) : (
            <Link to="/login" className="flex md:hidden items-center">
          <BsPersonCircle className="rounded-full text-[#ff7900] shadow-xl" size={26}/>
        </Link>
        )}
      </NavbarBrand>
      
      {/* Design for Desktop View */}
      <NavbarContent as="div" className="hidden md:flex gap-2" justify="center">
        <NavbarItem className={pathname === "/" ? "bg-[#ff7900] text-white rounded-s-full rounded-e-full py-1 px-2" : "px-2"}>
          <Link  to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className={pathname === "/categories" ? "bg-[#ff7900] text-white rounded-s-full rounded-e-full py-1 px-2" : "px-2"}>
          <Link to="/categories" aria-current="page">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem className={pathname === "/shops" ? "bg-[#ff7900] text-white rounded-s-full rounded-e-full py-1 px-2" : "px-2"}>
          <Link  to="/shops">
            Shops
          </Link>
        </NavbarItem>
        <NavbarItem className={pathname === "/wishlist" ? "bg-[#ff7900] text-white rounded-s-full rounded-e-full py-1 px-2" : "px-2"}>
          <Link  to="/wishlist">
            Wishlist
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center hidden md:flex" justify="end">
        <Input classNames={{ 
          base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
          placeholder="Type to search"
          size="sm"
          startContent={
            <BsSearch size={18}/>
          }
          type="search"
        />
        <NavbarItem>
          <Link to='/settings'>
            <div className=" p-1 rounded-full bg-[#FF7900] text-white">
              <BsGear size={24} />
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user?.name ? (
            <Link to="/profile" >
              {user.dp ? (
              <Avatar src={ user.dp } />
            ) : (
              <Avatar src={avatar}/>
            )}
            </Link>
          ): (
              <Link to='/login'>
                <BsPersonCircle size={24} className="rounded-full text-[#FF7900]"/>
              </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          <Link to="/cart">
            <Badge content="70" color="primary">
              <BsCart3 size={24}/>
            </Badge>
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Design for Mobile View */}
      <NavbarContent justify="end" className="md:hidden">
        <NavbarItem>
          <BsSearch size={20}/>
        </NavbarItem>
        <NavbarItem>
          <BsBell size={20}/>
        </NavbarItem>
        <NavbarItem as="button" onClick={toggleIsOpen}>
          <BsList size={20}/>
        </NavbarItem>
      </NavbarContent>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-20 h-screen md:hidden">
          <div className={isOpen ? "md:hidden absolute top-0 left-0 z-10 w-3/4 bg-white shadow-md h-full px-3 py-4 flex flex-col animate-slideIn overflow-x-auto" : "md:hidden absolute top-0 left-0 z-10 w-3/4 bg-white shadow-md h-full px-3 py-4 flex flex-col animate-slideOut"}>
            <div className="flex sticky md:hidden mb-4 items-center">
              {user?.name ? (
                <User name={ user.name } description={user.email} avatarProps={{ src: user.dp? user.dp : avatar  }} />
              ) : (
                  <Link to="/login"className="flex items-center">
                    <BsPersonCircle size={36} className="me-2 text-[#ff7900]" />
                    <p className="font-bold">Login</p>
                  </Link>
              )}
              <BsXLg size={20} className="ms-auto" role="button" onClick={toggleIsOpen}/>
            </div>
            <div className="grid grid-col-1 mt-3 mb-2 gap-3 pb-6">
              {mobileLinks.map(item => (
                <Link role="button" onClick={toggleIsOpen} key={mobileLinks.indexOf(item)} to={item.link} className={
                  item.link === pathname ? "p-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-300 hover:font-semibold border-l-3 border-l-[#ff7900]" : "p-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-300 hover:font-semibold border-l-3 border-l-gray-400" 
                }>
                  <p className="my-auto">{item.name}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto">
              <hr />
              <div className="flex items-center">
                <BsQuestionCircle  className="me-2 text-medium"/>
                <p>color scheme</p>
              </div>
              <div className="bg-neutral-300 rounded-full p-1 w-full">
                <Button radius="full" className="bg-white shadow-lg w-1/2 p">
                  <BsSunFill className="text-[#ff7900] font-bold"/>
                  Light
                </Button>
                <Button className="shadow-lg w-1/2">
                  <BsMoon/>
                  Dark
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
