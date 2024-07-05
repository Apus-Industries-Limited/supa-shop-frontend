import { Button, Checkbox, Image, Input } from '@nextui-org/react';
import useBuyerContext from '../hooks/useBuyerContext';
import { Link } from 'react-router-dom';
import { BsEnvelope, BsEyeFill, BsEyeSlashFill, BsLock } from "react-icons/bs"
import Loading from '../components/Loading';
import BackButton from '../components/BackButton';
import google from "../assets/image/google.svg"
import { useEffect } from 'react';

const Signin = () => {

    const { formData, handleChange, handleLoginSubmit, toggleVisibility, isVisible, loading, persist, setPersist } = useBuyerContext();
    
    useEffect(() => {
        localStorage.setItem("persist", persist)
    },[persist])

    return (
        <div className=" mx-auto m-4 container bg-neutral-50 rounded-md py-8 px-6 shadow-xl min-h-[80dvh] flex  items-center">
            <div className='w-full'>
                <BackButton />
                <div className="p-2 mt-10 border-3 border-[#FF7900] rounded-2xl md:p-6 grid grid-cols-1 mx-auto gap-4 md:w-3/5 lg:w-1/2">
                    <p className=" text-2xl font-bold mt-0 text-center">Sign in</p>
                    <p className='text-center text-small mb-2'>Kindly sign in to start shopping!</p>
                    <Input
                        onChange={handleChange}
                        labelPlacement='outside'
                        name="email"
                        value={formData.email}
                        type="email"
                        label="Email"
                        placeholder='Enter your email'
                        startContent={
                            <BsEnvelope className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                    <Input
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
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
                    <div className="flex justify-between items-center p-2">
                        <div>
                            <Checkbox isSelected={persist} onChange={()=>setPersist(!persist)}>
                                Remeber me
                            </Checkbox>
                        </div>
                        <div>
                            <Link to="/forget-password" className='text-[#ff7900]'>Forgot password?</Link>
                        </div>
                    </div>
                    <Button radius="full" variant="shadow" className="bg-[#FF7900] py-6 text-[#eeeeee] w-full shadow-lg" onClick={handleLoginSubmit} isLoading={loading}>Login</Button>
                    <p className="text-gray-800 text-center my-3">Or Login up with other methods</p>
                    <Button disabled radius="full" variant="shadow" className="w-full bg-zinc-300 py-6">
                        <Image src={google} width={25} height={25}/>
                        Continue with Google
                    </Button>

                    <p className="text-center my-3">Dont't have an account? <Link to="/signup" className="text-[#FF7900]">Sign up</Link></p>
                </div>
                <Loading loading={loading} />
            </div>
        </div>
    )
}

export default Signin