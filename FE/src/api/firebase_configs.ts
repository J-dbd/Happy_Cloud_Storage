// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import env from "@/utils/validateEnv";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.FB_API_KEY,
  authDomain: env.FB_AUTH_DOMAIN,
  projectId: env.FB_PJ_ID,
  storageBucket: env.FB_STORAGE_BUCKET,
  messagingSenderId: env.FB_MSG_SENDER_ID,
  appId: env.FB_APP_ID,
  measurementId: env.FB_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// get a reference to the service
const authService = getAuth(firebaseApp);
const dbService = getDatabase(firebaseApp);
const userDbService = getFirestore(firebaseApp); //for user info
export { authService, dbService, userDbService };
