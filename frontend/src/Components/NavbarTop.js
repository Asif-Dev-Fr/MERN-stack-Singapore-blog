import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

// Redux pour avoir tous les articles :
import { useSelector, useDispatch } from 'react-redux';
import { listArticles, histoireArticle } from '../Action/articleActions';

// Utiliser pour aller dans les articles par catégories :
import ArticlesScreeen from '../Screens/ArticlesScreen';
import { Route } from 'react-router-dom';


const NavbarTop = () => {
    const articleList = useSelector(state => state.articleList);
    const { articles, loading, error } = articleList;
    const dispatch = useDispatch();

    // Retrieve data :
    useEffect(() => {
       dispatch(listArticles());
    },[dispatch]);    

    

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + "/photo/Singapour_Expat_3.png"} alt="Singapour Expat" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-center navbar-color">
                        <Link className="nav-link navbar-color" to="/"><i className="fas fa-home"></i> Accueil </Link>                                
                        <Nav.Link className="navbar-color" href="/nos-articles/">Histoire</Nav.Link>   
                        <NavDropdown title="Nos articles" id="basic-nav-dropdown">
                            {
                                loading ? <div>Loading...</div> :
                                error ? <div>{error}</div> :
                                articles.map(article => 
                                    <NavDropdown.Item key={article._id} href={"/nos-articles/" + article.category.replaceAll(' ', '-').toLowerCase()}>{article.category}</NavDropdown.Item>
                                )
                            }                        
                        </NavDropdown>
                        
                        <Nav.Link className="navbar-color" href="/contact">Contact</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            <Route path="/nos-articles/:category" component={ArticlesScreeen} />
        </header>
    )
}

export default NavbarTop;