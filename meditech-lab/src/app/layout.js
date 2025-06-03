// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { SessionProvider } from "next-auth/react"; // REMOVE THIS IMPORT
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthSessionProvider from "../components/NextAuthSessionProvider"; // NEW: Import the client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meditech Laboratory - Trusted Medical Lab in Sri Lanka",
  description: "Meditech Laboratory - Trusted Medical Lab in Sri Lanka",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // getServerSession is fine in a Server Component

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* NEW: Use the client component to wrap the session */}
        <NextAuthSessionProvider session={session}>
          {/* Global Header */}
          <Header />

          {/* Page content */}
          <main className="min-h-screen">{children}</main>

          {/* Global Footer */}
          <Footer />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
