import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'
import {
    getFirestore, collection, addDoc, query, orderBy, limit, serverTimestamp, onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyCZS_vQ423xV__2_bv4CSE6mKyFwyUKwzU",
    authDomain: "snake-game-b04b0.firebaseapp.com",
    projectId: "snake-game-b04b0",
    storageBucket: "snake-game-b04b0.appspot.com",
    messagingSenderId: "908691098812",
    appId: "1:908691098812:web:fc9038a3db64fecb6e94b9"
};

// Initialize Firebase --> Firestore
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'top_3');
const q = query(colRef, orderBy('score', 'desc'), limit(3));


//Real listener on DB

export let top3Arr = [];
onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
        top3Arr.push({ ...doc.data(), id: doc.id })
    })
})


//Add To DB

export const addNewScoreToDB = (score, nickname) => {
    if (score > 0) {
        addDoc(colRef, {
            score,
            nickname,
            createdAT: serverTimestamp()
        })
            .then(() => {
                console.log("add");
            }).catch(err => {
                console.log(err);
            })
    }
}