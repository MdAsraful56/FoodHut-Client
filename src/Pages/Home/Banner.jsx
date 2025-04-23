import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import slider01 from '../../assets/home/01.jpg';
import slider02 from '../../assets/home/02.jpg';
import slider03 from '../../assets/home/03.png';
import slider04 from '../../assets/home/04.jpg';
import slider05 from '../../assets/home/05.png';
import slider06 from '../../assets/home/06.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={slider01} />
                </div>
                <div>
                    <img src={slider02} />
                </div>
                <div>
                    <img src={slider03} />
                </div>
                <div>
                    <img src={slider04} />
                </div>
                <div>
                    <img src={slider05} />
                </div>
                <div>
                    <img src={slider06} />
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;