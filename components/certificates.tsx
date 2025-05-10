"use client"

import { CalendarCheck, ShieldCheck, AlertCircle } from "lucide-react"
import certificateGroups from "../json/certificates.json"
import MatrixRain from "./MatrixRain"
import SectionAnimation from "./section-animation"

// Types
interface Certificate {
  title: string
  issuer: string
  date?: string | null
  status: string
  importance: string
  link?: string | null
}

// Flatten all certificates from all categories
const allCertificates: Certificate[] = certificateGroups.flatMap((group: any) => group.certificates)

export default function Certificates() {
  return (
    <SectionAnimation id="certificates" className="py-28 bg-gradient-to-b from-black via-gray-900 to-black relative z-10 overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_4px_32px_rgba(16,255,176,0.25)] tracking-tight">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-10 rounded-full animate-pulse shadow-[0_0_16px_4px_rgba(16,255,176,0.25)] transition-all duration-500"></div>
          <p className="text-gray-200 max-w-2xl mx-auto text-xl font-medium">
            All my professional certifications, courses, and achievements in cybersecurity and IT.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between w-full bg-black/80 border border-emerald-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-emerald-400/40 hover:scale-[1.025] hover:border-emerald-400/80 transition-all duration-300 group overflow-hidden min-h-[240px] backdrop-blur-xl"
            >
              {/* Issuer Badge */}
              <span className=" inline-block text-xs font-semibold text-emerald-300 bg-black/70 border border-emerald-700/40 rounded-full px-3 py-0.5 mb-3">
                {cert.issuer}
              </span>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-emerald-400 drop-shadow-lg tracking-tight group-hover:text-emerald-300 transition-colors duration-200">
                {cert.title}
              </h3>
              {/* Date & Status */}
              <div className="flex items-center gap-3 mb-2">
                {cert.date && (
                  <span className="flex items-center text-sm text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-emerald-800/30">
                    <CalendarCheck size={16} className="mr-1 text-emerald-400" /> {cert.date}
                  </span>
                )}
              </div>
              {/* Importance Tag */}
              <span className="mt-2 inline-block text-xs font-mono tracking-wide text-emerald-200 bg-emerald-900/30 border border-emerald-700/40 rounded-full px-3 py-0.5">
                {cert.importance}
              </span>
              {/* View Certificate Button */}
              <a
                href={cert.link ? cert.link : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 flex items-center justify-center w-full py-3 px-4 rounded-full text-emerald-400 border border-emerald-700/60 font-bold text-lg transition-all duration-200
                  hover:bg-gradient-to-r hover:from-emerald-700 hover:to-emerald-400 hover:text-white hover:shadow-[0_0_16px_2px_rgba(16,255,176,0.25)] focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 ${!cert.link ? 'opacity-60 cursor-not-allowed' : ''}`}
                onClick={e => { if (!cert.link) e.preventDefault(); }}
                aria-disabled={!cert.link}
                tabIndex={cert.link ? 0 : -1}
                aria-label={cert.link ? `View certificate: ${cert.title}` : `No link available for ${cert.title}`}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionAnimation>
  )
}