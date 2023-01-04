import React from "react";

import constants from "../../constants";
import {AddCourse, CourseList, EditCourse} from "../../pages";

const {ROUTES} = constants;

const courseRoutes = {
    path: ROUTES.COURSE,
    children: [
        { index: true, element: <CourseList /> },
        { path: ROUTES.ADD_COURSE, element: <AddCourse /> },
        { path: `${ROUTES.EDIT_COURSE}/:courseId?`, element: <EditCourse /> }
    ]
}

export default courseRoutes;
