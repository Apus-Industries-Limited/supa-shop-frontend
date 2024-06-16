/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { FormData } from "../types/Formtypes";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BuyerContext = createContext<null | any>({})

interface Props {
  children: React.ReactNode
}

export const BuyerProvider = (props: Props) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }

  const [formData, setFormData] = useState<FormData>({
    name:"",
    username: '',
    password: "",
    email: "",
    phone_number: "",
    confirmpassword:""
  });
  const [user, setUser] = useState<object | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData , [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    console.log("logging in")
    try {
        const response = await axios.post(`/auth/login`, formData,  {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
        });
        if (response.data.status === 200){
          toast.success('Login SUccessful')
          setUser(response.data)
          setFormData({
            name:"",
            username: '',
            password: "",
            email: "",
            phone_number: "",
            confirmpassword:""
          })
      } // Handle success
      console.log(response.data)
        navigate('/')
    } catch (error) {
      toast('Detail Not Match'); // Handle error
    } finally {
      setLoading(false)
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("registering")
    try {
      const response = await axios.post(`/auth/register`, formData,  {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
    });
    if(response.status === 200){
        toast.success('Registration Successfully')
      } // Handle success
      setFormData({ ...formData,
        name:"",
        username: '',
        password: "",
        phone_number: "",
        confirmpassword:""
      })
      console.log(response.data)
    navigate('/email-otp')
    } catch (error) {
    toast('Detials Not Match'); // Handle error
    }
  };

  const handleForgetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/auth/forgot-password`, formData,  {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });
            console.log(response.data, navigate('login')); // Handle success
        } catch (error:any) {
          const errMsg: string|any = error.message
            toast(errMsg) // Handle error
        }
    }; 


  return (
    <BuyerContext.Provider value={{ formData,handleChange, handleLoginSubmit,user,loading,handleRegisterSubmit, handleForgetPassword,back}}>
      {props.children}
    </BuyerContext.Provider>
  )
}

export default BuyerContext;
