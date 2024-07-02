import { BsDot } from "react-icons/bs"
import splash from "../../assets/image/Screen3.svg"
import { Button } from "@nextui-org/react"


interface Props{
  currentScreen: number;
  skip: (url: string) => void;
}


const Screen3 = ({ currentScreen, skip }: Props) => {
  const toLogin = () => {
    skip('/login')
  }

  const toRegister = () => {
    skip("/signup")
  }

  return (
  <div className={currentScreen === 2 ? "h-screen grid place-content-center container mx-auto px-12 animate-slideOutReverse" : "hidden"}>
        <img src={splash} width={300} className="mx-auto"/>
      <p className="text-3xl font-bold text-center font-mont">The most suitable outfit for you just for the right occasion</p>
      <p className="text-center">At our app, we take the security of your information seriously. Shop without fear or security issues</p>

      <div className="flex items-center justify-center mb-10">
        <BsDot size={40} className="text-[#ffc999]" />
        <BsDot size={40} className="text-[#ffc999]" />
        <BsDot size={40} className="text-primary" />
      </div>

      <div className="grid grid-cols-6 gap-8">
        <Button variant="bordered" color="primary" radius="full" className="col-span-6" onClick={toLogin}>Login</Button>
        <Button className="col-span-6" color="primary" radius="full" onClick={toRegister}>Create Account</Button>
      </div>
    </div>
  )
}

export default Screen3
