import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7eanQiixbHZquokvU5Eu5S76rPGkqrbU",
  authDomain: "social-media-9defa.firebaseapp.com",
  projectId: "social-media-9defa",
  storageBucket: "social-media-9defa.appspot.com",
  messagingSenderId: "3872757623",
  appId: "1:3872757623:web:c48dde1149cae0fb3cf372",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
