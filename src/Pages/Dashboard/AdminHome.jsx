import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';
import { AiFillProduct } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

const AdminHome = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [stats, setStats] = useState({});

    axiosPublic.get('/admin-stats')
        .then(res => {
            console.log(res.data);
            setStats(res.data);
        })
        .catch(err => {
            console.error(err);
        });


    return (
        <div>
            <div className="mx-5 mt-10">
                <span className="text-2xl">Hi, Welcome { user ? user?.displayName : 'Back' } </span>
                <section className="mt-6 ml-10">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaDollarSign size={30} />
                            </div>
                            <div className="stat-title text-xl">Revenue</div>
                            <div className="stat-value">{stats.totalRevenueValue}</div>
                            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <AiFillProduct size={30} />
                            </div>
                            <div className="stat-title text-xl">Products</div>
                            <div className="stat-value">{stats.products}</div>
                            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsers size={30} />
                            </div>
                            <div className="stat-title text-xl">Users</div>
                            <div className="stat-value">{stats.users}</div>
                            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <MdShoppingCart size={30} />
                            </div>
                            <div className="stat-title">Orders</div>
                            <div className="stat-value">{stats.orders}</div>
                            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminHome;