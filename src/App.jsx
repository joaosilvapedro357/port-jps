import React from 'react';
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx'
import { Routes, Route } from "react-router-dom";
import Projects from './Pages/Projects.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/projects" element={<Projects />}  />
      </Routes>
    </div>
  )
}

export default App
