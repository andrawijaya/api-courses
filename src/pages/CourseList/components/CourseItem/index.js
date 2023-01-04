import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";

const CourseItem = ({data, onNavigateToEdit, onDelete}) => {
    return (
        <StyledListItem action>
            <Row>
                <Col className="col-8">
                    <h3 className="lead">{data?.title}</h3>
                    <p>{data?.description}</p>
                </Col>
                <ButtonGroup className="col-4">
                    <Button variant="primary" onClick={onNavigateToEdit}>Edit</Button>
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                    <Button variant="secondary" onClick={() => {}}>Download</Button>
                </ButtonGroup>
            </Row>
        </StyledListItem>
    )
}

export default React.memo(CourseItem);
