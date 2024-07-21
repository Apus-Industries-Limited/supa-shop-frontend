import { useEffect, useState } from "react"
import { ShopProps } from "../types/Types"
import { useParams } from "react-router-dom"
import axios, { DEV_URL as url } from "../utils/axios"
import Loading from "../components/animation/Loading"
import ShopProduct from "../components/shops/ShopProduct"
import Special from "../components/shops/Special"


const SingleShop = () => {
  const [shop, setShop] = useState<ShopProps | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useParams()
  
  
  

  useEffect(() => {
    const fetchShop = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`/store/${id}`)
      const result = res.data;
      console.log(result)
      setShop(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
    fetchShop()
  },[id])

  return (
    <div className="min-h-screen">
      {/* Tablet and Large screen */}
      {shop && !loading && <>
        <div className={`hidden md:block h-52 w-full bg-[url('${url}/images/store/${shop?.dp}')] bg-cover bg-center`}>
          <div className="h-full w-full flex justify-center items-center bg-black bg-opacity-65">
            <p className="text-center my-auto text-3xl lg:text-4xl text-white font-bold ">{shop?.name}</p>
          </div>
        </div>
        <div className="hidden md:grid h-screen grid-cols-3 my-10 py-5 px-2">
          <div className="col-span-2 self-start h-full overflow-y-auto scrollbar-hide border rounded-lg">
            <ShopProduct id={id} />
          </div>
          <div className="col-span-1 self-center">
            <Special/>
          </div>
        </div>
        
      </>}
      {!shop && loading && <Loading loading={loading} />}
      {!shop && !loading && <div className="h-full flex items-center justify-center">
        An error occured 
      </div>}
    </div>
  )
}

export default SingleShop
