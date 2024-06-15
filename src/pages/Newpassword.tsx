/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const Newpassword: React.FC = () => {

    const API_URL = 'https://supa-shop-backend.onrender.com'; 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    

// const handleSumbit handle the submit button and compare the confirm password and password

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
    
            try {
                const response = await axios.post(`${API_URL}/auth/reset-password`, { password }, {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    method: 'POST',
                });
                if (response.status === 200){
                    toast.success('Password Reset')
                }
                navigate('/Signin')// Redirect to signin page
            } catch (error:any) {
                toast.error(error.response.data); // Handle error
                setError('An error occurred. Please try again.');
            }
        };    


    return (
        <div>
            <div className='sm:w-[430px] sm:h-[932px] lg:w-full md:w-[910px] md:h-[1390px]  lg:h-[1024px]  flex  flex-row sm:flex sm:flex-col sm:space-x-0 font-light lg:space-x-8 bg-[#FF7900] p-16'>
                <div className=' font-normal flex item-start m-5'>
                    <Link to={'/Forgetpassword'} className='text-[20px] sm:text-[15px]  hover:bg-[#c37046] bg-[#B35500] rounded-[20px] p-2 text-white font-["Mont"]' ><span><ArrowBackIosNewIcon/></span> Back</Link>
                </div>
                <div className='sm:w-[300px] sm:h-[486px] lg:w-[1160px]  lg:h-[664px] bg-[#FFFFFF] m-[30px] md:w-[720px] flex-shrink-0 rounded-[32px] flex md:space-x-12 md:items-center p-[0px] sm:flex-col md:flex-col lg:flex-col  items-center '>
                    <span><h1 className='text-[#1E1E1E] text-[24px]  text-center font-black font-["Mont"] w-[83] h-[31] mt-9'>Forget Password?</h1><br/>
                        <p  className='text-[#1E1E1E] text-[20px] font-light font-["Mont"] w-[136] h-[18]'>Please set a new password</p>
                    </span>

                    <div className='mt-5'>
                    <form method='POST'>
                        <span className=''>
                            <label className='text-[#1E1E1E] font-bold text-[14px]'>New Password</label><br></br>
                            <input type='password' placeholder='**********' name='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            className=' border-none sm:mb-2 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/>
                        </span><br></br>

                        <label className='text-[#1E1E1E] font-bold text-[14px]'>Confirm Password</label><br/>
                        <input type='password' name='confirmPassword' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder='**********'
                         className=' border-none sm:mb-2 sm:w-[250px] sm:h-[38px] focus:outline-none md:w-[350px] lg:w-[442px] md:h-[60px] bg-[#F2F2F2] lg:mb-12  rounded-[5px] p-2'/><br/>
                        
                        {error && <p style={{ color: error === 'Passwords match' ? 'green' : 'red'}}>{error}</p>}

                        <button type='submit'
                        onSubmit={handleSubmit}
                        className=' sm:mt-8 sm:w-[250px] hover:bg-[#c37046] sm:h-[52px] lg:w-[442px] md:w-[350px] md:h-[60px]  text-center p-[8px] bg-[#FF7900] rounded-[10px] font-medium md:text-[18px] sm:text-[10px] text-[#FFFFFF]'>Continue</button> 
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Newpassword)