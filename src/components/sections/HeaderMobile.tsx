"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

export default function HeaderMobile() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [viewportHeight, setViewportHeight] = useState('100vh')

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

  // Handle mobile viewport height
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <header className="relative w-full overflow-hidden rounded-b-[24px]" style={{ height: viewportHeight }}>
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
      <div className="relative z-20 h-full flex flex-col px-6 pt-6" style={{ color: '#fff' }}>
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" style={{ gap: '12px' }}>
            <Image
              src="/Assets/Header/Logo.png"
              alt="Vine & Branches Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-[18px] font-semibold leading-none">
              Vine & Branches
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center"
              style={{ height: viewportHeight }}
            >
              <button 
                className="absolute top-6 right-6 p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-8">
                <Link href="#" className="text-[24px] font-medium text-white" onClick={() => setIsMenuOpen(false)}>AI Toolkit</Link>
                <Link href="#" className="text-[24px] font-medium text-white" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
                <Link href="#" className="text-[24px] font-medium text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <Link href="#" className="text-[24px] font-medium text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link 
                  href="#" 
                  className="text-[24px] font-medium border border-white rounded-[8px] w-[200px] h-[56px] flex items-center justify-center transition hover:bg-[#0916FF] text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center pb-8">
          <div className="mt-8">
            <div className="flex flex-col space-y-4">
              <h1 className="font-normal text-[48px] leading-[1.1] tracking-[-0.02em] text-left">
                Automate the routine with AI
              </h1>
              <p className="text-[16px] text-left">
                AI automation for real estate agents and solo-preneurs to save time, capture leads, and close more deals without the burnout.
              </p>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center gap-[10px] w-full h-[56px] text-white text-[16px] font-medium rounded-full bg-[rgba(13,25,255,0.19)] border border-white transition mt-8 hover:bg-[#0916FF]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 