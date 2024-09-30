import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Import the Home component
import Navbar from './components/Navbar';
import Dashboard from './Dashboard';
import Settings from './Settings'; // Import the Settings component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Navbar will be rendered on all pages */}
        <Routes>
          <Route path="/login" element={<Login />} />   {/* Route for Login */}
          <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
          <Route path="/home" element={<Home />} />     {/* Route for the Home page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard */}
          <Route path="/settings" element={<Settings />} /> {/* Route for the Settings page */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
