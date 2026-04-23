import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Authentication/AuthContext';

const MyListing = () => {
    const {user} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(user?.email) {
            fetch(`http://localhost:3000/my-roommates?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
        }
    }, [user])
    return (
        <div className="max-w-6xl mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#001931]">My Listings ({posts.length})</h2>
            
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="table w-full bg-white text-left">
                    {/* table head */}
                    <thead className="bg-[#001931] text-white">
                        <tr>
                            <th className="p-4">Sl.</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <tr key={post._id} className="hover:bg-gray-50 transition-colors border-b">
                                    <td className="p-4 font-semibold">{index + 1}</td>
                                    <td className="font-medium text-gray-800">{post.title}</td>
                                    <td>{post.location}</td>
                                    <td>{post.rentAmount}৳</td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-xs ${post.availability === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {post.availability}
                                        </span>
                                    </td>
                                    <td className="flex gap-2 justify-center py-4">
                                        <button className="btn btn-sm bg-blue-600 hover:bg-blue-800 text-white border-none">
                                            Update
                                        </button>
                                        <button 
                                            
                                            className="btn btn-sm bg-red-500 hover:bg-red-700 text-white border-none"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center p-10 text-gray-500">
                                    কোন পোস্ট পাওয়া যায়নি। নতুন একটি রিকুয়েস্ট অ্যাড করুন।
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListing;