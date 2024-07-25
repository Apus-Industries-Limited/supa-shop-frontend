import { useEffect, useState } from "react"
import { ShopProps } from "../types/Types"
import { useParams } from "react-router-dom"
import axios, { DEV_URL as url } from "../utils/axios"
import Loading from "../components/animation/Loading"
import ShopProduct from "../components/shops/ShopProduct"
import Special from "../components/shops/Special"
import { Image } from "@nextui-org/react"
import { CiLocationOn } from "react-icons/ci"
import { BsStarFill } from "react-icons/bs"
import { averageRating } from "../utils/helperFunction"


const SingleShop = () => {
  const [shop, setShop] = useState<ShopProps | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [rating, setRating] = useState<number>(0)

  const { id } = useParams();  

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
  }, [id])
  
  useEffect(() => {
    const rate = averageRating(shop?.ratings || [])
    setRating(rate)
  },[shop])

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
      {!shop && !loading && <div className="h-full flex items-center justify-center">
        An error occured 
      </div>}
      {/* Mobile screen */}
      {shop && !loading && 
      <div className="md:hidden px-2 py-3 w-screen">
        <Image src={`${url}/images/store/${shop?.dp}`} className="mx-auto h-[250px] w-screen" />
        <p className="text-2xl font-bold font-mont-bold capitalize mt-3 mb-1">{shop?.name}</p>
        <div className="flex space-x-4 items-center">
          <p className="text-primary text-small flex items-center capitalize">
            <CiLocationOn />
            {shop?.address}
          </p>
          <div className="flex items-center space-x-1">
            <BsStarFill className="text-primary" />
            <p>{rating} ({shop?.ratings ? shop.ratings.length : 0})</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-md font-bold">Description</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit assumenda reiciendis, minus rem quae consequatur repellendus omnis, molestiae, cupiditate expedita aut laboriosam ut minima sint quaerat vitae ducimus commodi.</p>
          <hr className="my-5"/>
          <p className="text-md font-bold mt-3 mb-0">Products</p>
          <ShopProduct id={id } />
        </div>
      </div>
      }
      {!shop && loading && <Loading loading={loading} />}
    </div>
  )
}

export default SingleShop
