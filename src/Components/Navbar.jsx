import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { HiOutlineShoppingCart } from "react-icons/hi";
import useCart from '../Hooks/useCart';

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logout Successful');
                Swal.fire({
                    title: "LogOut Successful",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navOptions = <>
                        <li className=''><NavLink to='/'>Home</NavLink></li>
                        <li className=''><NavLink to='/menu'>Our Menu</NavLink></li>
                        <li className=''><NavLink to='/order'>Order Food</NavLink></li>
                        <li className=''><NavLink to='/contact'>Contact Us</NavLink></li>
                        {/* {
                            user ? <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><Link onClick={handleLogOut} >Logout</Link></li>
                            </> : 
                            <>
                                <li><Link to='/Login'>Login</Link></li>
                                <li><Link to='/registration'>Registration</Link></li>
                            </>
                        } */}
    </>


    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-100 text-white bg-[#ffffff7a] shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menuColor menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">FoodHut</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>

                    <Link to='/dashboard'>
                        <button className="btn p-2 mr-3">
                            <HiOutlineShoppingCart  size={25}/>
                            <span className="badge badge-sm indicator-item badge-secondary">+{cart.length}</span>
                        </button>
                    </Link>

                    <div className="dropdown dropdown-end text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 space-y-2 rounded-box z-1 mt-3 w-60 p-2 px-3 shadow">
                            <li className='text-xs'> Name: {user.displayName} </li>
                            <li className='text-xs' > Email: {user.email} </li>
                            <button className='btn btn-xs btn-accent' onClick={handleLogOut}><a>Logout</a></button>
                        </ul>
                    </div>
                        </> :
                        <>
                            <ul className="menu menu-horizontal px-1">
                                <li className=''><Link  to='/Login'>Login</Link></li>
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;