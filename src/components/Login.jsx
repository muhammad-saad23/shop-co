import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdEye ,IoMdEyeOff} from "react-icons/io";
import { data,Link, useNavigate } from 'react-router';

function Login() {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
      } = useForm();
    
      const navigate=useNavigate();
    
      const onSubmit= (data)=>{
        const storeData=JSON.parse(localStorage.getItem('user',data));
        if (
            storeData && storeData.email === data.email && 
            storeData && storeData.password===data.password &&
            storeData && storeData.termsCondition===data.termsCondition 

        ) 
            {
                alert('Login Successfully');                
                navigate('/');
        }
        else{
            setError('email',{message:'Invalid Credentials'});
            setError('password',{message:'Invalid Credentials'});
        }
        
      }
      
      const [password,setPassword]=useState(true);      

      const ShowPassword =()=>{
        setPassword(!password)
      }      
    
    
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div  data-aos="fade-up" data-aos-duration="1500" className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            {/* <!-- Logo --> */}
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Or <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">sign in to your existing account</Link>
                </p>
            </div>
            
            {/* <!-- Signup Form --> */}
            <form className="mt-8 space-y-6" action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 rounded-md shadow-sm">                   
                    
                    {/* <!-- Email Input --> */}
                    <div>
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input id="email-address"  type='email' {...register("email",{required:"Email field is required",pattern:{value:/^\S+@\S+$/i,message:"Invaild email address "}})} autoComplete="email"  className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    
                    {/* <!-- Password Input --> */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                          <div className="relative mt-1">
                                  <input id="password"  {...register("password",{required:{value:true,message:"Password field is required"}})} type={password ? 'password' : 'text'} autoComplete="new-password"  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                  <button type="button" onClick={ShowPassword} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500 cursor-pointer" >
                                    {password ? 
                                    <IoMdEyeOff onClick={ShowPassword}/> 
                                    : <IoMdEye onClick={ShowPassword}/> }                                
                                  </button>
                            </div>
                                    {errors.password && <p role="alert" className='text-red-600'>{errors.password.message}</p>}
    
                    </div>
                                        
                </div>
                
                {/* <!-- Terms and Conditions Checkbox --> */} 
                 <div className="flex place-items-center">
                    <input id="terms" {...register("termsCondition",{required:{value:true,message:"Please Agree terms and condition"}})} type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                        I agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms and Conditions </a>
                    </label>
                </div>
                    {errors.termsCondition && <p role="alert" className='-mt-6 ml-5 text-sm text-red-600'>{errors.termsCondition.message}</p>}   
                
                
                {/* <!-- Submit Button --> */}
                <div>
                    <button type="submit" onClick={onsubmit} className="relative cursor-pointer flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#222] border border-transparent rounded-md group hover:bg-[#4c4747] focus:outline-none focus:ring-2 focus:ring-offset-2">
                        Login
                    </button>
                    
                </div>
            </form>
            
            {/* <!-- Social Sign Up Buttons --> */}
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-gray-500 bg-white">Or continue with</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <div>
                        <a href="#" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    
                    <div>
                        <a href="#" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
}

export default Login
