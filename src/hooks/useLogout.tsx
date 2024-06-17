import axios from "../utils/axios";
import { toastMsg } from "../utils/toast";
import useBuyerContext from "./useBuyerContext";

const useLogout = () =>
{
  const { setUser } = useBuyerContext()
  const logout = async () =>
  {
    setUser( {} );
    try {
      const response = await axios( '/logout', {
        withCredentials: true
      })
      toastMsg("info", response.data.message)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err)
      toastMsg("error", err?err.message:"Failed to logout")
    }
  }

  return logout
}

export default useLogout