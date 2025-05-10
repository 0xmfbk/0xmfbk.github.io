"use client"

import { Shield, Network, Server, Code, Workflow } from "lucide-react"
import SectionAnimation from "./section-animation"
import StaggeredAnimation from "./staggered-animation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const skillCategories = [
  {
    name: "Cybersecurity",
    icon: Shield,
    skills: [
      "Penetration Testing (Nmap, Burp Suite, Metasploit)",
      "Web Application Testing (SQL Injection, XSS, CSRF, SSTI, IDOR)",
      "Network Penetration Testing (Wireshark, Aircrack-ng)",
      "CTF (Capture The Flag) Competitions (Hack The Box, TryHackMe)",
      "Vulnerability Reporting and Documentation",
    ],
  },
  {
    name: "Networking",
    icon: Network,
    skills: [
      "Cisco Certified Network Associate (CCNA)",
      "Cisco Certified Network Professional (CCNP)",
      "Network Security (Firewalls, IDS/IPS)",
      "Packet Analysis (Wireshark, tcpdump)",
      "Cisco Packet Tracer",
      "GNS3 (Graphical Network Simulator-3)",
      "Network Troubleshooting",
    ],
  },
  {
    name: "System Administration",
    icon: Server,
    skills: [
      "Linux System Administration (Ubuntu, Kali, BlackArch)",
      "Windows System Administration (Windows Server, Active Directory Management)",
      "Access Control Lists (ACL)",
    ],
  },
  {
    name: "Programming & Development",
    icon: Code,
    skills: [
      "Python Scripting (Automating Scans, Exploit Development)",
      "Bash Scripting (Linux Automation)",
      "PowerShell Scripting (Windows Exploitation)",
      "Web Development Basics (HTML, CSS, JavaScript for XSS)",
      "Version Control (Git, GitHub for collaborative development)",
    ],
  },
  {
    name: "Soft Skills",
    icon: Workflow,
    skills: ["Problem Solving", "Communication", "Team Leadership", "Documentation", "Time Management"],
  },
]

export default function Skills() {
  return (
    <SectionAnimation id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My expertise spans across various domains of cybersecurity, networking, and software development.
          </p>
        </div>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initialDelay={0.2}
          delayIncrement={0.1}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-10 w-10 text-emerald-500 p-2 bg-emerald-900/30 rounded-lg mr-3" />
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <StaggeredAnimation className="space-y-2" initialDelay={0.3} delayIncrement={0.05}>
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start text-gray-300 list-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </StaggeredAnimation>
            </div>
          ))}
        </StaggeredAnimation>

        <SectionAnimation className="mt-16" delay={0.5} direction="up">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Proficiency</h3>

            <StaggeredAnimation
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initialDelay={0.2}
              delayIncrement={0.1}
            >
              {[
                { name: "Penetration Testing", percentage: 90 },
                { name: "Network Security", percentage: 85 },
                { name: "Python Development", percentage: 80 },
                { name: "Linux Administration", percentage: 85 },
                { name: "Web App Security", percentage: 90 },
                { name: "Windows Server", percentage: 75 },
                { name: "Bash Scripting", percentage: 80 },
                { name: "Digital Forensics", percentage: 75 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-emerald-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-emerald-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </SectionAnimation>
      </div>
    </SectionAnimation>
  )
}

function TypewriterText() {
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
    ip ? `Nmap scan report for ${ip}` : "Nmap scan report for ...",
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

