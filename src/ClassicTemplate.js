import React from "react";

const ClassicTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-10">
        <header className="text-center border-b-2 border-gray-300 pb-6">
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-500">Software Engineer</p>
          <p className="text-sm text-gray-400">johndoe@example.com | +1 234 567 890</p>
          <p className="text-sm text-gray-400">123 Main Street, New York, NY</p>
        </header>

        <main className="mt-8">
          {/* Profile Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Profile</h2>
            <p className="text-gray-600">
              Results-driven software engineer with 5+ years of experience in developing scalable web
              applications and working across the full stack. Adept at problem-solving and committed
              to delivering high-quality code.
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Senior Software Engineer</h3>
              <p className="text-gray-500">Tech Solutions Inc. | Jan 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developed and maintained scalable backend services for client applications.</li>
                <li>Implemented a CI/CD pipeline, improving deployment efficiency by 40%.</li>
                <li>Mentored junior developers and conducted code reviews.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">Frontend Developer</h3>
              <p className="text-gray-500">Creative Dev Co. | Aug 2017 - Dec 2019</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Designed and implemented responsive user interfaces using React.js.</li>
                <li>Collaborated with UI/UX teams to improve application usability.</li>
                <li>Optimized web performance, reducing load time by 30%.</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Bachelor of Computer Science</h3>
              <p className="text-gray-500">University of XYZ | 2013 - 2017</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Node.js", "Python", "SQL", "Git"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ClassicTemplate;
