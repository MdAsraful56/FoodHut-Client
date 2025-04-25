import React, { useContext } from 'react';
import Btn from './Btn';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';

const Card = ({ item }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const { image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    
    // console.log(user?.email);

    const handleAddToCard = (food) => {
        // console.log(food);
        if (user && user?.email) {
            // let 
        } else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please Login to Order Food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            });
        }
    }


    return (
        <div>
            <div className="card bg-base-100 h-[450px] shadow-sm">
                <figure>
                    <img
                    className='rounded-lg h-72 w-full object-cover'
                    src={image}
                    alt="Food Items image" />
                    <p className="absolute bg-slate-800 text-white right-0 top-0 m-4 p-2 rounded-lg font-semibold">${price}</p>
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-lg font-semibold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center ">
                        <button onClick={() => {handleAddToCard(item)}} className="btn btn-neutral btn-outline text-center border-b-4 border-[#BB8506] border-[0.5px] hover:border-b-0">Add to Cart</button>
                        {/* <Btn  BtnName={'Add to Cart'} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;