import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB70HcJqfmNnZh00PvjLtHMYQ935AuWvZo",
  authDomain: "curso-47771.firebaseapp.com",
  projectId: "curso-47771",
  storageBucket: "curso-47771.firebasestorage.app",
  messagingSenderId: "286640715432",
  appId: "1:286640715432:web:d4fbd23e087007ecdab49d",
  measurementId: "G-RDK536TE64",
};

const firebaseApp = initializeApp(firebaseConfig); // Inicializando as configurações do firebase.
const db = getFirestore(firebaseApp); // Passando as configurações para ser inicialidada.

export { db };
