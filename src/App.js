import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Awards from "./pages/Awards";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Skills from "./pages/Skills";

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/awards" element={<Awards/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/interests" element={<Interests/>}/>
    <Route path="/skills" element={<Skills/>}/>
    
  
  </Routes>
  </BrowserRouter>
    
    
    </>
  
}

export default App