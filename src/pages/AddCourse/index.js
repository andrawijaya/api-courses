import React from 'react';
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormInput, StyledContainer, FormSelect } from "../../components";
import { addCourse } from "../../services/courseApi"
import constants from "../../constants";

import { StyledTitle } from "./styles";
import useAddCourse from "./useAddCourse";
import useFetchMutation from '../../hooks/useFetchMutation';
import useFetchQuery from '../../hooks/useFetchQuery';
import { getCourseTypes } from '../../services/courseTypeApi';

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const AddCourse = () => {
    const { getter, setter } = useAddCourse();
    const navigate = useNavigate();

    const { fetchMutation, loading } = useFetchMutation(addCourse, () => navigate(constants.ROUTES.COURSE))

    const { data: courseTypesData } = useFetchQuery(getCourseTypes)


    const submitHandler = () => {
        const payload = new FormData();
        payload.append("title", getter.title)
        payload.append("description", getter.description)
        payload.append("courseTypeId", getter.courseTypeId)
        payload.append("file", getter.courseFile)
        payload.append("duration", getter.duration)
        payload.append("level", getter.level)
        fetchMutation(payload)
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <FormSelect value={getter.courseTypeId} onChange={setter.courseTypeId} label="Course Type Id" placeholder="select course type" values={courseTypesData?.data?.map((item) => ({
                    id: item.courseTypeId,
                    label: item.typeName
                }))} />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable || loading}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.COURSE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse;
