import axios from "../utils/axios"
import useBuyerContext from "./useBuyerContext"


const useRefreshToken = () => {
  const {setUser} = useBuyerContext()
  const refresh = async () => {
    
    try {
      const response = await axios.get('/refresh')
      const accessToken = response.data.accessToken
      setUser(response.data)
      return accessToken;
    } catch (e) {
      console.error(e)
    }
  }

  return refresh;
}

export default useRefreshToken
