import { initializeApp} from "firebase/app";

import{ getAuth } from 'firebase/auth'
import{
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ3WCCWTbXLR9wdTquJiNZfUam6nt2O8E",
  authDomain: "blog-d966c.firebaseapp.com",
  projectId: "blog-d966c",
  storageBucket: "blog-d966c.firebasestorage.app",
  messagingSenderId: "96169322039",
  appId: "1:96169322039:web:a33bc87ef031530bd101b2"
};

initializeApp(firebaseConfig);


const db = getFirestore()

const auth = getAuth()

export {db,auth}

