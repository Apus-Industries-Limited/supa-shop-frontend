import { Route, Routes } from 'react-router-dom';
import Emailotp from './pages/Emailotp';
import Forgetpassword from './pages/Forgetpassword';
import Newpassword from './pages/Newpassword';
import Signup from './pages/Signup';
import Signin2 from './pages/Signin2';
import BuyerLayout from './Layout/BuyerLayout';
import Profile from './pages/Profile';
import FirstComponent from './components/CustomersDetails/FirstComponent/FirstComponent';
import SecondComponent from './components/CustomersDetails/SecondComponent/SecondComponent';
import ThirdComponent from './components/CustomersDetails/ThirdComponent/ThirdComponent';
import FourthComponent from './components/CustomersDetails/FourthComponent/FourthComponent';




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
        
      </Route>
      {/* Customers Details Routes */}
      <Route path='/address' element={<FirstComponent/>}/>
      <Route path='/card-details' element={<SecondComponent/>}/>
      <Route path='/delivery-method' element={<ThirdComponent/>}/>
      <Route path='/order-place-successfully' element={<FourthComponent/>} />
    </Routes>
  )
}

export default App
