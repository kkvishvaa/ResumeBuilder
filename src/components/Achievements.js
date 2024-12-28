const Achievements = ({ achievements, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Achievements</h2>
  
      {achievements.map((achievement, index) => (
        <div key={index} className="space-y-4">
          {/* Achievement */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Achievement"
            value={achievement || ""}
            onChange={(e) =>
              handleInputChange("achievements", `${index}`, e.target.value)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new achievement */}
      <button
        onClick={() => addItem("achievements", "")}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Achievement
      </button>
    </div>
  );
  
  export default Achievements;
  