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

export const toastMsg = (status:string, msg:string) => {
      if (status.toLocaleLowerCase() === "success") {
            return toast.success(msg, toastConfig)
      }
      if (status.toLocaleLowerCase() === "info") {
            return toast.info(msg, toastConfig)
      } 
      if (status.toLocaleLowerCase() === "warning") {
            return toast.warning(msg, toastConfig)
      }
      if (status.toLocaleLowerCase() === "error") {
            return toast.error(msg, toastConfig)
      }
}