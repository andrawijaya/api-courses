import {Navigate, Outlet} from "react-router-dom";
import React from "react";

import constants from "../../constants";
import {NavBar} from "../../components";
import useToken from "../../hooks/useToken";

const {ROUTES} = constants;

const ProtectedRoutes = () => {
    const {token} = useToken();
    if (!token) {
        return <Navigate to={ROUTES.LOGIN} replace />
    }

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default ProtectedRoutes;
