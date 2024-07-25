import { Input } from "@nextui-org/react"
import { BsSearch } from "react-icons/bs"
import { BiStoreAlt } from "react-icons/bi"
import { CiBowlNoodles, CiFilter } from "react-icons/ci"
import { GiAmpleDress } from "react-icons/gi"
import { FaComputer } from "react-icons/fa6"
import { IoPhonePortrait } from "react-icons/io5"

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>
  url:string
}

const ShopMobileMenu = ({setUrl,url}:Props) => {
  return (
    <div className="py-4">
      <Input
        startContent={<BsSearch size={20} />}
        endContent={<CiFilter size={20} role="button" />}
        color="primary"
        variant="bordered"
      />
      <div className="flex space-x-2 justify-between mt-6 overflow-x-auto w-full scrollbar-hide">
        <div role="button" className={url === "/store?category=" ? "bg-primary capitalize text-white w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center" : "border-primary border capitalize text-primary w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center"} onClick={()=>setUrl("/store?category=")}>
          <BiStoreAlt className="my-auto" size={18}/> <span>stores</span>
        </div>
        <div role="button" className={url === "/store/category?category=fashion" ? "bg-primary capitalize text-white w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center" : "border-primary border capitalize text-primary w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center"} onClick={()=>setUrl("/store/category?category=fashion")}>
          <GiAmpleDress className="my-auto" size={18}/> <span>fashion</span>
        </div>
        <div role="button" className={url === "/store/category?category=electronics" ? "bg-primary capitalize text-white w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center" : "border-primary border capitalize text-primary w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center"} onClick={()=>setUrl("/store/category?category=electronics")}>
          <FaComputer className="my-auto" size={18}/> <span>Electronics</span>
        </div>
        <div role="button" className={url === "/store/category?category=phones" ? "bg-primary capitalize text-white w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center" : "border-primary border capitalize text-primary w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center"} onClick={()=>setUrl("/store/category?category=phones")}>
          <IoPhonePortrait className="my-auto" size={18}/> <span>phones</span>
        </div>
        <div role="button" className={url === "/store/category?category=groceries" ? "bg-primary capitalize text-white w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center" : "border-primary border capitalize text-primary w-32 px-4 rounded-lg py-2 text-center text-tiny flex items-center space-x-1 justify-center"} onClick={()=>setUrl("/store/category?category=groceries")}>
          <CiBowlNoodles className="my-auto" size={18}/> <span>Groceries</span>
        </div>
      </div>
    </div>
  )
}

export default ShopMobileMenu
