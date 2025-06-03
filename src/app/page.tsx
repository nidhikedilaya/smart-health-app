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
  // Initialize the router object for navigation
  const router = useRouter();
  // Destructure the user object from the authentication context
  const { user } = useAuth();

  // useEffect runs after the component mounts or when 'user' or 'router' changes
  useEffect(() => {
    // If a user is authenticated, redirect to the dashboard
    if (user) {
      router.push("/dashboard");
    } else {
      // If no user is authenticated, redirect to the login page
      router.push("/auth/login");
    }
  }, [user, router]); // Dependencies: re-run effect when 'user' or 'router' changes

  // Render a loading spinner while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Animated spinner to indicate loading state */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
