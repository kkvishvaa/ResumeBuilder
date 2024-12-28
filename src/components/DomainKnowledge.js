const DomainKnowledge = ({ domainKnowledge, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Domain Knowledge</h2>
  
      {domainKnowledge.map((knowledge, index) => (
        <div key={index} className="space-y-4">
          {/* Knowledge Area */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Domain Knowledge"
            value={knowledge || ""}
            onChange={(e) =>
              handleInputChange("domainKnowledge", `${index}`, e.target.value)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new domain knowledge */}
      <button
        onClick={() => addItem("domainKnowledge", "")}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Domain Knowledge
      </button>
    </div>
  );
  
  export default DomainKnowledge;
  