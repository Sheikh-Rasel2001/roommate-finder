import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='max-w-4xl mx-auto mt-10 p-4 mb-20'>
                    <div className='max-w-2xl mx-auto p-10 border border-gray-300 h-full'>
                    <h1 className='text-2xl lg:text-3xl text-[#001931] font-bold mb-6'>Login Your Account</h1>
                    <form className='flex flex-col gap-4'>
                        {/* email */}
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                        {/* password */}
                        <label>Password</label>
                        <div className='w-full relative'>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className='w-full'/>
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-0 right-4'>
                                {showPassword ? <FaRegEyeSlash size={24}/> : <FaRegEye size={24}/>}
                            </button>
                        </div>
                        <p>
                            <Link className='text-blue-600 underline font-semibold'>Forgot Password?</Link>
                        </p>
                        {/* submit button */}
                        <button className="btn btn-active btn-secondary mt-4">Register</button>
                        {/* have account */}
                        <p>
                            Don't have an account? <Link to={'/auth/register'} className='text-blue-600 underline font-semibold'>Register</Link>
                        </p>
        
                    </form>
        
                    </div>
                </div>
    );
};

export default Login;