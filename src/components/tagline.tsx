"use client"

import { motion } from "framer-motion"

export default function Tagline() {
  return (
    <motion.p
      className="text-gray-600 text-center mt-12 max-w-2xl font-poppins text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      I share stories about #programming, #gaming, #content-creation and #life on
      the Internet.
    </motion.p>
  )
}

