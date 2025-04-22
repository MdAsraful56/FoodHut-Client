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
        </div>
    );
};

export default PopularMenu;