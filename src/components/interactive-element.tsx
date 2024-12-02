"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveElement() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="mt-16 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center"
        animate={{
          rotate: isHovered ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-2xl"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          👋
        </motion.span>
        <motion.span
          className="text-2xl absolute"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        >
          🚀
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

