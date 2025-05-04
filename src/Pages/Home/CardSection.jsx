import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import Card from '../../Components/Card';

const CardSection = () => {

    const [menuItems, setMenuItems] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data.slice(0, 3));
            })
    } ,[])



    return (
        <div className='mt-16'>
            <section className="bg-black text-white p-10 my-28 text-center md:mx-32 mx-10">
                <h2 className="text-4xl">Call Us: +8801889245756</h2>
            </section>
            <section className="">
                <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 mb-16">
                    {
                        menuItems.map(item => <Card key={item._id} item={item} />)
                    }
                </section>
            </section>
        </div>
    );
};

export default CardSection;