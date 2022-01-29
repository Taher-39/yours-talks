import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7dX6UIygw8x_NjNAF0VPB7c_efQgWRQ0",
  authDomain: "yours-talks.firebaseapp.com",
  projectId: "yours-talks",
  storageBucket: "yours-talks.appspot.com",
  messagingSenderId: "385999387502",
  appId: "1:385999387502:web:3fa2d160cff1357d8f5f7f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);