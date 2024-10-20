import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate to handle navigation
import './TestGenPage.css';

const MultiStateBox = () => {
  const states = [
    { 
      title: 'Problem 1', 
      description: 'Solve the equation: 2x + 3 = 7',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      title: 'Problem 2',
      description: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    },
    // ... other problems ...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});  // Store the answers

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < states.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleAnswerClick = (answer) => {
    setAnswers({ ...answers, [currentIndex]: answer });
  };

  return (
    <div className="multi-state-box-container">
      <h2>{states[currentIndex].title}</h2>
      {states[currentIndex].description && <p>{states[currentIndex].description}</p>}
      <ul>
        {states[currentIndex].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={handleRightClick} aria-label="Next" style={{ marginLeft: '10px' }}>Next</button>
      </div>
    </div>
  );
};

const TestGenPage = () => {
  const navigate = useNavigate();

  const handleGrade = () => {
    // Navigate to the grading page when "Grade" is clicked
    navigate('/gradingpage');
  };

  return (
    <div className="test-gen-page">
      <header>
        <h1>Acetest.AI</h1>
      </header>
      <section>
        <p>Let's see how much you know!</p>
        {/* Render the MultiStateBox component */}
        <MultiStateBox />
        <button onClick={handleGrade}>Grade</button> {/* "Grade" button */}
      </section>
    </div>
  );
};

export default TestGenPage;
