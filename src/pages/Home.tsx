import CategoryList, { CategoryLarge } from "../components/Home/CategoryList"
import Hero from "../components/Home/Hero"
import HotDeals from "../components/Home/HotDeals"
import Product from "../components/Home/Product"
import TopSearch from "../components/Home/TopSearch"


const Home = () => {
  return (
    <div className="my-4 px-2 md:px-4 lg:px-8 mx-auto">
      <Hero />
      {/* Desktop Designs */}
      <HotDeals />
      <TopSearch />
      <CategoryLarge/>
      {/* Mobile Designs */}
      <CategoryList/>
      <Product url="/product" title={"Popular Products"} />
      <Product url="/product?category=fashion" title={"Poprlar Shoes"}/>
    </div>
  )
}

export default Home
