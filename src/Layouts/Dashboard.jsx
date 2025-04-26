import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { MdMail, MdPayment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from 'react-router';
import { FaShop } from 'react-icons/fa6';
import useCart from '../Hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className='flex comic-relief-regular'>
            <div className="w-64 min-h-screen bg-[#D1A054] space-y-2">
                <h2 className="text-3xl text-center pt-5">FoodHut</h2>
                <ul className="menu p-4 uppercase text-base-content space-y-1">
                    <li><NavLink to='/dashboard/userHome'> <FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment'> <MdPayment /> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to='/dashboard/review'> <FaAd /> Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <FaList /> My Bookings</NavLink></li>
                </ul>
                <div className="p-4">
                    <hr className='' />
                    <hr className='' />
                </div>
                <ul className="menu p-4 uppercase">
                    <li><NavLink to='/'> <FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'> <GiHamburgerMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order'> <FaShop /> Shop</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <MdMail /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;