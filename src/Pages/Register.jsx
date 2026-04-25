import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Authentication/AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        console.log(name, photo, email, password, terms);

        setErrorMessage('');
        setSuccess(false);

        // terms and conditions validation
        if (!terms) {
            alert('You must agree to the terms and conditions');
            return;
        }

        // password validation
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Must include at least one uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrorMessage("Must include at least one lowercase letter");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setErrorMessage("Must include at least one number");
            return;
        }
        if (!/[#?!@$%^&*-]/.test(password)) {
            setErrorMessage("Must include at least one special character");
            return;
        }

        // create user with email and password
        createUser(email, password)
            .then(result => {
                console.log(result);
                const currentUser = result.user;

                const userProfile = {
                    creationTime : currentUser.metadata?.creationTime,
                    lastSignInTime : currentUser.metadata?.lastSignInTime,
                    email : currentUser.email,
                    displayName : name,
                    photoURL : photo
                }

                // update user profile
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('updated profile');
                        // post user info to database
                        fetch('https://roommate-finder-server.onrender.com/users', {
                            method: "POST",
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(userProfile)
                        })
                        .then(res => res.json())
                        .then(user => {
                            if(user.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Your account has been created",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            navigate('/');
                            setSuccess(true);
                        })

                       
                    })
                    .catch(error => {
                        setErrorMessage(error.message);
                    }) // end of update profile

            })
            .catch(error => {
               setErrorMessage(error.message);
            })
        form.reset();
    }

    return (
        <div className='max-w-4xl mx-auto mt-10 p-4'>
            <div className='max-w-2xl mx-auto p-10 border border-gray-300 h-full shadow-lg'>
                <h1 className='text-2xl lg:text-3xl text-[#001931] font-bold mb-6'>Create Your Account</h1>
                <form onSubmit={handleRegister} className='flex flex-col gap-4'>
                    {/* name */}
                    <label>Name</label>
                    <input type="text" name='name' placeholder="Enter your name" required />
                    {/* photo url */}
                    <label>Photo URL</label>
                    <input type="text" name='photo' placeholder="Enter photo URL" required />
                    {/* email */}
                    <label>Email</label>
                    <input type="email" name='email' placeholder="Enter your email" required />
                    {/* password */}
                    <label>Password</label>
                    <div className='w-full relative'>
                        <input type={showPassword ? "text" : "password"} name='password' required placeholder="Enter your password" className='w-full' />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-0 right-4'>
                            {showPassword ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
                        </button>
                    </div>
                    {/* error message */}
                    {errorMessage && (
                        <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
                    )}
                    {/* terms and conditions */}
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" name='terms' required />
                        <label htmlFor="terms" className="ml-2">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a></label>
                    </div>
                    {/* submit button */}
                    <button className="btn btn-active btn-secondary mt-4">Register</button>
                    {/* have account */}
                    <p>
                        Already have an account? <Link to={'/auth/login'} className='text-blue-600 underline font-semibold'>Login</Link>
                    </p>
                    {/* success message */}
                    {
                        success && (
                            <p className="text-green-500 text-sm mt-1">
                                Create user successfully. Please login to your account.
                            </p>
                        )
                    }

                </form>

            </div>
        </div>
    );
};

export default Register;