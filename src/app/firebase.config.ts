

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDnBm65g3VP1mHOr6xbT2A9fw-vUfoarUc",
  authDomain: "projet-test-c0c35.firebaseapp.com",
  projectId: "projet-test-c0c35",
  storageBucket: "projet-test-c0c35.firebasestorage.app",
  messagingSenderId: "711679736508",
  appId: "1:711679736508:web:f61ad2b1db6878150c6eb9",
  measurementId: "G-WLWHC39LP6"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

