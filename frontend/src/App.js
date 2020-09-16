import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import NavbarTop from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import ArticlesForm from './forms/articlesForm';

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
        <HomeScreen />
        <ArticlesForm />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
