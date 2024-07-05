import { Link } from "react-router-dom"
import { GiRunningShoe } from "react-icons/gi"
import { IoCarSportSharp } from "react-icons/io5"
import { FaBlender, FaShoppingBag } from "react-icons/fa"
import { useRef } from "react"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { Image } from "@nextui-org/react"
import { CATEGORY } from "../../utils/conatant"


const CategoryList = () => {
  return (
    <div className="my-3 md:hidden">
      <div className="flex justify-between items-center">
        <p className='font-mont-bold py-2'>Shop by Categories</p>
        <Link to="/categories" className="font-thin text-xs">See all</Link>
      </div>
      <div className="py-3 gap-3 grid grid-cols-4">
        <div className="col-span-1 text-center border rounded-lg py-3 shadow-lg">
          <GiRunningShoe  size={28} className="mx-auto text-[#ff7900]"/>
          <p className="text-xs capitalize">shoe</p>
        </div>
        <div className="col-span-1 text-center border rounded-lg py-3 shadow-lg">
          <IoCarSportSharp  size={28} className="mx-auto text-[#ff7900]"/>
          <p className="text-xs capitalize">cars</p>
        </div>
        <div className="col-span-1 text-center border rounded-lg py-3 shadow-lg">
          <FaShoppingBag  size={28} className="mx-auto text-[#ff7900]"/>
          <p className="text-xs capitalize">bags</p>
        </div>
        <div className="col-span-1 text-center border rounded-lg py-3 shadow-lg">
          <FaBlender  size={28} className="mx-auto text-[#ff7900]"/>
          <p className="text-xs capitalize">Elecronics</p>
        </div>
      </div>
    </div>
  )
}

export const CategoryLarge = () => {
  const category = CATEGORY
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
  return (
    <section className="hidden md:block">
      <h1 className=' text-2xl lg:text-3xl text-center underline font-mont-bold py-2 mt-12'>Categories</h1>
      <div className="relative flex items-center py-5">
        <button onClick={() => scroll("left")} className='absolute top-1/2 z-20 left-0 hover:bg-primary hover:text-white rounded-full bg-white  me-2'>
          <BsArrowLeftCircle size={36}/>
        </button>
        <div className="relative scroll-container flex overflow-x-auto" ref={scrollRef}>
          <div className="flex">
            {category.map(item => (
              <div key={item.id} className="me-4 w-48 p-4 hover:shadow-xl shadow-white">
                <Link to={`/category/${item.name}`} >
                  <Image src={item.image} shadow='sm'
                          radius='md' className='h-40 w-48 object-cover relative' />
                  <p className="text-tiny  mt-1 capitalize text-center">{item.name}</p>
                </Link>
              </div>
          ))}
          </div>
        </div>
        <button className="hover:bg-primary hover:text-white rounded-full bg-white text-black absolute top-1/2 z-20 right-0" onClick={() => scroll("right")}>
          <BsArrowRightCircle size={36}/>
        </button>
      </div>
    </section>
  )
}

export default CategoryList
