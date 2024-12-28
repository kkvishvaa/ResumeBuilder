import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DomainListPage = () => {
  const [selectedStream, setSelectedStream] = useState('');
  const [jobTitles, setJobTitles] = useState([]);
  const navigate = useNavigate();

  const goToTempSelector = () => {
    navigate('/til'); // Navigates to the "/til" route
  };

  const handleStreamChange = (e) => {
    const stream = e.target.value;
    setSelectedStream(stream);

    // Simulate fetching job titles based on the selected stream
    const titles =
      stream === 'Technology'
        ? ['Software Engineer', 'Data Scientist', 'AI Engineer']
        : stream === 'Business'
        ? ['Marketing Manager', 'Business Analyst', 'HR Specialist']
        : stream === 'Healthcare'
        ? ['Nurse', 'Doctor', 'Pharmacist']
        : [];
    setJobTitles(titles);
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-out', // Easing function for the animation
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-8">
      <div
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl"
        data-aos="fade-up" // AOS animation for coming from the bottom
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate-pulse">
          Explore Career Streams
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Select a job stream to view relevant career options.
        </p>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Select Job Stream
          </label>
          <select
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-colors duration-300 hover:bg-blue-50"
            onChange={handleStreamChange}
          >
            <option value="">Select Job Stream</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        {selectedStream && (
          <div className="mt-8">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Select Job Title
            </label>
            <select
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-colors duration-300 hover:bg-purple-50"
            >
              <option value="">Select Job Title</option>
              {jobTitles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-10 text-center">
          {selectedStream && (
            <p className="text-lg text-gray-700">
              You selected the <span className="font-bold text-purple-700">{selectedStream}</span> stream.
            </p>
          )}
        </div>
        <button
          type="submit"
          onClick={goToTempSelector}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 ml-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DomainListPage;
