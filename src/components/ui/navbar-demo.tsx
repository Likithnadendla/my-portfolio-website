import { Home, User, Wrench, Briefcase, GraduationCap, Mail, FolderKanban, BookOpen } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Wrench },
    { name: 'Projects', url: '#projects', icon: FolderKanban },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Blog', url: '#blog', icon: BookOpen },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}