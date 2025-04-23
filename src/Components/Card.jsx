import React from 'react';

const Card = ({ item }) => {

    const { image, name, recipe, price } = item;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={image}
                    alt="Food Items image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;