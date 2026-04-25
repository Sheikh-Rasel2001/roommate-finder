import React, { useContext } from 'react';
import AuthContext from '../Authentication/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePost = () => {
    const {user} = useContext(AuthContext);
    const {_id, title, location, rentAmount, roomType, lifestylePreferences, status, contactNumber, availability, description} = useLoaderData();

    const handleUpdatePost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatePost = Object.fromEntries(formData.entries())

        // update post to the server
        fetch(`https://roommate-finder-server.onrender.com/roommates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatePost)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                 Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
            }
        })

    }


    return (
        <div >
            <div className='max-w-4xl mx-auto p-6'>
                <h1 className='text-3xl font-bold mb-6 text-[#001932] text-center'>Add Roommate Request </h1>

                {/* form  */}
                <form onSubmit={handleUpdatePost} className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>

                    <input type="text" placeholder='Title' name='title' defaultValue={title} required />

                    <input type="text" placeholder='Location' name='location' defaultValue={location} required />

                    <input type="number" placeholder='Rent Amount' name='rentAmount' defaultValue={rentAmount} required />

                    <select name='roomType' defaultValue={roomType} required className='text-gray-400'>
                        <option value="">Room Type</option>
                        <option value="single">Single</option>
                        <option value="shared">Shared</option>
                    </select>

                    <input type="text" placeholder='Lifestyle Preferences' name='lifestylePreferences' defaultValue={lifestylePreferences} required />

                    <select name="status" defaultValue={status} required className='text-gray-400'>
                        <option value="">Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>

                    <input type="text" placeholder='Contact Number' name='contactNumber' defaultValue={contactNumber} required />

                    <select name="availability" defaultValue={availability} required className='text-gray-400'>
                        <option value="">Availability</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not Available</option>
                    </select>
                    {/* read only */}
                    <input value={user?.email} readOnly name='contactEmail'/>
                    <input value={user?.displayName} readOnly name='name'/>

                    <textarea placeholder='Description' name='description' defaultValue={description} required className='col-span-2'></textarea>
                    <button type="submit" className='col-span-2 btn btn-primary'>Add Request</button>
                </form>

            </div>
        </div>
    );
};

export default UpdatePost;