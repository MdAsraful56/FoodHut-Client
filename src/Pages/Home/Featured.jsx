import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='featurd-items text-white'>
            <div className="featurd-items-shadow pb-20 pt-12 my-20">
                <SectionTitle heading={'From our menu'} subHeading={"Check it Out"} />
                <div className="md:flex justify-center items-center gap-4 px-20">
                    <div className="">
                        <img src={featuredImg} alt="" className="" />
                    </div>
                    <div className="md:ml-5 space-y-2">
                        <h5 className="text-lg">March 20, 2026</h5>
                        <h4 className="text-xl uppercase">Where can i get some ?</h4>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit porro magni iure quidem quod eaque deleniti officia illum, distinctio sed libero omnis minus, tempore nisi error odit totam quas voluptatum sint. Laboriosam at dignissimos tenetur iure voluptatibus ipsam fugiat.</p>
                        {/* <button className="btn bg-none border-0 border-b-2 border-black">Read More</button> */}
                        <div className="">
                            <button className="btn btn-neutral btn-outline text-white border-b-4 border-gray-300 border-0 hover:border-b-0">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;