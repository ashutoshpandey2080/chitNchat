import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chitnchat-5097e.firebaseapp.com",
    projectId: "chitnchat-5097e",
    storageBucket: "chitnchat-5097e.appspot.com",
    messagingSenderId: "37174423547",
    appId: "1:37174423547:web:7b22acc189ec7b30e2a55e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage()
