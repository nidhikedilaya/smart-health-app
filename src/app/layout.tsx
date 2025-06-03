// Import the Metadata type from Next.js for defining page metadata
import type { Metadata } from "next";
// Import the Inter font from Google Fonts
import { Inter } from "next/font/google";
// Import global CSS styles
import "./globals.css";

// Configure the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

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
  // Render the HTML structure with the Inter font applied to the body
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
