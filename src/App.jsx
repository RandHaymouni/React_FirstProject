import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Services from './Pages/Services.jsx';
import Pricing from './Pages/Pricing.jsx';
import About from './Pages/about.jsx';
import NotFoundd from './Pages/NotFoundd.jsx';
import ServicePagee from './Pages/ServicePagee.jsx';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services">
            <Route path=":id" element={<ServicePagee />} />
            <Route path="/services" element={<Services />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />

          <Route path="*" element={<NotFoundd />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
