import { Outlet, useLocation } from "react-router-dom";
import { BuyerProvider } from "../context/BuyerContext";
import Header from "../components/Header";
import Footer, {MobileFooter} from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { useEffect, useRef } from "react";
import { ScrollToTop } from "../utils/scrollToTop";

const BuyerLayout = () => {
  const {pathname} = useLocation()
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ScrollToTop(divRef.current)
  },[pathname])
  
  return (
    <BuyerProvider>
      <main className="h-screen max-w-full font-mont flex flex-col">
        <Header />
        <div className="flex-grow overflow-y-auto" ref={divRef}>
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
