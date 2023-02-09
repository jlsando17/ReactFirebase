
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from "firebase/storage";
import {getFirestore, collection, addDoc, getDocs, doc, getDoc,query,where,setDoc,deleteDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_APIKEY,
  authDomain:import.meta.env.VITE_APP_DOMAIN,
  projectId:import.meta.env.VITE_APP_PROJECTID,
  storageBucket:import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);