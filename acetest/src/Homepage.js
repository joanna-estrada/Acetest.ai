import React, { useState } from 'react';
import './HomePage.css'; 

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [topics, setTopics] = useState('');
  const [generatedExam, setGeneratedExam] = useState('');

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTopicChange = (event) => {
    setTopics(event.target.value);
  };

  const handleGenerate = () => {
    // Send the file and topics to your backend or AI service
    setGeneratedExam(`Exam generated from ${file?.name || "no file"} with topics: ${topics}`);
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>ACEtest.ai</h1>
        <p>Your Ultimate Exam Preparation Tool</p>
      </header>

      <section id="how-it-works">
        <h2>How it works:</h2>
        <ul>
          <li><strong>Upload Your Notes:</strong> Upload your notes or slides, and our AI will generate an exam.</li>
          <li><strong>Target Key Topics:</strong> Specify key topics to focus your practice further.</li>
          <li><strong>Generate Your Exam:</strong> Click "Generate" to get a custom exam.</li>
        </ul>
      </section>

      <section id="upload-section">
        <h3>Upload Your Class Notes</h3>
        
        {/* Wrap both inputs in a div with a class for flexbox */}
        <div className="input-container">
          <input type="file" onChange={handleFileUpload} accept=".pdf,.docx,.pptx,.txt" />
          
          <label>Know what’s on the test? Type here:</label>
          <input type="text" value={topics} onChange={handleTopicChange} placeholder="Key topics" />
        </div>
        
        <br/><br/>
        <button onClick={handleGenerate}>Generate</button>
      </section>

      <section id="output-section">
        <h3>Your Personalized Exam:</h3>
        <p>{generatedExam}</p>
      </section>
    </div>
  );
};

export default HomePage;
