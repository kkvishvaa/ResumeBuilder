import React, { useState, useEffect } from "react";

const ResumeUploader = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobDescription, setJobDescription] = useState(""); // State for job description
  const [analysisData, setAnalysisData] = useState([]); // State for fetched ATS results

  
  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value); // Update job description state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobDescription) {
      alert(" provide a job description.");
      return;
    }


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
    } catch (err) {
           console.error("Error Details:", err);
          setError(err.message || "An error occurred while uploading the resume.");
        } finally {
           setLoading(false);
         }
       };


       const convertToHTML = (text) => {
        return text.replace(/\n/g, "<br />");  // Replaces newlines with <br /> tags
      }; 
      

      
  // Fetch existing ATS results
 

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
    <div className="min-h-screen bg-gradient-to-b from-green-800 via-blue-900 to-black flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-16 bg-gradient-to-b from-gray-900 via-blue-900 to-black rounded-xl shadow-lg bg-opacity-80 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Upload Your Resume</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
        

          {/* Job Description Textarea */}
          <div>
            <label className="block text-lg font-medium text-white mb-3">Job Description(Just for the purpose of ATS score)</label>
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

      
        {/* Display fetched ATS results */}
        <div className="mt-10">
  <h2 className="text-2xl font-bold text-white mb-4">ATS Results:</h2>
  <ul className="text-xl font-bold text-white">
    {analysisData.map((item, index) => (
      <li key={index} dangerouslySetInnerHTML={{ __html: convertToHTML(item.analysis) }}></li>
    ))}
  </ul>
</div>
      </div>
    </div>
  );
};

export default ResumeUploader;
