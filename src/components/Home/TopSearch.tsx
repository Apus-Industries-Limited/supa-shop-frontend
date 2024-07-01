import { Card, CardFooter } from "@nextui-org/react"
import { BsArrowUpRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const TopSearch = () => {
  const products = [
    {
      id: 1,
      name: 'fashion',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'gadget',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'shoes',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      name: 'accessories',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'grocceries',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'perfume',
      image: 'https://picsum.photos/200/300',
    }
  ]
  return (
    <div className="my-3">
      <p className='font-mont-bold py-2'>Top Search</p>
      <div className="grid grid-cols-5 gap-2">
        {products.map(product => (
          <Link to={`/category/${product.name}`} className={
            product.id === 1 ? " col-span-2 border" :
            product.id === 2 ? "col-span-2 border" :
            product.id === 3 ? " col-span-1" :
            product.id === 4 ? "col-span-2" :
            product.id === 5 ? "" : "col-span-2"}>
            <Card isFooterBlurred radius="sm" className="border-none h-full">
              <img alt={product.name} className="object-cover h-64 lg:h-80 w-full hover:scale-110"  src={product.image} />
              <CardFooter className="justify-start text-white bg-primary border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[cal(100%_-_8px)] shadow-small ml-1 z-10 ">
                <p className="text-md capitalize text-white/80 flex items-center">
                  {product.name} <BsArrowUpRight size={18} className="ms-3"/>
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopSearch
