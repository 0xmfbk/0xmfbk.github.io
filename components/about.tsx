"use client"

import { motion } from "framer-motion"
import { Shield, Award, Code, Server, Network } from "lucide-react"
import Image from "next/image"
import SectionAnimation from "./section-animation"
import StaggeredAnimation from "./staggered-animation"
import dynamic from "next/dynamic"

const About3D = dynamic(() => import("./About3D"), { ssr: false })

export default function About() {
  return (
    <SectionAnimation id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <About3D />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <SectionAnimation direction="right" delay={0.2} className="relative">
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden border-2 border-emerald-500/30">
              <Image
                src="/perimg.jpg"
                alt="Profile"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-emerald-500 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-emerald-500 rounded-lg"></div>
          </SectionAnimation>

          <SectionAnimation direction="left" delay={0.4}>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" /> Cybersecurity Engineer
            </h3>
            <p className="text-gray-300 mb-6">
              Cybersecurity engineer with a B.Sc. in Cybersecurity (2025) from Yarmouk University. Expertise in
              penetration testing, red teaming, and adversary simulation, including Active Directory exploitation,
              privilege escalation, and lateral movement. Skilled in exploit development, OSINT, and social engineering
              to address vulnerabilities. Proficient in digital forensics and incident response, including malware
              analysis and attack footprint detection.
            </p>

            <StaggeredAnimation className="grid grid-cols-2 gap-4 mb-6" initialDelay={0.2} delayIncrement={0.1}>
              <div className="flex items-start">
                <Award className="mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-400 text-sm">3+ Years</p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-gray-400 text-sm">10+ Completed</p>
                </div>
              </div>
              <div className="flex items-start">
                <Server className="mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Systems</h4>
                  <p className="text-gray-400 text-sm">Linux & Windows</p>
                </div>
              </div>
              <div className="flex items-start">
                <Network className="mr-2 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Networking</h4>
                  <p className="text-gray-400 text-sm">CCNA Knowledge</p>
                </div>
              </div>
            </StaggeredAnimation>

            <StaggeredAnimation className="flex flex-wrap gap-2" initialDelay={0.5} delayIncrement={0.05}>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                Penetration Testing
              </span>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">Red Teaming</span>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                Network Security
              </span>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                Digital Forensics
              </span>
            </StaggeredAnimation>
          </SectionAnimation>
        </div>
      </div>
    </SectionAnimation>
  )
}
