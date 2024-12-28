const BasicInfo = ({ basicInfo, handleInputChange }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Basic Information</h2>
      {Object.keys(basicInfo).map((field) =>
        typeof basicInfo[field] === "object" ? (
          Object.keys(basicInfo[field]).map((subField) => (
            <input
              key={subField}
              type="text"
              className="block w-full p-2 border rounded"
              placeholder={subField}
              value={basicInfo[field][subField]}
              onChange={(e) =>
                handleInputChange("basicInfo", `${field}.${subField}`, e.target.value)
              }
            />
          ))
        ) : (
          <input
            key={field}
            type="text"
            className="block w-full p-2 border rounded"
            placeholder={field}
            value={basicInfo[field]}
            onChange={(e) => handleInputChange("basicInfo", field, e.target.value)}
          />
        )
      )}
    </div>
  );
  
  export default BasicInfo;
  