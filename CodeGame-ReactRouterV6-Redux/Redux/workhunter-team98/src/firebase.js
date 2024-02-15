import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAp3HoifCPgj2KDqwwlMakZWEJd524unCw",
    authDomain: "workhunter-team98.firebaseapp.com",
    projectId: "workhunter-team98",
    storageBucket: "workhunter-team98.appspot.com",
    messagingSenderId: "251477643769",
    appId: "1:251477643769:web:28f146b3d2460172f56d28"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
