import React from 'react';
import './../../index.css';

const Signin = () => {
    return (
         <div className='bg-[##F2F2F2] w-full h-[1024px] flex  flex-col items-center font-light' >
            <span><h1 className='text-[#1E1E1E] text-[24px]  text-center font-black font-["Inter"] w-[83] h-[31] mt-9'>Sign In</h1><br/>
            <p  className='text-[#1E1E1E] text-[20px] font-black font-["Inter"] w-[136] h-[18]'>Please Sign in first</p>
            </span>
            <div className='w-[1160px]  h-[496px] bg-[#FF7900] p-[140px] m-[18px] flex-shrink-0 rounded-[15px] flex  flex-col items-center'>
                <form action=' ' method=' '>
                    <span className='mb-20'>
                        <label className='text-[#F2F2F2] text-[18px] not-italic font-light font-["Inter"] border-white'>username</label><br/>
                        <input type='text' placeholder=' @johndoe' name='username' className='w-[442px] h-[60px] bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                    </span><br></br>

                        <label className='text-[#F2F2F2] text-[18px] not-italic font-light font-["Inter"] mt-32'>password</label><br/>
                        <input type='password' name='password' placeholder='********' className='w-[442px] h-[60px] focus:placeholder-current  bg-[#F2F2F2] fill-[#F2F2F] rounded-[15px]'/>
                </form>
            </div>
            <button type='submit' className='w-[440px] h-[50px] px-[191px] py-3.5 bg-orange-500 rounded-[10px] 
                    justify-center items-center gap-2.5 inline-flex  font-medium text-[18px] text-[#FFFFFF]'>Sign In</button><br/>
                    <div>
                        <h1 className='text-zinc-800 text-sm font-medium font-["Inter"] text-[14px]'>Don't have an account yet?<a className='text-sm font-black font-["Inter"] text-[#FF7900]' href=''>Sign Up</a></h1>
                    </div><br/>
            <div className='mt-16'>
                <h2 className='text-[#1E1E1E] text-[16px]  text-center font-black font-["Inter"] w-[83] h-[31]'>OR</h2>
                <h2 className='text-[#1E1E1E] text-[16px] font-black font-["Inter"] w-[136] h-[18]'>
                    Connect With
                </h2>
            </div><br></br>
            <div className='flex flex-row space-x-3'>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.06669 9C4.06669 8.41542 4.16372 7.85489 4.33711 7.32923L1.30383 5.013C0.712639 6.21323 0.379639 7.56577 0.379639 9C0.379639 10.4331 0.712357 11.7847 1.30256 12.9842L4.33415 10.6635C4.16245 10.1402 4.06669 9.58177 4.06669 9Z" fill="#FBBC05"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39232 3.68184C10.6623 3.68184 11.8094 4.13184 12.7106 4.86816L15.3325 2.25C13.7348 0.859078 11.6865 0 9.39232 0C5.83057 0 2.76945 2.03681 1.30371 5.013L4.33685 7.32923C5.03576 5.20777 7.02799 3.68184 9.39232 3.68184Z" fill="#EA4335"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39232 14.3182C7.02813 14.3182 5.0359 12.7922 4.33699 10.6708L1.30371 12.9866C2.76945 15.9632 5.83057 18 9.39232 18C11.5906 18 13.6894 17.2194 15.2645 15.7569L12.3854 13.5311C11.573 14.0428 10.5499 14.3182 9.39232 14.3182Z" fill="#34A853"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9954 8.99999C17.9954 8.46815 17.9134 7.89538 17.7905 7.36368H9.39233V10.8409H14.2265C13.9847 12.0265 13.3269 12.9379 12.3854 13.5311L15.2646 15.7569C16.9191 14.2213 17.9954 11.9336 17.9954 8.99999Z" fill="#4285F4"/>
                    </svg></button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0716 6L12 12.4828L4.92844 6H19.0716ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z" fill="#333333"/>
                </svg>
                </button>
            </div>

            
         </div>






    )
    
}

export default React.memo(Signin)