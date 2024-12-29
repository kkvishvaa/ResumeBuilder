import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import DomainListPage from './pages/DomainListPage';
import ResumeDetailsForm from './ResumeDetailsForm';
import GenerateResume from './pages/GenerateResume';
import TIL from './pages/TIL';
import LandingPage from './pages/LandingPage';
import ResumeUploader from './ResumeUploader';
import Chatbot from './components/Chatbot';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [userData, setUserData] = useState({
    basicInfo: {
      firstName: '',
      middleName: '',
      lastName: '',
      designation: '',
      address: {
        line: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
      },
      email: '',
      mobile: '',
      linkedIn: '',
      github: '',
    },
    photo: null, // Expecting a File object for upload
    summary: '',
    education: {
      school: {},
      intermediate: {},
      graduate: {},
      postGraduate: {},
    },
    certifications: [],
    internships: [],
    projects: [],
    skills: [],
    domainKnowledge: [],
    achievements: [],
  });

  return (
    <GoogleOAuthProvider clientId="63040349079-hiudh192bior54ll4chg20ge6vf0m1l7.apps.googleusercontent.com">
      <Router>
        
        <Chatbot />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/domains" element={<DomainListPage />} />
          <Route path="/details" element={<ResumeDetailsForm />} />
          <Route path="/til" element={<TIL />} />
          <Route path="/score" element={<ResumeUploader />} />
          <Route path="/generate" element={<GenerateResume />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
