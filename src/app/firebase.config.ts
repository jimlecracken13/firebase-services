

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDaEiD34uUoApwplzbNPg10AeM7xVvl3_o",
  authDomain: "jimlecracken-dashboard.firebaseapp.com",
  projectId: "jimlecracken-dashboard",
  storageBucket: "jimlecracken-dashboard.firebasestorage.app",
  messagingSenderId: "633957038190",
  appId: "1:633957038190:web:14c0157e92c3bd78268e7f"
};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

