import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Signup = lazy(() => import('./component/authentications/Signup'));
import Emailotp from './component/authentications/Emailotp';
import Forgetpassword from './component/authentications/Forgetpassword';
import Newpassword from './component/authentications/Newpassword';
import Signin2 from './component/authentications/Signin2';
import Lazysignup from './component/authentications/lazyauth/Lazysignup';
import Lazyauth from './component/authentications/lazyauth/Lazyauth';



function App() {


  return (
<<<<<<< HEAD
    <Router>
        <Routes>
                <Route path="/" element={
                <Suspense fallback={<Lazysignup/>}>
                  <Signup/>
                </Suspense>
                }></Route>

                <Route path="/Emailotp" element={<Emailotp/>}></Route>


                <Route path="/Forgetpassword" element={
                 <Suspense fallback={<Lazyauth/>}>
                  <Forgetpassword/>
                  </Suspense>
                }></Route>


                <Route path="/Resetpassword" element={
                  <Suspense fallback={<Lazyauth/>}>
                    <Newpassword/>
                  </Suspense>
                }></Route>


                <Route path="/Signin" element={
                  <Suspense fallback={<Lazyauth/>}>
                    <Signin2/>
                    </Suspense>
                }></Route>
        </Routes>
    </Router>
  )
}

export default App
