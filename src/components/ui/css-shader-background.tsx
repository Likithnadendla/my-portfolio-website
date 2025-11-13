"use client"

export function CSSShaderBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700" />
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/40 dark:bg-slate-600/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>
      
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40" style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0),
          radial-gradient(circle at 3px 3px, rgba(148, 163, 184, 0.1) 1px, transparent 0)
        `,
        backgroundSize: '20px 20px, 40px 40px'
      }} />
      
      {/* Subtle moving gradients */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-50/20 to-transparent dark:via-blue-900/10 animate-moveGradient" />
        <div className="absolute w-full h-full bg-gradient-to-l from-transparent via-purple-50/20 to-transparent dark:via-purple-900/10 animate-moveGradientReverse" />
      </div>
      
      {/* Final overlay for content readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60" />
    </div>
  )
}