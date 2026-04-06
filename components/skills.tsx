"use client"

import { Shield, Network, Server, Code, Search } from "lucide-react"
import SectionAnimation from "./section-animation"
import StaggeredAnimation from "./staggered-animation"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Offensive Security",
    icon: Shield,
    skills: [
      "Web Application Penetration Testing (OWASP Top 10)",
      "Network Security Assessment (External/Internal)",
      "Vulnerability Research & Exploitation",
      "API Security Testing",
      "Privilege Escalation (Windows & Linux)",
    ],
  },
  {
    name: "Network & Infrastructure",
    icon: Network,
    skills: [
      "Advanced Networking (Routing, Switching, VLANs)",
      "Network Traffic Analysis & Packet Inspection",
      "System Hardening (Windows & Linux)",
      "Docker & Container Security",
      "Virtualization Environments (VMware, VirtualBox)",
    ],
  },
  {
    name: "Security Scripting & Dev",
    icon: Code,
    skills: [
      "Security Automation (Python, Bash, PowerShell)",
      "Exploit Development (Basic/Intermediate)",
      "Secure Coding Principles",
      "Version Control & Collaborative Work (Git)",
    ],
  },
  {
    name: "Forensics & Defense",
    icon: Search,
    skills: [
      "Log Analysis & Incident Response",
      "Digital Forensics Foundations",
      "Access Control & Identity Management (IAM)",
    ],
  },
]

export default function Skills() {
  return (
    <SectionAnimation id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Broad expertise in offensive operations, infrastructure security, and defensive analysis.
          </p>
        </div>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initialDelay={0.2}
          delayIncrement={0.1}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-emerald-500 p-1.5 bg-emerald-900/30 rounded-lg mr-3" />
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-start text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggeredAnimation>

        {/* قسم المهارات العامة (Core Strengths) بدون نسب مئوية لإبقائها مهنية */}
        <SectionAnimation className="mt-12 text-center" delay={0.5} direction="up">
          <div className="flex flex-wrap justify-center gap-4">
            {["System Hardening", "Vulnerability Assessment", "Traffic Analysis", "Security Automation"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-emerald-500 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </SectionAnimation>
      </div>
    </SectionAnimation>
  )
}
