"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 flex flex-col justify-center items-center px-6">
      {/* Container central cu max 80% latime */}
      <div className="w-full max-w-5xl text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
            PC Builder România & UK
          </span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow-md max-w-3xl mx-auto">
          Configurează-ți PC-ul visat cu prețuri reale și compatibilitate garantată. Soluție modulară rapidă, cu linkuri directe și actualizări zilnice!
        </p>
        <Link
          href="/builder"
          className="inline-block bg-white text-gray-900 font-semibold text-xl rounded-2xl px-12 py-4 shadow-xl hover:bg-blue-600 hover:text-white transition"
          aria-label="Începe să construiești PC-ul"
        >
          Începe să construiești
        </Link>
      </div>
    </div>
  );
}
