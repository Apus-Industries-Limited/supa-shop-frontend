/* eslint-disable @typescript-eslint/no-explicit-any */
import signimage from '../assets/image/signinimage.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import useBuyerContext from '../hooks/useBuyerContext';
import { Link } from 'react-router-dom';

const Signup = () => {

        const {formData,handleChange, handleRegisterSubmit} = useBuyerContext()





    return (
         <div className='bg-[#F4F1F1] sm:w-full sm:h-[932px] md:h-[1444px] lg:w-full lg:h-[1444px] flex font-["Mont"]  flex-col items-center' >
            <span><h1 className='text-[#000000] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 md:block sm:hidden'>Sign Up</h1><br/>
            <p  className='text-[#000000] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] md:block sm:hidden'>Please Sign Up first</p>
            </span>
            <div className='sm:w-[365px] sm:h-[499px] md:w-[720px] bg-[#FFF] lg:w-[1160px]  lg:h-[879px] m-[30px] flex-shrink-0 rounded-[50px] flex md:space-x-9 md:items-center p-[0px] md:p-[3px] sm:flex-col md:flex-row lg:flex-row  items-center'>
           
            <div>
                <span><h1 className='text-[#1C1B1B] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 sm:block md:hidden'>Sign Up</h1><br/>
                <p  className='text-[#1C1B1B] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] sm:block md:hidden'>Please Sign Up!</p>
                </span>
            </div>


            <img className="sm:hidden md:w-[250px] md:h-[290px] md:block lg:w-[430px] lg:h-[505px] rounded-[12px] p-[18px]" src={signimage} alt='SupaShopimage'/>
                <form  method='POST' onSubmit={handleRegisterSubmit}>

                <div className=' sm:pr-18 md:m-20'>    
                <span>
                        <label className='text-[#000000] text-[14px]'>Name<br/>
                        <input type='text' placeholder='John doe' value={formData.name} name='name'
                        onChange={handleChange}
                        required
                         className=' border-none sm:mb-2 sm:w-[307px] sm:h-[40px] focus:outline-none md:w-[300px] lg:w-[442px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#000000] text-[14px]'>Email<br/>
                        <input type='email' placeholder='example@email.com' value={formData.email} name='email'
                        onChange={handleChange}
                        autoComplete=''
                        required
                        className='border-none sm:mb-2 sm:w-[307px] sm:h-[40px] focus:outline-none md:w-[300px] lg:w-[442px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#000000] text-[14px]'>Phone Number<br/>
                        <input type='tel' placeholder='+234 123 456 789' name='phone_number'
                         value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className='border-none sm:mb-2 sm:w-[307px] sm:h-[40px] focus:outline-none md:w-[300px] lg:w-[442px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#000000] text-[14px]'>Username<br/>
                        <input type='text'  placeholder='@johndoe' name='username'  value={formData.username} 
                        onChange={handleChange}
                        required
                        className='sm:mb-2 sm:w-[307px] border-none sm:h-[40px] focus:outline-none md:w-[300px] lg:w-[442px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                        <label className='text-[#000000] text-[14px]'>Password<br/>
                        <input type='password' name='password' placeholder='Enteer a strong password' value={formData.password}
                        onChange={handleChange}
                        required
                         className='sm:mb-2 sm:w-[307px] border-none sm:h-[40px] md:w-[300px] lg:w-[442px] md:h-[45px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label><br/>
                        <div className='text-center sm:mb-5'>
                            <button type='submit' 
                                onClick={handleRegisterSubmit}
                                className=' sm:mt-8 sm:w-[307px] hover:bg-[#c37046] sm:h-[52px] md:w-[300px] md:h-[45px]  text-center p-[8px] bg-[#FF7900] rounded-[10px] font-medium md:text-[18px] sm:text-[16px] text-[#FFFFFF]'>Sign Up</button>       
                        </div><br/>
                        </div>
                        
                </form>
            </div>
            
            <br/>
            <br />
            <p className='text-black '>Already have an account? <Link to='/login' className='text-[#FF7900] hover:bg-[#ff7900] hover:text-white rounded-md hover:shadow-sm py-2 px-3'>Sign In</Link></p>
            <div className=''>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#FF7900] divide-dashed"></div>
                    <span className="flex-shrink mx-4 text-[#000000]">or</span>
                    <div className="flex-grow border-t border-[#FF7900] divide-dashed"></div>
                </div>
                <div>
                    <h1  className='text-[#000000] text-[18px] text-center font-black font-["Mont"] w-[136] h-[18] m-8'>Connect With</h1>
                    <div className='grid grid-flow-col items-center ml-3'>
                        <span className='text-[#000] p-2'><FaPhoneAlt  className='rounded w-[50px] h-[50px] bg-[#FF7900] text-[#FFF] p-3'/>Phone</span>
                        <span className='text-[#000] p-2'><FaGoogle className=' rounded w-[50px] h-[50px] bg-[#FF7900] text-[#FFF] p-3'/>Google</span>
                    </div>
                </div>

            </div>
            
         </div>


    )
}

export default Signup