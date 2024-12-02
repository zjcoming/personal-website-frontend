"use client"

import { motion } from "framer-motion"

const roles = [
  "Android Developer",
  "Game Critic",
  "Wanna Be A Digital Nomad",
]

export default function IntroCard() {
  return (
    <motion.div
      className="relative w-[600px] h-[600px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-white rounded-full shadow-lg flex items-center justify-center">
        <div className="w-[400px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-gray-600 mb-2 font-poppins">My name is:</p>
            <h1 className="text-4xl font-bold text-orange-400 font-poppins mb-4">ZJcoming</h1>
            <div className="w-full h-px bg-gray-200 my-4" />
            {/* <p className="text-gray-600 mb-2 font-poppins">I&apos;m a:</p> */}
            <ul className="space-y-2">
              {/* {roles.map((role, index) => (
                <motion.li
                  key={role}
                  className="text-gray-600 font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {role}
                </motion.li>
              ))} */}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 right-4 w-4 h-4 bg-orange-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

