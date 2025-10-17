// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Developer & Blogger",
  description: "A personal portfolio and tech blog built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      {/* Gradient classes add ki gayi hain */}
      <body 
        className={`${inter.className} bg-gradient-to-r from-white via-orange-100 to-orange-200 text-slate-800`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}