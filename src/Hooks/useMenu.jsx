// import { useEffect, useState } from "react"

// const useMenu = () => {
//     const [menu, setMenu] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect( () => {
//         fetch('http://localhost:5000/menu')
//             .then(res => res.json()) 
//             .then(data => {
//                 setMenu(data);
//                 setLoading(false);
//             })
//     } ,[])
//     return [menu, loading]
// }
// export default useMenu;

import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosSecure = useAxiosSecure();
    const { data: menu =[], isLoading: loading, refetch} = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menus');
            return res.data;
        }
    })
    return [menu, loading, refetch] ;
};

export default useMenu;