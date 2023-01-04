import React from "react";
import {Button, Col, Container, Navbar} from 'react-bootstrap'
import {NavLink, useNavigate} from "react-router-dom";

import {StyledNav} from "./styles";
import constants from "../../constants";
import useToken from "../../hooks/useToken";

const menu = [
    { path: constants.ROUTES.COURSE, menuName: "Course" },
    { path: constants.ROUTES.COURSE_TYPE, menuName: "Course Type" },
]

const NavBarComp = () => {
    const {removeToken} = useToken();
    const navigate = useNavigate();
    const onLogout = () => {
        removeToken();
        navigate(constants.ROUTES.LOGIN);
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Col>
                    <Navbar.Brand>Enigma Course</Navbar.Brand>
                </Col>
                <Col className="col-2">
                    <StyledNav>
                        {menu?.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className="nav-link mx-3"
                                key={index}
                            >
                                {item.menuName}
                            </NavLink>
                        ))}
                    </StyledNav>
                </Col>
                <Col className="col-1">
                    <Button variant="outline-danger" onClick={onLogout}>
                        Logout
                    </Button>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;
