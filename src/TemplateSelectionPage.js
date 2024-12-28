import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateSelectionPage = ({ setSelectedTemplate, setJobDetails }) => {
  const [jobStream, setJobStream] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [template, setTemplate] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (template && jobStream && jobTitle) {
      setSelectedTemplate(template);
      setJobDetails({ jobStream, jobTitle });
      navigate('/edit-and-preview');
    } else {
      alert('Please fill all fields and select a template!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Step 3: Select Resume Template</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Template Options */}
        {['Template 1', 'Template 2', 'Template 3'].map((temp, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg cursor-pointer ${
              template === temp ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setTemplate(temp)}
          >
            <p className="text-center">{temp}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Job Stream"
          value={jobStream}
          onChange={(e) => setJobStream(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default TemplateSelectionPage;
