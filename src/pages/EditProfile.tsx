/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Input, useDisclosure } from "@nextui-org/react"
import useBuyerContext from "../hooks/useBuyerContext"
import profile from "../assets/image/avatar.jpg"
import { BsAt, BsPencilFill, BsPerson, BsTelephoneFill } from "react-icons/bs"
import { useState } from "react"
import { EditProfileData } from "../types/Formtypes"
import { CiLocationOn } from "react-icons/ci"
import { toastMsg } from "../utils/toast"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import ProfileUploder from "../components/ProfileUploder"


const EditProfile = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const { user,setUser } = useBuyerContext()
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()
  const [formData, setFormData] = useState<EditProfileData | any>({
    name: user.name,
    username: user.username,
    phone_number: user.phone_number,
    address: user.address[0]
  });
  const [loading, setLoading] = useState<boolean>(false);
  console.log(user)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData , [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    try {
      setLoading(true)
      const res = await axiosPrivate.put(`/profile/${user?.id}`, formData, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      const result = await res.data.user
      console.log(result)
      setUser({...user, name:result.name, username:result.username, phone_number:result.phone_number,address:result.address})
      toastMsg("success", res.data.message)
      navigate('/profile')
      setFormData({
        name: "",
      username: "",
      phone_number: "",
      address: ""
      })
    } catch (e:any) {
      if (!e?.response) {
        toastMsg("error","No server response")
      }
      if (e?.response.status === 400) {
        toastMsg("error", "User Id is required")
      }
      if (e?.response.status === 404) {
        toastMsg("error", "User not found")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/*Tablet and  Desktop View */}
      <div className="min-h-screen hidden md:flex border justify-center items-center w-full">
        <div className="container">
          <div className="relative  mb-10 w-[32rem] mx-auto">
            <Avatar src={user?.dp ? user.dp : profile} className="w-48 h-48 relative mx-auto" />
            <div className="absolute bg-primary bottom-0 text-white p-4 rounded-full right-40 hover:bg-[#ffa14d]" role="button" onClick={onOpen}>
              <BsPencilFill size={26} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[5rem] my-5">
            <Input color="primary" type="" variant="underlined" onChange={handleChange} endContent={<BsPerson className="text-primary" size={18}/>} name="name" placeholder="Enter your name" value={formData.name}/>
            <Input color="primary" type="" variant="underlined" onChange={handleChange} endContent={<BsAt className="text-primary" size={18}/>} name="username" placeholder="Enter preferred username" value={formData.username} />
            <Input color="primary" type="" variant="underlined" onChange={handleChange} endContent={<BsTelephoneFill className="text-primary" size={18}/>} name="phone_number" placeholder="Enter preferred phone number" value={formData.phone_number} />
            <Input color="primary" type="" variant="underlined" onChange={handleChange} endContent={<CiLocationOn className="text-primary" size={18}/>} name="address" placeholder="Enter your address" value={formData.address}/>
          </div>
          <div className="w-1/4 mx-auto mt-12">
            <Button isLoading={loading} isDisabled={loading} color="primary" className="w-full" onClick={updateUser}>Update</Button>
          </div>
        </div>
      </div>
      {/* End of Tablet and Desktop */}

      {/* Mobile View */}
      <div className="md:hidden container px-4">
        <div className="my-5 flex flex-col items-center justify-center">
          <Avatar src={user?.dp ? user.dp : profile} className="w-24 h-24 mx-auto" />
          <p className="text-capitalize text-center font-bold text-xl">{formData.name}</p>
          <button className="text-tiny text-primary capitalize" onClick={onOpen}>change profile picture</button>
        </div>
        <div className="my-6 grid grid-cols-1 gap-5">
          <Input labelPlacement="outside" onChange={handleChange} label="Name" placeholder="Enter preferred name" value={formData.name} name="name"/>
          <Input labelPlacement="outside" onChange={handleChange} label="Username" placeholder="Enter preferred username" value={formData.username} name="username"/>
          <Input labelPlacement="outside" onChange={handleChange} label="Mobile Number" placeholder="Enter preferred mobile number" value={formData.phone_number} name="phone_number"/>
        </div>
        <Button isLoading={loading} isDisabled={loading} color="primary"className="w-full" radius="full" onClick={updateUser}>Save profile change</Button>
      </div>
      <Loading loading={loading} />
      <ProfileUploder isOpen={isOpen} onOpenChange={onOpenChange} id={user.id} username={user.username} />
    </div>
  )
}

export default EditProfile
