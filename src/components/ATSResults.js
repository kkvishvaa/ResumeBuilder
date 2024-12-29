import React, { useEffect, useState } from "react";

const ATSResults = () => {
  const [atsResults, setAtsResults] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchAtsResults = async () => {
      try {
        const response = await fetch("/api/ats_analysis_results"); // Ensure this matches your backend route
        if (response.ok) {
          const data = await response.json();
          setAtsResults(data);
        } else {
          console.error("Failed to fetch ATS results");
        }
      } catch (error) {
        console.error("Error fetching ATS results:", error);
      }
    };

    fetchAtsResults();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">Existing ATS Results</h2>
      {atsResults.length > 0 ? (
        <ul className="space-y-4">
          {atsResults.map((result, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
            >
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No existing ATS results found.</p>
      )}
    </div>
  );
};

export default ATSResults;
