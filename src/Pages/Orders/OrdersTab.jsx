import React from 'react';
import Card from '../../Components/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const OrdersTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 6) {
        chunkedItems.push(items.slice(i, i + 6));
    }
    // console.log(chunkedItems);

    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper">
                    {chunkedItems.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 mb-16">
                                {chunk.map(item => <Card key={item._id} item={item} />)}
                            </section>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default OrdersTab;