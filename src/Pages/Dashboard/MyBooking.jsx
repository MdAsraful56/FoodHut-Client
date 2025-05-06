import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SectionTitle from './../../Components/SectionTitle';

const MyBooking = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${user?.email}`);
            return res.data;
        }
    })

    console.log(user?.email, payments);

    return (
        <div>
            <SectionTitle />
        </div>
    );
};

export default MyBooking;