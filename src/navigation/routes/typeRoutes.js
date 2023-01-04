import React from "react";

import {TypeList} from "../../pages";
import constants from "../../constants";

const {ROUTES} = constants;

const typeRoutes = {
    path: ROUTES.COURSE_TYPE,
    children: [
        { index: true, element: <TypeList /> }
    ]
}

export default typeRoutes;
