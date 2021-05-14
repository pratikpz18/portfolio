import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    
    return (
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto Nav">
                            <Nav.Link className="link" href="/Main">About</Nav.Link>
                            <Nav.Link className="link" href="/Projects">Projects</Nav.Link>
                            <Nav.Link className="link" href="/Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
