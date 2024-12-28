const PersonalInfo = ({ personalInfo, handleInputChange }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
      <input
        type="file"
        className="block w-full p-2 border rounded"
        onChange={(e) => handleInputChange("personalInfo", "photo", e.target.files[0])}
      />
    </div>
  );
  
  export default PersonalInfo;
  