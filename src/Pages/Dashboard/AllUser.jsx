import React  from 'react';
import SectionTitle from '../../Components/SectionTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';


const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleted = (id) => {
        console.log(`Item with id ${id} deleted`);
        Swal.fire({
        title: "Are you sure?",
        text: "Deleted This User",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${id}`)
                .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your User has been deleted.",
                        icon: "success"
                    });
                }
                refetch();
            })
        }
        });
    }

    const handleUserRole = (id) => {
        console.log(`Item with id ${id} deleted`);
        Swal.fire({
        title: "Are you sure?",
        text: "Make this user an Admin",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes !"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${id}`)
                .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "This user is now an Admin.",
                        icon: "success"
                    });
                }
                refetch();
            })
        }
        });
    }


    return (
        <div>
            <SectionTitle subHeading={'How Many ?'} heading={'Mnage All Users'} />
            <div className="bg-white m-10 p-5 border rounded-lg">
                <h2 className="text-3xl">All Users: {users.length}</h2>
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
                                            <td>{item?.role === 'admin' ? "Admin" : <button onClick={ () => {handleUserRole(item._id)}}  className="btn"> <FaUsers /> </button>}</td>
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