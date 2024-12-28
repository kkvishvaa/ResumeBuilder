import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TemplateSelector = ({ setSelectedTemplate }) => {
  const templates = ['Template1', 'Template2', 'Template3'];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="template-selector text-center space-y-8 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black h-screen">
      <h2 className="text-3xl font-extrabold text-white mb-6 animate-fadeIn">
        Choose a Template
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <button
            key={template}
            onClick={() => setSelectedTemplate(template)}
            className={`relative group p-6 border-2 border-gray-300 rounded-lg shadow-md 
            bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a]
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl
              focus:outline-none`} data-aos="fade-up"
          data-aos-delay="300"
          >
            <span
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 
              opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"
            ></span>
            <h3
              className="text-lg font-semibold text-gray-700 group-hover:text-white 
              transition-colors duration-300"
            >
              {template}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
