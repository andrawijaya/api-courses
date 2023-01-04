import React from "react";

import {
    PageNotFound,
    Dashboard
} from "../pages";
import constants from "../constants";
import {
    createBrowserRouter,
} from "react-router-dom";
import courseRoutes from "./routes/courseRoutes";
import typeRoutes from "./routes/typeRoutes";
import authRoutes from "./routes/authRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";

const {ROUTES} = constants;

const navigationConfigs = createBrowserRouter([
    { path: "*", element: <PageNotFound /> },
    {
        path: ROUTES.DASHBOARD,
        element: <ProtectedRoutes />,
        children: [{ index: true, element: <Dashboard /> }, courseRoutes, typeRoutes]
    },
    authRoutes,
])

export default navigationConfigs;
