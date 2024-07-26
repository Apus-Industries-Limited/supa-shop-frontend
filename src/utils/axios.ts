import axios from "axios"
export const DEV_URL: string =/*'https://supa-shop-backend.onrender.com'*/  'http://localhost:3500' 


export default axios.create( {
      baseURL: DEV_URL,
      headers: {
            "Content-Type":"application/json"
      },
      withCredentials:true
})

export const axiosPrivate = axios.create({
      baseURL: DEV_URL,
      withCredentials: true,
})