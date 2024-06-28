/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView } from 'react-intersection-observer';
import useBuyerContext from '../../hooks/useBuyerContext';
import { useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, Image, Spinner } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { BsHeart, BsStarFill } from 'react-icons/bs';

interface Props{
  title: string | null;
}

const Product = ({title}:Props) => {
  const {/* products, */  hasMore, loadProduct } = useBuyerContext()

  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce:false
  })

  const products = [
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
  ]
  useEffect(() => {
    if (inView && hasMore) {
      loadProduct("/product");
    }
  },[loadProduct,inView,hasMore])
  return (
    <div className=' my-4'>
      <p className='font-mont-bold py-2'>{title}</p>
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
