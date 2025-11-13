"use client"

import { useState } from 'react'
import { FluidShaderBackground } from './fluid-shader-background'
// Lazy load heavy components
const ShaderBackground = dynamic(() => import('./shader-background').then(mod => ({ default: mod.ShaderBackground })), { ssr: false })
const CSSShaderBackground = dynamic(() => import('./css-shader-background').then(mod => ({ default: mod.CSSShaderBackground })), { ssr: false })

import dynamic from 'next/dynamic'

type BackgroundType = 'fluid' | 'css' | 'webgl' | 'simple'

export function AdaptiveBackground() {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('fluid')

  // Auto-detect device capability
  const getOptimalBackground = (): BackgroundType => {
    if (typeof window === 'undefined') return 'css'
    
    // Check for WebGL support and performance
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    const hasWebGL = !!gl
    
    // Check device memory (if available)
    const deviceMemory = (navigator as any).deviceMemory
    const isLowEnd = deviceMemory && deviceMemory < 4
    
    // Check for mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile || isLowEnd) return 'simple'
    if (hasWebGL) return 'fluid'
    return 'fluid'
  }

  const renderBackground = () => {
    switch (backgroundType) {
      case 'webgl':
        return <ShaderBackground />
      case 'css':
        return <CSSShaderBackground />
      case 'fluid':
        return <FluidShaderBackground />
      case 'simple':
        return (
          <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="absolute inset-0 opacity-30 dark:opacity-40" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        )
      default:
        return <FluidShaderBackground />
    }
  }

  return (
    <>
      {renderBackground()}
      
      {/* Background selector (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 flex gap-2">
          <button
            onClick={() => setBackgroundType('simple')}
            className={`px-3 py-1 text-xs rounded ${
              backgroundType === 'simple' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setBackgroundType('fluid')}
            className={`px-3 py-1 text-xs rounded ${
              backgroundType === 'fluid' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            Fluid
          </button>
          <button
            onClick={() => setBackgroundType('css')}
            className={`px-3 py-1 text-xs rounded ${
              backgroundType === 'css' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setBackgroundType('webgl')}
            className={`px-3 py-1 text-xs rounded ${
              backgroundType === 'webgl' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            WebGL
          </button>
        </div>
      )}
    </>
  )
}