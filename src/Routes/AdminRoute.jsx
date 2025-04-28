import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin


    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default AdminRoute;