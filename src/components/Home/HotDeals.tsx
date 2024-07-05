/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useCallback, useEffect, } from 'react';
import { Button, Card, CardBody, CardFooter, Image, Spinner } from '@nextui-org/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { BsArrowLeftCircle, BsArrowRightCircle, BsHeart, BsStarFill } from 'react-icons/bs';
import axios from '../../utils/axios';
import { PRODUCTS } from '../../utils/conatant';

const HotDeals = () => {
  const [products,setProducts] = useState<any[]>(PRODUCTS)
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth"
      })
    }
  }
  const [skip, setSkip] = useState<number>(0);
  const [hasMore,setHasMore] = useState(true)

    const loadProduct = useCallback(async (url:string) => {
    if (!hasMore) return;
      try {
        const res = await axios.get(`${url}?skip=${skip}`)
        console.log(res)
        const fetched = res.data
        setProducts(prev => [...prev, ...fetched]);
        setSkip(prev => prev + fetched.length)
        if (fetched.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error)
        setHasMore(false)
      } 
    },[skip, hasMore])



  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce:false
  })
  
  useEffect(() => {
    loadProduct('/product')
    console.log("loading")
  },[loadProduct])
  useEffect(() => {
    if (inView && hasMore) {
      loadProduct("/product/hot-deals");
    }
  },[loadProduct,inView,hasMore])
  return (
    <section className='my-2'>
      <p className='font-mont-bold py-2'>Hot Deals</p>
      <div className="relative flex items-center py-5">
        <button onClick={() => scroll("left")} className='absolute top-1/2 z-20 left-0  hover:text-white rounded-full  me-2 bg-white text-primary hover:bg-primary'>
          <BsArrowLeftCircle size={36}/>
        </button>
        <div className="scroll-container relative flex overflow-x-auto" ref={scrollRef}>
          <div className="flex">
            {products.map(product => (
            <div key={product.id} className='me-8'>
              <Card shadow='sm' key={product.id} className='relative'>
                <Link to={`/${product.id}`}>
                  <CardBody >
                    <Image
                      shadow='sm'
                      radius='lg'
                      width="100%"
                      alt={product.name}
                      src={product.image}
                      className='w-full object-cover h-[140px] relative'
                    />
                  </CardBody>
                </Link>
                <CardFooter className='text-small justify-start flex-col'>
                  <div className='w-full'>
                    <Link to={`/${product.id}`}>
                      <p>{product.name}</p>
                      <p className='text-primary'>&#8358;{product.price}</p>
                      </Link>
                  </div>
                  <div className="w-full flex justify-between item-center">
                    <div className='flex my-auto items-center me-12'>
                      <BsStarFill size={20} className='bg-primary text-white rounded-full p-1  me-1 my-auto' />
                      <span>25</span>
                    </div>
                    <Button color='primary'>
                      <FaCartShopping />
                      <span className="hidden md:block">Add to Cart</span>
                    </Button>
                  </div>
                </CardFooter>
                
                <div role='button' className="absolute z-10 bg-white right-5 top-5 rounded-lg p-4 md:p-2">
                  <BsHeart/>
                </div>
              </Card>
            </div>
            ))}
            {hasMore ? <div ref={ref} className='h-12 text-center my-3'>
        <Spinner color='primary' className='mx-auto'/>
      </div> : null}
          </div>
        </div>
        <button className="hover:bg-primary hover:text-white rounded-full bg-white text-primary absolute top-1/2 z-20 right-0" onClick={() => scroll("right")}>
          <BsArrowRightCircle size={36}/>
        </button>
      </div>
    </section>
  )
}

export default HotDeals
