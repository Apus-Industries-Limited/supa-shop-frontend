import ShopList from "../components/shops/ShopList"
import Special from "../components/shops/Special"


const Shop = () => {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="hidden md:block col-span-1 self-center">
        <Special/>
      </div>
      <div className="hidden md:block col-span-2 self-start h-full overflow-y-auto scrollbar-hide">
        <ShopList/>
      </div>
    </div>
  )
}

export default Shop
