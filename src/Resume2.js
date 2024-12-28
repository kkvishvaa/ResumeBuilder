// src/pages/Resume2.js

import React from "react";

const Resume2 = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-10">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600">Full Stack Developer</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-700">Email: john@example.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Website: www.johndoe.com</p>
        </div>
      </header>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4">Education</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-semibold">
            <strong>Bachelor of Computer Science</strong> | XYZ University | 2015-2019
          </p>
          <p className="text-gray-600">GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">ReactJS</div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">Node.js</div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">JavaScript</div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">Tailwind CSS</div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">MongoDB</div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg text-center">Git</div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4">Experience</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-semibold">
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
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-indigo-600 pl-4">Projects</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-semibold">
            <strong>Project Name 1</strong> | A description of your project, its goals, and technologies used.
          </p>
          <p className="text-gray-600">Technologies: ReactJS, Node.js, MongoDB</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 font-semibold">
            <strong>Project Name 2</strong> | A description of your project, its goals, and technologies used.
          </p>
          <p className="text-gray-600">Technologies: ReactJS, Tailwind CSS, Firebase</p>
        </div>
      </section>
    </div>
  );
};

export default Resume2;
