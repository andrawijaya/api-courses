import constants from "../../constants";

export const addCourse = (course) => ({
    type: constants.ACTION.ADD_COURSE,
    payload: {
        courseId: Math.random().toString(36).substring(2,7),
        title: course.title,
        description: course.description,
        link: course.courseFile,
        courseInfo: {
            courseInfoId: Math.random().toString(36).substring(2,7),
            duration: course.duration,
            level: course.level,
        },
        courseTypeId: course.courseTypeId,
    }
})

export const editCourse = (course) => ({
    type: constants.ACTION.EDIT_COURSE,
    payload: course
})

export const deleteCourse = (id) => ({
    type: constants.ACTION.DELETE_COURSE,
    payload: id
})
