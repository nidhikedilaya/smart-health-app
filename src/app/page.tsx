// This file is a Next.js client component
"use client";

// Import the useEffect hook from React for side effects
import { useEffect } from "react";
// Import the useRouter hook from Next.js for navigation
import { useRouter } from "next/navigation";
// Import the custom useAuth hook from the AuthContext for authentication state
import { useAuth } from "@/contexts/AuthContext";

// Define the Home component as the default export
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Smart Health Diagnosis</h1>
    </main>
  );
}
