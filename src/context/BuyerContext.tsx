/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { FormData } from "../types/Formtypes";
import axios from "../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toastMsg } from "../utils/toast";



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
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

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
  const [persist, setPersist] = useState<boolean | null>(() => {
    const storedValue = localStorage.getItem('persist');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  } )

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
      setUser(response.data?.user)
      toastMsg('success','Login Successful')
      setFormData({
        name:"",
        username: '',
        password: "",
        email: "",
        phone_number: "",
        confirmpassword:""
      }) // Handle success
      console.log(response.data)
      navigate(from,{replace:true})
    } catch (err:any) {
      if ( !err.response ) {
          toastMsg("error",'No server response')
        }else if ( err.response?.status === 400 ){
        toastMsg("error", 'Missing Email or password' )
      } else if (err.response?.status === 401){
        toastMsg("error",'Invalid Email or password')
      }
      else {
        toastMsg("error",'Login Failed')
      } // Handle error
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
      toastMsg("success", 'Registration Successfully')
      console.log(response.data)
      setFormData({ ...formData,
        name:"",
        username: '',
        password: "",
        phone_number: "",
        confirmpassword:""
      })
    navigate('/email-otp')
    } catch (err:any) {
    if ( !err?.response ) {
          toastMsg("error",'No server response')
        } else if (err.response?.status === 409) {
        toastMsg("error",'Email already exist. Enter an new email')
      } else {
        toastMsg("error",'Registration failed. pls try again or contact the admin support')
      } // Handle error
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
          console.log(response.data,); // Handle success
          navigate('login')
        } catch (error:any) {
          const errMsg: string|any = error.message
            toastMsg("error",errMsg) // Handle error
        }
    }; 


  return (
    <BuyerContext.Provider value={{ formData,handleChange, handleLoginSubmit,user,loading,handleRegisterSubmit, handleForgetPassword,back,setUser,persist,setPersist}}>
      {props.children}
    </BuyerContext.Provider>
  )
}

export default BuyerContext;
