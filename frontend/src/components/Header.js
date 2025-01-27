import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
    backgroundColor: "#eeee",
};

export const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Logo
                    alt={title}
                    style={{ maxWidth: "12rem", maxHeight: "3rem" }}
                />
                {/* <Navbar.Brand href="/">{title}</Navbar.Brand> */}
            </Container>
        </Navbar>
    );
};
