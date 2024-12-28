import React, { useState } from 'react';
import EditSection from './EditSection';
import PreviewSection from './PreviewSection';

const EditAndPreviewPage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    photo: null,
    firstName: '',
    middleName: '',
    lastName: '',
    designation: '',
    address: {
      line: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
    },
    communicationEmail: '',
    mobile: '',
    linkedIn: '',
    github: '',
  });

  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState({
    ssc: { institutionName: '', yearOfPassing: '' },
    higherSecondary: { institutionName: '', yearOfPassing: '' },
    underGraduation: { institutionName: '', yearOfPassing: '' },
    graduation: { institutionName: '', yearOfPassing: '' },
  });

  const [certifications, setCertifications] = useState([]);
  const [internships, setInternships] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [domainKnowledge, setDomainKnowledge] = useState([]);
  const [achievements, setAchievements] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left: Edit Section */}
      <EditSection
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        summary={summary}
        setSummary={setSummary}
        education={education}
        setEducation={setEducation}
        certifications={certifications}
        setCertifications={setCertifications}
        internships={internships}
        setInternships={setInternships}
        projects={projects}
        setProjects={setProjects}
        skills={skills}
        setSkills={setSkills}
        domainKnowledge={domainKnowledge}
        setDomainKnowledge={setDomainKnowledge}
        achievements={achievements}
        setAchievements={setAchievements}
      />
      {/* Right: Preview Section */}
      <PreviewSection
        personalInfo={personalInfo}
        summary={summary}
        education={education}
        certifications={certifications}
        internships={internships}
        projects={projects}
        skills={skills}
        domainKnowledge={domainKnowledge}
        achievements={achievements}
      />
    </div>
  );
};

export default EditAndPreviewPage;
