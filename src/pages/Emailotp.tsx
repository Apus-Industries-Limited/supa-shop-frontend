/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { MdMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import useBuyerContext from '../hooks/useBuyerContext';
import axios from '../utils/axios';
import { toastMsg } from '../utils/toast';

const Emailotp = () => {
    const [otp, setotp] = useState(new Array(6).fill(""));
    const navigate = useNavigate()
    const {formData} = useBuyerContext()

    function handlechange(e:any, index:any){
        if(isNaN(e.target.value)) return false;

        setotp(
            [...otp.map((data, indx)=>(indx === index? e.target.value:data))
            ]);

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
    }
    
    const handleTheSubmit = async () => {
        try {
            const data = { email: formData.email, code: otp.join('') }
            console.log(data)
            const response = await axios.post('/verify-mail',data)
            console.log(response.data); // Handle success
            setotp(new Array(6).fill(""))
            navigate('/login')
        } catch (e:any) {
            // Handle error
            console.error(e)
            toastMsg("error", e.message)
        }
    };
    return (
        <div className="w-full min-h-screen mx-auto font-light lg:space-x-8 bg-[#FF7900] p-16" >
            <div className='w-full h-full rounded-[15px] flex mx-auto flex-col items-center'>
            <div className='text-center my-10'>
                    <span className=''>
                        <MdMail className='w-[45px] h-[55px] bg-[#FF7900] text-[#FFF] mx-auto'/>
                        </span>
                    <h1 className="text-[#F2F2F2] font-bold font-['Mont'] text-lg text-center sm:text-[25px]">We Have Sent An Otp To
                    Your Email
                    </h1>
                </div>

                <div className='flex lg:space-x-4 sm:space-x-3 space-x-2'>
                    <label></label>
                    {
                        otp.map((data, i) =>{
                            return <input type='text' value={data}
                            onChange={(e)=> handlechange(e,i)} 
                            maxLength={1}
                            placeholder='*'
                            className='mt-7 h-10 w-10 text-center bg-[#F2F2F2] fill-[#F2F2F] focus:outline-none rounded-[7px] border-none text-black'/>
                        })
                    }
                </div>
                <p className='text-white my-4 text-small'>Didn't recieve OTP code? <span role='button' className='underline hover:text-orange-200'>Resend OTP</span></p>
                <br/>
                    <button onClick={handleTheSubmit} className="lg:w-[432px] lg:h-[59px] hover:bg-[#c37046] w-[327px] mt-20 lg:ml-24 h-[52px] text-[#FFF] bg-amber-700 rounded-[10px] text-center">
                        Confirm
                    </button>
            </div>
        </div>






    )
    
}

export default React.memo(Emailotp)
