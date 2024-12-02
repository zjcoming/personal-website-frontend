import Navbar from "@/components/navbar"
import IntroCard from "@/components/intro-card"
import Tagline from "@/components/tagline"
import DynamicBackground from "@/components/dynamic-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <DynamicBackground />
      <Navbar />
      <main className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          <IntroCard />
          <Tagline />
        </div>
      </main>
    </div>
  )
}

