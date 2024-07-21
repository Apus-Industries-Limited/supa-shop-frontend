import { Bounce, ToastOptions, toast } from "react-toastify"

const toastConfig : ToastOptions = {
  position: "top-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
      theme: "light",
  transition: Bounce
}

export const toastMsg = (status:"error" | "success" | "info" | "warning", msg:string) => {
      if (status === "success") {
            return toast.success(msg, toastConfig)
      }
      if (status === "info") {
            return toast.info(msg, toastConfig)
      } 
      if (status === "warning") {
            return toast.warning(msg, toastConfig)
      }
      if (status === "error") {
            return toast.error(msg, toastConfig)
      }
}