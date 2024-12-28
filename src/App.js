import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import DomainListPage from './pages/DomainListPage';
// import TemplateSelectionPage from './TemplateSelectionPage';
// import EditAndPreviewPage from './EditAndPreviewPage';
import ResumeDetailsForm from './ResumeDetailsForm';
//import ResumeScore from './ResumeScore';
import GenerateResume from './pages/GenerateResume';
import TIL from './pages/TIL';
import LandingPage from './pages/LandingPage';
import ResumeUploader from './ResumeUploader';
// import ClassicTemplate from './ClassicTemplate';
// import Resume from './Resume';
// import Resume2 from './Resume2';
//import TemplateSelector from "./TemplateSelector";
//import InputForm from "./InputForm";
//import LivePreview from "./LivePreview";
function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  // const [jobDetails, setJobDetails] = useState({});
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
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/domains" element={<DomainListPage />} />
        {/* <Route path="/template" element={<TemplateSelectionPage setSelectedTemplate={setSelectedTemplate}
              setJobDetails={setJobDetails}/>} /> */}
        {/* <Route path="/classic" element={<ClassicTemplate/>} /> */}
        {/* <Route path="/edit-and-preview" element={<EditAndPreviewPage   selectedTemplate={selectedTemplate}
        //       jobDetails={jobDetails}/>} />  */}
      
         {/* <Route path="/input" element={<InputForm/>} />  
         <Route path="/preview" element={<LivePreview/>} />  */}
         <Route path="/til" element={<TIL/>} />
        <Route path="/details" element={<ResumeDetailsForm/>} />
        <Route path="/score" element={<ResumeUploader/>} />
        
        <Route path="/generate" element={<GenerateResume/>} />
        {/* <Route path="/resume" element={<Resume/>} />
        <Route path="/resume2" element={<Resume2/>} /> */}
        

      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
