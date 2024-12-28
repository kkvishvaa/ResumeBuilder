const Education = ({ education, handleInputChange }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
  
      {/* SSC Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">SSC</h3>
        {[
          "Institution Name",
          "BoardName",
          "Specialization",
          "State",
          "City",
          "Start Date",
          "EndDate",
          "Mathematics Score (CGPA/Percentage)",
          "Physics Score (CGPA/Percentage)",
          "Chemistry Score (CGPA/Percentage)",
        ].map((field) => (
          <input
            key={field}
            type={field.includes("Date") ? "date" : "text"}
            className="block w-full p-2 border rounded"
            placeholder={field}
            value={education.ssc[field] || ""}
            onChange={(e) =>
              handleInputChange("education", `ssc.${field}`, e.target.value)
            }
          />
        ))}
      </div>
  
      {/* +11 and +12 Stream Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">+11 and +12 Stream</h3>
        <select
          className="block w-full p-2 border rounded"
          value={education.highSchool.stream || ""}
          onChange={(e) => handleInputChange("education", "highSchool.stream", e.target.value)}
        >
          <option value="">Select Stream</option>
          <option value="MPC">MPC</option>
        </select>
      </div>
  
      {/* +12 Details Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">+12 Details</h3>
        {[
          "Institution Name",
          "BoardName",
          "Specialization",
          "State",
          "City",
          "Start Date",
          "EndDate",
          "Mathematics Score",
          "Physics Score",
          "Chemistry Score",
        ].map((field) => (
          <input
            key={field}
            type={field.includes("Date") ? "date" : "text"}
            className="block w-full p-2 border rounded"
            placeholder={field}
            value={education.highSchool.details[field] || ""}
            onChange={(e) =>
              handleInputChange("education", `highSchool.details.${field}`, e.target.value)
            }
          />
        ))}
      </div>
  
      {/* UnderGraduation Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">UnderGraduation</h3>
        {[
          "Institution Name",
          "University",
          "Specialization",
          "State",
          "City",
          "Start Date",
          "EndDate",
          "CGPA/Percentage",
        ].map((field) => (
          <input
            key={field}
            type={field.includes("Date") ? "date" : "text"}
            className="block w-full p-2 border rounded"
            placeholder={field}
            value={education.underGraduation[field] || ""}
            onChange={(e) =>
              handleInputChange(
                "education",
                `underGraduation.${field}`,
                e.target.value
              )
            }
          />
        ))}
      </div>
  
      {/* Graduation Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Graduation</h3>
        {[
          "Institution Name",
          "University",
          "Specialization",
          "State",
          "City",
          "Start Date",
          "EndDate",
          "CGPA/Percentage",
        ].map((field) => (
          <input
            key={field}
            type={field.includes("Date") ? "date" : "text"}
            className="block w-full p-2 border rounded"
            placeholder={field}
            value={education.graduation[field] || ""}
            onChange={(e) =>
              handleInputChange("education", `graduation.${field}`, e.target.value)
            }
            disabled={field === "EndDate" && education.graduation?.ongoing}
          />
        ))}
        {/* Ongoing Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={education.graduation?.ongoing || false}
            onChange={(e) =>
              handleInputChange("education", "graduation.ongoing", e.target.checked)
            }
          />
          <label className="text-sm text-gray-700">Ongoing</label>
        </div>
      </div>
    </div>
  );
  
  export default Education;
  