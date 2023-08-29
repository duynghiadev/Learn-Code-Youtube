// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP1guwclPizt346HdiPfCw90OoyENG3G0",
  authDomain: "note-app-duynghia.firebaseapp.com",
  projectId: "note-app-duynghia",
  storageBucket: "note-app-duynghia.appspot.com",
  messagingSenderId: "775193096343",
  appId: "1:775193096343:web:d853aac29fd9779acc39d2",
  measurementId: "G-FL3JWWJ5BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
