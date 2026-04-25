
import React from 'react';
import { Link } from 'react-router';

const cities = [
    { id: 1, name: 'Dhaka', image: 'https://i.ibb.co.com/d4zG9z1D/dhaka.jpg' },
    { id: 2, name: 'Chittagong', image: 'https://i.ibb.co.com/zT6QKGkH/chittagong.jpg'},
    { id: 3, name: 'Rajshahi', image: 'https://i.ibb.co.com/mV03Qyp6/rajshahi.jpg' },
    { id: 4, name: 'Sylhet', image: 'https://i.ibb.co.com/fGNNgLdR/sylhet.jpg' }
]

const PopularCity = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    cities.map(city => (
                        <div key={city.id} className='border border-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 relative cursor-pointer'>
                            <div className=''>
                                <img src={city.image} alt={city.name} className='w-full h-36 object-cover rounded-lg'/>
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg'></div>
                            <div className='absolute top-0 left-0 flex items-center justify-center flex-col w-full h-full'>
                                <h3 className='text-3xl font-bold text-white text-center'>{city.name}</h3>
                                <p className='text-lg text-white font-semibold'>
                                    <Link className='hover:underline'>Room</Link> | <Link to={'/browseListing'} className='hover:underline'>Roommate</Link>
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default PopularCity;