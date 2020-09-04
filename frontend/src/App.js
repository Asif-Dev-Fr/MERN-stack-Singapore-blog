import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import NavbarTop from './Components/Navbar';

const App = () => {

  // Retrieve data :


  return (
    <BrowserRouter>
      <div className="container-fluid  p-0">
        <NavbarTop />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
