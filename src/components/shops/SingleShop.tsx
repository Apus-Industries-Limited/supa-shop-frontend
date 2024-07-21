import { Card, CardBody, Image } from "@nextui-org/react"
import { BsArrowRight, BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { ShopProps } from "../../types/Types"
import { DEV_URL as url } from "../../utils/axios"

interface Props{
  shop: ShopProps
}

const SingleShop = ({shop}:Props) => {
  return (
    <Link to={shop.id} className="rounded-lg shadow-lg">
      <Card className="hover:bg-[#ffc999]">
        <CardBody>
          <Image src={`${url}/images/store/${shop.dp}`} className="h-60 md:h-44" width={300}  />
          <div className="flex justify-between my-3">
            <p className="capitalize text-lg">{shop.name}</p>
            <div className="flex space-x-2">
              <BsStarFill className="text-primary" size={16} />
              <BsStarFill className="text-primary" size={16} />
              <BsStarFill className="text-primary" size={16} />
            </div>
          </div>
          <div className="flex justify-between my-3">
            <p className="text-sm">{shop.address}</p>
            <div className="bg-primary text-white p-3 rounded-lg">
              <BsArrowRight size={10}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default SingleShop
