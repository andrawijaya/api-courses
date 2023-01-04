import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { StyledListGroup } from "./styles";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import { deleteCourse } from "../../store/actions/courseAction";
import { useNavigate } from "react-router-dom";
import { getCourses, deleteCourseById } from "../../services/courseApi";

const List = ({ data, setFetcher }) => {
    const navigate = useNavigate();

    const onNavigateToEdit = (id) => () => {
        navigate(`${constants.ROUTES.EDIT_COURSE}/${id}`);
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm("Anda yakin ingin menghapus course ini?");
        if (isOk) {
            deleteCourseById(id);
            setFetcher((prev) => !prev)
        }
    }

    // useEffect(() => {
    //     return () => {
    //         navigate(constants.ROUTES.COURSE)
    //     }
    // }, [])

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem
                    data={item}
                    key={item.courseId}
                    onNavigateToEdit={onNavigateToEdit(item.courseId)}
                    onDelete={onDelete(item.courseId)}
                />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(List, {
    label: "Course",
    routeToAdd: constants.ROUTES.ADD_COURSE,
    query: getCourses

});
