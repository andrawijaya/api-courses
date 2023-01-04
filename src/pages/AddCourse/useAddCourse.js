import React from "react";
import { onChangeFile, onChangeText } from "../../utils/eventHandlers";

const useAddCourse = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [courseTypeId, setTypeId] = React.useState("");
    const [courseFile, setCourseFile] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = { title, description, courseTypeId, courseFile, level, duration, isDisable };
    const setter = {
        title: onChangeText(setTitle),
        description: onChangeText(setDescription),
        courseTypeId: onChangeText(setTypeId),
        courseFile: onChangeFile(setCourseFile),
        level: onChangeText(setLevel),
        duration: onChangeText(setDuration),
    }

    React.useEffect(() => {
        if (title && description && courseTypeId && courseFile && level && duration) {
            setDisable(false)
        } else setDisable(true)
    }, [courseFile, description, duration, level, title, courseTypeId])

    return {
        getter, setter
    }
}

export default useAddCourse;
