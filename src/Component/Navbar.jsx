import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/look-for.png';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handelScroll);
        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    }, [])

    return (
        <div>

            <div className='max-w-7xl mx-auto px-6 mb-6'>
                <div className='w-full flex justify-between items-center py-6'>
                    {/* logo */}
                    <div>
                        <Link to='/' className='flex gap-2 items-center'>
                            <img src={logoImg} alt="Logo" className='w-6 h-6 rounded-full lg:w-10 lg:h-10' />
                            <h1 className='text-2xl lg:text-4xl font-bold'>RoommateNeed</h1>
                        </Link>
                        
                    </div>
                    <div className='hidden lg:flex gap-4 items-center'>
                        <button className="btn btn-active btn-secondary">Register</button>
                        <button className="btn btn-outline btn-secondary">Log In</button>
                    </div>
                    {/* mobile menu button */}
                    <div className='lg:hidden'>
                        <button onClick={() => setOpen(true)} className='text-2xl'>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
            {/* menu items */}
            <div className={`hidden lg:block w-full bg-[#005480] py-4 border z-80 transition-all duration-300 ease-in-out ${sticky ? 'fixed top-0 left-0' : 'relative'}`}>
                <div className='max-w-7xl mx-auto px-6 flex gap-5 text-gray-50 font-semibold items-center'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/allPosts'}>Find Roommates</NavLink>
                    <NavLink to={'/browseListing'}>Browse Listing</NavLink>
                    <NavLink to={'/myListing'}>My Listing</NavLink>
                    <NavLink to={'/findRoommate'}>Add to Find Roommate</NavLink>
                </div>

            </div>

            <div className={`fixed top-0 left-0 w-64 h-full z-50 bg-white shadow-2xl p-6 transform transition-all duration-500 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-end'>
                    <button onClick={() => setOpen(false)} className='text-2xl font-semibold'>
                        <IoClose />
                    </button>
                </div>
                <div className='flex flex-col gap-4 py-6 text-lg font-semibold'>
                    <NavLink onClick={() => setOpen(false)} to={'/allPosts'}>Home</NavLink>
                    <NavLink onClick={() => setOpen(false)} to={'/allPosts'}>Find Roommates</NavLink>
                    <NavLink onClick={() => setOpen(false)} to={'/browseListing'}>Browse Listing</NavLink>
                    <NavLink onClick={() => setOpen(false)} to={'/myListing'}>My Listing</NavLink>
                    <NavLink onClick={() => setOpen(false)} to={'/findRoommate'}>Add to Find Roommate</NavLink>
                </div>
                <div className='flex flex-col gap-4 mt-4'>
                    <button className="btn btn-active btn-secondary">Register</button>
                    <button className="btn btn-outline btn-secondary">Log In</button>
                </div>

            </div>
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;