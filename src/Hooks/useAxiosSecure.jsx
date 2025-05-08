import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://food-hut-server-five.vercel.app',
})

const useAxiosSecure = () => {

    const navigte = useNavigate();
    const { logOut } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return(config);
    }, function (error) {
        return Promise.reject(error)
    })


    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async(error) => {
        const status = error.response.status;
        // console.log('status error in the Interceptor', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigte('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;