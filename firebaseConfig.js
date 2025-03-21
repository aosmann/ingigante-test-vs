// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const apiKey = process.env.FIREBASE_API_KEY;
const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
const projectId = process.env.FIREBASE_PROJECT_ID;
const storageBucket = process.env.FIREBASE_STOREAGE_BUCKET;
const messagingSenderId = process.env.FIREBASE_MESSAGE_SENDER_ID;
const appId = process.env.FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: 'AIzaSyAr3rhOJpKLa9jLhHo2UgDg8TS5dBJy028',
  authDomain: 'ingigante-d6604.firebaseapp.com',
  projectId: 'ingigante-d6604',
  storageBucket: 'ingigante-d6604.appspot.com',
  messagingSenderId: '945901510683',
  appId: '1:945901510683:web:1bffad8f3c90aa6a1ed8be',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
