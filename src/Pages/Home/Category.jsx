import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import swiper01 from '../../assets/home/slide1.jpg';
import swiper02 from '../../assets/home/slide2.jpg';
import swiper03 from '../../assets/home/slide3.jpg';
import swiper04 from '../../assets/home/slide4.jpg';
import swiper05 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../Components/SectionTitle';


const Category = () => {
    return (
        <div>
            <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <img src={swiper01} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Salads</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper02} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Pizzas</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper03} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Soups</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper04} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Desserts</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper05} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Salads</h5>
                </SwiperSlide>
                {/* same data  */}
                <SwiperSlide className=''>
                    <img src={swiper01} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Salads</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper02} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Pizzas</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper03} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Soups</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper04} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Desserts</h5>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={swiper05} alt="" className="w-full h-[450px] object-cover" />
                    <h5 className="text-2xl text-center uppercase text-white -mt-16 ">Salads</h5>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;