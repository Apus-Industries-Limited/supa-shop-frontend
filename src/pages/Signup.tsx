import { Link } from "react-router-dom";
import useBuyerContext from '../hooks/useBuyerContext';
import Loading from '../components/Loading';
import { BsEnvelope, BsEyeFill, BsEyeSlashFill, BsLock, BsPerson, BsPersonLinesFill, BsPhone } from "react-icons/bs"
import { Button, Image, Input } from '@nextui-org/react';
import google from "../assets/image/google.svg"
import { useState } from "react";

const Signup = () => {
    const { formData, handleChange, handleRegisterSubmit, toggleVisibility, isVisible, loading } = useBuyerContext();

    const [confirmVisible, setConfirmVisible] = useState<boolean>(false);

    const toggle = () => setConfirmVisible(!confirmVisible);

    return(
        <div className=" mx-auto m-4 container bg-neutral-50 shadow-xl rounded-md py-8 px-6">
            <p className="text-center text-xl font-bold">Welcome to SupaShop</p>
            <p className="text-center text-sm">Kindly sign up to start shopping</p>

            {/* mobile and Tablets */}

            <div className="lg:hidden mt-10 border-3 border-[#FF7900] rounded-2xl p-3 lg:p-6 grid grid-cols-1 mx-auto gap-4 md:w-3/5">
                <Input
                    labelPlacement='outside'
                    type="text"
                    label="Name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    placeholder='Enter your full name'
                    startContent={
                        <BsPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                    }
                />
                <Input
                    onChange={handleChange}
                    value={formData.username}
                    name="username"
                    labelPlacement='outside'
                    type="text"
                    label="Username"
                    placeholder='Enter your username'
                    startContent={
                        <BsPersonLinesFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                    }
                />
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
                    labelPlacement='outside'
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    label="Phone Number"
                    placeholder='Enter your phone number'
                    startContent={
                        <div className="flex items-center">
                            <BsPhone className="text-2xl text-default-400 pointer-events-none flex-shrink" />
                            <p>+234</p>
                        </div>
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
                <Input
                    onChange={handleChange}
                    labelPlacement='outside'
                    type={isVisible ? "text" : "password"}
                    label="Confirm Password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
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
                <Button radius="full" variant="shadow" className="bg-[#FF7900] py-6 text-[#eeeeee] w-full shadow-lg" onClick={handleRegisterSubmit} isLoading={loading}>Register</Button>
                <p className="text-gray-800 text-center my-3">Or Sign up with other methods</p>
                <Button disabled radius="full" variant="shadow" className="w-full bg-zinc-300 py-6">
                    <Image src={google} width={25} height={25}/>
                    Continue with Google
                </Button>

                <p className="text-center my-3">Already have an account? <Link to="/login" className="text-[#FF7900]">Sign in</Link></p>
            </div>

            {/* Large screens */}
            <div className="hidden lg:grid lg:grid-cols-2 mt-10 border-3 border-[#FF7900] lg:w-1/2 rounded p-6 lg:gap-4 mx-auto">
                <Input
                    labelPlacement='outside'
                    type="text"
                    label="Name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    placeholder='Enter your full name'
                    startContent={
                        <BsPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                    }
                />
                <Input
                    onChange={handleChange}
                    value={formData.username}
                    name="username"
                    labelPlacement='outside'
                    type="text"
                    label="Username"
                    placeholder='Enter your username'
                    startContent={
                        <BsPersonLinesFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                    }
                />
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
                    labelPlacement='outside'
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    label="Phone Number"
                    placeholder='Enter your phone number'
                    startContent={
                        <div className="flex items-center">
                            <BsPhone className="text-2xl text-default-400 pointer-events-none flex-shrink" />
                            <p>+234</p>
                        </div>
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
                <Input
                    onChange={handleChange}
                    labelPlacement='outside'
                    type={isVisible ? "text" : "password"}
                    label="Confirm Password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
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
                <div className="col-span-2">
                    <div className="w-1/2 mx-auto">
                        <Button radius="full" variant="shadow" className="bg-[#FF7900] py-6 text-[#eeeeee] w-full shadow-lg" onClick={handleRegisterSubmit} isLoading={loading}>Register</Button>
                        <p className="text-gray-800 text-center my-3">Or Sign up with other methods</p>
                        <Button disabled radius="full" variant="shadow" className="w-full bg-zinc-400 py-6">
                            <Image src={google} width={25} height={25}/>
                            Continue with Google
                        </Button>

                        <p className="text-center my-3">Already have an account? <Link to="/login" className="text-[#FF7900]">Sign in</Link></p>
                    </div>
                </div>
            </div>
            <Loading/>
        </div>
    )
}

export default Signup