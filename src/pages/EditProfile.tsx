/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Input, useDisclosure } from "@nextui-org/react"
import useBuyerContext from "../hooks/useBuyerContext"
import profile from "../assets/image/avatar.jpg"
import { BsAt, BsPerson, BsTelephoneFill } from "react-icons/bs"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData , [e.target.name]: e.target.value });
  };

  const handleCancle = () => {
    navigate('/profile')
  }

  const updateUser = async () => {
    try {
      setLoading(true)
      const res = await axiosPrivate.put(`/profile/${user?.id}`, formData, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      const result = await res.data.user
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
      <div className="min-h-screen hidden md:block mx-auto py-12 w-full">
        <p className="text-lg capitalize">user profile</p>
        <hr className="w-[6rem] my-3 border text-black"/>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Avatar src={user?.dp ? user.dp : profile} className="w-28 h-28 me-3" />
              <div>
                <p className="text-2xl capitalize">{formData.name}</p>
                <p className="text-neutral-500 text-tiny">{user?.bio ? user.bio : "Our esteem user" }</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button color="primary" className="me-2 font-bold" onClick={onOpen}>Upload New Photo</Button>
              <Button color="default" className="ms-2 font-bold">Delete</Button>
            </div>
          </div>

          <hr className="border my-10" />
          <div className="grid grid-cols-2 gap-[5rem] my-5">
            <Input labelPlacement="outside" label="Name" type="" onChange={handleChange} startContent={<BsPerson className="text-primary" size={18}/>} name="name" placeholder="Enter your name" value={formData.name}/>
            <Input labelPlacement="outside" label="Username" type="" onChange={handleChange} startContent={<BsAt className="text-primary" size={18}/>} name="username" placeholder="Enter preferred username" value={formData.username} />
            <Input labelPlacement="outside" label="Phone Number" type="" onChange={handleChange} startContent={<BsTelephoneFill className="text-primary" size={18}/>} name="phone_number" placeholder="Enter preferred phone number" value={formData.phone_number} />
            <Input labelPlacement="outside" label="Address" type="" onChange={handleChange} startContent={<CiLocationOn className="text-primary" size={18}/>} name="address" placeholder="Enter your address" value={formData.address}/>
          </div>
          <div className="flex items-center justify-end mx-auto mt-12">
            <Button color="default" className="me-2 font-bold" onClick={handleCancle}>Cancel</Button>
            <Button isLoading={loading} isDisabled={loading} color="primary" className="ms-2" onClick={updateUser}>Save Changes</Button>
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
