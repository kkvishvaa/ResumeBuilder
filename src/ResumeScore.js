import React, { useState } from 'react';

const ResumeScore = () => {
  const [score, setScore] = useState(null);

  const checkResumeScore = () => {
    // Simulate API call
    fetch('https://api.example.com/resume/score', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => setScore(data.score))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__fadeIn">
          Resume Score
        </h2>
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
