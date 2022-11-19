import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useStateContext} from "../contexts/ContextProvider";

const PrivateRoute = () => {
    const {isAuthenticated} = useStateContext();

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
