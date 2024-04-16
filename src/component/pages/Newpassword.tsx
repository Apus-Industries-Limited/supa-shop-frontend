import React from 'react';
import './../../index.css';

const Newpassword = () => {
    return (
        <div>
             <div className='flex flex-col w-full h-[896px] bg-[#F2F2F2]  font-light items-center p-20'>
                <div className='bg-[#FFFF] w-[1160px]  h-[496px] flex  flex-col items-center  font-light flex-shrink-0 rounded-[15px]'>
                    <span><h1 className='text-[#1E1E1E] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9'>New Password?</h1><br/>
                        <p  className='text-[#1E1E1E] text-[18px] font-["Mont"] w-[136] h-[18]'>Please set a new password</p>
                    </span>

                    <div className='mt-5'>
                    <form action=' ' method=' '>
                        <span className=''>
                            <label className='text-[#1E1E1E] text-[18px] not-italic font-light font-["Mont"] border-white'>New Password</label><br></br>
                            <input type='password' placeholder='********' name='' className=' mb-12 w-[442px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] p-4 rounded-[15px]'/>
                        </span><br></br>

                        <label className='text-[#1E1E1E] text-[18px] not-italic font-light font-["Mont"] mt-32'>Confirm Password</label><br/>
                        <input type='password' name='password' placeholder='********' className='w-[442px] mb-12 h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                    </form>
                    <div className='mb-16'>
                        <button type='submit' className='w-[440px] h-[50px] bg-orange-500 rounded-[18px] text-center font-normal text-[14px] text-[#FFFFFF]'>Continue</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Newpassword)