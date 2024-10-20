import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MakePlan.css';



const MakePlan = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/studyplanpage'); // Navigate to the StudyPlanPage
  };

  return (
    <div className="make-plan-container">
      <h1>Prepare to Make Your Study Plan</h1>
      <p>Review your test performance and analyze the areas you need to improve on before making a plan.</p>

      {/* Add more content such as a review of results, graphs, insights, etc. */}
      
      <button className="btn btn-primary" onClick={handleContinue}>
        Continue to Study Plan
      </button>
    </div>
  );
};

export default MakePlan;


  
