import { Outlet } from "react-router-dom";
import { BuyerProvider } from "../context/BuyerContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const BuyerLayout = () => {
  return (
    <BuyerProvider>
      <main className="bg-[#eeeeee] text-[#2a2a2a] dark:bg-[#2a2a2a] dark:text-[#eeeeee] min-h-screen max-w-full overflow-hidden">
        <Header />
        <ToastContainer/>
        <Outlet/>
        <Footer/>
      </main>
    </BuyerProvider>
  )
}

export default BuyerLayout;
