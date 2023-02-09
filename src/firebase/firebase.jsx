
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from firebase/auth;
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from firebase/storage;
import {getFirestore, collection, addDoc, getDocs, doc, getDoc,query,where,setDoc,deleteDoc} from firebase/firestore;

const firebaseConfig = {
  apiKey:meta.env.VITE_APP_APIKEY,
  authDomain:meta.env.VITE_APP_DOMAIN,
  projectId:meta.env.VITE_APP_PROJECTID,
  storageBucket:meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: meta.env.VITE_APP_APPID,
  measurementId: meta.env.VITE_APP_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);