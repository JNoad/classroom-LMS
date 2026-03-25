import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyCD_VXokFoDO2yTR4Y2fYvsxOfk7MMzgYI",
        authDomain: "springfield-mis.firebaseapp.com",
        projectId: "springfield-mis",
        storageBucket: "springfield-mis.firebasestorage.app",
        messagingSenderId: "787494057287",
        appId: "1:787494057287:web:58e15efc9b80af259ac862",
        measurementId: "G-L8L26MZES8"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    return {
        provide: {
            firebaseApp: app,
            db,
        }
    }
});  

const { $db } = useNuxtApp()