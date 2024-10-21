import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { Switch } from '@mui/material';  // Import the MUI Switch component

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [detailedInstructions, setDetailedInstructions] = useState('');
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [openEnded, setOpenEnded] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDetailedInstructionsChange = (event) => {
    setDetailedInstructions(event.target.value);
  };

  const handleGenerate = () => {
    // Send the file and detailedInstructions to your backend or AI service
    console.log('Generate exam with:', { file, detailedInstructions, multipleChoice, openEnded });
    
    // After the generate logic, navigate to the TestGenPage
    navigate('/testgenpage');
  };

  // Trigger file input click when the custom button is clicked
  const triggerFileUpload = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="homepage">
      {/* Header Section with logo and blurb */}
      <header className="homepage-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="AceTest Logo" className="logo" />
          </div>
          <div className="blurb-container">
            <h1 className="title">AceTest.AI</h1>
            <p className="blurb">
              We empower learners to unlock their full potential, transforming studying into a confident, stress-free journey — so everyone can ace their goals.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="content"> 
        {/* Left: File Upload */}
        <div className="left-section"> 
          <label htmlFor="file-upload" className="label">Upload notes, teacher slides:</label>
          <input type="file" id="file-upload" onChange={handleFileUpload} accept=".pdf,.docx,.pptx,.txt" className="input-file" />
          <button className="custom-upload-btn" onClick={triggerFileUpload}>
            Choose File
          </button>
          <span className="file-name">{file ? file.name : "No file chosen"}</span>
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
          <Switch
            checked={multipleChoice}
            onChange={() => setMultipleChoice(!multipleChoice)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>

        <div className="switch-container">
          <label htmlFor="open-ended" className="switch-label">True or False</label>
          <Switch
            checked={openEnded}
            onChange={() => setOpenEnded(!openEnded)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>

        <button className="generate-btn" onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default HomePage;
