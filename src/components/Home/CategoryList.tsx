import { Link } from "react-router-dom"
import { GiRunningShoe } from "react-icons/gi"
import { IoCarSportSharp } from "react-icons/io5"
import { FaBlender, FaShoppingBag } from "react-icons/fa"


const CategoryList = () => {
  return (
    <div className="my-3">
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

export default CategoryList
