/* eslint-disable @typescript-eslint/no-explicit-any */
import useBuyerContext from '../hooks/useBuyerContext';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { Button, Input } from '@nextui-org/react';
import { BsEnvelope } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Forgetpassword = () => {

    const {formData,handleChange, handleForgetPassword,loading} = useBuyerContext()


   

    return (
        <div className=" mx-auto m-4 container bg-neutral-50 rounded-md py-8 px-6 shadow-xl">
            <BackButton />
            <div className="p-2 mt-10 border-3 border-[#FF7900] rounded-2xl md:p-6 grid grid-cols-1 mx-auto gap-4 md:w-3/5 lg:w-1/2">
                <p className=" text-2xl font-bold mt-0 text-center">Forgot Password</p>
                <p className='text-center text-small mb-2'>We are here to help!</p>
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
                <Button radius="full" variant="shadow" className="bg-[#FF7900] py-6 text-[#eeeeee] w-full shadow-lg" onClick={handleForgetPassword} isLoading={loading}>Send Recovery Link</Button>

                <p className="text-center my-3">Remeber Password? <Link to="/login" className="text-[#FF7900]">Login</Link></p>
            </div>
            <Loading loading={loading} />
        </div>
    )
}

export default Forgetpassword;