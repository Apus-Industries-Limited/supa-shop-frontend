import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { toastMsg } from "../utils/toast";
import useBuyerContext from "./useBuyerContext";

const useLogout = () =>
{
  const navigate = useNavigate()
  const { setUser } = useBuyerContext()
  const logout = async () =>
  {
    
    try {
      const response = await axios.get('/logout')
      if (response.status === 204 || response.status === 202) {
        toastMsg("info", "Logout successful");
        navigate('/');
        setUser({});
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err)
      toastMsg("error", err?err.message:"Failed to logout")
    }
  }

  return logout
}

export default useLogout