import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import './custom.css';  
import HomePage from './HomePage';  
import TestGenPage from './TestGenPage';   
import GradingPage from './GradingPage';   
import MakePlan from './MakePlan'; // Import the new MakePlan page
import StudyPlanPage from './StudyPlanPage'; // Import the StudyPlanPage

function App() {    
  return (    
    <Router>   
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />
          
          {/* TestGen Page */}
          <Route path="/testgenpage" element={<TestGenPage />} />
          
          {/* Grading Page */}
          <Route path="/gradingpage" element={<GradingPage />} />
          
          {/* New Make Plan Page */}
          <Route path="/makeplan" element={<MakePlan />} /> {/* New MakePlan page route */}
          
          {/* Study Plan Page */}
          <Route path="/studyplanpage" element={<StudyPlanPage />} /> {/* Study plan page route */}
        </Routes> 
      </div> 
    </Router> 
  );  
}

export default App;
