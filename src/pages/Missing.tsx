import { Image } from "@nextui-org/react"
import image from "../assets/image/404.jpg"
import { Link } from "react-router-dom"
import { BsHouse } from "react-icons/bs"

const Missing = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="shadow-xl rounded-xl p-8 border flex flex-col items-center">
        <Image width={300} height={300} src={image} alt="404" className="mb-3" />
        <p className="text-center text-neutral-500">Opps!!! it's like you're lost. </p>
        <p className="text-center text-neutral-500">The link clicked is broken or the resource was not found</p>
        <Link className="text-[#ff7900] flex my-4 items-center" to="/">
          <BsHouse size={24}/>
          <span className="ms-2">Go Home</span>
        </Link>
      </div>
    </section>
  )
}

export default Missing
