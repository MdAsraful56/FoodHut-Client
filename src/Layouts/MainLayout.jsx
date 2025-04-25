import React from 'react';
// import { Outlet, useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {

    // const location = useLocation();
    // console.log(location);

    // const onHeaderFooter = location.pathname.includes('/Login');

    return (
        <div className='comic-relief-regular'>
            {/* {onHeaderFooter || <Navbar />} */}
            <Navbar />
            <Outlet></Outlet>
            <Footer />
            {/* {onHeaderFooter || <Footer />} */}
        </div>
    );
};

export default MainLayout;