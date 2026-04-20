import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='max-w-4xl mx-auto mt-10 p-4'>
            <div className='max-w-2xl mx-auto p-10 border border-gray-300 h-full'>
            <h1 className='text-2xl lg:text-3xl text-[#001931] font-bold mb-6'>Create Your Account</h1>
            <form className='flex flex-col gap-4'>
                {/* name */}
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
                {/* photo url */}
                <label>Photo URL</label>
                <input type="text" placeholder="Enter photo URL" />
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
                {/* terms and conditions */}
                <div className="flex items-center">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="ml-2">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a></label>
                </div>
                {/* submit button */}
                <button className="btn btn-active btn-secondary mt-4">Register</button>
                {/* have account */}
                <p>
                    Already have an account? <Link to={'/auth/login'} className='text-blue-600 underline font-semibold'>Login</Link>
                </p>

            </form>

            </div>
        </div>
    );
};

export default Register;