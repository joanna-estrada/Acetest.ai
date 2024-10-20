import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router components
import './App.css';
import HomePage from './HomePage';  // Import HomePage
import TestGenPage from './TestGenPage';  // Import TestGenPage

function App() {  
  return (  
    <Router>  
      <div className="App">
      
        <Routes>
          {/* Define routes for navigation */}
          <Route path="/" element={<HomePage />} /> 
          <Route path="/testgen" element={<TestGenPage />} /> 
        </Routes> 
      </div> 
    </Router> 
  );  
}  
   
export default App;
