const Skills = ({ skills, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Relevant Skills</h2>
  
      {skills.map((skill, index) => (
        <div key={index} className="space-y-4">
          {/* Skill */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Skill"
            value={skill || ""}
            onChange={(e) =>
              handleInputChange("skills", `${index}`, e.target.value)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new skill */}
      <button
        onClick={() => addItem("skills", "")}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Skill
      </button>
    </div>
  );
  
  export default Skills;
  