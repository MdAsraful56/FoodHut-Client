import React from 'react';
// import { Outlet, useLocation } from 'react-router';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {

    const location = useLocation();
    console.log(location);

    const onHeaderFooter = location.pathname.includes('/Login');

    return (
        <div>
            {onHeaderFooter || <Navbar />}
            <Outlet></Outlet>
            {onHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;