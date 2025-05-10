import { Shield, Terminal } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-950 py-12 border-t border-emerald-900/40 shadow-inner overflow-hidden">
      {/* Matrix/Cyber Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <MatrixEffect />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-32 bg-emerald-500/10 blur-2xl rounded-full animate-pulse" />
        <div className="absolute right-10 bottom-0 w-40 h-40 bg-emerald-700/10 blur-2xl rounded-full animate-pulse" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Brand & Logo with Floating Shield */}
        <div className="flex items-center gap-4 mb-4 md:mb-0 relative">
          <Image src="/img.ico" alt="Logo" width={48} height={48} className="rounded-full bg-white border-2 border-emerald-500 shadow-lg cyber-glow" />
          <span className="text-2xl font-extrabold tracking-wider gradient-text drop-shadow-lg">
            0xmfbk<span className="text-emerald-500">.sec</span>
          </span>
        </div>
        {/* Hacker Quote - Prominent and Centered */}
        <div className="flex flex-col items-center gap-2 md:items-center">
          <div className="flex items-center gap-2 text-emerald-400 text-base md:text-lg font-mono bg-black/60 px-5 py-2 rounded-xl shadow-inner border-2 border-emerald-700/40 animate-glow">
            <Terminal className="w-5 h-5 mr-2" />
            <span className="tracking-wide">Hacking is not a crime. It's an art.</span>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-gray-400 text-xs md:text-sm text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Mustafa Faek Banikhalaf. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Matrix effect component (simple animated background)
function MatrixEffect() {
  // This is a simple CSS-based effect for demo; for more advanced, use canvas/JS
  return (
    <div className="absolute inset-0 opacity-20 select-none pointer-events-none">
      <div className="w-full h-full matrix-bg" />
    </div>
  )
}

// Add to your global CSS (if not present):
// .cyber-glow { animation: pulse-glow 2s infinite; }
// @keyframes pulse-glow { 0%,100%{box-shadow:0 0 10px 2px #10b98180;} 50%{box-shadow:0 0 20px 5px #10b981cc;} }
// .gradient-text { background: linear-gradient(90deg,#10b981,#059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
// .animate-float { animation: floaty 3s ease-in-out infinite alternate; }
// @keyframes floaty { 0%{transform:translateY(-10px);} 100%{transform:translateY(10px);} }
// .animate-glow { animation: glow 2s infinite alternate; }
// @keyframes glow { 0%{box-shadow:0 0 10px #10b98180;} 100%{box-shadow:0 0 30px #10b981cc;} }
// .matrix-bg { background-image: repeating-linear-gradient(0deg, #10b98122 0 2px, transparent 2px 20px); }
