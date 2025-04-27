import React, { useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const [menu, refetch] = useMenu();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(menu.length / itemsPerPage);

    const totalPrice = menu.reduce((total, item) => total + (parseFloat(item.price) || 0), 0);
    const totalPriceRound = parseFloat(totalPrice.toFixed(2));
    
    // New: Slice the menu to show only current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);


    // const {refetch} = useQuery({});

    // Dummy delete handler
    const handleDeleted = (id) => {
        console.log("Delete item with id:", id);
            Swal.fire({
            title: "Are you sure?",
            text: "Deleted This Menu Items",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Menu has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch();
                })
            }
                });
        // You can add your delete logic here
    };

    // Pagination buttons 
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`mx-1 px-3 py-1 rounded ${
                currentPage === i ? 'bg-[#D1A054] text-white' : 'bg-gray-200'
            }`}
            >
            {i}
            </button>
        );
        }
        return pages;
    };

    return (
        <div>
            <SectionTitle subHeading={"Hurry Up's"} heading={'Manage All Items'} />
            <div className="">
                <div className="bg-white m-10 p-5 border rounded-lg"> 
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl">Total Items: {menu.length}</h3>
                    <h3 className="text-2xl">Total Price: ${totalPriceRound}</h3>
                    <button className="btn bg-[#D1A054] text-white">Pay</button>
                </div>
                
                <div className="mt-7">
                    <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#D1A054] text-white rounded-2xl'>
                        <tr className='uppercase'>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={item._id}>
                            <th>{indexOfFirstItem + index + 1}</th>
                            <td>
                                <img src={item.image} alt="" className="size-20 w-24 h-16 rounded-xl" />
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDeleted(item._id)} className="btn bg-none">
                                <MdDelete size={25} color="red" />
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>

                    {/* Pagination Buttons */}
                    <div className="flex justify-center mt-6">
                    {renderPageNumbers()}
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
