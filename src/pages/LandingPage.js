import React, { useEffect } from "react";
import { Link ,useNavigate} from 'react-router-dom';
import { motion } from "framer-motion";
import {
    FaCode, FaDatabase, FaLaptopCode, FaPaintBrush, FaServer,
    FaTools, FaCogs, FaChartLine, FaClipboardCheck, FaSyncAlt,
    FaMobileAlt, FaLightbulb
} from "react-icons/fa";
import "tailwindcss/tailwind.css";
import TextSphere from "../TextSphere";
import AOS from "aos"; // Make sure to import AOS
import "aos/dist/aos.css"; // Import the CSS for AOS animations


const skills = [
    { icon: <FaCode className="text-blue-500 text-4xl" />, label: "Programming" },
    { icon: <FaDatabase className="text-green-500 text-4xl" />, label: "Database Management" },
    { icon: <FaLaptopCode className="text-purple-500 text-4xl" />, label: "Web Development" },
    { icon: <FaPaintBrush className="text-pink-500 text-4xl" />, label: "UI/UX Design" },
    { icon: <FaServer className="text-yellow-500 text-4xl" />, label: "Server Management" },
    { icon: <FaTools className="text-red-500 text-4xl" />, label: "DevOps" },
    { icon: <FaCogs className="text-indigo-500 text-4xl" />, label: "Automation" },
    { icon: <FaChartLine className="text-orange-500 text-4xl" />, label: "Data Analysis" },
];

const LandingPage = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration as needed
    }, []);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); // Navigates to the "/about" route
  };    
    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen flex flex-col items-center text-gray-200">
            {/* Navbar */}
            <nav className="w-full flex justify-between items-center p-6 bg-gray-900 shadow-lg">
                <h1 className="text-3xl font-bold text-white">ResumeBuilder</h1>
                <div className="space-x-6 text-gray-300">
                    
                    <Link to="/login" className="hover:text-white transition text-2xl">Login</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.div
                className="text-center mt-20 px-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
             <h2 className="relative z-50 text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 my-8">
    Craft a Perfect Resume That Gets You Hired
</h2>



                <p className="mt-4 text-lg md:text-xl text-gray-400">
                    Your dream job is just a few clicks away! Our cutting-edge resume builder helps you create a standout, recruiter-friendly resume that’s sleek, professional, and optimized to beat Applicant Tracking Systems (ATS).
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <button onClick={goToLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
                    <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition">Learn More</button>
                </div>
            </motion.div>

            {/* Key Features Section */}
            <div id="key-features" className="mt-20 max-w-6xl mx-auto px-4 text-center">
                <motion.h3
                    className="text-3xl font-semibold text-white mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Key Features You’ll Love
                </motion.h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[{
                        icon: <FaClipboardCheck className="text-purple-400 text-4xl" />,
                        text: "ATS Scoring: Ensure your resume is ready to pass any screening."
                    }, {
                        icon: <FaSyncAlt className="text-purple-400 text-4xl" />,
                        text: "Live Edits: Watch updates in real-time for a flawless finish."
                    }, {
                        icon: <FaMobileAlt className="text-purple-400 text-4xl" />,
                        text: "Anywhere Access: Build your resume from desktop, tablet, or mobile."
                    }, {
                        icon: <FaLightbulb className="text-purple-400 text-4xl" />,
                        text: "Expert Guidance: Templates and tips created by recruitment pros."
                    }].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {feature.icon}
                            <p className="text-gray-400">{feature.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="mt-20 max-w-6xl mx-auto px-4 text-center">
                <h3 className="text-3xl font-semibold text-white mb-10">Bring Your Skills to the Spotlight!</h3>
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-110 hover:shadow-xl transition-transform"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {skill.icon}
                            <p className="text-gray-400 mt-2">{skill.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <TextSphere />
            {/* How It Works Section */}
            <div id="how-it-works" className="mt-20 max-w-6xl mx-auto px-4 text-center">
                <h3 className="text-4xl font-semibold text-white mb-10">
                    How It Works
                </h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Quick Signup",
                            description: "Register using Google or Microsoft—no hassle!",
                            icon: "FaLightbulb",
                            color: "text-indigo-600",  
                        },
                        {
                            title: "Fill Your Details",
                            description: "Add your education, skills, and experience.",
                            icon: "FaClipboardCheck",
                            color: "text-indigo-600",  
                        },
                        {
                            title: "Choose a Design",
                            description: "Pick a template that matches your goals.",
                            icon: "FaPaintBrush",
                            color: "text-indigo-600", 
                        },
                        {
                            title: "Boost with Insights",
                            description: "Refine your resume with our smart ATS score.",
                            icon: "FaChartLine",
                            color: "text-indigo-600", 
                        },
                        {
                            title: "Download & Apply",
                            description: "Export a polished PDF and get ready to shine!",
                            icon: "FaDownload",
                            color: "text-indigo-600",  
                        },
                    ].map((step, index) => {
                        const Icon = require("react-icons/fa")[step.icon];
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 hover:shadow-xl transition duration-300"
                                data-aos="fade-up"  // Scroll animation
                            >
                                <Icon className={`${step.color} text-5xl mb-4`} />
                                <h4 className="text-xl font-bold text-white mt-4">{step.title}</h4>
                                <p className="text-gray-400 mt-2">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Call to Action Section */}
            <div id="cta" className="mt-20 max-w-6xl mx-auto px-4 text-center">
                <motion.h3
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Join Thousands of Professionals
                </motion.h3>
                <motion.p
                    className="text-gray-400 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Build a resume that not only looks amazing but also wins the attention of top recruiters. Say goodbye to the guesswork—our advanced tools ensure you’re always one step ahead. Start building your future now!
                </motion.p>
                <button onClick={goToLogin} className="mt-6 mb-4 px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition">
                    Start for Free
                </button>
            </div>

            {/* Footer */}
            <footer className="mt-auto bg-gray-900 text-gray-400 w-full py-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;