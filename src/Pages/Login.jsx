import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Authentication/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('');
        setSuccess(false);

        // log in user with email and password
        loginUser(email, password)
            .then(result => {
                console.log(result)
                setSuccess(true);
                form.reset();
                if (result.user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/')

            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            })

    }
    return (
        <div className='max-w-4xl mx-auto mt-10 p-4 mb-20'>
            <div className='max-w-2xl mx-auto p-10 border border-gray-300 h-full shadow-lg'>
                <h1 className='text-2xl lg:text-3xl text-[#001931] font-bold mb-6'>Login Your Account</h1>
                <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                    {/* email */}
                    <label>Email</label>
                    <input type="email" name='email' placeholder="Enter your email" />
                    {/* password */}
                    <label>Password</label>
                    <div className='w-full relative'>
                        <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter your password" className='w-full' />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-0 right-4'>
                            {showPassword ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
                        </button>
                    </div>
                    <p>
                        <Link className='text-blue-600 underline font-semibold'>Forgot Password?</Link>
                    </p>
                    {/* submit button */}
                    <button className="btn btn-active btn-secondary mt-4">Log In</button>
                    {/* have account */}
                    <p>
                        Don't have an account? <Link to={'/auth/register'} className='text-blue-600 underline font-semibold'>Log In</Link>
                    </p>
                    {/* error message */}
                    {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
                    {/* success message */}
                    {success && <p className='text-green-500 text-sm'>Login Successful!</p>}
                </form>

            </div>
        </div>
    );
};

export default Login;