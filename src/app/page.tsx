"use client";

import Navbar from "@/components/navbar"
import IntroCard from "@/components/intro-card"
import Tagline from "@/components/tagline"
import DynamicBackground from "@/components/dynamic-background"
import MemoryImages from "@/components/MemoryImages"
import BackgroundMusic from "@/components/BackgroundMusic"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <DynamicBackground />
      <MemoryImages />
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] relative">
          <IntroCard />
          <Tagline />
        </div>
      </main>
      <BackgroundMusic />
    </div>
  )
}

