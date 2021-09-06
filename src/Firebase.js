import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa7-Vxm67FkbHnosIpnpp3fgysMXO2uVg",
  authDomain: "coinclub-71648.firebaseapp.com",
  projectId: "coinclub-71648",
  storageBucket: "coinclub-71648.appspot.com",
  messagingSenderId: "148327527491",
  appId: "1:148327527491:web:1a331cd90b437c2fd150f6",
  measurementId: "G-MEP7XC3NWQ",
};

export const auth = initializeApp(firebaseConfig);
