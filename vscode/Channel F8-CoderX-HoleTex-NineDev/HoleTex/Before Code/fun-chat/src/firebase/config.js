import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkgQcZb_qiS-Bq1bDygYPC7b-WEPkiz88",
  authDomain: "fun-chat-fd12e.firebaseapp.com",
  projectId: "fun-chat-fd12e",
  storageBucket: "fun-chat-fd12e.appspot.com",
  messagingSenderId: "435173019492",
  appId: "1:435173019492:web:d7b4e61c9c8a95ab5cf471",
  measurementId: "G-63MGG9094V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  auth.useEmulator("http://localhost:9099");
  db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
