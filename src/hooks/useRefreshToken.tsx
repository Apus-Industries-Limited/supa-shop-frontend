import { useCallback } from "react"
import axios from "../utils/axios"
import useBuyerContext from "./useBuyerContext"
import { DEV_URL as url } from "../utils/axios";


const useRefreshToken = () => {
  const {setUser} = useBuyerContext()
  const refresh = useCallback(async () => {
    
    try {
      const response = await axios.get('/refresh', {
        withCredentials:true
      })
      const accessToken = response.data.accessToken
      setUser({...response.data, dp: `${response.data.dp !== null ? `${url}/images/user/${response.data.dp}` : ""}`})
      return accessToken;
    } catch (e) {
      console.error(e)
    }
  },[])

  return refresh;
}

export default useRefreshToken
