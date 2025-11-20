import Link from "next/link";
import Image from "next/image"; // dacă folosești imagine locală/importată!
import BgSVG from "@/assets/bg-abstract.svg"; // exemplu SVG animat/abstract

export default function Home() {
  return (
    <>
      {/* Background stratificat premium */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient animat */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e204a]/30 via-purple-600/20 to-[#900015]/30 animate-gradient" />
        {/* Imagine locală optimizată Next.js */}
        <Image
          src="/bg-pc.jpg"
          alt="PC builder background"
          fill
          style={{ objectFit: "cover", filter: "blur(50px)", opacity: 0.5 }}
          quality={80}
        />
        {/* Overlay SVG abstract animat */}
        <div className="absolute inset-0 pointer-events-none opacity-30 animate-fadeIn">
          <BgSVG />
        </div>
        {/* Overlay semi-transparent pentru contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Conținut principal */}
      <main className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
              PC Builder
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">România & UK</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium mb-12 drop-shadow-lg max-w-4xl mx-auto">
            Configurează-ți PC-ul visat cu prețuri reale de la eMAG, PC Garage, Amazon UK, Currys și alții
          </p>
          <Link
            href="/builder"
            className="group inline-flex items-center gap-4 bg-white text-gray-900 font-bold text-2xl md:text-3xl px-16 py-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 hover:-translate-y-2"
          >
            <span>Începe Configurarea ACUM</span>
            <svg className="w-10 h-10 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/70 text-lg">
            <span>Prețuri actualizate zilnic</span>
            <span>•</span>
            <span>Compatibilitate 100%</span>
            <span>•</span>
            <span>Linkuri directe affiliate</span>
          </div>
        </div>
      </main>
      {/* Adaugă clase animate-gradient animate-fadeIn sau keyframes în CSS/Tailwind pentru efecte premium */}
    </>
  );
}
