import React, { useState } from "react";
import TemplateSelector from "../TemplateSelector";
import InputForm from "../InputForm";
import LivePreview from "./LivePreview";

const TIL = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userData, setUserData] = useState({});

  return (
    <div className="Apps">
      {/* Show the template selection initially */}
      {!selectedTemplate ? (
        <TemplateSelector setSelectedTemplate={setSelectedTemplate} />
      ) : (
        // When a template is selected, show the input and live preview
        <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 p-4">
          <InputForm userData={userData} setUserData={setUserData} />
        </div>
        <div className="w-full md:w-1/2 p-4 border-t md:border-l">
          <LivePreview template={selectedTemplate} userData={userData} />
        </div>
      </div>
      
      )}
    </div>
  );
};

export default TIL;
