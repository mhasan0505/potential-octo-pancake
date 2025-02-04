# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<!-- google-site-verification=if9ZpOkYk54RpRpvWP7jer7kqEwnrnDbymvUfUInqBM -->



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb2ZTKTIut5QZbOR-2Fwgk0-7XNgbiI_A",
  authDomain: "aqua-support-8ccba.firebaseapp.com",
  projectId: "aqua-support-8ccba",
  storageBucket: "aqua-support-8ccba.firebasestorage.app",
  messagingSenderId: "480709710345",
  appId: "1:480709710345:web:5173767d48c73ba47d1ed8",
  measurementId: "G-XRD1MG42W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);