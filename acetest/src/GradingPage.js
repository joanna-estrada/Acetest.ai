import React, { useEffect, useState } from 'react';
import './GradingPage.css';  // Custom CSS for styling the page

const GradingPage = () => {
  const [score, setScore] = useState(0);  // Starts at 0 for animation
  const [percentage, setPercentage] = useState(0);  // Starts at 0 for animation
  const totalQuestions = 5;  // Example total questions
  const correctAnswers = 3;  // Example correct answers
  const [message, setMessage] = useState('');

  useEffect(() => {
    const percentageValue = Math.round((correctAnswers / totalQuestions) * 100);
    setMessage(getMessage(percentageValue));  // Set the message based on percentage

    // Animate the score and percentage
    animateValue(setScore, 0, correctAnswers, 1000);
    animateValue(setPercentage, 0, percentageValue, 1000);
  }, [correctAnswers, totalQuestions]);

  const getMessage = (percentage) => {
    if (percentage >= 80) return "You're acing this!";
    if (percentage >= 60) return "You're prepping like a genius—just a few more steps to ace your test.";
    return "Keep practicing!";
  };

  // Function to animate the value (both score and percentage)
  const animateValue = (setter, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);  // Progress from 0 to 1
      const value = Math.floor(progress * (end - start) + start);
      setter(value);  // Update the state (score/percentage)
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

  return (
    <div className="grading-page-container">
      <div className="score-card">
        {/* Ace letter at top left */}
        <div className="grade-letter">A</div>

        {/* Percentage in the top right */}
        <div className="percentage">{percentage}%</div>

        {/* Red symbol in the middle */}
        <div className="red-symbol">♦</div>  {/* Red diamond symbol */}

        {/* Score in bottom left */}
        <div className="score">{score}/{totalQuestions}</div>

        {/* Grade letter in bottom right */}
        <div className="grade-letter-bottom">A</div>

        {/* Message in the middle */}
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
      </div>
    </div>
  );
};

export default GradingPage;
