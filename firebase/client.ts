// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy3LS_wyLtiDvC7XoqXtTcPmK6gikNlkY",
  authDomain: "prepai-9eb11.firebaseapp.com",
  projectId: "prepai-9eb11",
  storageBucket: "prepai-9eb11.firebasestorage.app",
  messagingSenderId: "319479632673",
  appId: "1:319479632673:web:86e33183fee262786aa460",
  measurementId: "G-Z5NZYE6YHL"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
