/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import useBuyerContext from '../hooks/useBuyerContext';


const Forgetpassword = () => {

    const {formData,handleChange, handleForgetPassword} = useBuyerContext()


   

    return (
        <div>
            <div className='sm:w-[430px] sm:h-[950px] lg:w-full md:w-[910px] md:h-[1390px]  lg:h-[1024px] lg:bg-[#F4F1F1] md:bg-[#F4F1F1] flex  flex-row sm:flex sm:flex-col sm:space-x-0 font-light lg:space-x-8 sm:bg-[#FF7900] sm:p-7 md:p-16'>
                <div className=' font-normal flex item-start ml-16 m-5'>
                    <Link to={'/Signin'} className='text-[20px] hover:bg-[#c37046] bg-[#B35500] sm:text-[15px] rounded-[20px] p-2 text-white font-["Mont"]' ><span><ArrowBackIosNewIcon/></span> Back</Link>
                </div>
                <div className='sm:w-[365px] sm:h-[480px] lg:w-[1160px]  lg:h-[664px] bg-[#FFFFFF] m-[30px] md:w-[720px] flex-shrink-0 rounded-[32px] flex md:space-x-12 md:items-center p-[0px] sm:flex-col md:flex-col  sm:items-center lg:flex-col  items-center '>
                    <span><h1 className='text-[#1E1E1E] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9'>Forget Password?</h1><br/>
                        <p  className='text-[#1E1E1E] text-[20px] font-light font-["Mont"] w-[136] h-[18]'>Choose Your Recovery Option</p>
                    </span>

                    <div className='mt-5'>



                    <form action='POST'>
                        <span className=''>
                            <label className='text-[#1E1E1E] font-bold text-[14px]'>Email</label><br></br>
                            <input type='text' placeholder=' johndoe@gmail.com' name='email'
                            onChange={handleChange}
                            value={formData.email}
                            className=' border-none sm:mb-2 sm:w-[307px] sm:h-[40px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/>
                        </span><br></br>

                        <label className='text-[#1E1E1E] font-bold text-[14px]'>Phone</label><br/>
                        <input type='tel' name='phonenumber' placeholder=' +234 123 456 789'
                         maxLength={10}
                        onChange={handleChange}
                        value={formData.phonenumber}
                        className=' border-none sm:mb-2 sm:w-[307px] sm:h-[40px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/><br/>
                        <button type='submit'
                        onSubmit={handleForgetPassword}
                        className=' sm:mt-8 sm:w-[307px]  hover:bg-[#c37046] sm:h-[52px] lg:w-[442px] md:w-[350px] md:h-[60px]  text-center p-[8px] bg-[#FF7900] rounded-[10px] font-medium md:text-[18px] sm:text-[10px] text-[#FFFFFF]'>Sign In</button> 
                    </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgetpassword;