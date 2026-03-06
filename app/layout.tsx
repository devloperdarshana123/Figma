
import React from "react";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black ${playfair.variable}`}>

        <Navbar />

        {/* Offset for fixed navbar */}
        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
