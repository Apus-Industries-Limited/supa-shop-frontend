/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Input, useDisclosure } from "@nextui-org/react"
import useBuyerContext from "../hooks/useBuyerContext"
import profile from "../assets/image/avatar.jpg"
import { BsAt, BsKey, BsPerson, BsTelephoneFill } from "react-icons/bs"
import { useState } from "react"
import { EditProfileData } from "../types/Formtypes"
import { CiLocationOn } from "react-icons/ci"
import { toastMsg } from "../utils/toast"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate } from "react-router-dom"
import Loading from "../components/animation/Loading"
import ProfileUploder from "../components/ProfileUploder"
import { Password } from "../types/Types"
import { PWD_REGEX } from "../utils/conatant";


const EditProfile = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const { user,setUser } = useBuyerContext()
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()
  const [formData, setFormData] = useState<EditProfileData>({
    name: user.name,
    username: user.username,
    phone_number: user.phone_number,
    address: user.address !== null ? user.address[user.address.length-1].address : ""
  });
  const [passwordForm, setPasswordForm] = useState<Password>({
    oldPassword: "",
    newPassword: "",
    confirmPassword:""
  })
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData , [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm({ ...passwordForm , [e.target.name]: e.target.value });
  };

  const handleCancle = () => {
    navigate('/profile')
  }

  const deleteProfileImage = async () => {
    try {
      const res = await axiosPrivate.delete('/profile/dp');
      toastMsg("success", res.data.message)
      setUser({ ...user, dp: "" })
      handleCancle()
    } catch (e:any) {
      if (!e?.response) {
        toastMsg("error","No server response")
      }
      if (e?.response.status === 400) {
        toastMsg("error", "User Id is required")
      }
      if (e?.response.status === 404) {
        toastMsg("error", "User or image was not found")
      }
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async () => {
    try {
      setLoading(true)
      const res = await axiosPrivate.patch(`/profile`, formData, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      const result = await res.data.user
      setUser({...user, name:result.name, username:result.username, phone_number:result.phone_number,address:result.address})
      toastMsg("success", res.data.message)
      setFormData({
        name: result.name,
      username: result.username,
      phone_number: result.phone_number,
        address: result.address !== null ? result.address[result.address.length-1].address : ""
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

  const updateUserPassword = async () => {
    const v1 = PWD_REGEX.test(passwordForm.newPassword);
    const v2 = PWD_REGEX.test(passwordForm.confirmPassword);


    if (!v1 || !v2) {
      toastMsg("error", 'Password must be 8 to 24 characters long which must include 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
      return;
    }

    if (passwordForm.newPassword === passwordForm.oldPassword) return toastMsg("error", "Old password must be different from old password");

    if (passwordForm.confirmPassword !== passwordForm.newPassword) {
      toastMsg("error", 'Password does not match ');
      return;
    }
    
    try {
      setLoading(true)
      const res = await axiosPrivate.put(`/profile`, passwordForm, {
        headers: {
          "Content-Type":"application/json",
        }
      })
      await res.data.user
      toastMsg("success", res.data.message);
      setPasswordForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
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
        <div className="container mx-auto">
          <p className="text-lg capitalize">user profile</p>
        <hr className="w-[6rem] my-3 border text-black"/>
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
              <Button color="default" className="ms-2 font-bold" onClick={deleteProfileImage}>Delete</Button>
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
          {/* Password Update */}
          <hr className="border my-10" />
          <p className="text-lg capitalize">Password Upate</p>
          <hr className="w-[6rem] my-3 border text-black"/>
          <div className="grid grid-cols-1 gap-[4rem] my-5">
            <Input labelPlacement="outside" label="Current Password" type="password" onChange={handlePasswordChange} startContent={<BsKey className="text-primary" size={18}/>} name="oldPassword" placeholder="Enter your old password" value={passwordForm.oldPassword}/>
            <Input labelPlacement="outside" label="New Password" type="password" onChange={handlePasswordChange} startContent={<BsKey className="text-primary" size={18}/>} name="newPassword" placeholder="Enter new password" value={passwordForm.newPassword} />
            <Input labelPlacement="outside" label="Confirm Password" type="password" onChange={handlePasswordChange} startContent={<BsKey className="text-primary" size={18}/>} name="confirmPassword" placeholder="Enter preferred phone number" value={passwordForm.confirmPassword} />
          </div>
          <div className="flex items-center justify-end mx-auto mt-12">
            <Button color="default" className="me-2 font-bold" onClick={handleCancle}>Cancel</Button>
            <Button isLoading={loading} isDisabled={loading} color="primary" className="ms-2" onClick={updateUserPassword}>Save Changes</Button>
          </div>
        </div>
      </div>
      {/* End of Tablet and Desktop */}

      {/* Mobile View */}
      <div className="md:hidden container px-4 mx-auto">
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
      <ProfileUploder isOpen={isOpen} onOpenChange={onOpenChange} username={user.username} setLoading={setLoading} />
    </div>
  )
}

export default EditProfile
