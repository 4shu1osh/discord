// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-4716siXlKq5tE0j1XcxeMnn174LCO9U",
  authDomain: "ashudis.firebaseapp.com",
  projectId: "ashudis",
  storageBucket: "ashudis.appspot.com",
  messagingSenderId: "645700229771",
  appId: "1:645700229771:web:f5e6c916282b7a2ab1528e",
  measurementId: "G-Q4JTPX0S6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);