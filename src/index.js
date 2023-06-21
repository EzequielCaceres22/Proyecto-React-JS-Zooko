import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyBKrP3owRIekwiLPK0t7qZi9uGDz15cdOM",
    authDomain: "zooko-coderhouseproyecto.firebaseapp.com",
    projectId: "zooko-coderhouseproyecto",
    storageBucket: "zooko-coderhouseproyecto.appspot.com",
    messagingSenderId: "835108462927",
    appId: "1:835108462927:web:40b42e175bc30a7a46a53a"
    };

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
