import { useCallback } from "react"
import axios from "../utils/axios"
import useBuyerContext from "./useBuyerContext"


const useRefreshToken = () => {
  const {setUser} = useBuyerContext()
  const refresh = useCallback(async () => {
    
    try {
      const response = await axios.get('/refresh', {
        withCredentials:true
      })
      const accessToken = response.data.accessToken
      setUser(response.data)
      console.log(response.data)
      return accessToken;
    } catch (e) {
      console.error(e)
    }
  },[setUser])

  return refresh;
}

export default useRefreshToken
