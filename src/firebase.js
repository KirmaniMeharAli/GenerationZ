import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxVucpDM03kUf-UmN2qJcC1y0r3kXjLoY",
  authDomain: "generationz-f19f8.firebaseapp.com",
  projectId: "generationz-f19f8",
  storageBucket: "generationz-f19f8.firebasestorage.app",
  messagingSenderId: "23910944957",
  appId: "1:23910944957:web:cf6c99486e4f9feff867d4",
  measurementId: "G-NK80QY9KER"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
export default app;
