// src/components/Resume.js

import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-100 to-indigo-200 shadow-xl rounded-3xl p-10">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
            John Doe
          </h1>
          <p className="text-xl text-gray-700 italic">Full Stack Developer</p>
        </div>
        <div className="text-right">
          <p className="text-lg text-gray-700">Email: john@example.com</p>
          <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-lg text-gray-700">Website: www.johndoe.com</p>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-900 border-b-4 border-indigo-500 pb-2 mb-4">
          Education
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-medium">
            <strong>Bachelor of Computer Science</strong> | XYZ University | 2015-2019
          </p>
          <p className="text-gray-600">GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-900 border-b-4 border-indigo-500 pb-2 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            ReactJS
          </div>
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            Node.js
          </div>
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            JavaScript
          </div>
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            Tailwind CSS
          </div>
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            MongoDB
          </div>
          <div className="text-lg text-gray-700 py-2 px-4 rounded-lg bg-gray-100 shadow-lg">
            Git
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-900 border-b-4 border-indigo-500 pb-2 mb-4">
          Experience
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-medium">
            <strong>Software Developer</strong> | ABC Corp. | 2020-Present
          </p>
          <ul className="text-gray-600 list-disc ml-6 space-y-2">
            <li>Developed and maintained web applications using ReactJS and Node.js</li>
            <li>Collaborated with cross-functional teams to build scalable software solutions</li>
            <li>Optimized front-end performance with Tailwind CSS and responsive designs</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-900 border-b-4 border-indigo-500 pb-2 mb-4">
          Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 font-medium">
              <strong>Project Name 1</strong> | A description of your project, its goals, and technologies used.
            </p>
            <p className="text-gray-600">Technologies: ReactJS, Node.js, MongoDB</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 font-medium">
              <strong>Project Name 2</strong> | A description of your project, its goals, and technologies used.
            </p>
            <p className="text-gray-600">Technologies: ReactJS, Tailwind CSS, Firebase</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
