// app/page.tsx – FINAL, 100% FUNCȚIONAL, FĂRĂ EROARE
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            PC Builder România & UK
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto">
          Configurează-ți PC-ul perfect cu prețuri reale de la eMAG, PC Garage, Amazon UK, Currys și alții
        </p>
        <Link
          href="/builder"
          className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold text-2xl md:text-3xl px-16 py-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110"
        >
          Începe Configurarea ACUM
        </Link>
      </div>
    </div>
  );
}
