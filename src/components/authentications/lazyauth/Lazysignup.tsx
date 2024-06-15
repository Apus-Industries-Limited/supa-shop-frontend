import './../../../index.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Lazysignup:React.FC  = () => {
   

    return (
         <div className='bg-[#F4F1F1] sm:w-full sm:h-[932px] md:h-[1344px] lg:w-full lg:h-[1444px] flex font-["Mont"]  flex-col items-center' >
            <span><h1 className='text-[#F4F1F1] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 md:block sm:hidden'></h1><br/>
            <p  className='text-[#F4F1F1] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] md:block sm:hidden'></p>
            </span>
            <div className='sm:w-[300px] sm:h-[499px] md:w-[720px] bg-[#FFF] lg:w-[1160px]  lg:h-[879px] m-[30px] flex-shrink-0 rounded-[50px] flex md:space-x-12 md:items-center p-[0px] md:p-[3px] sm:flex-col md:flex-row lg:flex-row  items-center'>
           
            <div>
                <span><h1 className='text-[#F4F1F1] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9 sm:block md:hidden'></h1><br/>
                <p  className='text-[#F4F1F1] md:text-[20px]  sm:text-[12px] font-black font-["Mont"] w-[136] h-[18] sm:block md:hidden'></p>
                </span>
            </div>


            <img className="sm:hidden md:w-[250px] md:h-[290px] md:block lg:w-[430px] lg:h-[505px] rounded-[12px] p-[18px]" alt='Loading....'/>
                <form>

                <div className=' sm:pr-18 md:m-20'>    
                <span>
                        <label className='text-[#F4F1F1] text-[14px]'><br/>
                        <input type='text' placeholder='@johndoe' name='name'
                         className=' border-none sm:mb-2 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] text-[#F4F1F1] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#F4F1F1] text-[14px]'>Email<br/>
                        <input type='email' placeholder='@johndoe' name='email'
                        className='border-none sm:mb-2 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] text-[#F4F1F1] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#F4F1F1] text-[14px]'>Phone Number<br/>
                        <input type='tel' placeholder='+234 123 456 789' name='phoneNumber'
                        className='border-none sm:mb-2 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] text-[#F4F1F1] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                    <span>
                        <label className='text-[#F4F1F1] text-[14px]'>username<br/>
                        <input type='text' placeholder='@johndoe' name='username'
                        className='sm:mb-2 sm:w-[250px] border-none sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] text-[#F4F1F1] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label>
                    </span><br></br>
                        <label className='text-[#F4F1F1] text-[14px]'>Password<br/>
                        <input type='password' name='password' placeholder='********'
                         className='sm:mb-2 sm:w-[250px] border-none sm:h-[38px] md:w-[350px] lg:w-[442px] text-[#F4F1F1] md:h-[60px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/></label><br/>
                        <br/>
                        </div>
                        <div className='text-center sm:mb-5'>
                            <button type='submit' 
                                className=' sm:mt-8 sm:w-[250px] sm:h-[52px] md:w-[442px] md:h-[60px]  text-center p-[8px] bg-[#F4F1F1] rounded-[10px] font-medium md:text-[18px] sm:text-[10px] text-[#FFFFFF]'>Sign In</button>       
                        </div><br/>
                </form>
            </div>
            <br/>
            <div className=''>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#F4F1F1] divide-dashed"></div>
                    <span className="flex-shrink mx-4 text-[#F4F1F1]"></span>
                    <div className="flex-grow border-t border-[#F4F1F1] divide-dashed"></div>
                </div>
                <div>
                    <h1  className='text-[#000000] text-[18px] text-center font-black font-["Mont"] w-[136] h-[18] m-8'></h1>
                    <div className='grid grid-flow-col items-center ml-3'>
                        <span className='text-[#000] p-2'><FaPhoneAlt  className='rounded w-[50px] h-[50px] bg-[#F4F1F1] text-[#F4F1F1] p-3'/></span>
                        <span className='text-[#000] p-2'><FaGoogle className=' rounded w-[50px] h-[50px] bg-[#F4F1F1] text-[#F4F1F1] p-3'/></span>
                    </div>
                </div>

            </div>
            
         </div>


    )
}

export default (Lazysignup)