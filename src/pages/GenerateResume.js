import React from 'react';
import { jsPDF } from 'jspdf';

const GenerateResume = ({ resumeData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${resumeData.firstName} ${resumeData.lastName}`, 10, 10);
    doc.text(`Designation: ${resumeData.currentDesignation}`, 10, 20);
    doc.save('resume.pdf');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__fadeInUp">
          Generate Your Resume
        </h2>
        <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeInUp">
          Click the button below to download your personalized resume as a PDF.
        </p>
        <button
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl focus:outline-none"
          onClick={generatePDF}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default GenerateResume;
