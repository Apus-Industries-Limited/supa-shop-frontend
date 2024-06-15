import { Route, Routes } from 'react-router-dom';
import Emailotp from './pages/Emailotp';
import Forgetpassword from './pages/Forgetpassword';
import Newpassword from './pages/Newpassword';
import Signup from './pages/Signup';
import Signin2 from './pages/Signin2';
import BuyerLayout from './Layout/BuyerLayout';
import Profile from './pages/Profile';



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
    </Routes>
  )
}

export default App
