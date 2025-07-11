"use client"

import { useState } from "react"
import { Github, Brain, Network, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SectionAnimation from "./section-animation"
import StaggeredAnimation from "./staggered-animation"
import { motion } from "framer-motion"

const projects = [
  {
    title: "NeuroVisionAI",
    description:
      "AI-driven desktop application using Roboflow Inference SDK to classify brain MRI scans into 4 Alzheimer's stages.",
    tech: ["Python", "Roboflow", "Tkinter", "AI"],
    link: "https://github.com/0xmfbk/NeuroVisionAI.git",
    icon: Brain,
    highlights: [
      "Developed an AI-driven desktop application using Roboflow Inference SDK to classify brain MRI scans into 4 Alzheimer's stages: NonDemented, VeryMildDemented, MildDemented, and ModerateDemented.",
      "Designed a Tkinter-based GUI for seamless image uploads, displaying results with confidence scores (e.g., 99.9%) and medical advice, including doctor contacts for affected cases.",
      "Enhanced early Alzheimer's diagnosis by providing accurate, accessible analysis, supporting healthcare professionals and improving patient outcomes.",
    ],
  },
  {
    title: "NetRiskScanner Tool",
    description: "GUI-based network security scanner leveraging Nmap with 10+ scan types and AI-powered risk analysis.",
    tech: ["Python", "Nmap", "Google AI", "CVE"],
    link: "https://github.com/0xmfbk/NetRiskScanner-Tool.git",
    icon: Network,
    highlights: [
      "Developed a GUI-based network security scanner leveraging Nmap with 10+ scan types (SYN, UDP, Xmas, etc.) and AI-powered risk analysis.",
      "Integrated Google's Generative AI to cross-reference CVE databases, generating severity assessments (Low-Critical) with mitigation recommendations.",
      "Implemented real-time dual-panel results display, dynamic progress tracking, and export functionality (JSON/TXT)",
    ],
  },
  {
    title: "ATM-SYSTEM",
    description:
      "Client-server banking system handling deposits, withdrawals, and balance inquiries via TCP/IP sockets.",
    tech: ["Python", "TCP/IP", "Threading", "Encryption"],
    link: "https://github.com/0xmfbk/ATM-SYSEM",
    icon: Shield,
    highlights: [
      "Built a client-server banking system handling deposits, withdrawals, and balance inquiries via TCP/IP sockets.",
      "Designed thread-safe architecture supporting multiple concurrent client connections with encrypted data transmission.",
      "Streamlined user experience with menu-driven interface and pyfiglet visual elements.",
    ],
  },
  {
    title: "SecureSK-20",
    description: "SecureSK-20 is your all-in-one, modern terminal toolkit for secure password hashing, encryption, decryption, and file integrity. Fast, flexible, and perfect for cybersecurity, IT, and privacy enthusiasts! ",
    tech: ["Python", "Cryptography", "CLI", "Security"],
    link: "https://github.com/0xmfbk/SecureSK-20.git",
    icon: Lock,
    highlights: [
      "Engineered educational security tool featuring 4+ hashing algorithms (SHA-256, NTLM) and AES-256-CBC encryption.",
      "Implemented HMAC generation with salting to demonstrate secure password storage best practices.",
      "Developed interactive CLI menu reducing user errors by 35% through input validation and clear prompts.",
    ],
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <SectionAnimation id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects in cybersecurity, networking, and software development.
          </p>
        </motion.div>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initialDelay={0.2}
          delayIncrement={0.15}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full hover:border-emerald-500/50 transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <project.icon className="h-10 w-10 text-emerald-500 p-2 bg-emerald-900/30 rounded-lg mb-2" />
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-emerald-500" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {activeProject === index ? (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2 text-sm text-gray-300 list-disc pl-5"
                    >
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </motion.ul>
                  ) : null}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-950 w-full"
                    onClick={() => setActiveProject(activeProject === index ? null : index)}
                  >
                    {activeProject === index ? "Show Less" : "Learn More"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </StaggeredAnimation>
      </div>
    </SectionAnimation>
  )
}
