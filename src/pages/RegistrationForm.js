import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    specialization: '',
    course: '',
    branch: '',
    passOutYear: '',
    cgpa: '',
    gender: '',
    github: '',
    linkedin: '',
    dob: '',
    jobPreferredCountries: [],
    jobPreferredStates: [],
    jobPreferredCities: [],
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Specializations data
  const [courseBranches, setCourseBranches] = useState({
    'M.Tech': [
      'Computer Science and Engineering', 'Mechanical Engineering', 'Electrical and Electronics Engineering', 'Civil Engineering',
      'Electronics and Communication Engineering', 'Information Technology', 'Chemical Engineering', 'Biotechnology',
      'Data Science', 'Artificial Intelligence and Machine Learning', 'Aerospace Engineering'
    ],
    'M.E.': [
      'Computer Science and Engineering', 'Mechanical Engineering', 'Electrical and Electronics Engineering', 'Civil Engineering',
      'Electronics and Communication Engineering', 'Information Technology', 'Chemical Engineering', 'Biotechnology',
      'Data Science', 'Artificial Intelligence and Machine Learning', 'Aerospace Engineering'
    ],
    'M.Sc': [
      'Physics', 'Chemistry', 'Mathematics', 'Zoology', 'Botany', 'Biotechnology', 'Computer Science',
      'Environmental Science', 'Microbiology', 'Statistics'
    ],
    'MBA': [
      'Marketing', 'Finance', 'Human Resource Management', 'Operations Management', 'Information Technology',
      'Business Analytics', 'Entrepreneurship', 'International Business', 'Healthcare Management'
    ],
    'MCA': [
      'Computer Applications', 'Software Development', 'Information Systems', 'Data Analytics', 'Cybersecurity'
    ],
    // Add other courses and their respective specializations similarly
  });

  useEffect(() => {
    // Fetch countries data (example API: GeoDB Cities API)
    fetch('https://geodb-cities-api.wirefreethought.com/v1/geo/countries')
      .then((res) => res.json())
      .then((data) => setCountries(data.data.map((country) => country.name)))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    // Reset the branch or stream options when the course changes
    setBranches(courseBranches[formData.course] || []);
  }, [formData.course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (e, field) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, [field]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // API call to submit form data
  };

  const fetchStates = (country) => {
    // Fetch states for the selected country
    fetch(`https://geodb-cities-api.wirefreethought.com/v1/geo/countries/${country}/states`)
      .then((res) => res.json())
      .then((data) => setStates(data.data))
      .catch((error) => console.error('Error fetching states:', error));
  };

  const fetchCities = (state) => {
    // Fetch cities for the selected state
    fetch(`https://geodb-cities-api.wirefreethought.com/v1/geo/states/${state}/cities`)
      .then((res) => res.json())
      .then((data) => setCities(data.data))
      .catch((error) => console.error('Error fetching cities:', error));
  };
  const navigate = useNavigate();

  const goToDomain = () => {
    navigate('/domains'); // Navigates to the "/about" route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <form
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl"
        onSubmit={handleSubmit}
         data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800"   data-aos="zoom-in">
          Candidate Registration
          
        </h2>
        <p className="text-center text-gray-600 mb-8"  data-aos="fade-up"
          data-aos-delay="200">
          Complete the form below to register your details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div >
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              College Name
            </label>
            <input
              type="text"
              name="collegeName"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Specialization
            </label>
            <select
              name="specialization"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            >
              <option value="">Select Specialization</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Undergraduate">Undergraduate</option>
            </select>
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Course
            </label>
            <select
              name="course"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="M.Tech">M.Tech</option>
              <option value="M.Sc">M.Sc</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

  {/* Branch/Stream */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Branch/Stream
            </label>
            <select
              name="branchOrStream"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              disabled={!formData.course}
            >
              <option value="">Select Branch/Stream</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Pass-out Year */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Pass-out Year
            </label>
            <input
              type="number"
              name="passOutYear"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              min="1990"
              max={new Date().getFullYear() + 5}
              onChange={handleChange}
            />
          </div>

          {/* CGPA/Percentage */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              CGPA/Percentage
            </label>
            <input
              type="text"
              name="cgpa"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Gender
            </label>
            <select
              name="gender"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* GitHub Profile */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />
          </div>

          {/* Job Preferred Countries */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Job Preferred Countries
            </label>
            <select
              name="jobPreferredCountries"
              multiple
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => handleMultiSelectChange(e, 'jobPreferredCountries')}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Job Preferred States */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Job Preferred States
            </label>
            <select
              name="jobPreferredStates"
              multiple
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => handleMultiSelectChange(e, 'jobPreferredStates')}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Job Preferred Cities */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Job Preferred Cities
            </label>
            <select
              name="jobPreferredCities"
              multiple
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => handleMultiSelectChange(e, 'jobPreferredCities')}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
          <button
            type="submit"
            onClick={goToDomain}
            className="bg-blue-600 text-white py-3 px-8 ml-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
