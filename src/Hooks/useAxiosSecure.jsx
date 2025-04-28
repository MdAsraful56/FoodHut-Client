import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {

    const navigte = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return(config);
    }, function (error) {
        return Promise.reject(error)
    })


    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('status error in the Interceptor', status);
        if (status === 401 || status === 403) {
            navigte('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;