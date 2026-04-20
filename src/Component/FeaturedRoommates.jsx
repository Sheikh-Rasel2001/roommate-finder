import React from 'react';
import { Link } from 'react-router';

const FeaturedRoommates = ({ roommate }) => {
    const { _id, title, location, roomType, rentAmount, availability } = roommate;
    return (
        <div className='w-full border border-gray-100 shadow-2xl p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
            <div className='space-y-4 px-4'>
                <h2 className='text-2xl text-[#001931] font-semibold'>{title}</h2>
                <p className='text-lg text-gray-700'>{location}</p>
                <div className='flex justify-between items-center text-gray-700 font-semibold'>
                    <span className='capitalize'>{roomType}</span>
                    <span className='capitalize'>{availability}</span>
                    <span>Amount : {rentAmount}৳</span>
                </div>
                <div>
                    <Link to={`/postDetails/${_id}`}>
                        <button className='bg-[#001931] text-white py-2 px-4 rounded-lg hover:bg-[#003366] transition-colors duration-300 w-full'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRoommates;