import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { listArticles } from '../Action/articleActions';


const NavbarTop = () => {
    const articleList = useSelector(state => state.articleList);
    const { articles, loading, error } = articleList;
    const dispatch = useDispatch();

    // Retrieve data :
    useEffect(() => {
       dispatch(listArticles());
    },[dispatch]);    

    

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
                    <NavDropdown title="Nos articles" id="basic-nav-dropdown">
                        {
                            loading ? <div>Loading...</div> :
                            error ? <div>{error}</div> :
                            articles.map(name => 
                                <NavDropdown.Item href={"/nos-articles/" + name.category.toLowerCase()}>{name.category}</NavDropdown.Item>
                            )
                        }                        
                    </NavDropdown>
                    <Nav.Link className="navbar-color" href="/contact">Contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarTop;