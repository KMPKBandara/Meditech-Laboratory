// src/app/layout.js
import "../i18n";
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
  metadataBase: new URL("https://meditechlab.lk"),
  title: {
    default: "Meditech Laboratory | Medical Testing in Sri Lanka",
    template: "%s | Meditech Laboratory",
  },
  description:
    "Meditech Laboratory provides trusted medical testing, diagnostic services, and home sample collection across Ratnapura, Balangoda, Welimada, and Kalawana, Sri Lanka.",
  applicationName: "Meditech Laboratory",
  keywords: [
    "medical laboratory Sri Lanka",
    "diagnostic laboratory Ratnapura",
    "medical tests Balangoda",
    "laboratory Welimada",
    "laboratory Kalawana",
    "home sample collection Sri Lanka",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://meditechlab.lk/",
    siteName: "Meditech Laboratory",
    title: "Meditech Laboratory | Medical Testing in Sri Lanka",
    description:
      "Trusted medical testing and diagnostic services with branches and collection centers across Sri Lanka.",
    images: [
      {
        url: "/header/mediLab.jpg",
        width: 1200,
        height: 630,
        alt: "Meditech Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditech Laboratory | Medical Testing in Sri Lanka",
    description:
      "Trusted medical testing and diagnostic services across Ratnapura, Balangoda, Welimada, and Kalawana.",
    images: ["/header/mediLab.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // getServerSession is fine in a Server Component

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Meditech Laboratory",
              url: "https://meditechlab.lk",
              logo: "https://meditechlab.lk/header/mediLab.jpg",
              image: "https://meditechlab.lk/header/mediLab.jpg",
              description:
                "Medical testing and diagnostic laboratory services in Sri Lanka.",
              foundingDate: "2008",
              areaServed: [
                "Ratnapura",
                "Balangoda",
                "Welimada",
                "Kalawana",
                "Sri Lanka",
              ],
              sameAs: [
                "https://www.facebook.com/share/1DeTuMUcwF/?mibextid=wwXIfr",
                "https://www.instagram.com/meditechlab01?igsh=ZW96b3M2eHV0cG82",
                "https://www.linkedin.com/company/meditech-lab/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+94 45 2288388",
                areaServed: "LK",
              },
            }),
          }}
        />
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
