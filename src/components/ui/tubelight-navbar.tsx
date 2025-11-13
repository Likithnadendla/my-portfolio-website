"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      // Clear previous timeout to throttle scroll events
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const sections = items.map(item => {
          const sectionId = item.url.replace('#', '')
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              name: item.name,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
              id: sectionId
            }
          }
          return null
        }).filter(Boolean)

        const viewportHeight = window.innerHeight
        const scrollThreshold = viewportHeight * 0.3 // 30% of viewport height
        
        // Find the section that's most prominently in view
        let activeSection = sections[0]?.name || items[0].name
        
        for (const section of sections) {
          if (section) {
            // Check if section is in the upper part of the viewport
            if (section.top <= scrollThreshold && section.bottom > scrollThreshold) {
              activeSection = section.name
              break
            }
            // Check if section takes up most of the viewport
            else if (section.top <= 0 && section.bottom >= viewportHeight * 0.6) {
              activeSection = section.name
              break
            }
            // Check if we're near the end of the document and this is the last section
            else if (section.id === 'contact' && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
              activeSection = section.name
              break
            }
          }
        }

        setActiveTab(activeSection)
      }, 10) // Small delay to throttle scroll events
    }

    handleResize()
    handleScroll()
    
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [items])

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name)
    
    // Smooth scroll to section
    const sectionId = item.url.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}