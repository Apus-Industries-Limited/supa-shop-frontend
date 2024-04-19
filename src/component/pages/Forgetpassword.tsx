import React from 'react';
import './../../index.css';

const Forgetpassword = () => {
    return (
        <div>
            <div className='flex flex-col w-full h-[900px] bg-[#F2F2F2]  font-light'>
                <div className=' font-normal item-start ml-16 m-5'>
                    <a href='' className='text-[20px]  bg-[#B35500] rounded-[8px] p-2 text-white' > Back</a>
                </div>
                <div className='bg-[#FFFF] w-[1160px]  h-[496px] flex  flex-col items-center  ml-16 font-light flex-shrink-0 rounded-[15px]'>
                    <span><h1 className='text-[#1E1E1E] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9'>Forget Password?</h1><br/>
                        <p  className='text-[#1E1E1E] text-[20px] font-light font-["Mont"] w-[136] h-[18]'>Choose Your Recovery Option</p>
                    </span>

                    <div className='mt-5'>
                    <form action=' ' method=' '>
                        <span className=''>
                            <label className='text-[#1E1E1E] text-[18px] not-italic font-light font-["Mont"] border-white'>Email</label><br></br>
                            <input type='text' placeholder=' johndoe@gmail.com' name='username' className=' mb-12 w-[442px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] p-4 rounded-[15px]'/>
                        </span><br></br>

                        <label className='text-[#1E1E1E] text-[18px] not-italic font-light font-["Mont"] mt-32'>Phone</label><br/>
                        <input type='number' name='password' placeholder='+234 123 456 789 ' className='w-[442px] mb-12 h-[60px] focus:placeholder-current   bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                    </form>
                    <div className='mb-16'>
                        <button type='submit' className='w-[440px] h-[50px] bg-orange-500 rounded-[18px] text-center font-normal text-[14px] text-[#FFFFFF]'>Send recovery link</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Forgetpassword)