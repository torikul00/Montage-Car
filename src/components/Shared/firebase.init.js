
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDM0uBOCCrPSgQIbcJiTQ6SRN7QD5X9Fm0",
  authDomain: "montage-car.firebaseapp.com",
  projectId: "montage-car",
  storageBucket: "montage-car.appspot.com",
  messagingSenderId: "143228911909",
  appId: "1:143228911909:web:2fdf8e212d3538e9dbdacc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;