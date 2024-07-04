import { BsDot } from "react-icons/bs"
import splash from "../../assets/image/Screen2.svg"
import { Button } from "@nextui-org/react"

interface Props{
  currentScreen: number;
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>
  skip : (url:string) => void
}

const Screen2 = ({currentScreen,setCurrentScreen,skip}:Props) => {
  return (
    <div className={currentScreen === 1 ? "h-screen grid place-content-center container mx-auto px-12 animate-slideOutReverse" : "hidden"}>
        <img src={splash} width={300} className="mx-auto"/>
      <p className="text-3xl font-bold text-center font-mont">Various Collections of the Latest Products from across the Globe</p>
      <p className="text-center">At our app we take security of your information seriously. Shop without fear or security issues</p>

      <div className="flex items-center justify-center mb-10">
        <BsDot size={40} className="text-[#ffc999]" />
        <BsDot size={40} className="text-primary" />
        <BsDot size={40} className="text-[#ffc999]" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <Button variant="bordered" color="primary" radius="full" className="col-span-6" onClick={()=>skip("/")}>Skip</Button>
        <Button className="col-span-6" color="primary" radius="full" onClick={()=>setCurrentScreen(prev=> prev +1)}>Next</Button>
      </div>
    </div>
  )
}

export default Screen2
