import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavbarTop from './Components/NavbarTop';
import HomeScreen from './Screens/HomeScreen';
import ArticlesForm from './forms/articlesForm';
import ArticlesScreeen from './Screens/ArticlesScreen';

const App = () => {

  // Retrieve data :
  /*
  useEffect(() => {
    const fetchData = async (articleId) => {
      const response = await fetch("/nos-articles");
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  },[]); */


  return (
    <BrowserRouter>
      <div className="container-fluid  p-0">
        <NavbarTop />
        <Route path='/' exact={true} component={HomeScreen}  />
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
