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
                <Navbar.Brand href="/">
                    <Logo
                        alt={title}
                        style={{ maxWidth: "12rem", maxHeight: "3rem" }}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};
