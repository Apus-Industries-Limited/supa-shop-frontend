import { Outlet } from "react-router-dom"
import { BuyerProvider } from "../context/BuyerContext"

const BuyerLayout = () => {
  return (
    <BuyerProvider>
      <main className="bg-[#eeeeee] text-[#2a2a2a] dark:bg-[#2a2a2a] dark:text-[#eeeeee] min-h-screen max-w-full">
        <Outlet/>
      </main>
    </BuyerProvider>
  )
}

export default BuyerLayout
