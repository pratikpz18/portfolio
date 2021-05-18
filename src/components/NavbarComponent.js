import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    
    return (
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto Nav">
                    <Nav.Link className="link" href='https://github.com/pratikpz18'><i className="fa fa-github" aria-hidden="true"></i></Nav.Link>
                    <Nav.Link className="link" href='https://www.linkedin.com/in/pratik-zinjurde-2a10b71b1/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
