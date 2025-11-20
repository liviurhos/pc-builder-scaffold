"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center pt-20 pb-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft blur background accent */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[550px] h-[450px] rounded-full opacity-40 blur-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-500"></div>
        </div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-red-300 bg-clip-text text-transparent">
            PC Builder România & UK
          </span>
        </h1>
        <p className="relative text-lg md:text-2xl text-white/80 text-center mb-8 font-medium max-w-lg drop-shadow">
          Configurează-ți PC-ul visat cu prețuri reale și compatibilitate garantată. Soluție modulară rapidă, cu linkuri directe și actualizări zilnice!
        </p>
        <Link
          href="/builder"
          className="relative group flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/90 text-gray-900 font-semibold text-xl shadow-xl hover:bg-blue-600 hover:text-white transition duration-300"
        >
          <span>Începe să construiești</span>
          <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </header>

      {/* Features Section */}
      <section className="relative bg-white/5 rounded-t-3xl py-16 px-6 flex flex-col md:flex-row justify-center items-stretch gap-8 shadow-lg mt-auto">
        <Feature
          icon="💻"
          title="Prețuri Reale"
          desc="Obține cele mai bune prețuri de la magazinele principale din România și UK."
        />
        <Feature
          icon="✅"
          title="Compatibilitate 100%"
          desc="Orice componentă este verificată automat pentru compatibilitate perfectă."
        />
        <Feature
          icon="🔗"
          title="Linkuri Directe"
          desc="Ai acces instant la oferta și detalii actualizate, fără intermediari."
        />
        <Feature
          icon="📅"
          title="Actualizări Zilnice"
          desc="Totul se actualizează automat, cu informații proaspete mereu."
        />
      </section>

      {/* Footer */}
      <footer className="py-8 mt-6 text-center text-white/70 text-base flex justify-center gap-4">
        <span>© 2025 PC Builder</span>
        <span className="hidden md:inline">|</span>
        <span>Proiect open-source · Creat cu Next.js & Tailwind CSS</span>
      </footer>
    </div>
  );
}

// Feature tile component (poți pune în același fișier)
function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex-1 max-w-xs group bg-slate-800/80 rounded-xl p-6 flex flex-col items-start shadow-md
      hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-300">{title}</h3>
      <p className="text-white/80 text-base">{desc}</p>
    </div>
  );
}
