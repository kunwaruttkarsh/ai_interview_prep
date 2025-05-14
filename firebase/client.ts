
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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


export const auth = getAuth(app);
export const db = getFirestore(app);
