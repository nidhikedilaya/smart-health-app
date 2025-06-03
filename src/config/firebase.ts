"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmtzcOI82QmYpKviEC2youCq6wsW0cLEY",
  authDomain: "smart-health-app-ed293.firebaseapp.com",
  projectId: "smart-health-app-ed293",
  storageBucket: "smart-health-app-ed293.firebasestorage.app",
  messagingSenderId: "347758124963",
  appId: "1:347758124963:web:30e1b0bb6b129773974416",
  measurementId: "G-60YC4F07LQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
