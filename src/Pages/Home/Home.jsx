import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import CardSection from './CardSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <CardSection />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;