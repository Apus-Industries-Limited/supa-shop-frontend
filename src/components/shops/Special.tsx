import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { BsHeartFill } from "react-icons/bs"


const Special = () => {
  return (
    <div className="w-full mx-auto h-full">
      <Card className="w-full lg:w-3/4 mx-auto h-2/5 my-auto py-4 px-2 bg-gradient-to-b from-white to-[#ffa14d] border shadow-xl">
        <CardHeader>
          <p className="text-primary text-2xl mx-4 font-bold">Special for you</p>
        </CardHeader>
        <CardBody className="px-4">
          <div className="relative w-full justify-center flex">
            <Image src='https://picsum.photos/200/300' alt="product" className="relative mx-auto h-48" width={200} />
            <div className="absolute top-3 left-3 bg-primary text-white z-10 px-5 py-1 italic rounded-full">save 10%</div>
          </div>
          <div className="my-4">
            <p className="text-3xl">Nike Air Jordan</p>
            <p className="text-xl text-primary font-thin my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit ...</p>
            <p className="text-3xl font-thin">NGN 5,000.00</p>
          </div>
          <div className="flex justify-between">
            <Button color="primary" className="w-2/4">Shop Now</Button>

            <BsHeartFill size={35} className="text-primary"/>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Special
