import React from 'react';
import MenuItemCard from '../../Components/MenuItemCard';
import { Link } from 'react-router';

const MenuCategory = ({items, routePath}) => {
    return (
        <div className='my-16'>
            <section className='grid md:grid-cols-2 gap-8'>
                {
                    items.map(item => <MenuItemCard key={item._id} item={item} />)
                }
            </section>
            { routePath && 
                <div className="flex items-center justify-center mt-6">
                    <Link to={`/order/${routePath}`}>
                        <button className="btn btn-neutral btn-outline text-center border-b-4 border-gray-700 border-0 hover:border-b-0">ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default MenuCategory;