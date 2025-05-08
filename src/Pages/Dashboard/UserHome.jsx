import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UserHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='mt-10 ml-6'>
            <span className="text-3xl">Hi, Welcome {user ? user.displayName : 'Back'} </span>
            <div className="mt-10 lg:ml-6 ml-1 flex flex-col items-center justify-center space-y-4">
                <div className="border-2 border-[#D1A054] p-4 rounded-full">
                    <img src={user?.photoURL} alt="" className="rounded-full w-72 h-72" />
                </div>
                <h3 className="text-xl font-semibold ">Name: {user?.displayName}</h3>
                <h3 className="text-xl font-semibold ">Email: {user?.email}</h3>
            </div>
        </div>
    );
};

export default UserHome;