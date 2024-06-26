import axios from "axios"

const DEV_URL:string = 'https://supa-shop-backend.onrender.com'
export default axios.create( {
      baseURL: DEV_URL,
})

export const axiosPrivate = axios.create({
      baseURL: DEV_URL,
      headers: {
            "Content-Type":"application/json"
      }
})