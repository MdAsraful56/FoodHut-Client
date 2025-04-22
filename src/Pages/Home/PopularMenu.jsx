import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItemCard from '../../Components/MenuItemCard';

const PopularMenu = () => {


    const [menu, setMenu] = useState([]);

    useEffect( () => {
        fetch('../../../public/Data/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    } ,[])



    return (
        <div className='my-5'>
            <SectionTitle subHeading={'Check it Out'} heading={'From Our Popular Menu'} />
            <section className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item} />)
                }
            </section>
            <div className="flex items-center justify-center mt-6">
                <button className="btn btn-neutral btn-outline text-center border-b-4 border-gray-700 border-0 hover:border-b-0">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;