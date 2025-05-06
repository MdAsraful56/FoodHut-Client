import React from 'react';
import useCart from '../../Hooks/useCart';
import SectionTitle from '../../Components/SectionTitle';
// import { FaRemoveFormat } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router';

const Cart = () => {

    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price); // or Number(item.price)
        return total + (isNaN(price) ? 0 : price);
    }, 0);

    const handleDeleted = (id) => {
        console.log(`Item with id ${id} deleted`);
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                refetch();
            })
        }
        });
    }

    return (
        <div>
            <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'} />
            <div className="bg-white m-10 p-5 border rounded-lg"> 
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl">Total Items: {cart.length}</h3>
                    <h3 className="text-2xl">Total Price: ${totalPrice}</h3>
                    {
                        cart.length ? 
                        <Link to='/dashboard/payment'><button className="btn bg-[#D1A054] text-white ">Pay</button></Link> 
                        :
                        <button disabled className="btn bg-[#D1A054] text-white ">Pay</button>
                    }
                </div>
                <div className="mt-7">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-white rounded-2xl'>
                            <tr className='runded-2xl uppercase'>
                                <th></th>
                                <th>item Image</th>
                                <th>item title</th>
                                <th>price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td><img src={item.image} alt="" className="size-20 w-24 h-16 rounded-xl" /></td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td className=''><button onClick={ () => {handleDeleted(item._id)} } className="btn bg-none"><MdDelete size={25} color='red' /></button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;