import { Button, Input } from "@nextui-org/react"
import { BsSearch } from "react-icons/bs"
import { MdTune } from "react-icons/md"

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>
  url:string
}

const ShopMenu = ({setUrl,url}:Props) => {
  return (
    <div className="flex justify-between space-x-3 items-center md:flex-col lg:flex-row">
      <div className="hidden md:flex lg:space-x-2 justify-between item-center md:space-x-1 my-auto">
        <div role="button" className={url === '/store?category=' ? "bg-primary capitalize text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny" : "bg-neutral-100 capitalize hover:bg-[#ffa14d] hover:text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny"} onClick={()=>setUrl("/store?category=")}>All</div>
        <div role="button" className={url === '/store?category=fashion' ? "bg-primary capitalize text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny" : "bg-neutral-100 capitalize hover:bg-[#ffa14d] hover:text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny"} onClick={()=>setUrl("/store?category=fashion")}>Clothe</div>
        <div role="button" className={url === '/store?category=shoes' ? "bg-primary capitalize text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny" : "bg-neutral-100 capitalize hover:bg-[#ffa14d] hover:text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny"} onClick={()=>setUrl("/store?category=shoes")}>Shoe</div>
        <div role="button" className={url === '/store?category=electronics' ? "bg-primary capitalize text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny" : "bg-neutral-100 capitalize hover:bg-[#ffa14d] hover:text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny"} onClick={()=>setUrl("/store?category=electronics")}>electronics</div>
        <div role="button" className={url === '/store?category=groceries' ? "bg-primary capitalize text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny" : "bg-neutral-100 capitalize hover:bg-[#ffa14d] hover:text-white w-20 xl:w-24 rounded-lg py-2 text-center text-tiny"} onClick={()=>setUrl("/store?category=groceries")}>Grocerries</div>
      </div>
      <div className="flex justify-between space-x-2 item-center md:w-full lg:w-fit md:mt-3 lg:my-auto">
        <Input variant="bordered" color="primary" endContent={ <BsSearch role="button" className="text-primary"/> } />
        <Button color="primary">
          <MdTune size={20}/>
        </Button>
      </div>
    </div>
  )
}

export default ShopMenu
