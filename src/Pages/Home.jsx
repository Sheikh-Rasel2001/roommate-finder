import React from 'react';
import Hero from '../Component/Hero';
import { useLoaderData } from 'react-router';
import FeaturedRoommates from '../Component/FeaturedRoommates';
import PopularCity from '../Component/PopularCity';
import WhyUse from '../Component/WhyUse';

const Home = () => {
    const roommates = useLoaderData();

    return (
        <div className='w-full'>
            <div>
                <Hero></Hero>
            </div>
            {/* post list  */}
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

            {/* popular cities */}
            <div className='max-w-7xl mx-auto px-6 my-10'>
                <h1 className='text-3xl text-[#001931] text-center font-bold mb-6'>Popular Cities</h1>
                <div>
                    <PopularCity></PopularCity>
                </div>
            </div>
            {/* why use our service */}
            <div className='max-w-5xl mx-auto px-6 my-10'>
                <h1 className='text-3xl text-[#001931] text-center font-bold mb-6'>Why Use Our Service?</h1>
                <div>
                    <WhyUse></WhyUse>
                </div>
            </div>
        </div>
    );
};

export default Home;