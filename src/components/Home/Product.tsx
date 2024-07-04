/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect,useState } from 'react';
import { Button, Card, CardBody, CardFooter, Image, Spinner } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import axios from '../../utils/axios';

interface Props{
  title: string | null;
  url:string 
}

const Product = ({title,url}:Props) => {
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
    }
  ])
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
      loadProduct(url);
    }
  },[loadProduct,inView,hasMore,url])
  return (
    <div className='md:hidden my-4'>
      <div className="flex justify-between items-center">
        <p className='font-mont-bold py-2'>{title}</p>
        <Link to={url} className="font-thin text-xs">See all</Link>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {products.map((product: any) => (
          
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
                <div className='flex my-auto items-center'>
                  <BsStarFill className='text-primary me-1 my-auto' />
                  <span>25</span>
                </div>
                <Button color='primary'>
                  <FaCartShopping />
                  <span className="hidden md:inline">Add to Cart</span>
                </Button>
              </div>
            </CardFooter>
            
            <div role='button' className="absolute z-10 bg-white right-5 top-5 rounded-full p-4 md:p-2">
              <BsHeart/>
            </div>
          </Card>
          
        ))}
      </div>
      {hasMore ? <div ref={ref} className='h-12 text-center my-3'>
        <Spinner color='primary' className='mx-auto'/>
      </div> : null}
    </div>
    
  )
}

export default Product
