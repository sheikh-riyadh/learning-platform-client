import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    console.log(user)
    if (loading) {
        return;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
};

export default PrivateRouter;