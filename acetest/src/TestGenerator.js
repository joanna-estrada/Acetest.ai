// const { GoogleGenerativeAI } = require("@google/generative-ai");
// // Make sure to include these imports:
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Write a story about a magic backpack.";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

import React, { useState } from 'react';
// Import Google Generative AI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

const TestGenerator = () => {
  // State to store the generated text
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Function to handle the API call
  const handleGenerate = async () => {
    try {
      setLoading(true);  // Start loading
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Write a story about a magic backpack."; // Example prompt
      const result = await model.generateContent(prompt);

      // Set the result text to state
      setGeneratedText(result.response.text());
      setLoading(false);  // Stop loading
    } catch (error) {
      console.error("Error generating content:", error);
      setLoading(false);  // Stop loading in case of error
    }
  };

  return (
    <div>
      <h1>Test Generator</h1>
      <button onClick={handleGenerate}>Generate Test</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {generatedText && (
            <div>
              <h2>Generated Text:</h2>
              <p>{generatedText}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestGenerator;
