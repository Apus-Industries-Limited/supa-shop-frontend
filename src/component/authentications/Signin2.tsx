import React, {useState} from 'react';
import './../../index.css';
import signimage from '../../assets/image/signinimage.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import { SignInFormData } from './types/Formtypes';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Signin2 = () => {

    const navigate = useNavigate();

    const API_URL = 'https://supa-shop-backend.onrender.com';

    const [formData, setFormData] = useState<SignInFormData>({

        username: '',
        password: ''

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/auth/login`, formData,  {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'POST',
            });
            if (response.data.status === 200){
                toast.success('Login SUccessful')
            } // Handle success
            navigate('/')
        } catch (error:any) {
            toast('Detail Not Match'); // Handle error
        }
    };

    return (
         <div className='bg-[#FF7900] sm:w-full sm:h-[932px] md:h-[1024px] lg:w-full lg:h-[1024px] flex font-["Mont"]  flex-col items-center' >
            <span><h1 className='text-[#FFFFFF] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 md:block sm:hidden'>Sign In</h1><br/>
            <p  className='text-[#FFFFFF] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] md:block sm:hidden'>Please Sign in first</p>
            </span>
            <div className='sm:w-[300px] sm:h-[450px] md:w-[720px] lg:w-[1160px]  lg:h-[664px] bg-[#FFFFFF] m-[30px] flex-shrink-0 rounded-[32px] flex md:space-x-12 md:items-center p-[0px] sm:flex-col md:flex-row lg:flex-row  items-center'>
           
            <div>
                <span><h1 className='text-[#1C1B1B] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 sm:block md:hidden'>Sign In</h1><br/>
                <p  className='text-[#1C1B1B] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] sm:block md:hidden'>Please Sign in first</p>
                </span>
            </div>


            <img className="sm:hidden md:block md:w-[250px] md:h-[290px] lg:w-[430px] lg:h-[505px] rounded-[12px] p-[18px]" src={signimage} alt='SupaShop-image'/>
                <form action='POST'  className=' sm:pr-18 md:m-20'>
                    <span>
                        <label className='text-[#000000] text-[14px]'>Username<br/>
                        <input type='text' placeholder='@johndoe'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className='sm:mb-5 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[300px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                        <label className='text-[#000000] text-[18px] sm:mt-32 lg:mt-32'>Password<br/>
                        <input type='password' name='password' placeholder='********' className='sm:mb-5 sm:w-[250px] sm:h-[38px] md:w-[300px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label><br/>
                        <input type='checkbox' 
                         value={formData.password}
                         onChange={handleChange}
                        className=' shrink-0 appearance-none w-4 h-4 border-2 border-[#FF7900] focus:outline-none rounded-sm bg-white mr-1 checked:bg-[#FF7900] checked:border-0'/>Remember me
                        <br/>
                        <button type='submit'
                        onClick={handleSubmit}
                        className=' sm:mt-8 sm:w-[250px] hover:bg-[#c37046] sm:h-[52px] md:w-[300px] focus:outline-none md:h-[45px]  text-center p-[8px] bg-[#FF7900] rounded-[10px] font-medium md:text-[18px] sm:text-[10px] text-[#FFFFFF]'>Sign In</button>
                </form>
                <div className='text-center sm:mb-5 sm:block md:hidden lg:hidden'>
                    <Link to={'/Forgetpassword'} className="text-zinc-800 text-sm font-['Mont'] underline ">Forgot Password?</Link>
                        <h1 className='text-zinc-800 text-sm font-medium font-["Mont"] text-[14px] sm:hidden md:block'>Don't have an account yet?<Link className='text-sm font-black font-["Inter"] text-[#FF7900]' to={'/'}>Sign Up</Link></h1>
                    </div><br/>
            </div>
            <div className='sm:block md:hidden lg:hidden'>
                <h1 className='text-[#FFF]'>Don’t have an account yet?<Link to={'/'}> Sign Up</Link></h1>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#FFFFFF] divide-dashed"></div>
                    <span className="flex-shrink mx-4 text-[#FFFFFF]">or</span>
                    <div className="flex-grow border-t border-[#FFFFFF] divide-dashed"></div>
                </div>

                <div>
                    <h1  className='text-[#FFFFFF] text-[18px] text-center font-black font-["Mont"] w-[136] h-[18] m-8'>Connect With</h1>
                    <div className='grid grid-flow-col items-center ml-3'>
                        <span className='text-[#FFF] p-2'><FaPhoneAlt  className='rounded w-[50px] h-[50px] bg-[#FFFFFF] text-[#FF7900] p-3'/>Phone</span>
                        <span className='text-[#FFF] p-2'><FaGoogle className=' rounded w-[50px] h-[50px] bg-[#FFFFFF] text-[#FF7900] p-3'/>Google</span>
                    </div>
                </div>

            </div>
            <div className='mt-12 sm:hidden md:block'>
                <h2 className='text-[#FFFFFF] text-[16px]  text-center font-black font-["Mont"] w-[83] h-[31] sm:hidden md:block'>OR</h2>
                <h2 className='text-[#FFFFFF] text-[16px] font-black font-["Mont"] w-[136] h-[18]'>
                    Connect With
                </h2>
            </div><br></br>
            <div className='flex flex-row space-x-3 sm:hidden md:block'>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.06669 8.99994C4.06669 8.41536 4.16372 7.85483 4.33711 7.32917L1.30383 5.01294C0.712639 6.21317 0.379639 7.5657 0.379639 8.99994C0.379639 10.433 0.712357 11.7846 1.30256 12.9841L4.33415 10.6634C4.16245 10.1401 4.06669 9.5817 4.06669 8.99994Z" fill="#FBBC05"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39232 3.68184C10.6623 3.68184 11.8094 4.13184 12.7106 4.86816L15.3325 2.25C13.7348 0.859078 11.6865 0 9.39232 0C5.83057 0 2.76945 2.03681 1.30371 5.013L4.33685 7.32923C5.03576 5.20777 7.02799 3.68184 9.39232 3.68184Z" fill="#EA4335"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39232 14.3182C7.02813 14.3182 5.0359 12.7922 4.33699 10.6708L1.30371 12.9866C2.76945 15.9632 5.83057 18 9.39232 18C11.5906 18 13.6894 17.2194 15.2645 15.7569L12.3854 13.5311C11.573 14.0428 10.5499 14.3182 9.39232 14.3182Z" fill="#34A853"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9954 8.99996C17.9954 8.46812 17.9134 7.89535 17.7905 7.36365H9.39233V10.8409H14.2265C13.9847 12.0265 13.3269 12.9379 12.3854 13.531L15.2646 15.7569C16.9191 14.2212 17.9954 11.9335 17.9954 8.99996Z" fill="#4285F4"/>
                </svg>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0716 6L12 12.4828L4.92844 6H19.0716ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z" fill="#F9F8F8"/>
                </svg>
                </button>
            </div>

            
         </div>






    )
    
}

export default React.memo(Signin2)