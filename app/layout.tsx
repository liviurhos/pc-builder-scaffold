// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Asigură-te că ai globals.css în app/
import Navbar from "@/components/Navbar"; // Dacă ai Navbar în components/
import { Toaster } from "react-hot-toast"; // Pentru toast-uri, dacă folosești react-hot-toast

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC Builder RO/UK",
  description: "Configurator PC cu prețuri reale din eMAG, PC Garage, Amazon UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navbar /> {/* Navbar-ul tău comun pe toate paginile */}
        <main className="min-h-screen bg-gray-50 pt-16"> {/* pt-16 pentru spațiu sub navbar */}
          {children}
        </main>
        <Toaster position="bottom-right" /> {/* Notificări toast */}
      </body>
    </html>
  );
}