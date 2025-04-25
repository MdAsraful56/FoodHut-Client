import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {

    const axiosSecure = useAxiosSecure();


    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts');
            return res.data;
        }
    });

    return [cart]
};

export default useCart;