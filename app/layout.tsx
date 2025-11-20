// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC Builder RO/UK",
  description: "Configurator PC cu prețuri reale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navbar />
          <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 pt-16">
            {children}
          </main>

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
