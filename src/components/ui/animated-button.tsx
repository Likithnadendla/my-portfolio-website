"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  icon?: ReactNode
}

export function AnimatedButton({ children, onClick, href, className, icon }: AnimatedButtonProps) {
  const buttonContent = (
    <>
      {/* Spinning gradient border effect */}
      <div className="absolute inset-0 flex items-center [container-type:inline-size]">
        <div className="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Background layer with blur */}
      <div className="absolute inset-0.5 bg-zinc-900 sm:bg-zinc-900/80 sm:backdrop-blur-md rounded-md" />
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 rounded-md" />
      
      {/* Content with gradient text */}
      <span className="relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-transparent font-medium text-base transition-all duration-200 whitespace-nowrap">
        {children}
        {icon && <span className="opacity-90 text-white">{icon}</span>}
      </span>
    </>
  )

  if (href) {
    return (
      <div className="relative inline-flex">
        <a
          href={href}
          className={cn(
            "group relative inline-flex items-center overflow-hidden transition rounded-md px-3 py-1.5 bg-zinc-800",
            className
          )}
        >
          {buttonContent}
        </a>
      </div>
    )
  }

  return (
    <div className="relative inline-flex">
      <button
        onClick={onClick}
        className={cn(
          "group relative inline-flex items-center overflow-hidden transition rounded-md px-3 py-1.5 bg-zinc-800",
          className
        )}
      >
        {buttonContent}
      </button>
    </div>
  )
}
