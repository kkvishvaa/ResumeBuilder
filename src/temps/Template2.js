import React from "react";

const Template2 = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out max-w-5xl mx-auto">
      {/* Personal Information */}
      <div className="p-8 bg-indigo-800 text-white rounded-t-3xl">
        <div className="flex items-center space-x-6">
          <img
            src={data.personalInfo?.photo || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg transform transition-all hover:scale-110 duration-300"
          />
          <div>
            <h1 className="text-3xl font-extrabold">
              {`${data.basicInfo?.firstName || "John"} ${data.basicInfo?.lastName || "Doe"}`}
            </h1>
            <p className="text-lg">{data.basicInfo?.designation || "Fresher"}</p>
            <p className="mt-2">{`${data.basicInfo?.line}, ${data.basicInfo?.city}, ${data.basicInfo?.state}, ${data.basicInfo?.country} - ${data.basicInfo?.pincode}`}</p>
            <div className="mt-4 text-sm space-y-1">
              <p>
                <span className="font-medium">Email:</span> {data.basicInfo?.email || "johndoe@example.com"}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {data.basicInfo?.phone || "1234567890"}
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a href={data.basicInfo?.linkedin} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
                  {data.basicInfo?.linkedin || "https://linkedin.com/in/johndoe"}
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a href={data.basicInfo?.github} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">
                  {data.basicInfo?.github || "https://github.com/johndoe"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-4 border-indigo-500 pb-1">Summary</h2>
        <p className="text-gray-700">{data.summary || "Write a brief summary about yourself..."}</p>
      </div>

      {/* Education */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-4 border-indigo-500 pb-1">Education</h2>
        {data.education ? (
          <div className="space-y-6">
            {/* SSC */}
            {data.education.ssc && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700">SSC</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <span className="font-medium">Institution:</span> {data.education.ssc.institution || "Not Provided"}
                  </li>
                  <li>
                    <span className="font-medium">Board:</span> {data.education.ssc.board || "Not Provided"}
                  </li>
                  <li>
                    <span className="font-medium">Specialization:</span> {data.education.ssc.specialization || "N/A"}
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> {data.education.ssc.city}, {data.education.ssc.state}
                  </li>
                  <li>
                    <span className="font-medium">Scores:</span> Math: {data.education.ssc.math}, Physics: {data.education.ssc.physics}, Chemistry: {data.education.ssc.chemistry}
                  </li>
                </ul>
              </div>
            )}
            {/* High School */}
            {data.education.highschool && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700">High School</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <span className="font-medium">Institution:</span> {data.education.highschool.institution || "Not Provided"}
                  </li>
                  <li>
                    <span className="font-medium">Specialization:</span> {data.education.highschool.specialization || "MPC"}
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> {data.education.highschool.city}, {data.education.highschool.state}
                  </li>
                </ul>
              </div>
            )}
            {/* Undergraduate */}
            {data.education.undergrad && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Undergraduate</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <span className="font-medium">Institution:</span> {data.education.undergrad.institution || "Not Provided"}
                  </li>
                  <li>
                    <span className="font-medium">University:</span> {data.education.undergrad.university || "Not Provided"}
                  </li>
                  <li>
                    <span className="font-medium">Specialization:</span> {data.education.undergrad.specialization || "N/A"}
                  </li>
                  <li>
                    <span className="font-medium">CGPA:</span> {data.education.undergrad.cgpa || "N/A"}
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-400 italic">No education details added</p>
        )}
      </div>

      {/* Certifications */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-4 border-indigo-500 pb-1">Certifications</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {data.certifications?.length ? (
            data.certifications.map((cert, idx) => <li key={idx}>{cert}</li>)
          ) : (
            <li className="text-gray-400 italic">No certifications added</li>
          )}
        </ul>
      </div>

      {/* Internships */}
      <div className="p-8 bg-white rounded-b-3xl">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-4 border-indigo-500 pb-1">Internships</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {data.internships?.length ? (
            data.internships.map((intern, idx) => (
              <li key={idx}>
                <span className="font-medium">Title:</span> {intern.title} <br />
                <span className="font-medium">Organization:</span> {intern.organization} <br />
                <span className="font-medium">Location:</span> {intern.location || "N/A"} <br />
                <span className="font-medium">Duration:</span> {intern.duration || "N/A"}
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">No internships added</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Template2;
