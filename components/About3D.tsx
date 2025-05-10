import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

function LockModel() {
  // Simple lock: torus (shackle) + box (body)
  return (
    <group position={[0, 0.5, 0]}>
      {/* Shackle */}
      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.12, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.7, 0.8, 0.3]} />
        <meshStandardMaterial color="#222" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  )
}

export default function About3D() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false })
  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none opacity-40">
      {inView && (
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={0.7} />
          <Suspense fallback={null}>
            <LockModel />
            <Environment preset="night" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      )}
    </div>
  )
} 