import { Home, User, Wrench, Briefcase, GraduationCap, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Wrench },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}