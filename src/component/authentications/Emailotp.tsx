import React, { useState } from 'react';
import './../../index.css';
import { MdMail } from "react-icons/md";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Emailotp = () => {
    const API_URL = 'https://supa-shop-backend.onrender.com';
    const [otp, setotp] = useState(new Array(4).fill(""));
    const Navigate = useNavigate()

function handlechange(e:any, index:any){
    if(isNaN(e.target.value)) return false;

    setotp(
        [...otp.map((data, indx)=>(indx === index? e.target.value:data))
        ]);

    if(e.target.value && e.target.nextSibling){
        e.target.nextSibling.focus()
    }


    
    
const handleTheSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/verify-email`, otp,  {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });
            console.log(response.data); // Handle success
            Navigate('/signin')
        } catch (error:any) {
            throw(error.response.data); // Handle error
        }
    };
}
    return (
         <div className="sm:w-[430px] sm:h-[932px] lg:w-full md:w-[910px] md:h-[1366px]  lg:h-[1024px]  flex  flex-row sm:flex sm:flex-col sm:space-x-0 font-light lg:space-x-8 bg-[#FF7900] p-16" >
            <h1 className='text-[20px] sm:w-[89px] sm:text-[14px] bg-[#B35500] rounded-[15px]  p-3  text-white float-start hover:bg-[#c37046]'><Link to={'/Forgetpassword'} className='sm:w[80px]'><span><ArrowBackIosNewIcon/></span>Back</Link></h1>
            <div className='sm:w-[300px] sm:h-[450px] lg:w-[1160px] lg:h-[496px] bg-[#FF7900] m-[19px] flex-shrink-0 rounded-[15px] flex sm:flex sm:items-center md:flex lg:flex md:items-center md:ml-52 lg:items-center flex-col '>
            <div className='text-center m-10'>
                    <span className=''>
                        <MdMail className='w-[45px] h-[55px] text-center sm:ml-20 md:ml-24 lg:ml-20 bg-[#FF7900] text-[#FFF]'/>
                        </span>
                    <h1 className="text-[#F2F2F2] font-bold font-['Mont'] text-4xl text-center sm:text-[25px]">We Have Sent An Otp To
                    <br/>
                    Your Phone Number
                     </h1>
                </div>

                <form action='POST' onSubmit={handleTheSubmit} className='sm:flex sm:flex-row lg:space-x-4 sm:space-x-3 lg:ml-32'>
                    <label></label>
                    {
                        otp.map((data, i) =>{
                            return <input type='text' value={data}
                            onChange={(e)=> handlechange(e,i)} 
                            maxLength={1}
                            placeholder='*'
                            className='mt-7 lg:w-[98px] lg:h-[80px] sm:w-[68px] sm:h-[65px] text-center bg-[#F2F2F2] fill-[#F2F2F] focus:outline-none rounded-[7px] border-none'/>
                        })
                    }
                </form>
                <div className='flex flex-row sm:flex sm:flex-row lg:space-x-40 space-x-16 mt-6 mb-6 lg:ml-32'>
                    <p className="text-[#FFFF] sm:text-[13px] "><a href=' ' className="text-[#F2F2F2]"> Have't received otp?</a></p>
                    <p className="text-[#FFFF] sm:text-[13px] "><a href=''> Send Code Again</a></p>
                </div>
                <br/>
                <form action='POST' className='text-center' onSubmit={handleTheSubmit} >
                    <button type='submit' onClick={handleTheSubmit} className="lg:w-[432px] lg:h-[59px] hover:bg-[#c37046] sm:w-[327px] mt-20 lg:ml-24 sm:h-[52px] text-[#FFF] bg-amber-700 rounded-[10px] text-center">
                        Confirm
                    </button>
                </form>
            </div>
         </div>






    )
    
}

export default React.memo(Emailotp)