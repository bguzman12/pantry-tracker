import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBg4uJHfHhhJP1TqqLobElDju8G6uxP2Hk",
    authDomain: "pantry-tracker-e3055.firebaseapp.com",
    projectId: "pantry-tracker-e3055",
    storageBucket: "pantry-tracker-e3055.appspot.com",
    messagingSenderId: "113180007837",
    appId: "1:113180007837:web:52d3d7e3f3b359b4172374",
    measurementId: "G-57TM0YBTJ7"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };