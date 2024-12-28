import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Replace with your app's client ID
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:3000', // Make sure to update with your app's redirect URI
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <React.StrictMode>
     <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

