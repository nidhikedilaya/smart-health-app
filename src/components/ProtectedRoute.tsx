// This file is a Next.js client component
"use client";

// Import the useAuth hook from the AuthContext for authentication state
import { useAuth } from "@/contexts/AuthContext";
// Import the useRouter hook from Next.js for navigation
import { useRouter } from "next/navigation";
// Import the useEffect hook from React for side effects
import { useEffect } from "react";

// Define the ProtectedRouteProps interface for component props
interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

// Define the ProtectedRoute component as the default export
export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  // Destructure the user and loading state from the authentication context
  const { user, loading } = useAuth();
  // Initialize the router object for navigation
  const router = useRouter();

  // useEffect runs after the component mounts or when 'user', 'loading', or 'router' changes
  useEffect(() => {
    // If not loading and no user is authenticated, redirect to the login page
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]); // Dependencies: re-run effect when 'user', 'loading', or 'router' changes

  // If loading, render a loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If no user is authenticated, render nothing
  if (!user) {
    return null;
  }

  // Render the children if the user is authenticated
  return <>{children}</>;
}
