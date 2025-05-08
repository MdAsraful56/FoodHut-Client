import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {


    const [reviews, setReview] = useState([]);

    useEffect( () => {
        fetch('https://food-hut-server-five.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    } ,[])


    return (
        <div className='my-16'>
            <SectionTitle heading={'Testimonials'} subHeading={"What Our Client Say"} />
            <section>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}> 
                            <div className="text-center space-y-5 mx-20 flex flex-col items-center">
                                <Rating
                                    className=''
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft size={50} />
                                <p className="">{review.details}</p>
                                <h4 className="text-2xl text-orange-300">{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;