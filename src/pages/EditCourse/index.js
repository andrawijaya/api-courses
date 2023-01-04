import React from "react";
import { ButtonGroup, Form, Button } from "react-bootstrap";

import {
    FormInput,
    StyledContainer, FormSelect, FormFile
} from "../../components";
import constants from "../../constants";
import { getCourseById, updateCourseById } from "../../services/courseApi";
import { onChangeText, onChangeTexts } from "../../utils/eventHandlers";
import { useNavigate, useParams } from "react-router-dom";
import useFetchQuery from "../../hooks/useFetchQuery";
import { getCourseTypes } from "../../services/courseTypeApi";
import useFetchMutation from "../../hooks/useFetchMutation";

const initialData = {
    title: "",
    description: "",
    courseTypeId: "",
    courseFile: "null",
    duration: "",
    level: ""
}

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

const EditCourse = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = React.useState(initialData);
    const { data } = useFetchQuery(getCourseById, params.courseId)

    const { data: courseTypesData } = useFetchQuery(getCourseTypes)

    const { fetchMutation: updateCourseMutation } = useFetchMutation(
        updateCourseById,
        () => navigate(constants.ROUTES.COURSE)
    )

    React.useEffect(() => {
        const currentCourse = {
            courseId: data?.data?.courseId,
            title: data?.data?.title,
            description: data?.data?.description,
            courseFile: data?.data?.link,
            courseTypeId: data?.data?.courseType?.courseTypeId,
            level: data?.data?.courseInfo?.level,
            duration: data?.data?.courseInfo?.duration
        }

        setCourse(currentCourse);
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: params.courseId,
            ...course
        };

        delete payload.courseFile;

        updateCourseMutation(payload)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(constants.ROUTES.COURSE);
    }

    return (
        <StyledContainer>
            <Form>
                {FORM_LIST.map((item, index) => {
                    return (
                        <FormInput
                            key={index}
                            {...item}
                            value={course[item.id]}
                            onChange={onChangeTexts(item.id, setCourse)}
                        />
                    )
                })}
                <FormFile label="Course material" placeholder="Choose course material" disabled value={course?.courseFile} />
                <FormSelect value={course?.courseTypeId} label="Course Type Id" placeholder="select course type" onChange={onChangeTexts("courseTypeId", setCourse)} values={courseTypesData?.data?.map((item) => ({
                    id: item.courseTypeId,
                    label: item.typeName
                }))} disabled />
                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    );
}

export default EditCourse;
