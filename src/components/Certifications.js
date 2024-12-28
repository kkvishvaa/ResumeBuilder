const Certifications = ({ certifications, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
  
      {/* Loop through each certification and display input fields */}
      {certifications.map((cert, index) => (
        <div key={index} className="space-y-4">
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Certification Name"
            value={cert.name || ""}
            onChange={(e) =>
              handleInputChange("certifications", `${index}.name`, e.target.value)
            }
          />
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Certification ID"
            value={cert.certificationID || ""}
            onChange={(e) =>
              handleInputChange("certifications", `${index}.certificationID`, e.target.value)
            }
          />
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Authorized Institute/Organization"
            value={cert.organization || ""}
            onChange={(e) =>
              handleInputChange("certifications", `${index}.organization`, e.target.value)
            }
          />
          <input
            type="number"
            className="block w-full p-2 border rounded"
            placeholder="Year of Certification Completion"
            value={cert.yearOfCompletion || ""}
            onChange={(e) =>
              handleInputChange("certifications", `${index}.yearOfCompletion`, e.target.value)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new certification */}
      <button
        onClick={() =>
          addItem("certifications", { name: "", certificationID: "", organization: "", yearOfCompletion: "" })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Certification
      </button>
    </div>
  );
  
  export default Certifications;
  