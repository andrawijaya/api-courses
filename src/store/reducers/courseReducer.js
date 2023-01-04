import constants from "../../constants";
import courseList from "../../fixtures/courseList.json";

const {count, totalPage, page, size} = courseList;
const initialState = {
    courseList: [
        ...courseList.data
    ],
    pagination: {
        count, totalPage, page, size
    }
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_COURSE:
            return {
                ...state,
                courseList: [...state.courseList, action.payload]
            }
        case constants.ACTION.EDIT_COURSE:
            const newCourseList = state?.courseList?.map((course) => {
                if (course.courseId === action?.payload?.courseId) {
                    return {
                        ...course, ...action?.payload
                    }
                }

                return course;
            })

            return {
                ...state,
                courseList: newCourseList
            }
        case constants.ACTION.DELETE_COURSE:
            const courseListCopy = [...state?.courseList];
            const courseWithIdIndex = courseListCopy?.findIndex((course) => {
                return course.courseId === action.payload
            })
            courseListCopy.splice(courseWithIdIndex, 1);

            return {
                ...state,
                courseList: courseListCopy
            }
        default: return {
            ...initialState
        }
    }
}

export default courseReducer;
