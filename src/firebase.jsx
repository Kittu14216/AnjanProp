import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4hAERa67W22xdKI5WOj2_24-EpApXHwc",

  authDomain: "property-6588d.firebaseapp.com",

  projectId: "property-6588d",

  storageBucket: "property-6588d.appspot.com",

  messagingSenderId: "211991628823",

  appId: "1:211991628823:web:a2bd0c8ec542bd564e2052",

  measurementId: "G-17NNKXCKQ2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
