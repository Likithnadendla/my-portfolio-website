"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ShaderPlane } from './background-paper-shaders'

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Subtle background shader planes with muted colors */}
          <ShaderPlane 
            position={[0, 0, -4]} 
            color1="#f8fafc" 
            color2="#e2e8f0" 
          />
          <ShaderPlane 
            position={[2, -1, -5]} 
            color1="#e2e8f0" 
            color2="#cbd5e1" 
          />
          <ShaderPlane 
            position={[-2, 1, -6]} 
            color1="#cbd5e1" 
            color2="#94a3b8" 
          />
        </Suspense>
      </Canvas>
      
      {/* Light overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-900/90 dark:to-slate-800/90 pointer-events-none" />
      
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#94a3b8_1px,transparent_0)] bg-[size:20px_20px]" />
    </div>
  )
}