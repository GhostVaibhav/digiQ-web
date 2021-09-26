import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyAb61S8PSnQlZylRxDN3Z45846x8QWzJa0",
    authDomain: "helloworld-ad5a4.firebaseapp.com",
    databaseURL: "https://helloworld-ad5a4.firebaseio.com",
    projectId: "helloworld-ad5a4",
    storageBucket: "helloworld-ad5a4.appspot.com",
    messagingSenderId: "160048863837",
    appId: "1:160048863837:web:3d26f70b8e45b3b0b60bb4"
});
export const auth = getAuth();
export default app;