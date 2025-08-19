import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tejash Rajput | Full Stack Developer & AI Enthusiast 🚀",
  description:
    "🚀 Full Stack Developer building modern web applications | ❇️ Experienced in Next.js, React, Node.js, Python | 🤖 AI & Blockchain enthusiast | 📚 Open source contributor & tech mentor | 🌟 Winner of multiple hackathons and community recognition awards.",

  openGraph: {
    title: "Tejash Rajput | Full Stack Developer & AI Enthusiast 🚀",
    description:
      "🚀 Full Stack Developer building modern web applications | ❇️ Experienced in Next.js, React, Node.js, Python | 🤖 AI & Blockchain enthusiast | 📚 Open source contributor & tech mentor | 🌟 Winner of multiple hackathons and community recognition awards.",
    url: "https://tejashrajput.vercel.app/",
    siteName: "Tejash Rajput Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tejash Rajput - Full Stack Developer & AI Enthusiast Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tejash Rajput | Full Stack Developer & AI Enthusiast 🚀",
    description:
      "🚀 Full Stack Developer building modern web applications | ❇️ Experienced in Next.js, React, Node.js, Python | 🤖 AI & Blockchain enthusiast | 📚 Open source contributor & tech mentor | 🌟 Winner of multiple hackathons and community recognition awards.",
    images: ["/og.png"],
    creator: "@tejashrajput",
    site: "@tejashrajput",
  },

  metadataBase: new URL("https://tejashrajput.vercel.app/"),
  alternates: {
    canonical: "https://tejashrajput.vercel.app/",
  },

  keywords: [
    "Tejash Rajput",
    "Full Stack Developer",
    "AI Developer",
    "Blockchain Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "TypeScript Developer",
    "Web3 Developer",
    "Open Source Contributor",
    "Tech Mentor",
    "Hackathon Winner",
    "Community Manager",
    "Content Creator",
    "Prompt Engineering",
    "Solidity Developer",
    "EVM Developer",
    "Docker Developer",
    "CI/CD Developer",
    "API Developer",
    "Frontend Developer",
    "Backend Developer",
    "India Developer",
    "GSSOC",
    "GIAIC",
    "PIAIC",
  ],
  authors: [{ name: "Tejash Rajput", url: "https://tejashrajput.vercel.app/" }],
  creator: "Tejash Rajput",
  publisher: "Tejash Rajput",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "pinterest-media": "/og.png",
    "pinterest-description":
      "🚀 Full Stack Developer building modern web applications | ❇️ Experienced in Next.js, React, Node.js, Python | 🤖 AI & Blockchain enthusiast | 📚 Open source contributor & tech mentor | 🌟 Winner of multiple hackathons and community recognition awards.",

    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Tejash Rajput",

    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/og.png",

    "theme-color": "#000000",
    "msapplication-navbutton-color": "#000000",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>

      <body>{children}</body>
    </html>
  );
}
