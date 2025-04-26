import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle subHeading={'How Many ?'} heading={'Mnage All Users'} />
            <div className="bg-white m-10 p-5 border rounded-lg">
                <h2 className="text-3xl">All Users {users.length}</h2>
                <div className="mt-7">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-white rounded-2xl'>
                            <tr className='runded-2xl uppercase'>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td><button className="btn"> <FaUsers /> </button></td>
                                            <td className=''><button onClick={ () => {handleDeleted(item._id)} } className="btn bg-none"><MdDelete size={25} color='red' /></button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;