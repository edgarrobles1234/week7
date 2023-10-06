
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// replace this firebase conFigvariable with your own

const firebaseConfig = {
  apiKey: "AIzaSyDgvdZa3Y8K85NUCrMQ_hYVR0KToQUK8dc",
  authDomain: "cs5513week7app.firebaseapp.com",
  projectId: "cs5513week7app",
  storageBucket: "cs5513week7app.appspot.com",
  messagingSenderId: "24216659849",
  appId: "1:24216659849:web:746cfd5d8c5cf652662358"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };