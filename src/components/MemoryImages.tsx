'use client';

import { motion } from 'framer-motion';

const images = [
  { src: '/assets/p1.jpg', alt: 'Memory 1', width: 150, height: 150 },
  { src: '/assets/p2.jpg', alt: 'Memory 2', width: 200, height: 150 },
  { src: '/assets/p3.jpg', alt: 'Memory 3', width: 180, height: 180 },
  { src: '/assets/p4.jpg', alt: 'Memory 4', width: 160, height: 160 },
  { src: '/assets/p5.jpg', alt: 'Memory 5', width: 220, height: 140 },
  { src: '/assets/p6.jpg', alt: 'Memory 6', width: 200, height: 200 },
  { src: '/assets/p7.jpg', alt: 'Memory 7', width: 190, height: 190 },
  { src: '/assets/p8.jpg', alt: 'Memory 8', width: 210, height: 160 },
];

export default function MemoryImages() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {images.map((img, index) => (
        <motion.div
          key={img.src}
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
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="rounded-md shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
}
