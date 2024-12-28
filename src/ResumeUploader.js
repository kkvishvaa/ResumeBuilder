import React, { useState } from "react";

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const apiKey = "jH3swkNXnwbIM3K9XBPOwV1UpLMfeQis";
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://apilayer.com/marketplace/resume_parser-api", // Replace with the correct endpoint
        {
          method: "POST",
          headers: {
            "apikey": apiKey,
          },
          body: formData,
        }
      );

      // Log response for debugging
      console.log("Response Details:", response);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log("API Response Data:", result);

      setAtsScore(result.atsScore || "No ATS score available in the response.");
    } catch (err) {
      console.error("Error Details:", err);
      setError(err.message || "An error occurred while uploading the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Resume File</label>
          <input
            type="file"
            accept=".doc, .docx, .pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {atsScore && <p className="text-green-500 mt-4">ATS Score: {atsScore}</p>}
    </div>
  );
};

export default ResumeUploader;
