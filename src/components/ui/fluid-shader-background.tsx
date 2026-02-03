"use client"

export function FluidShaderBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base fluid gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 pointer-events-none" />

      {/* Aurora layer (animated, layout-safe) */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30 pointer-events-none aurora-flow"
        style={{
          backgroundImage: `
            radial-gradient(60% 50% at 20% 30%, rgba(99, 102, 241, 0.18) 0%, transparent 60%),
            radial-gradient(50% 60% at 80% 40%, rgba(14, 165, 233, 0.16) 0%, transparent 60%),
            radial-gradient(70% 50% at 50% 80%, rgba(139, 92, 246, 0.14) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Flowing animated layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large flowing shapes */}
        <div 
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 60%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 90% 40% at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        
        {/* Medium flowing shapes */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] opacity-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 60% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 50% 70% at 30% 70%, rgba(245, 101, 101, 0.08) 0%, transparent 50%)
            `,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        
        {/* Small floating particles */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
            animation: 'drift 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
            animation: 'drift 18s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-20 h-20 rounded-full opacity-25 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
            animation: 'drift 22s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Flowing mesh overlay */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'meshFlow 30s linear infinite'
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px, 80px 80px',
          animation: 'noiseShift 40s ease-in-out infinite'
        }}
      />
      
      {/* Final blend overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 pointer-events-none" />
    </div>
  )
}