import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './custom.css';
import HomePage from './HomePage';
import TestGenPage from './TestGenPage';
import GradingPage from './GradingPage';
import MakePlan from './MakePlan'; // Import MakePlan component
import StudyPlanPage from './StudyPlanPage'; // Import StudyPlanPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testgenpage" element={<TestGenPage />} />
          <Route path="/gradingpage" element={<GradingPage />} />
          <Route path="/makeplan" element={<MakePlan />} /> {/* New MakePlan route */}
          <Route path="/studyplanpage" element={<StudyPlanPage />} /> {/* StudyPlanPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
