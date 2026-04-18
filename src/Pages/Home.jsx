import React from 'react';
import Hero from '../Component/Hero';
import { useLoaderData } from 'react-router';
import FeaturedRoommates from '../Component/FeaturedRoommates';

const Home = () => {
    const roommates = useLoaderData();
    console.log(roommates);
    return (
        <div className='w-full'>
            <div>
                <Hero></Hero>
            </div>
            <div className='max-w-7xl mx-auto px-6 my-10'>
                <h1 className='text-3xl text-[#001931] text-center font-bold mb-6'>Featured Roommates</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        roommates.map(roommate => (
                            <FeaturedRoommates key={roommate._id} roommate={roommate}></FeaturedRoommates>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Home;