import React, { useState } from 'react';

const ResumeScore = () => {
  const [score, setScore] = useState(null);
  const [summary, setSummary] = useState(''); // Declare the state for summary

  // Simulate API call to get resume score
  const checkResumeScore = () => {
    fetch('https://api.example.com/resume/score', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => setScore(data.score))
      .catch((err) => console.error(err));
  };

  // Handle textarea change
  const handleSummaryChange = (e) => {
    setSummary(e.target.value); // Update the summary state on change
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__fadeIn">
          Resume Score
        </h2>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800"></h2>
          <textarea
            className="block w-full p-2 border rounded"
            placeholder="Write a brief summary about yourself..."
            value={summary} // Bind the value to the state
            // Handle change to update the state
          />
        </div>
        
        <button
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
          onClick={checkResumeScore}
        >
          Check Resume Score
        </button>
        
        {score && (
          <p className="text-2xl font-bold text-green-600 mt-6 animate__animated animate__zoomIn">
            Your Resume Score: {score}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeScore;
