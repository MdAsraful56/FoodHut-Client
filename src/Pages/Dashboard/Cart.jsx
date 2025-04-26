import React from 'react';
import useCart from '../../Hooks/useCart';
import SectionTitle from '../../Components/SectionTitle';
// import { FaRemoveFormat } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Cart = () => {

    const [cart] = useCart();

    const totalPrice = cart.reduce( (total, item) => total + item.price ,0)

    return (
        <div>
            <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'} />
            <div className="bg-red-100 m-10 p-5 rounded-lg"> 
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl">Total Items: {cart.length}</h3>
                    <h3 className="text-2xl">Total Price: ${totalPrice}</h3>
                    <button className="btn bg-[#D1A054] ">Pay</button>
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
                                            <td className=''><MdDelete size={25} color='red' /></td>
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