import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../Providers/AuthProvider';

const AddItems = () => {

    const axiosSecure = useAxiosSecure();

    const handleAddItems = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form[0].value;
        const image = form[1].value;
        const category = form[2].value.toLowerCase();
        const price = form[3].value;
        const recipe = form[4].value;

        const newItem = { name, image, category, price, recipe };
        console.log(newItem);

        // Add your API call here to add the item to the database

        axiosSecure.post('/menus', newItem) 
            .then(res => {
                if (res.data.insertedId) {
                    // alert('Item added successfully!');
                    Swal.fire({
                        title: "Add Items Successfull!",
                        icon: "success",
                        draggable: true
                    });
                } else {
                    // alert('Failed to add item. Please try again.');
                }
            })
        // fetch('your-api-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newItem),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    }


    return (
        <div>
            <SectionTitle subHeading={"what's New"} heading={'Add An Items'} />
            <div className="bg-[#d19f5421] m-10 p-5 border  rounded-lg">
                <div className="flex justify-center items-center my-10">
                    <form onSubmit={handleAddItems} className="w-1/2 flex flex-col gap-5">
                        <span className="">Recipe name*</span>
                        <input type="text" placeholder="Recipe name" required className="input input-bordered w-full" />
                        <span className="">Recipe Image Url</span>
                        <input type="url" placeholder="Recipe Image Url" required className="input input-bordered w-full" />
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col gap-3 w-1/2">
                                <span className="">Category*</span>
                                <select required className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Pick one</option>
                                    <option>Salad</option>
                                    <option>Pizza</option>
                                    <option>Soup</option>
                                    <option>Dessert</option>
                                    <option>Drinks</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3 w-1/2">
                                <span className="">Recipe Price*</span>
                                <input type="number" step='0.01' placeholder="Recipe Price" required className="input input-bordered w-full" />
                            </div>
                        </div>
                        <span className="">Recipe Details*</span>
                        <textarea className="textarea textarea-bordered h-36 resize-none w-full" required placeholder="Recipe Details"></textarea>
                        <button className="btn bg-[#D1A054]"> <FaUtensils/> Add Items</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;