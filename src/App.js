import React, { useEffect } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
   Routes,
  Route
} from "react-router-dom";
import AppC from "./AppC.css";
import Login from './components/Login';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';



function App() {
  return (
    <div className="App">
      <Router>
      <Login />
         <Routes>
         <Route path="/" element={<Home/>} />
      </Routes>
       <Routes>
         <Route path="/work" element={<Work/>} />
      </Routes>
      <Routes>
         <Route path="/contact" element={<Contact/>} />
      </Routes>
       <Routes>
         <Route path="/about" element={<About/>} />
      </Routes>
       <Routes>
         <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
