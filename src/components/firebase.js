import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAb7jGcicf42RuPhSmDbCJUd5aDdlIwSko",
  authDomain: "linkedin-clone-1159c.firebaseapp.com",
  projectId: "linkedin-clone-1159c",
  storageBucket: "linkedin-clone-1159c.appspot.com",
  messagingSenderId: "447268564364",
  appId: "1:447268564364:web:e0523ee28ce7d84fd3faa9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export { app, db, auth };
