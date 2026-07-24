"use client";

import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [linksOpen, setLinksOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = [
        "hero",
        "about",
        "experience",
        "volunteering",
        "projects",
        "skills",
        "certificates",
      ];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= window.innerHeight * 0.3;
      });
      setActiveSection(current || (window.scrollY < 100 ? "hero" : ""));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (linksOpen) setLinksOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setLinksOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const offset =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(id);
      history.pushState(null, "", `#${id}`);
    }
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "volunteering", label: "Volunteering" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "hacker-terminal", label: "Whoami" },
  ];

  const externalLinks = [
    {
      href: "https://0xmfbk.netlify.app/",
      label: "Writeups",
      icon: <ExternalLink size={14} />,
    },
    {
      href: "https://www.credly.com/users/0xmfbk",
      label: "Credly",
      icon: <ExternalLink size={14} />,
    },
    {
      href: "https://drive.google.com/file/d/1GIMYEkFOLeva96fbuGf6OuDFXAe4EWby/view?usp=sharing",
      label: "Resume",
      icon: <ExternalLink size={14} />,
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg border-b border-emerald-900/40"
          : "bg-transparent py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer shrink-0 group"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/img.ico"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full bg-white border border-emerald-500 cyber-glow w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">
              0xmfbk.sec
            </span>
          </span>
        </div>

        {/* Desktop Navigation (≥ lg) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "relative text-sm xl:text-base font-medium transition-colors whitespace-nowrap py-1",
                activeSection === section.id
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400",
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_#10b981]" />
              )}
            </button>
          ))}

          {/* External Buttons */}
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_12px_#10b98140]"
            >
              {link.label}
              {link.icon}
            </a>
          ))}
        </div>

        {/* Tablet Navigation (md → lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-2 xl:gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "relative text-xs font-medium transition-colors whitespace-nowrap py-1",
                activeSection === section.id
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400",
              )}
            >
              {section.label}
            </button>
          ))}
          {/* Quick‑links dropdown */}
          <div className="relative ml-1">
            <button
              onClick={() => setLinksOpen(!linksOpen)}
              className="flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Links <ChevronDown size={14} />
            </button>
            {linksOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-black/95 backdrop-blur-md border border-emerald-500/30 rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (with slide‑down animation) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-emerald-900/40 shadow-2xl animate-slideDown">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full text-left py-3 px-2 rounded-md transition-all duration-200",
                  activeSection === section.id
                    ? "bg-emerald-500/10 text-emerald-400 font-medium"
                    : "text-gray-300 hover:bg-emerald-500/5 hover:text-emerald-400",
                )}
              >
                {section.label}
              </button>
            ))}
            <hr className="border-emerald-700/30 my-2" />
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 transition-all duration-200"
              >
                {link.label}
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
