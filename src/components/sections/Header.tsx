"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handleEnded = () => {
      video.currentTime = 0.01
      video.play()
    }
    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <header className="relative w-full h-screen overflow-hidden rounded-b-[56px]">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/Assets/Header/Animate_this_169_202506081736.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blur Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{
          background: 'rgba(0,0,0,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      />

      {/* Constrained Content */}
      <div className="relative z-20 h-full flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 pt-12" style={{ color: '#fff' }}>
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" style={{ gap: '12px' }}>
            <Image
              src="/Assets/Header/Logo.png"
              alt="Vine & Branches Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-lg md:text-[22px] font-semibold leading-none">
              Vine & Branches
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-[30px]">
            <Link href="#" className="text-[16px] font-medium text-white">AI Toolkit</Link>
            <Link href="#" className="text-[16px] font-medium text-white">How It Works</Link>
            <Link href="#" className="text-[16px] font-medium text-white">Pricing</Link>
            <Link href="#" className="text-[16px] font-medium text-white">About</Link>
            <Link 
              href="#" 
              className="text-[16px] font-medium border border-white rounded-[8px] w-[146px] h-[49px] flex items-center justify-center transition hover:bg-[#0916FF] text-white"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-black bg-opacity-50 backdrop-blur-lg flex flex-col items-center space-y-4 py-8 md:hidden">
            <Link href="#" className="text-lg font-medium text-white">AI Toolkit</Link>
            <Link href="#" className="text-lg font-medium text-white">How It Works</Link>
            <Link href="#" className="text-lg font-medium text-white">Pricing</Link>
            <Link href="#" className="text-lg font-medium text-white">About</Link>
            <Link 
              href="#" 
              className="text-lg font-medium border border-white rounded-lg px-6 py-2 flex items-center justify-center transition hover:bg-[#0916FF] text-white"
            >
              Get In Touch
            </Link>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center pb-[60px] text-center md:text-left">
          <div className="max-w-full md:max-w-[720px] mt-[60px] mx-auto md:mx-0">
            <div className="flex flex-col space-y-[18px]">
              <h1 className="font-normal text-5xl md:text-6xl lg:text-[73px] leading-[1.1] tracking-[-0.02em]">
                Automate the <br className="hidden md:block" /> routine with AI
              </h1>
              <p className="text-base md:text-lg lg:text-[18px] max-w-md md:max-w-[520px] mx-auto md:mx-0">
                AI automation for real estate agents and solo-preneurs to save time, capture leads, and close more deals without the burnout.
              </p>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center gap-[10px] w-full max-w-xs sm:w-[284px] h-[56px] text-white text-[16px] font-medium rounded-full bg-[rgba(13,25,255,0.19)] border border-white transition mt-[40px] hover:bg-[#0916FF]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 