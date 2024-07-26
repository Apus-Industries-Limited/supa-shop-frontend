import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../types/Types"
import axios from "../utils/axios"
import { Button, Image, Tab, Tabs } from "@nextui-org/react"
import { DEV_URL as url } from "../utils/axios"
import { BsCart4, BsChevronLeft, BsHeartFill, BsStar, BsStarFill } from "react-icons/bs"
import { HiShoppingBag } from "react-icons/hi2"
import { averageRating } from "../utils/helperFunction"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Reviews from "../components/SingleItem/Reviews"
import Loading from "../components/animation/Loading"
import AddReview from "../components/SingleItem/AddReview"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import useBuyerContext from "../hooks/useBuyerContext"
import { toastMsg } from "../utils/toast"


const SingleItem = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [rating, setRating] = useState<number>(0)
  const [images, setImages] = useState<string[] | null>(null)
  const [isWishListed, setIsWishListed] = useState<boolean>(false);
  const [wishlistId,setWishListId] = useState<string>("")
  const axiosPrivate = useAxiosPrivate()
  const { user } = useBuyerContext();

  const addToWishlist = async () => {
    try {
      setLoading(true)
      const res = await axiosPrivate.post(`/wishlist`, { productId: id }, {
        headers: {
          "Content-Type":"application/json"
        }
      })
      setIsWishListed(true)
      toastMsg("success",res.data.message)
    } catch (error:unknown) {
      toastMsg("error","Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  const removeFromWishlist = async () => {
    try {
      setLoading(true)
      const res = await axiosPrivate.delete(`/wishlist/${wishlistId}`)
      setIsWishListed(false)
      toastMsg("success",res.data.message)
    } catch (error:unknown) {
      toastMsg("error","Something went wrong")
    }finally {
      setLoading(false)
    }
  }

  const onClick = async () => {
    if(!user?.id) return toastMsg("error","You must be logged in")
    if (isWishListed) return await removeFromWishlist()
    return await addToWishlist()
  }

  
  useEffect(() => {
    const checkWishlist = async () => {
      if (!user?.id) return;
      try {
        const response = await axiosPrivate.get(`/wishlist/${id}`)
        const result = await response.data
        setIsWishListed(result.status)
        setWishListId(result.id)
      } catch (error) {
        console.error(error)
      }
    }

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

    checkWishlist()
    fetchProduct()
  }, [axiosPrivate, id, user])
  
  useEffect(() => {
    const mean = averageRating(product?.ratings || [])
    setRating(mean)
  }, [product, images])
  

  return (
    <div className="md:h-screen">
      {loading && !product && <Loading loading={loading} />}
      {!loading && product &&
        <div className="md:h-full">
          {/* Mobile Screen */}
          <div className="md:hidden px-2 py-3 overflow-y-auto h-[75dvh]">
            <div className="relative">
              <Carousel infiniteLoop showArrows={false}  className=" h-[250px] w-full shadow-3xl rounded-2xl md:rounded-none relative" autoPlay={true} showThumbs={false}>
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
              <div className="absolute top-3 right-5">
                <button className={!isWishListed ? "rounded-full text-white p-2 bg-neutral-600 hover:bg-primary" : "rounded-full text-white p-2 bg-primary hover:bg-neutral-600"} onClick={onClick}>
                <BsHeartFill className="text-[1.5rem] my-auto"/>
                </button>
              </div>
            </div>
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
                  {product?.reviews ? (
                    <>
                      {product?.reviews.map(review => (
                        <Reviews review={review} rating={product?.ratings.find(item => item.userId === review.userId)}/>
                      ))}
                    </>
                  ) : (
                      <p className="capitalize">No review for this product</p>
                  )}
                </Tab>
                <Tab key="Add Review" title="Add Review">
                  <AddReview productId={product.id} />
                </Tab>
              </Tabs>
            </div>
            <div className="sticky bottom-0 w-full">
              <Button color="primary" className="w-1/2 flex items-center space-x-4 mx-auto" radius="full" isDisabled={!product.isInStock}>
                <BsCart4/>
                <p>Add To Cart</p>
              </Button>
            </div>
          </div> 
          {/* Desktop Screen */}
          <div className="hidden md:block my-4 overflow-y-auto h-[90dvh] lg:h-screen py-4  bg-neutral-200 scrollbar-hide">
            <div className="relative">
              <Carousel infiniteLoop showArrows={false}  className="relative h-[350px] w-full shadow-3xl rounded-2xl md:rounded-none" autoPlay={true} showThumbs={false}>
                {images?.map(image => (
                  <Image
                    radius='lg'
                    width="100%"
                    alt={product?.name}
                    src={`${url}/images/product/${image}`}
                    className="mx-auto object-contain h-[350px] w-full"
                  />
                ))}
              </Carousel>
              <div className="absolute flex items-center justify-between px-10 top-10 w-full">
                <Button radius="full">
                  <BsChevronLeft />
                  {"Back"}
                </Button>
                <div className="flex space-x-4 items-center">
                  <button className="rounded-full text-white p-3 bg-neutral-800 hover:bg-primary">
                    <HiShoppingBag className="text-[1.5rem]"/>
                  </button>
                  <button className={!isWishListed ? "rounded-full text-white p-3 bg-neutral-600 hover:bg-primary" : "rounded-full text-white p-3 bg-primary hover:bg-neutral-600"} onClick={onClick}>
                  <BsHeartFill className="text-[1.5rem]"/>
                  </button>
                </div>
              </div>
            </div>
            <hr className="text-white my-2 border border-white" />
            <div className="grid grid-cols-2 gap-4 px-4 my-4 lg:px-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3">
                  <p className="text-2xl font-bold font-mont-bold">{product.name}</p>
                  {rating === 1 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div> : rating === 2 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div> : rating === 3 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar/>
                    </div> : rating === 4 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                    </div> : rating === 5 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div> : <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div>
                  }
                </div>
                <p className="text-xl mt-1 font-bold font-mont-bold">NGN {`\t`} {product.price}.00</p>
                <hr className="text-white my-2 border border-white" />
                <div>
                  <p className="text-lg mt-1 font-bold font-mont-bold">Description</p>
                  <p>{product.description}</p>
                </div>
                <hr className="text-white my-2 border border-white" />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="text-lg mt-1 font-bold font-mont-bold mb-1">Specifications</p>
                <p className="capitalize">Category: {product.category.toLowerCase()}</p>
                {product.weight ? <p className="capitalize">Weight: {product.weight}kg</p> : null}
                {product.color.length > 0 ? (
                  <>
                    <p>Color:</p>
                    <div className="flex space-x-5 items-center">
                      {product.color.map(color => (
                        <div className={`h-10 w-10 bg-${color}`}/>
                      ))}
                    </div>
                  </>
                ) : null}
                {product.dimension ? (
                  <>
                    <p>Dimenstion</p>
                    <p className="capitalize">height: {product.dimension.height}</p>
                    <p className="capitalize">width: {product.dimension.width}</p>
                    <p className="capitalize">length: {product.dimension.length}</p>
                  </>
                ) : null}
                {product.size.length > 0 ? (
                  <>
                    <p className="font-bold">Sizes</p>
                    <div className="flex item-center space-x-4">
                      {product.size.map(item => (
                        <div className="bg-neutral-300 w-32 text-center rounded-full hover:bg-neutral-400" role="button">
                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                <hr className="text-white my-2 border border-white" />
                <p className="text-lg mt-1 font-bold font-mont-bold">Review</p>
                <div className="flex flex-col w-full">
                  <Tabs aria-label="Options" size="lg" variant="underlined" color="primary">
                    <Tab key="Review" title="Review">
                      {product?.reviews ? (
                        <>
                          {product?.reviews.map(review => (
                            <Reviews review={review} rating={product?.ratings.find(item => item.userId === review.userId)}/>
                          ))}
                        </>
                      ) : (
                          <p className="capitalize">No review for this product</p>
                      )}
                    </Tab>
                    <Tab key="Add Review" title="Add Review">
                      <AddReview productId={product.id} />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="sticky bottom-2 w-full">
              <Button color="primary" className="w-1/2 lg:w-1/4 flex items-center space-x-4 mx-auto" radius="full" isDisabled={!product.isInStock}>
                <BsCart4/>
                <p>Add To Cart</p>
              </Button>
            </div>
          </div>
        </div>
      }
      {loading && product && (
        <div className="md:h-full">
          {/* Mobile Screen */}
          <div className="md:hidden px-2 py-3 overflow-y-auto h-[75dvh]">
            <div className="relative">
              <Carousel infiniteLoop showArrows={false}  className=" h-[250px] w-full shadow-3xl rounded-2xl md:rounded-none relative" autoPlay={true} showThumbs={false}>
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
              <div className="absolute top-3 right-5">
                <button className={!isWishListed ? "rounded-full text-white p-2 bg-neutral-600 hover:bg-primary" : "rounded-full text-white p-2 bg-primary hover:bg-neutral-600"} onClick={onClick}>
                <BsHeartFill className="text-[1.5rem] my-auto"/>
                </button>
              </div>
            </div>
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
                  {product?.reviews ? (
                    <>
                      {product?.reviews.map(review => (
                        <Reviews review={review} rating={product?.ratings.find(item => item.userId === review.userId)}/>
                      ))}
                    </>
                  ) : (
                      <p className="capitalize">No review for this product</p>
                  )}
                </Tab>
                <Tab key="Add Review" title="Add Review">
                  <AddReview productId={product.id} />
                </Tab>
              </Tabs>
            </div>
            <div className="sticky bottom-0 w-full">
              <Button color="primary" className="w-1/2 flex items-center space-x-4 mx-auto" radius="full" isDisabled={!product.isInStock}>
                <BsCart4/>
                <p>Add To Cart</p>
              </Button>
            </div>
          </div> 
          {/* Desktop Screen */}
          <div className="hidden md:block my-4 overflow-y-auto h-[90dvh] lg:h-screen py-4  bg-neutral-200 scrollbar-hide">
            <div className="relative">
              <Carousel infiniteLoop showArrows={false}  className="relative h-[350px] w-full shadow-3xl rounded-2xl md:rounded-none" autoPlay={true} showThumbs={false}>
                {images?.map(image => (
                  <Image
                    radius='lg'
                    width="100%"
                    alt={product?.name}
                    src={`${url}/images/product/${image}`}
                    className="mx-auto object-contain h-[350px] w-full"
                  />
                ))}
              </Carousel>
              <div className="absolute flex items-center justify-between px-10 top-10 w-full">
                <Button radius="full">
                  <BsChevronLeft />
                  {"Back"}
                </Button>
                <div className="flex space-x-4 items-center">
                  <button className="rounded-full text-white p-3 bg-neutral-800 hover:bg-primary">
                    <HiShoppingBag className="text-[1.5rem]"/>
                  </button>
                  <button className={!isWishListed ? "rounded-full text-white p-3 bg-neutral-600 hover:bg-primary" : "rounded-full text-white p-3 bg-primary hover:bg-neutral-600"} onClick={onClick}>
                  <BsHeartFill className="text-[1.5rem]"/>
                  </button>
                </div>
              </div>
            </div>
            <hr className="text-white my-2 border border-white" />
            <div className="grid grid-cols-2 gap-4 px-4 my-4 lg:px-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3">
                  <p className="text-2xl font-bold font-mont-bold">{product.name}</p>
                  {rating === 1 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div> : rating === 2 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div> : rating === 3 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar/>
                    </div> : rating === 4 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                    </div> : rating === 5 ? <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div> : <div className="flex space-x-1 text-tiny text-primary items-center">
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </div>
                  }
                </div>
                <p className="text-xl mt-1 font-bold font-mont-bold">NGN {`\t`} {product.price}.00</p>
                <hr className="text-white my-2 border border-white" />
                <div>
                  <p className="text-lg mt-1 font-bold font-mont-bold">Description</p>
                  <p>{product.description}</p>
                </div>
                <hr className="text-white my-2 border border-white" />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="text-lg mt-1 font-bold font-mont-bold mb-1">Specifications</p>
                <p className="capitalize">Category: {product.category.toLowerCase()}</p>
                {product.weight ? <p className="capitalize">Weight: {product.weight}kg</p> : null}
                {product.color.length > 0 ? (
                  <>
                    <p>Color:</p>
                    <div className="flex space-x-5 items-center">
                      {product.color.map(color => (
                        <div className={`h-10 w-10 bg-${color}`}/>
                      ))}
                    </div>
                  </>
                ) : null}
                {product.dimension ? (
                  <>
                    <p>Dimenstion</p>
                    <p className="capitalize">height: {product.dimension.height}</p>
                    <p className="capitalize">width: {product.dimension.width}</p>
                    <p className="capitalize">length: {product.dimension.length}</p>
                  </>
                ) : null}
                {product.size.length > 0 ? (
                  <>
                    <p className="font-bold">Sizes</p>
                    <div className="flex item-center space-x-4">
                      {product.size.map(item => (
                        <div className="bg-neutral-300 w-32 text-center rounded-full hover:bg-neutral-400" role="button">
                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                <hr className="text-white my-2 border border-white" />
                <p className="text-lg mt-1 font-bold font-mont-bold">Review</p>
                <div className="flex flex-col w-full">
                  <Tabs aria-label="Options" size="lg" variant="underlined" color="primary">
                    <Tab key="Review" title="Review">
                      {product?.reviews ? (
                        <>
                          {product?.reviews.map(review => (
                            <Reviews review={review} rating={product?.ratings.find(item => item.userId === review.userId)}/>
                          ))}
                        </>
                      ) : (
                          <p className="capitalize">No review for this product</p>
                      )}
                    </Tab>
                    <Tab key="Add Review" title="Add Review">
                      <AddReview productId={product.id} />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="sticky bottom-2 w-full">
              <Button color="primary" className="w-1/2 lg:w-1/4 flex items-center space-x-4 mx-auto" radius="full" isDisabled={!product.isInStock}>
                <BsCart4/>
                <p>Add To Cart</p>
              </Button>
            </div>
          </div>
          <Loading loading={loading} />
        </div>
      )}
    </div>
  )
}

export default SingleItem
