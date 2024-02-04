import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-rWbJikkK-FjYTyxgR_FMOdXHx1Vj-mg",
  authDomain: "glo-3202-pokedex.firebaseapp.com",
  projectId: "glo-3202-pokedex",
  storageBucket: "glo-3202-pokedex.appspot.com",
  messagingSenderId: "592697788405",
  appId: "1:592697788405:web:4abd6efc098b1fe97c82bc",
  measurementId: "G-E3BZKNNKE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
