import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav'
// import Header from './components/header'
import Contact from './components/contact'
import Home from './components/home'
import Work from './components/work'
import Footer from './components/footer';
import About from './components/about'



function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route exact path="./home" element={<Home />} />
      <Route path="./contact" element={<Contact />} />
      <Route path="./about" element={<About />} />
      <Route path="./work" element={<Work />} />
    
      
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
