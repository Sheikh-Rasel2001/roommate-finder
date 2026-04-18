import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional icons

const Hero = () => {
    const roommates = [
        {
            id: 1,
            name: "Alex Johnson",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
            content: "Quiet professional looking for a shared apartment in Downtown. Non-smoker, loves meal prepping.",
            stats: { rent: "$1200", location: "Downtown", moveIn: "June 1st" }
        },
        {
            id: 2,
            name: "Jordan Smith",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
            content: "Graduate student seeking a pet-friendly home. I have a very friendly Golden Retriever!",
            stats: { rent: "$950", location: "North Side", moveIn: "Immediately" }
        },
        {
            id: 3,
            name: "Sam Rivera",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
            content: "Tech lead looking for a clean, minimalist space. I work from home 3 days a week.",
            stats: { rent: "$1100", location: "West End", moveIn: "July 15th" }
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === roommates.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? roommates.length - 1 : prev - 1));
    };

    const { name, image, content, stats } = roommates[currentIndex];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col lg:flex-row border border-gray-200">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-64 lg:h-96">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                    <p className="text-gray-600 mb-6 italic">"{content}"</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <span className="block text-xs text-blue-600 font-semibold uppercase">Budget</span>
                            <span className="text-lg font-bold">{stats.rent}</span>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <span className="block text-xs text-green-600 font-semibold uppercase">Move-in</span>
                            <span className="text-lg font-bold">{stats.moveIn}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Controls */}
            <div className='flex justify-center items-center mt-6'>
                <div className="flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-gray-300 bg-gray-300 text-white hover:bg-blue-700 transition"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-300 text-white hover:bg-blue-700 transition"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            </div>
        </div>
    );
};

export default Hero;