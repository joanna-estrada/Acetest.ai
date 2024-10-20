import React, { useEffect, useState } from 'react';

const ScoreDisplay = () => {
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [message, setMessage] = useState('');
  const [questions, setQuestions] = useState([
    { question: "Question 1", result: "Correct" },
    { question: "Question 2", result: "Incorrect" },
    { question: "Question 3", result: "Correct" },
    { question: "Question 4", result: "Correct" },
    { question: "Question 5", result: "Incorrect" }
  ]);

  useEffect(() => {
    // Calculate score and percentage
    const scoreCount = questions.filter(q => q.result === "Correct").length;
    const totalQuestions = questions.length;
    const percentageValue = Math.round((scoreCount / totalQuestions) * 100);

    // Set the message based on percentage
    let messageValue;
    if (percentageValue >= 80) {
      messageValue = "Excellent!";
    } else if (percentageValue >= 60) {
      messageValue = "Good job!";
    } else {
      messageValue = "Keep practicing!";
    }

    // Animate the score and percentage (replacing the original animateValue function)
    animateValue(setScore, 0, scoreCount, 1000);
    animateValue(setPercentage, 0, percentageValue, 1000);
    setMessage(messageValue);

  }, [questions]);

  // Function to handle the animation
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

  return (
    <div id="ace-card" className="card">
      <div className="card-body">
        <h1 className="card-title">Your Score</h1>
        <div id="score-display">{score}/{questions.length}</div>
        <div id="percentage-display">{percentage}%</div>
        <div id="message-display">{message}</div>

        <ul id="question-list" className="list-group mt-3">
          {questions.map((q, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {q.question}
              <span className={`badge ${q.result === 'Correct' ? 'bg-success' : 'bg-danger'} rounded-pill`}>
                {q.result}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScoreDisplay;
