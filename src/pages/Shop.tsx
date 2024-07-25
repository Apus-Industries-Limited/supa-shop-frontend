import MobileShop from "../components/shops/mobile/MobileShop"
import ShopList from "../components/shops/ShopList"
import Special from "../components/shops/Special"


const Shop = () => {
  return (
    <main>
      {/* Tablet and desktop screen */}
      <div className="hidden md:h-screen md:grid md:grid-cols-3">
        <div className="hidden md:block col-span-1 self-center">
          <Special/>
        </div>
        <div className="hidden md:block col-span-2 self-start h-full overflow-y-auto scrollbar-hide">
          <ShopList/>
        </div>
      </div>
      {/* Mobile screen */}
      <div className="md:hidden px-4">
        <MobileShop/>
      </div>
    </main>
  )
}

export default Shop
