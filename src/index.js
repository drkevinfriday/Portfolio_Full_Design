import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about'
// import App from './App'
import './index.css';

import Header from './components/header'
import Contact from './components/contact'
import Home from './components/home'
import Work from './components/work'
;
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Header/>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      
        
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);

