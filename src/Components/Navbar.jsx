import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext);

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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li><Link to='/order'>Order Food</Link></li>
                        {
                            user ? <>
                                {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
                                {/* <li><Link onClick={handleLogOut} >Logout</Link></li> */}
                            </> : 
                            <>
                                <li><Link to='/Login'>Login</Link></li>
                                <li><Link to='/registration'>Registration</Link></li>
                            </>
                        }
    </>


    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-100 text-white bg-[#22302a7a] shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                            className="menu menu-sm dropdown-content bg-base-100 space-y-2 rounded-box z-1 mt-3 w-52 p-2 px-5 shadow">
                            <li> Name: {user.displayName} </li>
                            <li> Email: {user.email} </li>
                            <button className='btn btn-xs' onClick={handleLogOut}><a>Logout</a></button>
                        </ul>
                    </div>
                        </> :
                        <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;