/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { toastMsg } from '../utils/toast'
import { Button, Input } from '@nextui-org/react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { BsEyeFill, BsEyeSlashFill, BsLock } from 'react-icons/bs';
import { PWD_REGEX } from '../utils/conatant';


const Newpassword: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [confirmVisible, setConfirmVisible] = useState<boolean>(false)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false)

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggle = () => setConfirmVisible(!confirmVisible)
    

// const handleSumbit handle the submit button and compare the confirm password and password

    const handleSubmit = async () => {
        const v2 = PWD_REGEX.test(password);
        if (!v2) {
            toastMsg("error", 'Password must be 8 to 24 characters long which must include 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
            return;
        }
        if (password !== confirmPassword) {
            toastMsg("error",'Passwords do not match');
            return;
        }
        if(!token){
            toastMsg("error","Invalid token")
        }

        try {
            setLoading(true)
            const response = await axios.post(`/auth/reset-password?token=${token}`, { password }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });
            toastMsg("success",response.data.message)
            navigate('/login')// Redirect to signin page
        } catch (error:any) {
            toastMsg("error",error.response.data); // Handle error
        }finally{
            setPassword("")
            setConfirmPassword("")
            setLoading(false)
        }
    };     


    return (
        <div className=" mx-auto m-4 container bg-neutral-50 rounded-md py-8 px-6 shadow-xl">
            <BackButton />
            <div className="p-2 mt-10 border-3 border-[#FF7900] rounded-2xl md:p-6 grid grid-cols-1 mx-auto gap-4 md:w-3/5 lg:w-1/2">
                <p className=" text-2xl font-bold mt-0 text-center">Reset Password</p>
                <p className='text-center text-small mb-2'>Enter your new password</p>
                <Input
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    value={password}
                    labelPlacement='outside'
                    type={isVisible ? "text" : "password"}
                    label="Password"
                    placeholder='Enter password'
                    startContent={
                        <BsLock className="text-2xl text-default-400 pointer-events-none flex-shrink" />
                    }
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                />
                <Input
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    labelPlacement='outside'
                    type={confirmVisible ? "text" : "password"}
                    label="Confirm Password"
                    name="confirmpassword"
                    value={confirmPassword}
                    placeholder='Enter password'
                    startContent={
                        <BsLock className="text-2xl text-default-400 pointer-events-none flex-shrink" />
                    }
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggle}>
                        {confirmVisible ? (
                            <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                />
                <Button radius="full" variant="shadow" className="bg-[#FF7900] py-6 text-[#eeeeee] w-full shadow-lg" onClick={handleSubmit} isLoading={loading}>Reset Passeord</Button>
            </div>
            <Loading loading={loading} />
        </div>
    )
}

export default Newpassword