import profile from "../assets/image/avatar.jpg"
import { BsBoxSeam, BsChevronRight, BsHeart, BsPersonFill, BsPhoneFill } from "react-icons/bs"
import { FaArrowRightFromBracket, FaEnvelope, FaLocationDot } from "react-icons/fa6"
import useLogout from "../hooks/useLogout"
import useBuyerContext from "../hooks/useBuyerContext"
import { Avatar, User } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { LuPencilLine } from "react-icons/lu"
import { CiLocationOn } from "react-icons/ci"
import { IoKeyOutline } from "react-icons/io5"

const Profile = () => {
  const {user} = useBuyerContext()
  const logOut = useLogout()
  const personal = [
    {
      icon: <LuPencilLine className="me-2" size={20}/>,
      link: "edit",
      name: "Edit Profile"
    },
    {
      icon: <BsHeart className="me-2" size={20}/>,
      link: "wishlist",
      name: "Favorite"
    },
    {
      icon: <CiLocationOn className="me-2" size={20}/>,
      link: "address",
      name: "Location"
    },
    {
      icon: <BsBoxSeam className="me-2" size={20}/>,
      link: "order",
      name: "Orders"
    },
    {
      icon: <IoKeyOutline className="me-2" size={20}/>,
      link: "change-password",
      name: "Change password"
    }
  ] 

  // const information = [
  //   {
  //     icon: <FaInfoCircle className="me-2" />,
  //     title:"FAQ's"
  //   },
  //   {
  //     icon: <FaHeadphones className="me-2" />,
  //     title:"Help Center"
  //   }
  // ]
  return (
    <section className="">
      <div className="hidden md:px-2 lg:container lg:px-10 md:flex flex-col justify-center mx-auto items-center min-h-[60dvh] py-8">
        <div className="flex justify-between items-center w-full px-16">
          <User name={ user.name }  description="Online" avatarProps={{ src: user.dp? user.dp : profile  }}/>
          <p className="text-4xl capitalize text-[#ff7900]">About me</p>
          <button className="bg-[#ff7900]  py-2 px-4 rounded-lg font-bold text-[#eeeeee] hover:bg-[#b35500]">Edit profile</button>
        </div>
        <div className=" mx-auto grid grid-cols-2 gap-10 my-32 align-middle px-16">
          <div className="flex items-center w-full">
            <BsPersonFill size={40} className="bg-primary text-white p-2 me-2 rounded-lg" />
            <div>
              <p className="text-lg font-bold">{user?.username}</p>
              <p className="text-small font-thin capitalize text-gray-400">username</p>
            </div>
          </div>
          <div className="flex items-center w-full">
            <FaEnvelope size={40} className="bg-primary text-white p-2 me-2 rounded-lg" />
            <div>
              <p className="text-lg font-bold text-wrap">{user.email }</p>
              <p className="text-small font-thin capitalize text-gray-400">E-mail Address</p>
            </div>
          </div>
          <div className="flex items-center w-full">
            <BsPhoneFill size={40} className="bg-primary text-white p-2 me-2 rounded-lg" />
            <div>
              <p className="text-lg font-bold">{ user?.phone_number }</p>
              <p className="text-small font-thin capitalize text-gray-400">phone number</p>
            </div>
          </div>
          <div className="flex items-center w-full">
            <FaLocationDot size={40} className="bg-primary text-white p-2 me-2 rounded-lg" />
            <div>
              <p className="text-lg font-bold">{`Test Address`}</p>
              <p className="text-small font-thin capitalize text-gray-400">Address</p>
            </div>
          </div>
        </div>
        <div className="w-full text-start px-16">
          <button className="flex items-center text-lg text-[#ff7900]" onClick={logOut}>
            <FaArrowRightFromBracket className=" rotate-180 me-4"/>
            Log Out
          </button>
        </div>
      </div>
      {/* Mobile Deign */}
      <div className="md:hidden max-w-full px-2 mt-6">
        <div className="flex justify-center flex-col items-center mb-4">
          <Avatar src={user?.dp ? user.dp : profile} className="w-24 h-24 text-large" />
          <p className="font-bold text-xl text-center">{user?.name}</p>
          <p className="text-tiny font-thin text-center">{user?.email}</p>
        </div>
        <div>
          {personal.map(item => (
            <Link to={`/profile/${item.link}`} className="flex items-center border rounded-lg my-3 py-4 px-4">
              {item.icon}
              <p className="flex-grow">{item.name}</p>
              <BsChevronRight className="justify-self-end"/>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center my-4 text-primary" role="button" onClick={logOut}>
          <FaArrowRightFromBracket className="rotate-180 me-5" size={20}/>
          <p>Log out</p>
        </div>
      </div> 
      
    </section>
  )
}

export default Profile
