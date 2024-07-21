/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input} from "@nextui-org/react"
import { PWD_REGEX } from "../utils/conatant";
import { BsKey } from "react-icons/bs"
import { useState } from "react"
import { toastMsg } from "../utils/toast"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate } from "react-router-dom"
import Loading from "../components/animation/Loading"
import { Password } from "../types/Types"

const ChangePassword = () => {
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()
  const [formData, setFormData] = useState<Password>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData , [e.target.name]: e.target.value });
  };

  const handleCancle = () => {
    navigate('/profile')
  }

  const updateUser = async () => {
    const v1 = PWD_REGEX.test(formData.newPassword);
    const v2 = PWD_REGEX.test(formData.confirmPassword);


    if (!v1 || !v2) {
      toastMsg("error", 'Password must be 8 to 24 characters long which must include 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
      return;
    }

    if (formData.newPassword === formData.oldPassword) return toastMsg("error", "Old password must be different from old password");

    if (formData.confirmPassword !== formData.newPassword) {
      toastMsg("error", 'Password does not match ');
      return;
    }
    try {
      setLoading(true)
      const res = await axiosPrivate.put(`/profile`, formData, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      await res.data.user
      toastMsg("success", res.data.message)
      navigate('/profile')
      setFormData({
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
    {/* Desktop and Table */}
    <div className="min-h-screen mx-auto py-12 w-full">
        <div className="container mx-auto px-4">
          <p className="text-lg capitalize">Password Upate</p>
          <hr className="w-[6rem] my-3 border text-black"/>
          <div className="grid grid-cols-1 gap-[4rem] my-5">
            <Input labelPlacement="outside" label="Current Password" type="password" onChange={handleChange} startContent={<BsKey className="text-primary" size={18}/>} name="oldPassword" placeholder="Enter your old password" value={formData.oldPassword}/>
            <Input labelPlacement="outside" label="New Password" type="password" onChange={handleChange} startContent={<BsKey className="text-primary" size={18}/>} name="newPassword" placeholder="Enter new password" value={formData.newPassword} />
            <Input labelPlacement="outside" label="Confirm Password" type="password" onChange={handleChange} startContent={<BsKey className="text-primary" size={18}/>} name="confirmPassword" placeholder="Enter preferred phone number" value={formData.confirmPassword} />
          </div>
          <div className="flex items-center justify-end mx-auto mt-12">
            <Button color="default" className="me-2 font-bold" onClick={handleCancle}>Cancel</Button>
            <Button isLoading={loading} isDisabled={loading} color="primary" className="ms-2" onClick={updateUser}>Save Changes</Button>
          </div>
        </div>
      </div>
      {/* End of Tablet and Desktop */}
      <Loading loading={loading} />
    </div>
  )
}

export default ChangePassword
