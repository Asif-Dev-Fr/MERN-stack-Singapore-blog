import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavbarTop = () => {
    
        

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
            <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + "/photo/Singapour_Expat_3.png"} alt="Singapour Expat" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-center navbar-color">
                    <Link className="nav-link navbar-color" to="/"><i className="fas fa-home"></i> Accueil </Link>
                    <Nav.Link className="navbar-color" href="./">Histoire</Nav.Link>
                    <NavDropdown title="Articles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="navbar-color" href="./">Contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarTop;