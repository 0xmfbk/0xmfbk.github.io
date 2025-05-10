"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, ChevronRight, HeartHandshake } from "lucide-react"
import SectionAnimation from "./section-animation"
import StaggeredAnimation from "./staggered-animation"
import volunteeringData from "../json/volunteering.json"
import dynamic from "next/dynamic"
import experienceData from "../json/experience.json"

const Experience3D = dynamic(() => import("./Experience3D"), { ssr: false })

// Add a date formatting helper
function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Handle ranges like '01/2022 - 12/2022'
  if (dateStr.includes('-')) {
    return dateStr.split('-').map((d: string) => formatDate(d.trim())).join(' - ');
  }
  // Handle single dates like '01/2022'
  const [month, year] = dateStr.split('/');
  if (!month || !year) return dateStr;
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthIndex = parseInt(month, 10) - 1;
  return `${months[monthIndex]} ${year}`;
}

export default function Experience() {
  return (
    <>
      <SectionAnimation id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <Experience3D />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text animate-gradient-x drop-shadow-lg tracking-tight">Professional Experience</h2>
            <div className="w-32 h-1 bg-emerald-500 mx-auto mb-10 rounded-full animate-pulse shadow-lg"></div>
            <p className="text-gray-200 max-w-2xl mx-auto text-xl font-medium">
              My professional journey in cybersecurity and technology leadership roles.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-emerald-500/60 pl-12 ml-6">
              <StaggeredAnimation delayIncrement={0.2} initialDelay={0.1}>
                {experienceData.Experience.map((exp, index) => (
                  <div key={index} className="mb-16 relative group">
                    <div className="absolute -left-14 top-0 w-8 h-8 bg-black border-4 border-emerald-500 rounded-full shadow-lg z-10"></div>
                    <div className="bg-black/90 backdrop-blur-2xl rounded-3xl p-10 border-2 border-emerald-700/70 shadow-2xl hover:scale-[1.025] hover:border-emerald-400/80 transition-transform duration-300 group relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-2xl rounded-full animate-pulse z-0" />
                      <div className="flex flex-wrap justify-between items-start mb-6 relative z-10">
                        <h3 className="text-3xl font-extrabold text-white animate-gradient-x gradient-text drop-shadow-lg mb-2">{exp.title}</h3>
                        <span className="text-lg bg-emerald-900/50 text-emerald-400 px-4 py-2 rounded-full flex items-center font-semibold">
                          <Calendar size={18} className="mr-2" /> {formatDate(exp.period)}
                        </span>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center text-emerald-500 mb-2 text-lg font-semibold">
                          <Briefcase size={18} className="mr-3" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="text-gray-400 text-base">{exp.location}</div>
                      </div>

                      <StaggeredAnimation delayIncrement={0.1} initialDelay={0.2} className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-200 list-none text-lg">
                            <ChevronRight size={18} className="mr-3 text-emerald-400 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </StaggeredAnimation>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
            </div>
          </div>
        </div>
      </SectionAnimation>

      {/* Volunteering Section */}
      <SectionAnimation id="volunteering" className="py-24 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 flex items-center justify-center gap-2 gradient-text animate-gradient-x drop-shadow-lg tracking-tight">
              <HeartHandshake className="text-emerald-500 mr-2" /> Volunteering
            </h2>
            <div className="w-32 h-1 bg-emerald-500 mx-auto mb-10 rounded-full animate-pulse shadow-lg"></div>
            <p className="text-gray-200 max-w-2xl mx-auto text-xl font-medium">
              My journey of giving back, empowering communities, and fostering tech growth through volunteering.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-emerald-500/60 pl-12 ml-6">
              <StaggeredAnimation delayIncrement={0.2} initialDelay={0.1}>
                {volunteeringData.Volunteer.map((vol, index) => (
                  <div key={index} className="mb-16 relative group">
                    <div className="absolute -left-14 top-0 w-8 h-8 bg-black border-4 border-emerald-500 rounded-full shadow-lg z-10"></div>
                    <div className="bg-black/90 backdrop-blur-2xl rounded-3xl p-10 border-2 border-emerald-700/70 shadow-2xl hover:scale-[1.025] hover:border-emerald-400/80 transition-transform duration-300 group relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-2xl rounded-full animate-pulse z-0" />
                      <div className="flex flex-wrap justify-between items-start mb-6 relative z-10">
                        <h3 className="text-3xl font-extrabold text-white animate-gradient-x gradient-text drop-shadow-lg mb-2 flex items-center">
                          {vol.role}
                        </h3>
                        <span className="text-lg bg-emerald-900/50 text-emerald-400 px-4 py-2 rounded-full flex items-center font-semibold">
                          <Calendar size={18} className="mr-2" /> {formatDate(vol.date)}
                        </span>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-center text-emerald-500 mb-2 text-lg font-semibold">
                          <HeartHandshake size={18} className="mr-3" />
                          <span>{vol.organization}</span>
                        </div>
                        <div className="text-gray-400 text-base">{vol.location}</div>
                      </div>
                      <StaggeredAnimation delayIncrement={0.1} initialDelay={0.2} className="space-y-3">
                        {vol.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-200 list-none text-lg">
                            <ChevronRight size={18} className="mr-3 text-emerald-400 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </StaggeredAnimation>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
            </div>
          </div>
        </div>
      </SectionAnimation>
    </>
  )
}
