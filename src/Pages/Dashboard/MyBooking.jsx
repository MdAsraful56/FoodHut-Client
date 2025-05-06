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

    // console.log(user?.email, payments);

    return (
        <div>
            <SectionTitle heading={'Payment History'} subHeading={'Show My All Booking'} />
            <div className="mx-20 bg-white shadow-md rounded-lg p-5">
                <h2 className="text-3xl">Total Payments : {payments.length}</h2>
                <section className="mt-6">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-white rounded-2xl'>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Total Price</th>
                                {/* <th>Total Cart</th> */}
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>${payment.price}</td>
                                    {/* <td>{payment?.foodItemIds?.length}</td> */}
                                    <td>{payment.status}</td>
                                    <td>{payment.date}</td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyBooking;