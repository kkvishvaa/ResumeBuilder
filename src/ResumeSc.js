import React, { useEffect, useState } from 'react';

const App = () => {
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ats-analysis-results/analysis');
        const result = await response.json();
        setAnalysisData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAnalysis();
  }, []);

  return (
    <div>
      <h1>ATS Analysis Results</h1>
      <ul>
        {analysisData.map((item, index) => (
          <li key={index}>{item.analysis}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
