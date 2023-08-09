import React from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
         <Navbar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
          </Routes>
    

    </Router>
    
  );
}

export default App;


