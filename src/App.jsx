import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Card from './Components/Card.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from './Pages/Services.jsx';
import Pricing from './Pages/Pricing.jsx';
import About from './Pages/about.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
