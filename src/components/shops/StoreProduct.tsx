import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { Product } from "../../types/Types";
import { DEV_URL as url } from '../../utils/axios';
import { BsHeart, BsStarFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

interface Props{
  product: Product
}
const StoreProduct = ({product}:Props) => {
  return (
    <Card shadow='sm' key={product.id} className='relative hover:bg-[#ffc999]'>
      <Link to={`/${product.id}`}>
        <CardBody >
          <Image
            radius='lg'
            width="100%"
            alt={product.name}
            src={`${url}/images/product/${product.dp}`}
            className='w-full object-contain h-[140px] relative'
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
  )
}

export default StoreProduct
