import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GradingPage.css'; // Custom CSS for styling the page

const GradingPage = () => {
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const totalQuestions = 5;
  const correctAnswers = 3;
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Import navigation function

  useEffect(() => {
    const percentageValue = Math.round((correctAnswers / totalQuestions) * 100);
    setMessage(getMessage(percentageValue));
    animateValue(setScore, 0, correctAnswers, 1000);
    animateValue(setPercentage, 0, percentageValue, 1000);
  }, [correctAnswers, totalQuestions]);

  const getMessage = (percentage) => {
    if (percentage >= 80) return "You're acing this!";
    if (percentage >= 60) return "You're prepping like a genius—just a few more steps to ace your test.";
    return "Keep practicing!";
  };

  const animateValue = (setter, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const questions = [
    { question: "Question 1", result: "Correct" },
    { question: "Question 2", result: "Incorrect" },
    { question: "Question 3", result: "Correct" },
    { question: "Question 4", result: "Correct" },
    { question: "Question 5", result: "Incorrect" }
  ];

  const topicsToImprove = [
    'Algebraic Equations',
    'Geography',
    'World History'
  ];

  // This function handles the navigation to the MakePlan page
  const handleStudyPlanNavigation = () => {
    navigate('/makeplan'); // Navigate to the MakePlan page
  };

  return (
    <div className="grading-page-container">
      <div className="score-card">
        <div className="grade-letter">A</div>
        <div className="percentage">{percentage}%</div>
        <div className="red-symbol">♦</div>
        <div className="score">{score}/{totalQuestions}</div>
        <div className="grade-letter-bottom">I</div>
        <div className="score-card-body">
          <p>{message}</p>
        </div>
      </div>

      <div className="score-assessment">
        <h2>Score Assessment</h2>
        <ul className="assessment-list">
          {questions.map((q, index) => (
            <li key={index} className="assessment-item">
              <span>{q.question}</span>
              <span className={`badge ${q.result === "Correct" ? "correct" : "incorrect"}`}>
                {q.result}
              </span>
            </li>
          ))}
        </ul>

        <div className="improvement-section">
          <h2>Topics Needing Improvement</h2>
          <ul className="improvement-list">
            {topicsToImprove.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="study-plan-button-container">
          <button className="study-plan-button" onClick={handleStudyPlanNavigation}>
            Let's Make Your Study Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradingPage;
