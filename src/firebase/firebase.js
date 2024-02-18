import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {getFunctions} from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD-rWbJikkK-FjYTyxgR_FMOdXHx1Vj-mg",
  authDomain: "glo-3202-pokedex.firebaseapp.com",
  projectId: "glo-3202-pokedex",
  storageBucket: "glo-3202-pokedex.appspot.com",
  messagingSenderId: "592697788405",
  appId: "1:592697788405:web:4abd6efc098b1fe97c82bc",
  measurementId: "G-E3BZKNNKE7"
};

const app = initializeApp(firebaseConfig);


const functions = getFunctions(app, 'us-central1');
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, functions };
