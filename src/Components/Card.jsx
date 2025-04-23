import React from 'react';
import Btn from './Btn';

const Card = ({ item }) => {

    const { image, name, recipe } = item;

    return (
        <div>
            <div className="card bg-base-100 h-[450px] shadow-sm">
                <figure>
                    <img
                    className='rounded-lg h-72 w-full object-cover'
                    src={image}
                    alt="Food Items image" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-lg font-semibold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center ">
                        <Btn BtnName={'Add to Cart'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;