import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../types/Types"
import axios from "../utils/axios"
import { Image, Tab, Tabs } from "@nextui-org/react"
import { DEV_URL as url } from "../utils/axios"
import { BsStarFill } from "react-icons/bs"
import { averageRating } from "../utils/helperFunction"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Reviews from "../components/SingleItem/Reviews"
import Loading from "../components/animation/Loading"
import AddReview from "../components/SingleItem/AddReview"


const SingleItem = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [rating, setRating] = useState<number>(0)
  const [images, setImages] = useState<string[] | null>(null)
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/product/${id}`)
        const result = await response.data
        console.log(result)
        setImages([result.dp,...result.images])
        setProduct(result)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false);
      }
    }

    fetchProduct()
  }, [id])
  
  useEffect(() => {
    const mean = averageRating(product?.ratings || [])
    setRating(mean)
  },[product,images])
  return (
    <div className="min-h-screen">
      {loading && !product && <Loading loading={loading} />}
      {!loading && product &&
        <div className="h-full">
          {/* Mobile Screen */}
          <div className="md:hidden px-2 py-3">
            <Carousel infiniteLoop showArrows={false}  className=" h-[250px] w-full shadow-3xl rounded-2xl md:rounded-none" autoPlay={true} showThumbs={false}>
              {images?.map(image => (
                <Image
                  radius='lg'
                  width="100%"
                  alt={product?.name}
                  src={`${url}/images/product/${image}`}
                  className="mx-auto object-contain h-[250px] w-full"
                />
              ))}
            </Carousel>
            <p className="text-2xl font-bold font-mont-bold capitalize mt-3 mb-1">{product?.name}</p>
            <div className="flex space-x-3 items-center">
              <div className="flex space-x-1">
                <BsStarFill className="text-primary" />
                <BsStarFill className="text-primary" />
                <BsStarFill className="text-primary" />
                <BsStarFill className="text-primary" />
                <BsStarFill className="text-primary" />
              </div>
              <p>{rating} ({product?.ratings.length})</p>
            </div>
            <div className="flex flex-col  w-full">
              <Tabs aria-label="Options" size="lg" variant="underlined" color="primary">
                <Tab key="Description" title="Description" className="">
                  {product?.description}
                </Tab>
                <Tab key="Review" title="Review">
                  {product?.reviews.map(review => (
                    <Reviews review={review} rating={product?.ratings.find(item => item.userId === review.userId)}/>
                  ))}
                </Tab>
                <Tab key="Add Review" title="Add Review">
                  <AddReview productId={product.id} />
                </Tab>
              </Tabs>
            </div>
          </div> 
          {/* Desktop Screen */}
        </div>
      }
    </div>
  )
}

export default SingleItem
