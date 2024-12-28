import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCertificate, FaUser } from "react-icons/fa";

const Template3 = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-300 min-h-screen py-10">
      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
          <div className="md:w-1/3 text-center">
            <img
              src={data.personalInfo?.photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white mx-auto transform hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-3xl font-bold mt-4">
              {`${data.basicInfo?.firstName || "John"} ${data.basicInfo?.lastName || "Doe"}`}
            </h1>
            <p className="text-lg italic">{data.basicInfo?.designation || "Fresher"}</p>
          </div>
          <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0">
            <p className="flex items-center justify-center md:justify-start space-x-4 text-lg">
              <FaEnvelope className="text-yellow-300" />
              <span>{data.basicInfo?.email || "johndoe@example.com"}</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mt-2">
              <FaPhone className="text-yellow-300" />
              <span>{data.basicInfo?.phone || "1234567890"}</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mt-2">
              <FaLinkedin className="text-yellow-300" />
              <a
                href={data.basicInfo?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {data.basicInfo?.linkedin || "https://linkedin.com/in/johndoe"}
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mt-2">
              <FaGithub className="text-yellow-300" />
              <a
                href={data.basicInfo?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {data.basicInfo?.github || "https://github.com/johndoe"}
              </a>
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block">
            <FaUser className="inline-block mr-2 text-blue-600" />
            Summary
          </h2>
          <p className="text-gray-700 text-lg">{data.summary || "Write a brief summary about yourself..."}</p>
        </div>

        {/* Education Section */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block">
            <FaGraduationCap className="inline-block mr-2 text-purple-600" />
            Education
          </h2>
          <div className="space-y-6">
            {data.education?.ssc && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">SSC</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Institution: {data.education.ssc.institution || "Not Provided"}</li>
                  <li>Board: {data.education.ssc.board || "Not Provided"}</li>
                  <li>Specialization: {data.education.ssc.specialization || "N/A"}</li>
                </ul>
              </div>
            )}
            {data.education?.highschool && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">High School</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Institution: {data.education.highschool.institution || "Not Provided"}</li>
                  <li>Specialization: {data.education.highschool.specialization || "MPC"}</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block">
            <FaCertificate className="inline-block mr-2 text-green-600" />
            Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {data.certifications?.length ? (
              data.certifications.map((cert, idx) => <li key={idx}>{cert}</li>)
            ) : (
              <li className="text-gray-400 italic">No certifications added</li>
            )}
          </ul>
        </div>

        {/* Internships Section */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block">
            <FaBriefcase className="inline-block mr-2 text-yellow-600" />
            Internships
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {data.internships?.length ? (
              data.internships.map((intern, idx) => (
                <li key={idx}>
                  <strong>Title:</strong> {intern.title} <br />
                  <strong>Organization:</strong> {intern.organization} <br />
                  <strong>Location:</strong> {intern.location || "N/A"} <br />
                  <strong>Duration:</strong> {intern.duration || "N/A"}
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No internships added</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template3;
