import React from 'react';
import Swal from 'sweetalert2';

const FindRoommate = () => {

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const postData = Object.fromEntries(formData.entries());

        postData.rentAmount = parseFloat(postData.rentAmount);

        // post data to server
        fetch('http://localhost:3000/roommates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
    }

    return (
        <div >
            <div className='max-w-4xl mx-auto p-6'>
                <h1 className='text-3xl font-bold mb-6 text-[#001932] text-center'>Add Roommate Request </h1>

                {/* form  */}
                <form onSubmit={handlePostSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>

                    <input type="text" placeholder='Title' name='title' required />

                    <input type="text" placeholder='Location' name='location' required />

                    <input type="number" placeholder='Rent Amount' name='rentAmount' required />

                    <select name='roomType' required className='text-gray-400'>
                        <option value="">Room Type</option>
                        <option value="single">Single</option>
                        <option value="shared">Shared</option>
                    </select>

                    <input type="text" placeholder='Lifestyle Preferences' name='lifestylePreferences' required />

                    <select name="availability" required className='text-gray-400'>
                        <option value="">Availability</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not Available</option>
                    </select>
                    {/* read only */}
                    <input type="email" placeholder='Contact Email' name='contactEmail' required />
                    <input type="text" placeholder='User Name' name='name' required />

                    <textarea placeholder='Description' name='description' required className='col-span-2'></textarea>
                    <button type="submit" className='col-span-2 btn btn-primary'>Add Request</button>
                </form>

            </div>
        </div>
    );
};

export default FindRoommate;