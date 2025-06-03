// Import the Metadata type from Next.js for defining page metadata
import type { Metadata } from "next";
// Import the Geist and Geist_Mono fonts from Google Fonts
import { Geist, Geist_Mono } from "next/font/google";
// Import global CSS styles
import "./globals.css";
// Import the AuthProvider component from the AuthContext for authentication state management
import { AuthProvider } from "@/contexts/AuthContext";

// Configure the Geist Sans font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure the Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Smart Health Diagnosis",
  description: "AI-powered health diagnosis system",
};

// Define the RootLayout component as the default export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render the HTML structure with the AuthProvider wrapping the children
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
