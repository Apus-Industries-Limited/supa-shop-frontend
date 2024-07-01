/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useCallback, useEffect, } from 'react';
import { Button, Card, CardBody, CardFooter, Image, Spinner } from '@nextui-org/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { BsArrowLeftCircle, BsArrowRightCircle, BsHeart, BsStarFill } from 'react-icons/bs';
import axios from '../../utils/axios';

const HotDeals = () => {
  const [products,setProducts] = useState<any[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      name: 'Product 4',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      name: 'Product 5',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      name: 'Product 6',
      price: 100,
      image: 'https://picsum.photos/200/300',
        },
    
    ])
  
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
    <section className='hidden md:block my-2'>
      <p className='font-mont-bold py-2'>Hot Deals</p>
      <div className="flex items-center">
        <button onClick={() => scroll("left")} className='hover:bg-primary hover:text-white rounded-full text-primary me-2'>
          <BsArrowLeftCircle size={36}/>
        </button>
        <div className="scroll-container flex overflow-x-auto" ref={scrollRef}>
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
        <button onClick={() => scroll("right")} className='hover:bg-primary hover:text-white rounded-full text-primary ms-2'>
          <BsArrowRightCircle size={36}/>
        </button>
      </div>
    </section>
  )
}

export default HotDeals
