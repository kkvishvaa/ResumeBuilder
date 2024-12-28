import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Use GoogleLogin
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useMsal } from '@azure/msal-react'; // MSAL hook for Microsoft login
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const { instance } = useMsal(); // MSAL instance to interact with Microsoft authentication

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Google Login Success Handler
  const handleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
    navigate('/register'); // Redirect to /register after Google login
  };

  // Google Login Failure Handler
  const handleLoginFailure = (error) => {
    console.log('Google Login Failed:', error);
  };

  // Microsoft Login Handler
  const handleMicrosoftLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup({
        scopes: ['user.read'], // Define the required permissions
      });
      console.log('Microsoft Login Success:', loginResponse);
      navigate('/register'); // Redirect to /register after successful login
    } catch (error) {
      console.log('Microsoft Login Failed:', error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-blue-900 to-black"

      data-aos="fade-in" // AOS animation for the container
    >
      <div
        className="bg-white shadow-2xl rounded-xl p-10 w-[30rem]"
        data-aos="zoom-in" // AOS animation for the login box
      >
        <h2
          className="text-4xl font-extrabold mb-6 text-center text-gray-800"
          data-aos="fade-down" // AOS animation for the heading
        >
          Resume Builder
        </h2>
        <p
          className="text-center text-gray-600 mb-8"
          data-aos="fade-up" // AOS animation for the subheading
        >
          Build your professional resume effortlessly.
        </p>

        {/* Google Login Button */}
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          useOneTap
          size="large"
          shape="pill"
          text="Login with Google"
          data-aos="flip-up" // AOS animation for the Google login button
        />

        {/* Microsoft Login Button */}
        <button
          onClick={handleMicrosoftLogin}
          className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-5 mt-5 rounded-lg w-full transition-transform transform hover:scale-105 shadow-lg"
          data-aos="flip-up" // AOS animation for the Microsoft login button
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
};

export default Login;
