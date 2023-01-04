import api from '../config/api'
import store from "../store";

// export const getCourseById = (id) => {
//     const courseList = store.getState().courses?.courseList;

//     return courseList.filter((course) => {
//         return course.courseId === id;
//     })?.[0]
// }

export const getCourseById = (id) => {
    return api.get("/courses/" + id)
}

export const getCourses = (page) => api.get("/courses", {
    params: {
        page
    }
})

export const addCourse = (data) => {
    return api.post("/courses", data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    })
}

export const deleteCourseById = (id) => {
    return api.delete(`/courses/${id}`)
}


export const updateCourseById = (course) => {
    return api.put("/courses/" + course.courseId, course)
}
