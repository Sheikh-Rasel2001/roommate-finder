import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Authentication/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const MyListing = () => {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-roommates?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setPosts(data);
                })
        }
    }, [user]);

    // post delete
    const handleDeletePost = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed)
                fetch(`http://localhost:3000/roommates/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                            const remainingPost = posts.filter(post => post._id !== id)
                            // console.log(remainingPost);
                            setPosts(remainingPost);
                    })
        });
    }

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
                                        <Link to={`/updatePost/${post._id}`}>
                                        <button className="btn btn-sm bg-blue-600 hover:bg-blue-800 text-white border-none">
                                            Update
                                        </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeletePost(post._id)}
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
                                    <Link to={'/findRoommate'} className='text-center flex justify-center items-center mt-5 text-xl text-blue-700'><FaArrowRight /></Link>
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