import { useEffect, useState, useCallback } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMenu = useCallback(() => {
        setLoading(true);
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchMenu();
    }, [fetchMenu]);

    return [menu, loading, fetchMenu]; // return fetchMenu as refetch
};

export default useMenu;
