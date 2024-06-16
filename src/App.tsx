import { Route, Routes } from 'react-router-dom';
import Emailotp from './pages/Emailotp';
import Forgetpassword from './pages/Forgetpassword';
import Newpassword from './pages/Newpassword';
import Signup from './pages/Signup';
import Signin2 from './pages/Signin2';
import BuyerLayout from './Layout/BuyerLayout';
import Profile from './pages/Profile';
import Address from './pages/Address'
import CardDetails from './pages/CardDetails';
import Delivery from './pages/Delivery';
import OrderCompleted from './pages/OrderCompleted';




function App() {


  return (
    <Routes>
      {/* Routes for Buyers */}
      <Route path='/' element={<BuyerLayout />}>
        {/*@dev: this next line will be changed once the main home screen is done */}
        <Route index element={<Signup />} />
        {/* ... */}
        <Route path="email-otp" element={<Emailotp/>}/>
        <Route path="forget-password" element={<Forgetpassword/>}/>
        <Route path="update-password" element={<Newpassword/>}/>
        <Route path="login" element={<Signin2 />}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='address' element={<Address/>}/>
        <Route path='card-details' element={<CardDetails/>}/>
        <Route path='delivery-method' element={<Delivery/>}/>
        <Route path='order-successfull' element={<OrderCompleted/>} />
      </Route>
      {/* Customers Details Routes */}
      
    </Routes>
  )
}

export default App
