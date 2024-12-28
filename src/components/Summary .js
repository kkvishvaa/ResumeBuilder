const Summary = ({ summary, handleInputChange }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
      <textarea
        className="block w-full p-2 border rounded"
        placeholder="Write a brief summary about yourself..."
        value={summary}
        onChange={(e) => handleInputChange("summary", "", e.target.value)}
      ></textarea>
    </div>
  );
  
  export default Summary;
  