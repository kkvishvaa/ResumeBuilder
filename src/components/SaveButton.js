const SaveButton = ({ formData, onSave }) => {
    const handleSave = () => {
      if (onSave) {
        onSave(formData); // Trigger the save callback with the form data
      } else {
        console.log("Saved Data:", formData); // Default behavior: Log the data
      }
    };
  
    return (
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
      >
        Save
      </button>
    );
  };
  
  export default SaveButton;
  