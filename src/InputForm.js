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
    jobsummary:"",
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
    projects: [],
    skills: [],
    domainKnowledge: [],
    achievements: [],
    processed:false,
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => {
      const updated = { ...prev };
      if (!field) {
        updated[section] = value;
      } else if (field.includes(".")) {
        const keys = field.split(".");
        let target = updated[section];
        keys.slice(0, -1).forEach((key) => {
          if (!target[key] || typeof target[key] !== "object") {
            target[key] = {};
          }
          target = target[key];
        });
        target[keys[keys.length - 1]] = value;
      } else {
        updated[section][field] = value;
      }
      if (setUserData) {
        setUserData(updated);
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

  const saveFormData = async (data) => {
    try {
      const json_data = JSON.stringify(formData); // Correct placement and name of variable
      console.log(json_data);
    
      const response = await fetch("http://localhost:5000/api/save-form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json_data, // Use the correct variable name here
      });
    
      if (response.ok) {
        alert("Form data has been saved successfully!");
      } else {
        alert("Failed to save form data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving form data.");
    }
    
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-6 shadow-lg rounded-lg space-y-6 overflow-auto h-screen">
      {/* Scrollable Sections with responsive layout */}
      <div className="space-y-6 flex flex-col">
        <PersonalInfo personalInfo={formData.personalInfo} handleInputChange={handleInputChange} />
        <BasicInfo basicInfo={formData.basicInfo} handleInputChange={handleInputChange} />
        <Summary summary={formData.summary} handleInputChange={handleInputChange} />
        <Education education={formData.education} handleInputChange={handleInputChange} />
        <Certifications certifications={formData.certifications} handleInputChange={handleInputChange} addItem={addItem} />
        <Internships internships={formData.internships} handleInputChange={handleInputChange} addItem={addItem} />
        <Projects projects={formData.projects} handleInputChange={handleInputChange} addItem={addItem} />
        <Skills skills={formData.skills} handleInputChange={handleInputChange} addItem={addItem} />
        <DomainKnowledge domainKnowledge={formData.domainKnowledge} handleInputChange={handleInputChange} addItem={addItem} />
        <Achievements achievements={formData.achievements} handleInputChange={handleInputChange} addItem={addItem} />
      
      </div>

      {/* Save Button */}
      <SaveButton formData={formData} onSave={saveFormData} />
    </div>
  );
};

export default InputForm;
