import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: "https://food-hut-server-five.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;