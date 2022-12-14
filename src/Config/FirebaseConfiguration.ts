import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export default app
