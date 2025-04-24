import React from 'react';

const HomePoster = () => {
    return (
        <div className='poster my-20 h-[450px] bg-cover bg-center relative'>
            <section className="text-center absolute top-1/4">
                <div className="text-black bg-white md:mx-36 mx-9 rounded-xl md:py-20 py-12 md:px-20 px-5 space-x-4">
                    <h2 className="text-3xl mb-3">FOODHUT RESTAURANT</h2>
                    <p className="">Welcome to FoodHut – where flavor meets finesse! Our chefs blend culinary artistry with the freshest ingredients to create dishes that delight your senses. Whether you're here for a hearty meal or a light bite, FoodHut is your perfect destination for unforgettable food and warm hospitality.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePoster;