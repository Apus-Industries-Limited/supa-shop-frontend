import { useState } from "react"
import Promotions from "./Promotions"
import ShopMobileMenu from "./ShopMobileMenu"
import MobileShopList from "./MobileShopList"

const MobileShop = () => {
  const [url,setUrl] = useState<string>("/store?category=")
  return (
    <div>
      <ShopMobileMenu url={url} setUrl={setUrl} />
      <Promotions />
      <MobileShopList url={url}/>
    </div>
  )
}

export default MobileShop
