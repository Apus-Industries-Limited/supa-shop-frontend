import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Image } from "@nextui-org/react";
import img1 from "../../../assets/image/scout.jpg";
import img2 from "../../../assets/image/sales.svg";
import img3 from "../../../assets/image/easy.jpg"
// import { useState } from "react";


const Promotions = () => {
  /* const [promotions,setPromotions] = useState<unknown[]>([]) */
  return (
    <div className="max-w-full mb-3">
      <Carousel infiniteLoop showArrows={false}  className=" h-32  w-full shadow-3xl rounded-2xl md:rounded-none" autoPlay={true} showThumbs={false}>
        <div className="w-full bg-[#fc6218] h-100 text-white rounded-2xl md:rounded-none shadow-2xl flex items-center justify-evenly">
          <Image
            src={img1}
            radius='lg'
            width="100%"
            className="mx-auto object-cover h-32 w-full"
          />
          <div>
            <p className="text-medium md:text-lg lg:text-2xl mb-3">Scout for</p>
            <p className="text-lg md:text-2xl lg:text-3xl text-[#FEEC00] uppercase font-mont-bold">top selling Products</p>
          </div>
        </div>
        <div className="w-full bg-[#FEEC00] h-100 text-white rounded-2xl md:rounded-none shadow-2xl flex items-center justify-evenly">
          <Image
            src={img2}
            radius='lg'
            width="100%"
            className="mx-auto object-cover h-32 w-full"
          />
          <div>
            <p className="text-medium md:text-lg lg:text-2xl mb-3 text-neutral-600">Get top</p>
            <p className="text-lg md:text-2xl lg:text-3xl text-[#fc6218] capitalize font-mont-bold">Discount and flash deals</p>
          </div>
        </div>
        <div className="w-full bg-[#CA8F11] h-100 text-white rounded-2xl md:rounded-none shadow-2xl flex items-center justify-evenly">
          <div>
            <p className="text-medium md:text-lg lg:text-2xl mb-3">Shopping with</p>
            <p className="text-lg md:text-2xl lg:text-3xl text-[#FEEC00] capitalize font-mont-bold">SUPASHOP on the go</p>
          </div>
          <Image src={img3}
            radius='lg'
            width="100%"
            className="mx-auto object-cover h-32 w-full"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Promotions
