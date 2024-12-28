import React from "react";

const Template1 = ({ data}) => {
  
  return (
    <div className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-gray-300 shadow-2xl rounded-xl p-6 sm:p-10 max-w-5xl mx-auto border border-gray-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {`${data.basicInfo?.firstName || "First"} ${data.basicInfo?.middleName || ""} ${data.basicInfo?.lastName || "Last"}`}
          </h1>
          <p className="text-sm sm:text-lg text-gray-400">{data.basicInfo?.designation || "Designation"}</p>
          <p className="text-xs sm:text-sm text-gray-500">
            {`${data.basicInfo?.address?.line || ""}, ${data.basicInfo?.address?.city || ""}, ${data.basicInfo?.address?.state || ""}, ${data.basicInfo?.address?.country || ""} - ${data.basicInfo?.address?.pincode || ""}`}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            <strong>Email:</strong> {data.basicInfo?.email || "N/A"} |{" "}
            <strong>Mobile:</strong> {data.basicInfo?.mobile || "N/A"}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            <strong>LinkedIn:</strong>{" "}
            <a
              href={data.basicInfo?.linkedIn || "#"}
              className="text-blue-400 underline hover:text-blue-500 transition duration-200"
            >
              {data.basicInfo?.linkedIn || "N/A"}
            </a>{" "}
            | <strong>GitHub:</strong>{" "}
            <a
              href={data.basicInfo?.github || "#"}
              className="text-blue-400 underline hover:text-blue-500 transition duration-200"
            >
              {data.basicInfo?.github || "N/A"}
            </a>
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <img
            src={
              data.personalInfo?.photo instanceof Blob
                ? URL.createObjectURL(data.personalInfo.photo)
                : typeof data.personalInfo?.photo === "string"
                ? data.personalInfo.photo
                : "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border border-gray-600 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Section Wrapper */}
      <div className="space-y-8 sm:space-y-10">
 {/* Summary Section */}
<div>
  <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
    Summary
  </h2>
  <p className="bg-gray-900 p-4 rounded-b-lg shadow-md text-gray-300 overflow-hidden text-ellipsis whitespace-pre-wrap break-words">
    {data.summary || "No summary provided."}
  </p>
</div>


        {/* Education Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
            Education
          </h2>
          <table className="w-full bg-gray-900 rounded-b-lg shadow-md overflow-hidden text-left text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-3 sm:p-4">Level</th>
                <th className="border border-gray-700 p-3 sm:p-4">Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.education || {}).map((level) => (
                <tr key={level} className="hover:bg-gray-800 transition duration-200">
                  <td className="border border-gray-700 p-3 sm:p-4 font-semibold text-white">
                    {level.toUpperCase()}
                  </td>
                  <td className="border border-gray-700 p-3 sm:p-4">
                    {Object.keys(data.education[level])
                      .map((field) =>
                        typeof data.education[level][field] === "object"
                          ? Object.keys(data.education[level][field])
                              .map(
                                (subField) =>
                                  `${subField}: ${data.education[level][field][subField] || "N/A"}`
                              )
                              .join(", ")
                          : `${field}: ${data.education[level][field] || "N/A"}`
                      )
                      .join("; ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
            Certifications
          </h2>
          <table className="w-full bg-gray-900 rounded-b-lg shadow-md overflow-hidden text-left text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-3 sm:p-4">Certification</th>
                <th className="border border-gray-700 p-3 sm:p-4">Organization</th>
              </tr>
            </thead>
            <tbody>
              {data.certifications?.length ? (
                data.certifications.map((cert, idx) => (
                  <tr key={idx} className="hover:bg-gray-800 transition duration-200">
                    <td className="border border-gray-700 p-3 sm:p-4">{cert.name || "N/A"}</td>
                    <td className="border border-gray-700 p-3 sm:p-4">{cert.organization || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-gray-700 p-3 sm:p-4 text-gray-500" colSpan="2">
                    No certifications added.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

{/* Internships Section */}
<div>
  <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
    Internships
  </h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-gray-900 rounded-b-lg shadow-md overflow-hidden text-left text-gray-300">
      <thead>
        <tr className="bg-gray-800">
          <th className="border border-gray-700 p-3 sm:p-4">Title</th>
          <th className="border border-gray-700 p-3 sm:p-4">Organization</th>
          <th className="border border-gray-700 p-3 sm:p-4">Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.internships?.length ? (
          data.internships.map((intern, idx) => (
            <tr key={idx} className="hover:bg-gray-800 transition duration-200">
              <td className="border border-gray-700 p-3 sm:p-4">{intern.title || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">{intern.organization || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">
                {intern.startDate || "Start Date"} - {intern.endDate || "End Date"}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border border-gray-700 p-3 sm:p-4 text-gray-500" colSpan="3">
              No internships added.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

{/* Projects Section */}
<div>
  <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
    Projects
  </h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-gray-900 rounded-b-lg shadow-md overflow-hidden text-left text-gray-300">
      <thead>
        <tr className="bg-gray-800">
          <th className="border border-gray-700 p-3 sm:p-4 text-left">Project Name</th>
          <th className="border border-gray-700 p-3 sm:p-4 text-left">Client/Organization</th>
          <th className="border border-gray-700 p-3 sm:p-4 text-left">Start Date</th>
          <th className="border border-gray-700 p-3 sm:p-4 text-left">End Date</th>
          <th className="border border-gray-700 p-3 sm:p-4 text-left">Link</th>
        </tr>
      </thead>

      <tbody>
        {data.projects?.length ? (
          data.projects.map((project, idx) => (
            <tr key={idx} className="hover:bg-gray-800 transition duration-200">
              <td className="border border-gray-700 p-3 sm:p-4">{project.name || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">{project.client || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">{project.startDate || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">{project.endDate || "N/A"}</td>
              <td className="border border-gray-700 p-3 sm:p-4">
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-blue-400 underline hover:text-blue-500 transition duration-200"
                  >
                    View Project
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border border-gray-700 p-3 sm:p-4 text-gray-500" colSpan="5">
              No projects added.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

        {/* Skills Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
            Skills
          </h2>
          <ul className="bg-gray-900 p-4 rounded-b-lg shadow-md text-gray-300">
            {data.skills?.length ? (
              data.skills.map((skill, idx) => (
                <li key={idx} className="border-b border-gray-700 p-2">
                  {skill || "N/A"}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No skills added.</li>
            )}
          </ul>
        </div>

        {/* Domain Knowledge Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
            Domain Knowledge
          </h2>
          <ul className="bg-gray-900 p-4 rounded-b-lg shadow-md text-gray-300">
            {data.domainKnowledge?.length ? (
              data.domainKnowledge.map((domain, idx) => (
                <li key={idx} className="border-b border-gray-700 p-2">
                  {domain || "N/A"}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No domain knowledge added.</li>
            )}
          </ul>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-lg">
            Achievements
          </h2>
          <ul className="bg-gray-900 p-4 rounded-b-lg shadow-md text-gray-300">
            {data.achievements?.length ? (
              data.achievements.map((achievement, idx) => (
                <li key={idx} className="border-b border-gray-700 p-2">
                  {achievement || "N/A"}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No achievements added.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template1;
