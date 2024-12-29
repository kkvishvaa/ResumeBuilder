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

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setAtsScore(result.atsScore || "No ATS score available in the response.");
    } catch (err) {
      console.error("Error Details:", err);
      setError(err.message || "An error occurred while uploading the resume.");
    } finally {
      setLoading(false);
    }
  };

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
      </div>
    </div>
  );
};

export default ResumeUploader;
