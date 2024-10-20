import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './MakePlan.css';

const MakePlan = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const testDay = document.getElementById('testDay').value;
    const studyHours = document.getElementById('studyHours').value;
    const stressLevel = document.getElementById('stressLevel').value;

    // Validate form
    if (!testDay || !studyHours) {
      alert('Please fill in all required fields.');
      return;
    }

    // Store the data (for example, in localStorage or a state management system)
    localStorage.setItem('testDay', testDay);
    localStorage.setItem('studyHours', studyHours);
    localStorage.setItem('stressLevel', stressLevel);

    // Navigate to StudyPlanPage
    navigate('/studyplanpage');
  };

  return (
    <div className="container">
      <h1>Let's Create your study plan</h1>
      <div className="row">
        <div className="column">
          <div className="card-placeholder">AI</div>
        </div>
        <div className="column">
          <form id="studyPlanForm" onSubmit={handleFormSubmit}>
            <label htmlFor="testDay">Test-Day</label>
            <input type="date" id="testDay" required />

            <label htmlFor="studyHours">Hours you have to study</label>
            <input type="number" id="studyHours" min="1" max="24" required />

            <label htmlFor="stressLevel">Stress level</label>
            <input type="range" id="stressLevel" min="1" max="10" defaultValue="5" />
            <div className="stress-labels">
              <span>Low</span>
              <span>High</span>
            </div>

            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakePlan;
