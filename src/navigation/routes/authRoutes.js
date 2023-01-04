import React from "react";
import constants from "../../constants";
import {Login} from "../../pages";

const {ROUTES} = constants;

const authRoutes = ({
    path: ROUTES.AUTH,
    children: [
        { index: true, path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.REGISTER, element: <h1>Register Page</h1> }
    ]
})

export default authRoutes;
