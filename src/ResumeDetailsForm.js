import React, { useState } from 'react';

const ResumeDetailsForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      photo: null,
      firstName: '',
      lastName: '',
      currentDesignation: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    },
    education: [
      {
        type: 'SSC',
        institutionName: '',
        boardName: '',
        specialization: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        score: '',
      },
    ],
  });

  const handleChange = (section, index, field, value) => {
    if (section === 'education') {
      const updatedEducation = [...formData.education];
      updatedEducation[index][field] = value;
      setFormData({ ...formData, education: updatedEducation });
    } else {
      setFormData({
        ...formData,
        personalInfo: { ...formData.personalInfo, [field]: value },
      });
    }
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          type: '',
          institutionName: '',
          boardName: '',
          specialization: '',
          city: '',
          state: '',
          startDate: '',
          endDate: '',
          score: '',
        },
      ],
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center animate__animated animate__fadeInUp">
          Resume Details Form
        </h2>

        {/* Personal Information Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Personal Information</h3>
          <label className="block mb-2 text-gray-600">First Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            value={formData.personalInfo.firstName}
            onChange={(e) =>
              handleChange('personalInfo', null, 'firstName', e.target.value)
            }
          />
          <label className="block mb-2 text-gray-600">Last Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            value={formData.personalInfo.lastName}
            onChange={(e) =>
              handleChange('personalInfo', null, 'lastName', e.target.value)
            }
          />
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-6 animate__animated animate__fadeIn">
              <label className="block mb-2 text-gray-600">Institution Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                value={edu.institutionName}
                onChange={(e) =>
                  handleChange('education', index, 'institutionName', e.target.value)
                }
              />
              <label className="block mb-2 text-gray-600">Specialization</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                value={edu.specialization}
                onChange={(e) =>
                  handleChange('education', index, 'specialization', e.target.value)
                }
              />
              <label className="block mb-2 text-gray-600">Score</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                value={edu.score}
                onChange={(e) =>
                  handleChange('education', index, 'score', e.target.value)
                }
              />
            </div>
          ))}
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={addEducation}
          >
            Add Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetailsForm;
