import React from 'react';

const EditSection = ({ personalInfo, setPersonalInfo, summary, setSummary, education, setEducation }) => {
  const handleInputChange = (section, field, value) => {
    // Fix: update section-specific field properly
    setPersonalInfo((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleEducationChange = (field, value) => {
    setEducation((prev) => ({
      ...prev,
      ssc: {
        ...prev.ssc,
        [field]: value,
      },
    }));
  };

  return (
    <div className="w-1/2 p-6 overflow-y-auto ">
      <h2 className="text-2xl font-bold mb-4">Resume Builder - Edit Details</h2>
      
      {/* Personal Information */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Personal Information</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setPersonalInfo((prev) => ({
              ...prev,
              photo: URL.createObjectURL(e.target.files[0]),
            }))
          }
          className="mb-4 w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="First Name"
          value={personalInfo.firstName}
          onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={personalInfo.middleName}
          onChange={(e) => handleInputChange('personalInfo', 'middleName', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={personalInfo.lastName}
          onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Current Designation"
          value={personalInfo.designation}
          onChange={(e) => handleInputChange('personalInfo', 'designation', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        
        {/* Address Fields */}
        <h4 className="text-md font-semibold mt-4">Address</h4>
        <input
          type="text"
          placeholder="Address Line"
          value={personalInfo.address.line}
          onChange={(e) => handleInputChange('address', 'line', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Country"
          value={personalInfo.address.country}
          onChange={(e) => handleInputChange('address', 'country', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="State"
          value={personalInfo.address.state}
          onChange={(e) => handleInputChange('address', 'state', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="City/Sector"
          value={personalInfo.address.city}
          onChange={(e) => handleInputChange('address', 'city', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Pincode"
          value={personalInfo.address.pincode}
          onChange={(e) => handleInputChange('address', 'pincode', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="email"
          placeholder="Communication Email"
          value={personalInfo.communicationEmail}
          onChange={(e) => handleInputChange('personalInfo', 'communicationEmail', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Mobile"
          value={personalInfo.mobile}
          onChange={(e) => handleInputChange('personalInfo', 'mobile', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={personalInfo.linkedIn}
          onChange={(e) => handleInputChange('personalInfo', 'linkedIn', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="GitHub Profile"
          value={personalInfo.github}
          onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
      </section>

      {/* Summary Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Summary</h3>
        <textarea
          placeholder="Write a short summary about yourself"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Education</h3>
        {/* SSC Education */}
        <input
          type="text"
          placeholder="SSC Institution Name"
          value={education.ssc.institutionName}
          onChange={(e) => handleEducationChange('institutionName', e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        {/* Add more SSC education fields as needed */}
      </section>
    </div>
  );
};

export default EditSection;
