// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase/compat/app"
// require('firebase/auth');



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscEzElDoM-06_1UGT0GLgXFNF7-WawiQ",
  authDomain: "challenge-7d9e7.firebaseapp.com",
  projectId: "challenge-7d9e7",
  storageBucket: "challenge-7d9e7.appspot.com",
  messagingSenderId: "716396274769",
  appId: "1:716396274769:web:5e26b30e73e70baf2a8470",
  measurementId: "G-KB1YRKJTHB"
};

// const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp); 

// const auth = getAuth();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebaseApp;