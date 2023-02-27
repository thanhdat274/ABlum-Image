import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBEyYOtnA4BS-RK4ifdudxxomXo7sh1Px8",
  authDomain: "ablum-image.firebaseapp.com",
  projectId: "ablum-image",
  storageBucket: "ablum-image.appspot.com",
  messagingSenderId: "711139994073",
  appId: "1:711139994073:web:fab40b33b72e47d79551c8"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;