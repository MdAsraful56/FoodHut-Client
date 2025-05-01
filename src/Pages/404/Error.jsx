import React from 'react';
import img404 from '../../assets/404.gif';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';


const Error = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center comic-relief-regular my-20'>
            <h1 className="md:text-4xl text-2xl">Opps!! Something is missing......</h1>
            <img src={img404} alt="" className="h-[500px]" />
            <button onClick={() => {navigate('/')}} className="btn md:text-2xl text-xl"><FaArrowLeft size={20} /> Back Home</button>
        </div>
    );
};

export default Error;