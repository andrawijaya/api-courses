import {FormControl, FormGroup, FormLabel, Form} from "react-bootstrap";
import React from "react";

const isObject = (value) => typeof value === "object"

const FormFile = ({
       label, placeholder, value, onChange, disabled, id
   }) => (
    <FormGroup className="mb-3">
        <FormLabel>{label}</FormLabel>
        <FormControl
            type="file"
            placeholder={placeholder}
            onChange={onChange}
            isValid={!!value}
            disabled={disabled}
        />
        {!isObject(value) && <Form.Text id={id}>{value}</Form.Text>}
    </FormGroup>
)

export default FormFile;
