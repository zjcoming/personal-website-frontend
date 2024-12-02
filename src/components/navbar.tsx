"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Instagram } from 'lucide-react'

const navItems = [
  { name: "Favorites", href: "" },
  { name: "Influencer", href: "" },
  { name: "Code", href: "" },
  { name: "Game", href: "" },
  { name: "Music", href: "" },
  { name: "Books", href: "" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
]

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-gray-800 font-poppins">
            ZJcoming
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-poppins"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

