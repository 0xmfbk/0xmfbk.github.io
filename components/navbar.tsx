"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "skills", "certificates"]

      // Find the current section in view
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        // Consider a section "active" when it's top is within the viewport
        // and at least 30% visible (for smaller sections)
        return rect.top <= 100 && rect.bottom >= window.innerHeight * 0.3
      })

      if (currentSection) {
        setActiveSection(currentSection)
      } else if (window.scrollY < 100) {
        // If at the top of the page, set hero as active
        setActiveSection("hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0

      // Calculate the position to scroll to
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update active section
      setActiveSection(id)

      // Update URL hash without scrolling (optional)
      history.pushState(null, "", `#${id}`)
    }
  }

  // Sections for navigation
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "hacker-terminal", label: "Whoami" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
        )}
      >
        <div className="mx-auto px-9 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image src="/img.ico" alt="Logo" width={40} height={40} className="rounded-full bg-white border border-emerald-500 cyber-glow" />
            <span className="text-xl font-bold tracking-tight">0xmfbk<span className="text-emerald-500">.sec</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "transition-colors capitalize relative",
                  activeSection === section.id
                    ? "text-emerald-500 font-medium"
                    : "text-gray-300 hover:text-emerald-500",
                )}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                )}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1UPRAKH6HJpYlrZhndWuJt9qMeNJxPsZk/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-300 hover:text-emerald-500" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 shadow-lg">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "py-2 capitalize transition-colors",
                    activeSection === section.id
                      ? "text-emerald-500 font-medium"
                      : "text-gray-300 hover:text-emerald-500",
                  )}
                >
                  {section.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1UPRAKH6HJpYlrZhndWuJt9qMeNJxPsZk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full px-4 py-2 rounded text-center font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

    </>
  )
}
