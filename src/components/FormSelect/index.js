import { Form, FormGroup, FormLabel } from 'react-bootstrap'

const FormSelect = ({ label, placeholder, values, onChange, value, disabled }) => (
    <FormGroup className='mb-3'>
        <FormLabel>{label}</FormLabel>
        <Form.Select disabled={disabled} isValid={value} onChange={onChange}>
            <option disabled>{placeholder}</option>
            {values?.map((item) => (
                <option selected={item.id === value} value={item.id}>{item.label}</option>
            ))}
        </Form.Select>
    </FormGroup>
)

export default FormSelect