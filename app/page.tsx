"use client";
import Link from "next/link";

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white/10 rounded-2xl shadow-md p-6 flex flex-col items-center max-w-xs mx-auto hover:shadow-xl transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-lg mb-1 text-white">{title}</h3>
      <p className="text-white/80 text-sm text-center">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col justify-center items-center px-2">
      <div className="w-[80%] max-w-6xl mx-auto py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
            PC Builder România & UK
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
          Configurează-ți PC-ul visat cu prețuri reale și compatibilitate garantată. Soluție modulară cu linkuri directe și actualizări zilnice!
        </p>
        <Link
          href="/builder"
          className="inline-block bg-white text-blue-900 font-bold text-xl rounded-2xl px-10 py-4 shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Începe configurarea
        </Link>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <Feature icon="💻" title="Prețuri Reale" desc="Vezi cele mai bune oferte din România și UK, actualizate zilnic." />
          <Feature icon="✅" title="Compatibilitate 100%" desc="Orice componentă este verificată automat pentru compatibilitate perfectă." />
          <Feature icon="🔗" title="Linkuri Directe" desc="Acces instant la ofertă fără intermediari — totul rapid." />
          <Feature icon="⚡" title="Rapid și Simplu" desc="Configurezi și cumperi păstrând totul organizat și eficient." />
        </div>
      </div>
      <footer className="mt-auto py-4 text-white/70 text-sm text-center w-full">
        © 2025 PC Builder · Creat cu Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
