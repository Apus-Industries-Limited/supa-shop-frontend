import React from 'react';
import './../../index.css';

const Emailotp = () => {
    return (
         <div className='bg-[##F2F2F2] w-full h-[1024px] flex  flex-row  font-light space-x-8 bg-[#FF7900] p-8' >
            <span>  <a href='' className='text-[20px]  bg-[#B35500] rounded-[8px] p-2 text-white' > Back</a><br/>
            </span>
            <div className='w-[1160px]  h-[496px] bg-[#FF7900] p-[140px] m-[18px] flex-shrink-0 rounded-[15px] flex  flex-col items-center'>
                <div></div>
                <div>
                    <p>We Have Sent Otp To  <br></br><span> Your Email
                         </span> </p>
                </div>
                
                <form action=' ' method=' ' className=''>
                    <span className='mb-20 m-10'>
                        <label className='text-[#F2F2F2] text-[18px] not-italic font-light font-["Inter"] border-white'>username</label><br/>
                        <input type='number'  name='username' className='w-[42px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                        <input type='number'  name='username' className='w-[42px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                        <input type='number'  name='username' className='w-[42px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                        <input type='number'  name='username' className='w-[42px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                    </span><br></br>
                </form>
                <div className='flex flex-row'>
                    <p><a href=' '> Have't received otp?</a></p>
                    <p><a href=''> </a></p>
                </div>
            </div>
         </div>






    )
    
}

export default React.memo(Emailotp)