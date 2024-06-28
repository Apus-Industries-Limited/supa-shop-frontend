import CategoryList from "../components/Home/CategoryList"
import Hero from "../components/Home/Hero"
import Product from "../components/Home/Product"


const Home = () => {
  return (
    <div className="my-4 px-2 md:px-4 lg:px-8 mx-auto">
      <Hero />
      <CategoryList/>
      <Product title={"Popular Products"}/>
    </div>
  )
}

export default Home
