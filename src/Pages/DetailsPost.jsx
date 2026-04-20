import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const DetailsPost = () => {
    const  postDetails = useLoaderData();
    const [like, setLike] = useState(0);
    const { title, location, roomType, rentAmount, availability, lifestylePreferences, contactEmail, name, description } = postDetails;

    const handleLike = () => {
        fetch(`http://localhost:3000/roommates/like/${postDetails._id}`, {
            method: 'PATCH',
        })
        .then(response => response.json())
        .then(data => {
            setLike(data.likes);
        })
        .catch(error => {
            console.error('Error liking the post:', error);
        });
    }

    return (
        <div>
            <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10'>
                <h1 className='text-3xl text-[#001931] font-bold mb-4'>{title}</h1>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Location:</span> {location}</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Room Type:</span> {roomType}</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Rent Amount:</span> {rentAmount}৳</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Availability:</span> {availability}</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Lifestyle Preferences:</span> {lifestylePreferences}</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Contact Email:</span> {contactEmail}</p>
                <p className='text-lg text-gray-700 mb-2'><span className='font-semibold'>Posted By:</span> {name}</p>
                <p className='text-lg text-gray-700 mt-4'><span className='font-semibold'>Description:</span> {description}</p>

                <div className='flex gap-6 items-center justify-between'>
                    <button className='bg-[#001931] text-white py-2 px-4 rounded-lg hover:bg-[#003366] transition-colors duration-300 mt-6'>
                        Contact Poster
                    </button>
                    <button onClick={handleLike} className='btn btn-outline btn-secondary mt-6 flex items-center gap-2'>
                        {like > 0 ? <FaHeart className='text-red-500 text-xl' /> : <FaRegHeart className='text-xl'/>}
                        {like}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPost;