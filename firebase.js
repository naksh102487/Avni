// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYtiBBnXvqSo2S7K3c5JVd_blqBWr20qw",
  authDomain: "avni-mittal.firebaseapp.com",
  projectId: "avni-mittal",
  storageBucket: "avni-mittal.appspot.com",
  messagingSenderId: "203298030441",
  appId: "1:203298030441:web:f4b23f572807d21c0873f8",
  measurementId: "G-W6XTD1GQ93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);