/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUUe0KcHquqir0ZTXMGlZVvfMK06_Ri0I",
  authDomain: "wanted-dea67.firebaseapp.com",
  projectId: "wanted-dea67",
  storageBucket: "wanted-dea67.appspot.com",
  messagingSenderId: "314580371663",
  appId: "1:314580371663:web:5cf9f0e5d901aa7d75cfba",
  measurementId: "G-68MBG3WF17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);