import React, { useState, useEffect } from "react";

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobDescription, setJobDescription] = useState(""); // State for job description
  const [atsResults, setAtsResults] = useState([]); // State for fetched ATS results

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value); // Update job description state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !jobDescription) {
      alert("Please select a file and provide a job description.");
      return;
    }

    const apiKey = "jH3swkNXnwbIM3K9XBPOwV1UpLMfeQis";
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError(null);

      // Send Job Description to MongoDB
      const response = await fetch("http://localhost:5000/api/job-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobDescription }), // Send the job description
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result.message); // Log response from the server

      // Continue with resume parsing
      const resumeResponse = await fetch(
        "https://apilayer.com/marketplace/resume_parser-api", // Replace with the correct endpoint
        {
          method: "POST",
          headers: {
            "apikey": apiKey,
          },
          body: formData,
        }
      );

      if (!resumeResponse.ok) {
        const errorText = await resumeResponse.text();
        console.error("Error Response Text:", errorText);
        throw new Error(`Error: ${resumeResponse.status} ${resumeResponse.statusText}`);
      }

      const resumeResult = await resumeResponse.json();
      setAtsScore(resumeResult.atsScore || "No ATS score available in the response.");
    } catch (err) {
      console.error("Error Details:", err);
      setError(err.message || "An error occurred while uploading the resume.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch existing ATS results
  const fetchAtsResults = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/ats-analysis-results");
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setAtsResults(data);
      console.log("Fetched ATS analysis results:", data);
    } catch (err) {
      console.error("Error fetching ATS results:", err);
      setError(err.message || "Failed to fetch ATS results.");
    }
  };

  // Fetch ATS results when the component mounts
  useEffect(() => {
    fetchAtsResults();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 via-blue-900 to-black flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-16 bg-gradient-to-b from-gray-900 via-blue-900 to-black rounded-xl shadow-lg bg-opacity-80 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Upload Your Resume</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-medium text-white mb-3">Select Resume File</label>
            <input
              type="file"
              accept=".doc, .docx, .pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Job Description Textarea */}
          <div>
            <label className="block text-lg font-medium text-white mb-3">Job Description</label>
            <textarea
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              className="block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Paste the job description here..."
              rows="6"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            {loading ? (
              <span className="flex justify-center items-center">Uploading...</span>
            ) : (
              "Upload Resume"
            )}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4 font-semibold">
            {error}
          </p>
        )}

        {atsScore && (
          <p className="text-green-500 text-center mt-4 font-semibold">{`ATS Score: ${atsScore}`}</p>
        )}

        {/* Display fetched ATS results */}
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
      </div>
    </div>
  );
};

export default ResumeUploader;
