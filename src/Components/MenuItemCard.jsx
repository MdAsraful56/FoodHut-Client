import React from 'react';

const MenuItemCard = ({item}) => {

    const { name, price, image, recipe } = item

    return (
        <div className='flex space-x-5'>
            <img src={image} alt="" className="w-24 rounded-b-[70px] rounded-tr-[70px]" />
            <section>
                <h4 className="text-lg">{name}  -----------</h4>
                <p className="">{recipe}</p>
            </section>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItemCard;