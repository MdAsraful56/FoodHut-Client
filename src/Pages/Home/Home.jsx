import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import CardSection from './CardSection';
// import Poster from '../../Components/Poster';
import HomePoster from './HomePoster';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>FoodHut || Home</title>
            </Helmet>
            <Banner />
            <Category />
            <HomePoster />
            <PopularMenu />
            <CardSection />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;