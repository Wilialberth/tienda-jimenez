
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDdsmuOVj7sgOHM0IDg8IR5FL5_Erh2HWI",
  authDomain: "tienda-jimenez.firebaseapp.com",
  projectId:"tienda-jimenez",
  storageBucket: "tienda-jimenez.appspot.com",
  messagingSenderId: "865612356699",
  appId: "1:865612356699:web:f1237c27ac1f46810c737e",
  measurementId: "G-LJ2495CW85",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
