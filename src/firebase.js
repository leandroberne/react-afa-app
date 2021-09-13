// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAyJpgDJhhVXuviXwkUcvki7RnoIKx3z3E',
  authDomain: 'fir-test-db-a07a2.firebaseapp.com',
  projectId: 'fir-test-db-a07a2',
  storageBucket: 'fir-test-db-a07a2.appspot.com',
  messagingSenderId: '990371477053',
  appId: '1:990371477053:web:5e96ea2de364c5c02c9c54',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
