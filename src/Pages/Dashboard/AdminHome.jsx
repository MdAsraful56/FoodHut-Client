import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { AiFillProduct } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [stats, setStats] = useState({});
    const [chartData, setChartData] = useState([]);

    // Get admin stats
    useEffect(() => {
        axiosPublic.get('/admin-stats')
            .then(res => setStats(res.data))
            .catch(err => console.error(err));
    }, [axiosPublic]);

    // Get order stats
    useEffect(() => {
        axiosPublic.get('/order-stats')
            .then(res => setChartData(res.data))
            .catch(err => console.error(err));
    }, [axiosPublic]);

    // coustom shape for bar chart
    const getPath = (x = 0, y = 0, width = 0, height = 0) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // coustom shape for pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.quantity };
    });

    

    return (
        <div>
            <div className="mx-5 my-10 ">
                <span className="text-3xl">Hi, Welcome {user ? user.displayName : 'Back'} </span>
                <section className="mt-6 lg:ml-10 ml-2">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaDollarSign size={30} />
                            </div>
                            <div className="stat-title text-xl">Revenue</div>
                            <div className="stat-value">{Math.round(stats.totalRevenueValue || 0)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <AiFillProduct size={30} />
                            </div>
                            <div className="stat-title text-xl">Products</div>
                            <div className="stat-value">{stats.products || 0}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsers size={30} />
                            </div>
                            <div className="stat-title text-xl">Users</div>
                            <div className="stat-value">{stats.users || 0}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <MdShoppingCart size={30} />
                            </div>
                            <div className="stat-title">Orders</div>
                            <div className="stat-value">{stats.orders || 0}</div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col lg::flex-row justify-between items-center mt-10">
                    <div className="md:w-1/2 w-full">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminHome;
