import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaBook, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { MdMail, MdPayment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShop } from 'react-icons/fa6';
import useCart from '../Hooks/useCart';
import { AuthContext } from '../Providers/AuthProvider';
import './Dashboard.css';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin, setIsAdmin] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data.admin);
        });
    }, [user.email]);

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Main content */}
        <div className="drawer-content flex flex-col">
            {/* Top Navbar for mobile */}
            <div className="navbar bg-base-300 border-b lg:hidden px-4">
            <div className="flex-none">
                <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                <GiHamburgerMenu size={20} />
                </label>
            </div>
            <div className="flex-1 text-xl font-bold text-center">FoodHut</div>
            </div>

            <div className="p-4">
            <Outlet />
            </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side z-40">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <aside className="w-64 h-screen bg-[#D1A054] shadow-lg comic-relief-regular flex flex-col justify-between">
            <div>
                <h2 className="text-3xl text-center pt-6 pb-4 border-b border-white">FoodHut</h2>
                <ul className="menu p-4 uppercase space-y-2 text-base-content">
                {isAdmin ? (
                    <>
                    <li><NavLink to='/dashboard/adminHome'> <FaHome /> Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/addItems'> <FaUtensils /> Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageItems'> <FaList /> Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageBookings'> <FaBook /> Manage Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/allUser'> <FaUsers /> All Users</NavLink></li>
                    </>
                ) : (
                    <>
                    <li><NavLink to='/dashboard/userHome'> <FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/payment'> <MdPayment /> Payment</NavLink></li>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to='/dashboard/review'> <FaAd /> Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <FaList /> My Bookings</NavLink></li>
                    </>
                )}
                </ul>
            </div>

            <div className="border-t border-white p-4">
                <ul className="menu uppercase space-y-2">
                <li><NavLink to='/'> <FaHome /> Home</NavLink></li>
                <li><NavLink to='/menu'> <GiHamburgerMenu /> Menu</NavLink></li>
                <li><NavLink to='/order'> <FaShop /> Shop</NavLink></li>
                <li><NavLink to='/contact'> <MdMail /> Contact</NavLink></li>
                </ul>
            </div>
            </aside>
        </div>
        </div>
    );
};

export default Dashboard;
