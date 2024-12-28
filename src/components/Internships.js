const Internships = ({ internships, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Internships</h2>
      
      {internships.map((internship, index) => (
        <div key={index} className="space-y-4">
          {/* Internship Title */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Internship Title"
            value={internship.title || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.title`, e.target.value)
            }
          />
          
          {/* Organization/Company */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Organization/Company"
            value={internship.organization || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.organization`, e.target.value)
            }
          />
  
          {/* Location */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Location"
            value={internship.location || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.location`, e.target.value)
            }
          />
  
          {/* Start Date */}
          <input
            type="date"
            className="block w-full p-2 border rounded"
            value={internship.startDate || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.startDate`, e.target.value)
            }
          />
          
          {/* End Date */}
          <input
            type="date"
            className="block w-full p-2 border rounded"
            value={internship.endDate || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.endDate`, e.target.value)
            }
          />
  
          {/* Paid/Unpaid */}
          <select
            className="block w-full p-2 border rounded"
            value={internship.paidUnpaid || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.paidUnpaid`, e.target.value)
            }
          >
            <option value="">Paid/Unpaid</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
  
          {/* Ongoing checkbox */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={internship.ongoing || false}
              onChange={(e) =>
                handleInputChange("internships", `${index}.ongoing`, e.target.checked)
              }
            />
            <span>Ongoing</span>
          </label>
  
          {/* Description of Internship */}
          <textarea
            className="block w-full p-2 border rounded"
            placeholder="Description of Internship"
            value={internship.description || ""}
            onChange={(e) =>
              handleInputChange("internships", `${index}.description`, e.target.value)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new internship */}
      <button
        onClick={() =>
          addItem("internships", { 
            title: "", 
            organization: "", 
            location: "", 
            startDate: "", 
            endDate: "", 
            paidUnpaid: "", 
            ongoing: false, 
            description: "" 
          })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Internship
      </button>
    </div>
  );
  
  export default Internships;
  