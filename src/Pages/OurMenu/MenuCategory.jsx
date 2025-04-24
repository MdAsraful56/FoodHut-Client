import React from 'react';
import MenuItemCard from '../../Components/MenuItemCard';

const MenuCategory = ({items}) => {
    return (
        <div className='my-16'>
            <section className='grid md:grid-cols-2 gap-8'>
                {
                    items.map(item => <MenuItemCard key={item._id} item={item} />)
                }
            </section>
            <div className="flex items-center justify-center mt-6">
                <button className="btn btn-neutral btn-outline text-center border-b-4 border-gray-700 border-0 hover:border-b-0">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;