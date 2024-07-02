import { Route, Routes } from 'react-router-dom';
import Emailotp from './pages/Emailotp';
import Forgetpassword from './pages/Forgetpassword';
import Newpassword from './pages/Newpassword';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import BuyerLayout from './Layout/BuyerLayout';
import Profile from './pages/Profile';
import Address from './pages/Address'
import CardDetails from './pages/CardDetails';
import Delivery from './pages/Delivery';
import OrderCompleted from './pages/OrderCompleted';
import PersistLogin from './pages/PersistLogin';
import RequireAuth from './pages/RequireAuth';
import Missing from './pages/Missing';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import SingleShop from './pages/SingleShop';
import Category from './pages/Category';
import SingleCategory from './pages/SingleCategory';
import Wishlist from './pages/Wishlist';
import SingleItem from './pages/SingleItem';
import { useEffect, useState } from 'react';
import SplashContainer from './components/SplashContainer';




const App =() => {
  const [isFirstTime,setIsFirstTime] = useState(true)

  useEffect(() => {
    const isFirstTimeUser = localStorage.getItem("isFirstTimeUser") !== "false";
    
    setIsFirstTime(isFirstTimeUser);
  }, [])
  
  useEffect(() => {
    if (!isFirstTime) {
      localStorage.setItem("isFirstTimeUser", "false");
    }
  },[isFirstTime])

  return (
    <Routes>
      {isFirstTime ? (
        <Route path='*' element={<SplashContainer setIsFirstTime={setIsFirstTime}/>}/>
      ) : (
          <>
            {/* Routes for Buyers */}
      <Route path='/' element={<BuyerLayout />}>
        {/*@dev: this next line will be changed once the main home screen is done */}
        <Route index element={<Home />} />
        <Route path=":id" element={<SingleItem/>}/>
        <Route path='signup' element={<Signup />} />
        {/* ... */}
        <Route path="email-otp" element={<Emailotp/>}/>
        <Route path="forget-password" element={<Forgetpassword/>}/>
        <Route path="update-password" element={<Newpassword/>}/>
        <Route path="login" element={<Signin />} />
        {/* Route for shops and it's details */}
        <Route path='shop' >
          <Route index element={<Shop />} />
          <Route path=':id' element={<SingleShop />} />
        </Route>
        {/* Route for category pages */}
        <Route path='category' >
          <Route index element={<Category />} />
          <Route path='name' element={<SingleCategory/>}/>
        </Route>
        {/* Route for cart */}
        <Route path="cart" element={<Cart/>}/>
        
        
        {/*
        * @dev: This routes are protected until a user is signed in
         */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path='profile' element={<Profile />} />
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path='address' element={<Address/>}/>
            <Route path='card-details' element={<CardDetails/>}/>
            <Route path='delivery-method' element={<Delivery/>}/>
            <Route path='order-successfull' element={<OrderCompleted/>} />
          </Route>
        </Route>

        {/* Catch all or 404 page */}
        <Route path='*' element={<Missing/>} />
      </Route>
      {/* Customers Details Routes */}
          </>
      )}
    </Routes>
  )
}

export default App
