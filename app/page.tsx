// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          PC Builder România & UK
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          Configurează-ți PC-ul visurilor cu prețuri reale din eMAG, PC Garage, Amazon UK și altele
        </p>
        <Link 
          href="/builder" 
          className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition shadow-xl"
        >
          Începe Configurarea ACUM
        </Link>
      </div>
    </div>
  );
}
