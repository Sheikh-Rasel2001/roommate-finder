import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='w-full bg-[#005480] mt-12 text-gray-50'>
            <div className='max-w-7xl mx-auto p-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {/* logo and description */}
                    <div>
                        <h1 className='text-3xl font-bold mb-3'>
                            Roommate<span className='text-purple-400'>Finder</span>
                        </h1>
                        <p className='text-justify'>Everyone's idea of the perfect roommate is different, so search based on what's important to you.</p>
                    </div>
                    {/* quick links */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-semibold mb-2'>Quick Links</h2>
                        <NavLink className='hover:underline' to={'/'}>Home</NavLink>
                        <NavLink className='hover:underline' to={'/allPosts'}>Find Roommates</NavLink>
                        <NavLink className='hover:underline' to={'/browseListing'}>Browse Listing</NavLink>
                        <NavLink className='hover:underline' to={'/myListing'}>My Listing</NavLink>
                        <NavLink className='hover:underline' to={'/findRoommate'}>Add to Find Roommate</NavLink>
                    </div>
                    {/* social media links */}
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Follow Us</h2>
                        <div>
                            <span className='flex items-center gap-2 mb-2'><FaFacebookF /> Facebook</span>
                            <span className='flex items-center gap-2 mb-2'><FaXTwitter /> Twitter</span>
                            <span className='flex items-center gap-2'><FaInstagram /> Instagram</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;