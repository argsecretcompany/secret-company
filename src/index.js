import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEdWIxyVCod4NCYW2mNM5IsUsQVRrfsXo",
  authDomain: "secret-company.firebaseapp.com",
  projectId: "secret-company",
  storageBucket: "secret-company.appspot.com",
  messagingSenderId: "718792929598",
  appId: "1:718792929598:web:f1cb762ab81e1f71447c6f",
  measurementId: "G-467M6GLRJK"
};

initializeApp(firebaseConfig);

const MyComponent = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
