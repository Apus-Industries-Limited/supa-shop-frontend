import { Card, CardBody, Image } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { ShopProps } from "../../../types/Types"
import { DEV_URL as url } from "../../../utils/axios"
import { CiLocationOn } from "react-icons/ci"

interface Props{
  shop: ShopProps
}
const MobileSingleShop = ({shop}:Props) => {
  return (
    <Link to={shop.id} className="rounded-lg shadow-lg">
      <Card className="hover:bg-[#ffc999]">
        <CardBody>
          <Image src={`${url}/images/store/${shop.dp}`}/>
          <p className="capitalize text-small mt-3">{shop.name}</p>
          <div className="flex space-x-1 my-3 items-center text-primary text-tiny">
            <CiLocationOn/>
            <p className="capitalize">{shop.address}</p>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default MobileSingleShop
