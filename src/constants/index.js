const constants = {
    ACTION: {
        ADD_COURSE: "ADD_COURSE",
        ADD_COURSE_TYPE: "ADD_COURSE_TYPE",
        EDIT_COURSE: "EDIT_COURSE",
        DELETE_COURSE: "DELETE_COURSE",
        SET_TOKEN: "SET_TOKEN"
    },
    ROUTES: {
        DASHBOARD: "/",

        AUTH: "/auth",
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",

        COURSE: "/course",
        ADD_COURSE: "/course/add",
        EDIT_COURSE: "/course/edit",

        COURSE_TYPE: "/course-type",
        ADD_COURSE_TYPE: "/course-type/add"

    }
}

export default constants;
