// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjD3PNRSrAYUgOyYXOeKnZUy-8CofFMjo",
  authDomain: "codename-cc7b1.firebaseapp.com",
  projectId: "codename-cc7b1",
  storageBucket: "codename-cc7b1.appspot.com",
  messagingSenderId: "847773310105",
  appId: "1:847773310105:web:511ad0240e5a63f0682c08",
  measurementId: "G-K2HGQV5W4N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
