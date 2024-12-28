import React, { useState  } from "react";
import PersonalInfo from "./components/PersonalInfo";
import BasicInfo from "./components/BasicInfo ";
import Summary from "./components/Summary ";
import Education from "./components/Education ";
import Certifications from "./components/Certifications";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DomainKnowledge from "./components/DomainKnowledge";
import Achievements from "./components/Achievements";
import SaveButton from "./components/SaveButton";

const InputForm = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    personalInfo: { photo: null },
    basicInfo: {
      firstName: "John",
      middleName: "A.",
      lastName: "Doe",
      designation: "Fresher",
      address: {
        line: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      },
      email: "johndoe@example.com",
      mobile: "1234567890",
      linkedIn: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    summary: "",
    education: {
      ssc: {
        institution: "",
        board: "",
        specialization: "",
        state: "",
        city: "",
        startDate: "",
        endDate: "",
        scores: { math: "", physics: "", chemistry: "" },
      },
      highSchool: {
        stream: "MPC",
        details: {
          institution: "",
          board: "",
          specialization: "",
          state: "",
          city: "",
          startDate: "",
          endDate: "",
          scores: { math: "", physics: "", chemistry: "" },
        },
      },
      underGraduation: {
        institution: "",
        university: "",
        specialization: "",
        state: "",
        city: "",
        startDate: "",
        endDate: "",
        cgpa: "",
      },
      graduation: {
        institution: "",
        university: "",
        specialization: "",
        state: "",
        city: "",
        startDate: "",
        endDate: "",
        cgpa: "",
        ongoing: false,
      },
    },
    certifications: [],
    internships: [],
    projects: [], // Projects array
    skills: [], // Skills array
    domainKnowledge: [], // Domain Knowledge array
    achievements: [] // Achievements array
  });
 
  

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => {
        const updated = { ...prev }; // Avoid JSON.parse/stringify for shallow copying

        if (!field) {
            updated[section] = value;
        } else if (field.includes(".")) {
            const keys = field.split(".");
            let target = updated[section];

            keys.slice(0, -1).forEach((key) => {
                if (!target[key] || typeof target[key] !== "object") {
                    target[key] = {}; // Ensure intermediate objects exist
                }
                target = target[key];
            });

            target[keys[keys.length - 1]] = value;
        } else {
            updated[section][field] = value;
        }

        if (setUserData) {
            setUserData(updated); // Update parent state only once per change
        }

        return updated;
    });
};


  const addItem = (section, template) => {
    setFormData((prev) => {
      const updated = { ...prev };
      updated[section] = [...updated[section], template];
      return updated;
    });
  };

  const saveFormData = (data) => {
    console.log("Saving form data:", data);
    alert("Form data has been saved successfully!");
  };
  

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-6 shadow-lg rounded-lg space-y-6 overflow-auto h-screen">
      {/* Scrollable Sections with responsive layout */}
      <div className="space-y-6 flex flex-col">
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <PersonalInfo personalInfo={formData.personalInfo} handleInputChange={handleInputChange} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <BasicInfo basicInfo={formData.basicInfo} handleInputChange={handleInputChange} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Summary summary={formData.summary} handleInputChange={handleInputChange} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Education education={formData.education} handleInputChange={handleInputChange} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Certifications certifications={formData.certifications} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Internships internships={formData.internships} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Projects projects={formData.projects} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Skills skills={formData.skills} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <DomainKnowledge domainKnowledge={formData.domainKnowledge} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
          <Achievements achievements={formData.achievements} handleInputChange={handleInputChange} addItem={addItem} />
        </div>
      </div>

      {/* Save Button */}
      <SaveButton formData={formData} onSave={saveFormData} />
    </div>
  );
};

export default InputForm;
