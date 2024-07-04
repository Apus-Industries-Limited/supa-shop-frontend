import { Outlet } from "react-router-dom";
import { BuyerProvider } from "../context/BuyerContext";
import Header from "../components/Header";
import Footer, {MobileFooter} from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const BuyerLayout = () => {
  return (
    <BuyerProvider>
      <main className="h-screen max-w-full font-mont font-semibold flex flex-col">
        <Header />
        <div className="flex-grow overflow-y-auto">
          <ToastContainer />
          <Outlet />
          <Footer/>
        </div>
        <MobileFooter />
      </main>
    </BuyerProvider>
  )
}

export default BuyerLayout;
