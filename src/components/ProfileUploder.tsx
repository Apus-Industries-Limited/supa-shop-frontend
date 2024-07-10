/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import {DEV_URL as url } from "../utils/axios";
import Avatar from "react-avatar-edit"
import {  useState } from "react";
import { toastMsg } from "../utils/toast";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useBuyerContext from "../hooks/useBuyerContext";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  username: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileUploder = ({ isOpen, onOpenChange, username,setLoading }: Props) => {
  const {setUser,user} = useBuyerContext()
  const axiosPrivate = useAxiosPrivate()
  const src = ""
  const navigate = useNavigate()
  
  const [preview, setPreview] = useState<string | null>(null)
  const onCloseEditor = () => { setPreview(null) };

  const onCrop = (view: string) => {
    setPreview(view)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBeforeFileLoad = (elem:any) => {
    if (elem.target.files[0].size > 716800) {
      toastMsg("error", "File to large")
      elem.target.value = ""
    }
  }

  const handleUpload = async (onClose:void) => {
    if (preview) {
      const blob = await (await fetch(preview)).blob();
      const formData = new FormData();
      formData.append("dp", blob, `${username}.webp`);
      try {
        setLoading(true)
        const res = await axiosPrivate.post('/profile/dp', formData, {
          headers: {
            "Content-Type":"multipart/form-data"
          }
        })
        const result = await res.data
        toastMsg("success", result.message)
        setUser({...user,dp:`${url}/images/user/${result.profile}`})
        onClose
        onCloseEditor();
        navigate('/profile')
      } catch (e:any) {
        console.error(e)
        toastMsg("error",e.message)
      } finally {
        setLoading(false)
      }
    } else {
      toastMsg('error',"Failed to upload image")
    }
  }
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Profile
              </ModalHeader>
              <ModalBody className="flex justify-center items-center">
                <Avatar width={390} height={390} onCrop={onCrop} onClose={onCloseEditor} onBeforeFileLoad={onBeforeFileLoad} src={src} />
              </ModalBody>
              <ModalFooter>
                <Button className="bg-red-500 text-white" onClick={() => {
                  onClose();
                  onCloseEditor();
                }}>Close</Button>
                <Button color="primary" onClick={()=>handleUpload(onClose())}>Save</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProfileUploder
