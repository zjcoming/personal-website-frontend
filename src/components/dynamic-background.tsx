"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Image {
  name: string;
  url: string;
}

export default function MemoryImages() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {images.map((img, index) => (
        <motion.div
          key={img.name}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <img
            src={img.url}
            alt={`Memory ${index + 1}`}
            className="rounded-md shadow-lg"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </motion.div>
      ))}
    </div>
  )
}

