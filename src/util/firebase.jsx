import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA_I7GpsKOvywmyUjW1MJXqVJRYklT0Hr8",
  authDomain: "dashboard-a03d2.firebaseapp.com",
  projectId: "dashboard-a03d2",
  storageBucket: "dashboard-a03d2.appspot.com",
  messagingSenderId: "713995131337",
  appId: "1:713995131337:web:dea0326bc82087de333018",
  measurementId: "G-0JN23SC6ZC",
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export default firestore;
