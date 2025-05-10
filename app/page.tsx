"use client";
import { Suspense, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import ErrorBoundary from "@/components/error-boundary"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certificates from "@/components/certificates"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

// Create a fallback loading component for the Hero
function HeroLoading() {
  return (
    <div
      id="hero"
      className="relative h-screen w-full bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Mustafa Faek Banikhalaf</h1>
        <h2 className="text-xl md:text-2xl text-gray-300">Loading experience...</h2>
      </div>
    </div>
  )
}

// Dynamically import the Hero component with no SSR to avoid Three.js issues
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
  loading: () => <HeroLoading />,
})

// Hacker Terminal Section
function HackerTerminal() {
  const [ip, setIp] = useState<string | null>(null);
  const [displayed, setDisplayed] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp("0.0.0.0"));
  }, []);

  const lines = [
    "$ whoami",
    "0xmfbk (root)",
    ip ? `$ nmap -A ${ip}` : "$ nmap -A ...",
    "Starting Nmap 7.91 ( https://nmap.org ) at 2024-07-01 22:00 UTC",
    ip ? `Nmap scan repoart for ${ip}` : "Nmap scan report for ...",
    "PORT     STATE SERVICE VERSION",
    "22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)",
    "80/tcp   open  http    Apache httpd 2.4.41 ((Ubuntu))",
    "443/tcp  open  https   OpenSSL 1.1.1f  31 Mar 2020",
    "$ echo 'Hacking is not a crime. It's an art.'",
    "Hacking is not a crime. It's an art.",
  ];

  useEffect(() => {
    if (!ip) return; // Wait for IP
    if (line < lines.length) {
      if (char < lines[line].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + lines[line][char]);
          setChar(char + 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + "\n");
          setLine(line + 1);
          setChar(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else {
      // Loop: restart after a short delay
      const timeout = setTimeout(() => {
        setDisplayed("");
        setLine(0);
        setChar(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [line, char, ip]);

  if (!ip) {
    return <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>Loading public IP...</pre>;
  }

  return <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{displayed}</pre>;
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Wrap the Hero component with ErrorBoundary */}
      <ErrorBoundary>
        <Suspense fallback={<HeroLoading />}>
          <Hero />
        </Suspense>
      </ErrorBoundary>

      {/* Wrap each major section with its own ErrorBoundary */}
      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      <ErrorBoundary>
        <Experience />
      </ErrorBoundary>

      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>

      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>

      <ErrorBoundary>
        <Certificates />
      </ErrorBoundary>

      {/* Hacker Terminal Section (now under Certifications) */}
      <section id="hacker-terminal" className="relative flex justify-center items-center py-20 px-4 sm:px-0 bg-transparent z-10">
        <div className="relative w-full max-w-2xl mx-auto rounded-2xl border border-emerald-700/60 shadow-2xl bg-black/80 backdrop-blur-lg overflow-hidden" style={{ boxShadow: '0 8px 40px 0 #10b98133, 0 0 0 2px #10b98122' }}>
          <h3 className="text-3xl font-extrabold mb-6 text-center text-emerald-400 flex items-center justify-center gap-2 pt-8">
            <span className="mr-2">&#x1F5A5;</span> Hacker Terminal
          </h3>
          <div className="bg-gray-900/90 rounded-xl p-6 font-mono text-emerald-400 text-lg overflow-x-auto min-h-[140px] animate-terminal mx-4 mb-8 shadow-inner border border-emerald-800/30">
            <HackerTerminal />
          </div>
        </div>
      </section>

      <Footer />

      {/* Add scroll to top button */}
      <ScrollToTop />

    </main>
  )
}
