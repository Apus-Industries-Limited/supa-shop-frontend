/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { FormData } from "../types/Formtypes";
import axios from "../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toastMsg } from "../utils/toast";
import { EMAIL_REGEX, PWD_REGEX } from "../utils/conatant";
import { DEV_URL as url } from "../utils/axios";



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
  const [isVisible, setIsVisible] = useState<boolean>(false);



  const toggleVisibility = () => setIsVisible(!isVisible);
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
    try {
        const response = await axios.post(`/auth/login`, formData,  {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },withCredentials:true
        });
      const result = await response.data?.user
      setUser({ ...result, dp: `${result.dp !== null ? `${url}/images/user/${result.dp}` : ""}` })
      toastMsg('success','Login Successful')
      setFormData({
        name:"",
        username: '',
        password: "",
        email: "",
        phone_number: "",
        confirmpassword:""
      }) // Handle success
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
    const v1 = EMAIL_REGEX.test(formData.email);
    const v2 = PWD_REGEX.test(formData.password);
    /***
    @dev This is to check if the email and password passes regex requirement
    */
    if (!v1) {
      toastMsg("error", 'Enter a valid email');
      return;
    }

    if (!v2) {
      toastMsg("error", 'Password must be 8 to 24 characters long which must include 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character');
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      toastMsg("error", 'Password does not match ');
      return;
    }
    try {
      setLoading(true)
      const response = await axios.post(`/auth/register`, formData,  {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },withCredentials:true
    });
      toastMsg("success", 'Registration Successfully')
      setFormData({ ...formData,
        name:"",
        username: '',
        password: "",
        phone_number: "",
        confirmpassword:""
      })
      console.log(response.data)
    navigate('/email-otp')
    } catch (err:any) {
      if (!err?.response) {
        toastMsg("error", 'No server response')
      } else if (err.response?.status === 409) {
        toastMsg("error", 'Email already exist')
      } else if (err.response?.status === 400) { 
        toastMsg("error", 'All fields must be entered')
      } else{
        toastMsg("error",`Registration failed. pls try again or contact the admin support \n err.message`)
      } // Handle error
    } finally {
      setLoading(false)
    }
  };

  const handleForgetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          setLoading(true)
            await axios.post(`/auth/forgot-password`, formData,  {
                headers: {
                    'Content-Type': 'application/json'
                }
            });// Handle success
          toastMsg("success","Recovery link has been sent")
          navigate('login')
        } catch (error:any) {
          const errMsg: string|any = error.message
            toastMsg("error",errMsg) // Handle error
        } finally {
          setLoading(false)
        }
    }; 

    /**
     * @dev : This logic is to handle infinte scroll
     */




  return (
    <BuyerContext.Provider value={{ formData,handleChange, handleLoginSubmit,user,loading,handleRegisterSubmit, handleForgetPassword,back,setUser,persist,setPersist,toggleVisibility,isVisible}}>
      {props.children}
    </BuyerContext.Provider>
  )
}

export default BuyerContext;
