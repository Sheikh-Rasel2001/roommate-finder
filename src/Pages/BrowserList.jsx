import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedRoommates from '../Component/FeaturedRoommates';

const BrowserList = () => {
    const roommates = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto px-6 my-10'>
                <h1 className='text-3xl text-[#001931] text-center font-bold mb-6'>All Roommates</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        roommates.map(roommate => (
                            <FeaturedRoommates key={roommate._id} roommate={roommate}></FeaturedRoommates>
                        ))
                    }
                </div>

            </div>
    );
};

export default BrowserList;