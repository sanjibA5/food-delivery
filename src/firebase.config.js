import { getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv4a4CkuyZvjDPzoyFYJFN4KW7bzrpx1g",
  authDomain: "fooddelivery-b964a.firebaseapp.com",
  databaseURL: "https://fooddelivery-b964a-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-b964a",
  storageBucket: "fooddelivery-b964a.appspot.com",
  messagingSenderId: "520523438498",
  appId: "1:520523438498:web:0e384b20d5ecdc3f6c7afb"
};

// Initialize Firebase
const app = getApps.length>0?getApp():initializeApp(firebaseConfig);
const firestore= getFirestore(app);
const storage=getStorage(app);

export{
    app,
    firestore,
    storage
}