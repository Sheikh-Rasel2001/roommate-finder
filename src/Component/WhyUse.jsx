import React from 'react';

const reasons = [
    {
        id: 1,
        title: 'Wide Selection',
        description: 'Access a diverse range of listings across multiple cities, ensuring you find the perfect match for your preferences and budget.',
        image: 'https://i.ibb.co.com/XnQG4Gm/selection.png'
    },
    {
        id: 2,
        title: 'Verified Listings',
        description: 'All listings are verified for authenticity, providing you with a safe and trustworthy platform to find your ideal roommate or room.',
        image: 'https://i.ibb.co.com/rfq6S34B/verified.png'
    },
    {
        id: 3,
        title: 'User-Friendly Interface',
        description: 'Our intuitive platform makes it easy to search, filter, and connect with potential roommates or rooms that meet your specific criteria.', 
        image: 'https://i.ibb.co.com/XfCGhhqS/trust.png'
    },
]

const WhyUse = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                reasons.map(reason => (
                    <div key={reason.id} className='space-y-4 p-6 border border-gray-300 rounded-lg'>
                        <img src={reason.image} alt={reason.title} className='w-16 h-16' />
                        <h2 className='text-xl font-semibold'>{reason.title}</h2>
                        <p className='text-justify'>{reason.description}</p>
                    </div>
                ))
            }

        </div>
    );
};

export default WhyUse;