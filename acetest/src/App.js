import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './custom.css'; 
// import HomePage from './HomePage'; 
import TestGenPage from './TestGenPage';  
import GradingPage from './GradingPage'; 
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {   
  return (   
    <Router>   
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testgenpage" element={<TestGenPage />} />
          <Route path="/gradingpage" element={<GradingPage />} /> {/* New grading page route */}
        </Routes> 
      </div> 
    </Router> 
  );  
}

export default App;
