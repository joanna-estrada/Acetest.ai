import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate to handle navigation
import './TestGenPage.css';

const MultiStateBox = () => {
  const states = [
    { 
      title: 'Marketing Question 1',   
      description: 'What factors influence consumers\' decision-making processes when choosing beauty brands, and how can companies add value throughout the value chain?',  
      options: ['Product quality', 'Brand image', 'Marketing efforts', 'All of the above'],  
      correctAnswer: 'All of the above' // Correct answer for the question
    },
    {
      title: 'Marketing Question 2',
      description: 'What are the key criteria for identifying a market segment, and how do demographic and psychographic segmentation help in targeting consumers?',
      options: ['Identifiable', 'Sizable', 'Reachable', 'All of the above'],
      correctAnswer: 'All of the above' // Correct answer for the question
    },
    {
      title: 'Marketing Question 3',
      description: 'How does behavioral targeting and predictive analytics assist beauty brands in delivering personalized marketing messages and predicting future consumer purchases?',
      options: ['By collecting consumer data', 'By analyzing purchase history', 'By sending personalized ads', 'All of the above'],
      correctAnswer: 'All of the above' // Correct answer for the question
    },
    {
      title: 'Marketing Question 4',
      description: 'What are the different types of positioning strategies, and how does repositioning affect a company\'s brand image in the market?',
      options: ['Umbrella positioning', 'Premier positioning', 'Positioning against competition', 'All of the above'],
      correctAnswer: 'All of the above' // Correct answer for the question
    },
    {
      title: 'Marketing Question 5',
      description: 'How do attitudes form and change over time, and what role does cognitive dissonance play in consumer behavior after a purchase?',
      options: ['Attitudes are formed by experiences', 'Cognitive dissonance leads to rationalizing purchases', 'Changing beliefs about products', 'All of the above'],
      correctAnswer: 'All of the above' // Correct answer for the question
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});  // Track selected answers

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < states.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: answer });
  };

  const isAnswerSelected = (answer) => {
    return selectedAnswers[currentIndex] === answer;
  };

  return (
    <div className="multi-state-box-container">
      <h2>{states[currentIndex].title}</h2>
      <p>{states[currentIndex].description}</p>
      <ul className="options-list">
        {states[currentIndex].options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`option ${isAnswerSelected(option) ? 'selected' : ''}`} // Apply 'selected' class if clicked
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="button-container">
        {currentIndex < states.length - 1 && (
          <button onClick={handleNextClick} aria-label="Next" style={{ marginLeft: '10px' }}>
            Next
          </button>
        )}
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
