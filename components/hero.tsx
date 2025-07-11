"use client"

import { useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Mesh } from "three"

function CyberModel() {
  const meshRef = useRef<Mesh>(null)
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#10b981" wireframe />
    </mesh>
  )
}

function ParticleField() {
  const count = 100
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#10b981" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <CyberModel />
      <ParticleField />
      <Text position={[0, 2.5, 0]} fontSize={0.5} color="#10b981" anchorX="center" anchorY="middle">
        CYBERSECURITY ENGINEER
      </Text>
      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0

      // Calculate the position to scroll to
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          className="!absolute inset-0 w-full h-full"
          camera={{ position: [0, 0, 7], fov: 50 }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Glassmorphism Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
            Mustafa Faek Banikhalaf
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium drop-shadow-lg">
            Cybersecurity Engineer | Penetration Testing | Red Team Operations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
                const elementPosition = projectsSection.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
            aria-label="View Projects"
          >
            View Projects
          </Button>
        </motion.div>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-emerald-500 transition-colors bg-black/40 rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Scroll to About"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
