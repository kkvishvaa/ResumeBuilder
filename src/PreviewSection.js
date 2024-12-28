import React from 'react';

const PreviewSection = ({
  personalInfo = {},
  summary = "",
  education = {},
  certifications = [],
  internships = [],
  projects = [],
  skills = [],
  domainKnowledge = [],
  achievements = [],
}) => {
  const { photo, firstName, middleName, lastName, designation, communicationEmail, mobile, linkedIn, github } = personalInfo;
  const { ssc = {}, higherSecondary = {}, underGraduation = {}, graduation = {} } = education;

  return (
    <div className="w-1/2 p-6 bg-white overflow-y-auto border-l">
      <h2 className="text-2xl font-bold mb-4">Live Resume Preview</h2>
      
      {/* Personal Info */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          {photo && (
            <img
              src={photo}
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full mr-4"
            />
          )}
          <div>
            <p className="font-bold text-xl">{`${firstName || ''} ${middleName || ''} ${lastName || ''}`}</p>
            <p className="text-md text-gray-500">{designation || "Not specified"}</p>
          </div>
        </div>
        <p>{communicationEmail || "No email provided."}</p>
        <p>{mobile || "No mobile number provided."}</p>
        <p>{linkedIn || "No LinkedIn profile provided."}</p>
        <p>{github || "No GitHub profile provided."}</p>
      </div>

      {/* Summary Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Summary</h4>
        <p>{summary || "No summary provided yet."}</p>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Education</h4>
        {ssc.institutionName && (
          <p>
            <strong>SSC:</strong> {ssc.institutionName}, {ssc.yearOfPassing}
          </p>
        )}
        {higherSecondary.institutionName && (
          <p>
            <strong>Higher Secondary:</strong> {higherSecondary.institutionName}, {higherSecondary.yearOfPassing}
          </p>
        )}
        {underGraduation.institutionName && (
          <p>
            <strong>Under Graduation:</strong> {underGraduation.institutionName}, {underGraduation.yearOfPassing}
          </p>
        )}
        {graduation.institutionName && (
          <p>
            <strong>Graduation:</strong> {graduation.institutionName}, {graduation.yearOfPassing}
          </p>
        )}
      </div>

      {/* Certifications Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Certifications</h4>
        {certifications.length === 0
          ? "No certifications added."
          : certifications.map((cert, index) => (
              <p key={index}>
                <strong>{cert.name}</strong> - {cert.institution}, {cert.year}
              </p>
            ))}
      </div>

      {/* Internships Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Internships</h4>
        {internships.length === 0
          ? "No internships added."
          : internships.map((intern, index) => (
              <p key={index}>
                <strong>{intern.company}</strong> - {intern.role}, {intern.year}
              </p>
            ))}
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Projects</h4>
        {projects.length === 0
          ? "No projects added."
          : projects.map((project, index) => (
              <p key={index}>
                <strong>{project.title}</strong> - {project.description}
              </p>
            ))}
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Skills</h4>
        {skills.length === 0
          ? "No skills added."
          : skills.map((skill, index) => (
              <span key={index} className="mr-2">
                {skill}
              </span>
            ))}
      </div>

      {/* Domain Knowledge Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Domain Knowledge</h4>
        {domainKnowledge.length === 0
          ? "No domain knowledge added."
          : domainKnowledge.map((domain, index) => (
              <span key={index} className="mr-2">
                {domain}
              </span>
            ))}
      </div>

      {/* Achievements Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Achievements</h4>
        {achievements.length === 0
          ? "No achievements added."
          : achievements.map((achievement, index) => (
              <p key={index}>
                <strong>{achievement.title}</strong> - {achievement.year}
              </p>
            ))}
      </div>
    </div>
  );
};

export default PreviewSection;
