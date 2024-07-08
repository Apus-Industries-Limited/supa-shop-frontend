import profile from "../assets/react.svg"
import { BsChevronRight, BsEnvelopeFill, BsPersonFill, BsPhoneFill } from "react-icons/bs"
import { FaInfoCircle } from "react-icons/fa"
import { FaArrowRightFromBracket, FaBoxOpen, FaCreditCard, FaLocationDot,FaMapLocation, FaUser,FaBell, FaHeadphones } from "react-icons/fa6"
import MobileHeader from "../components/MobileHeader"
import Header from "../components/Header"

const Profile = () => {
  const personal = [
    {
      icon: <FaBoxOpen className="me-2" />,
      name: "my Orders"
    },
    {
      icon: <FaUser className="me-2"/>,
      name: "My Details"
    },
    {
      icon: <FaMapLocation className="me-2"/>,
      name: "my address"
    },
    {
      icon: <FaCreditCard className="me-2"/>,
      name: "payment methods"
    },
    {
      icon: <FaBell className="me-2"/>,
      name: "Notification"
    }
  ] 

  const information = [
    {
      icon: <FaInfoCircle className="me-2" />,
      title:"FAQ's"
    },
    {
      icon: <FaHeadphones className="me-2" />,
      title:"Help Center"
    }
  ]
  return (
    <section className="">
      <Header/>
      <MobileHeader title={"Profile"}/>
      <div className="container hidden md:px-10 md:flex flex-col justify-center mx-auto items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <img src={profile} alt="User profile" className="me-2" width={50} height={50} />
            <div>
              <p className="text-2xl text-[#ff7900] dark:text-[#ffa14d]">Buyers name</p>
              <p className="text-small">online</p>
            </div>
          </div>
          <p className="text-4xl capitalize text-[#ff7900] dark:text-[#ffa14d]">About me</p>
          <button className="bg-[#ff7900]  py-2 px-4 rounded-lg font-bold text-[#eeeeee] hover:bg-[#b35500]">Edit profile</button>
        </div>
        <div className=" container mx-auto grid grid-cols-2 gap-10 my-32 align-middle px-16">
          <div className="flex items-center">
            <BsPersonFill className="bg-[#ff7900]  dark:text-[#fefefe] text-[#eeeeee] w-12 h-12 p-2 rounded-md block me-3" />
            <div>
              <p className="text-lg font-bold">@buyer username</p>
              <p className="text-small font-thin capitalize">username</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsEnvelopeFill className="bg-[#ff7900]  dark:text-[#fefefe] text-[#eeeeee] w-12 h-12 p-2 rounded-md block me-3" />
            <div>
              <p className="text-lg font-bold">example@gmail.com</p>
              <p className="text-small font-thin capitalize">E-mail Address</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsPhoneFill className="bg-[#ff7900]  dark:text-[#fefefe] text-[#eeeeee] w-12 h-12 p-2 rounded-md block me-3" />
            <div>
              <p className="text-lg font-bold">+123-456-7890</p>
              <p className="text-small font-thin capitalize">phone number</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="bg-[#ff7900]  dark:text-[#fefefe] text-[#eeeeee] w-12 h-12 p-2 rounded-md block me-3" />
            <div>
              <p className="text-lg font-bold">123, somewhere on earth, earth,123456</p>
              <p className="text-small font-thin capitalize">Address</p>
            </div>
          </div>
        </div>
        <div className="w-full text-start">
          <button className="flex items-center text-lg text-[#ff7900]">
            <FaArrowRightFromBracket className=" rotate-180 me-4"/>
            Log Out
          </button>
        </div>
      </div>
      {/* Mobile Deign */}
      <div className="md:hidden px-6 mt-6">
        <div>
          <p className="text-xl font-bold capitalize mb-2">personal</p>
          {personal.map(item => (
            <div key={personal.indexOf(item)} className="my-5">
              <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#ff7900] hover:text-[#eeeeee] my-3">
                {item.icon}
                <p className="capitalize">{item.name}</p>
                <div className="grid ml-auto place-items-center justify-self-end">
                  <div
                    className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap">
                    <span className="">
                      <BsChevronRight/>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-50 "/>
            </div>
          ))}
          <p className="text-xl font-bold capitalize mb-2 mt-5">Information</p>
          {information.map(item => (
            <div key={information.indexOf(item)} className="my-5">
              <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#ff7900] hover:text-[#eeeeee] my-3">
                {item.icon}
                <p className="capitalize">{item.title}</p>
                <div className="grid ml-auto place-items-center justify-self-end">
                  <div
                    className="relative grid items-center px-2 py-1 font-sans text-xs font-bold  uppercase rounded-full select-none whitespace-nowrap">
                    <span className="">
                      <BsChevronRight/>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-50 "/>
            </div>
          ))}
        </div>
        <div className="mt-5 pb-3">
          <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#ff7900] text-red-500 hover:text-[#eeeeee]">
            <FaArrowRightFromBracket className=" rotate-180 me-4"/>
            Log Out
            <div className="grid ml-auto place-items-center justify-self-end">
              <div
                className="relative grid items-center px-2 py-1 font-sans text-xs font-bold  uppercase rounded-full select-none whitespace-nowrap">
                <span className="">
                  <BsChevronRight/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    </section>
  )
}

export default Profile
