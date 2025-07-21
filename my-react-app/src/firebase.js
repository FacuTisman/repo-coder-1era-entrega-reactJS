// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCh4fYHgPaKWhvbIa3UBP510bVDzUy07W4",
  authDomain: "hamburgueseria-tisman.firebaseapp.com",
  projectId: "hamburgueseria-tisman",
  storageBucket: "hamburgueseria-tisman.firebasestorage.app",
  messagingSenderId: "512673131052",
  appId: "1:512673131052:web:54acf0e2b1230b295b7f89",
  measurementId: "G-CQQ1PMKZQN"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
