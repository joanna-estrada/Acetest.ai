import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './HomePage.css';  // Import the external CSS file

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [detailedInstructions, setDetailedInstructions] = useState('');
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [openEnded, setOpenEnded] = useState(false); 

  const navigate = useNavigate();  // Initialize the hook to navigate between pages

  const handleFileUpload = (event) => { 
    setFile(event.target.files[0]); 
  };

  const handleDetailedInstructionsChange = (event) => {
    setDetailedInstructions(event.target.value);
  };

  const handleGenerate = () => {
    // Log or send the data as necessary
    console.log('Generate exam with:', { file, detailedInstructions, multipleChoice, openEnded });
    
    // Navigate to the TestGenPage when the button is clicked
    navigate('/testgen');  // Programmatically navigate to the "TestGenPage"
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <h1>ACEtest.ai</h1>
        <p className="slogan">"Ace Every Test with AI-Powered Prep – Study Smarter, Not Harder"</p>
      </header>

      {/* Content Section */}
      <div className="content">
        {/* Left: File Upload */}
        <div className="left-section">
          <label htmlFor="file-upload" className="label">Upload notes, teacher slides:</label>
          <input type="file" id="file-upload" onChange={handleFileUpload} accept=".pdf,.docx,.pptx,.txt" className="input" />
        </div>

        {/* Right: Detailed Exam Info */}
        <div className="right-section">
          <label htmlFor="detailed-input" className="label">Provide detailed instructions for a more accurate exam:</label>
          <textarea
            id="detailed-input"
            value={detailedInstructions}
            onChange={handleDetailedInstructionsChange}
            placeholder="Type additional exam details here..."
            className="textarea"
          />
        </div>
      </div>

      {/* Section 4: Switches and Generate Button */}
      <div className="switches-section">
        <div className="switch-container">
          <label htmlFor="multiple-choice" className="switch-label">Multiple Choice</label>
          <input
            type="checkbox"
            id="multiple-choice"
            checked={multipleChoice}
            onChange={() => setMultipleChoice(!multipleChoice)}
            className="checkbox"
          />
        </div>

        <div className="switch-container">
          <label htmlFor="open-ended" className="switch-label">Open Ended</label>
          <input
            type="checkbox"
            id="open-ended"
            checked={openEnded}
            onChange={() => setOpenEnded(!openEnded)}
            className="checkbox"
          />
        </div>

        <button className="generate-btn" onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default HomePage;
