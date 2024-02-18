import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {pokemonStats} from "@/assets/pokemonData.js";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

export const populateDatabase = async () => {
  for (const pokemon of pokemonStats) {
    try {
      await setDoc(doc(db, 'supported_pokemons', pokemon.species), pokemon); // Corrected Firestore usage
      console.log(`Pokemon ${pokemon.name} successfully written!`);
    } catch (error) {
      console.error(`Error writing Pokemon ${pokemon.species}:`, error);
    }
  }
};

export { db, auth };
