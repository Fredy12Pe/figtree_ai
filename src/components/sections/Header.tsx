"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

export default function Header() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    const handleTimeUpdate = () => {
      const currentTime = video.currentTime
      const duration = video.duration
      
      if (currentTime >= duration - 0.2) {
        video.currentTime = 0.1
      }
    }

    const handleLoadedData = () => {
      video.currentTime = 0.1
      video.play().catch(console.error)
    }

    const handleEnded = () => {
      video.currentTime = 0.1
      video.play().catch(console.error)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <>
      <header className="relative w-full h-screen overflow-hidden bg-black rounded-b-[28px] lg:rounded-b-[40px]">
        {/* Video Background - Full Width */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="/Assets/Header/Animate_this_169_202506081736.mp4"
            type="video/mp4"
          />
        </video>

        {/* Blur Filter Layer - Full Width */}
        <div 
          className="absolute inset-0 z-5 lg:rounded-b-[40px]"
          style={{ 
            width: '100%', 
            height: '100%', 
            background: 'rgba(0, 0, 0, 0.10)', 
            borderBottomRightRadius: '28px', 
            borderBottomLeftRadius: '28px',
            backdropFilter: 'blur(30px)'
          }}
        />

        {/* Gradient Overlay - Full Width */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-10" />

        {/* Content Container - Full Width */}
        <div className="relative z-20 h-full w-full">
          <style jsx>{`
            @media (min-width: 1024px) {
              .desktop-header-layout {
                display: flex !important;
              }
              .mobile-header-layout {
                display: none !important;
              }
            }
            @media (max-width: 1023px) {
              .desktop-header-layout {
                display: none !important;
              }
              .mobile-header-layout {
                display: flex !important;
              }
            }
          `}</style>
          {/* Mobile/Tablet Layout */}
          <div className="mobile-header-layout h-full flex flex-col">

            {/* Navigation Group - Positioned 60px from top */}
            <div className="w-full pt-[60px]">
              <nav className="mx-[28px]">
                <div className="flex justify-between items-center w-full">
                  <Link href="/" className="flex items-center gap-[12px]">
                    <Image
                      src="/Assets/Header/Logo.png"
                      alt="Vine & Branches Logo"
                      width={39}
                      height={39}
                      className="w-[39px] h-[39px]"
                      priority
                    />
                    <span className="text-white font-inter font-semibold text-[22px] leading-none" style={{ color: 'white' }}>
                      Vine & Branches
                    </span>
                  </Link>

                  <div className="flex items-center" style={{ gap: '32px' }}>
                    <button 
                      className="xl:hidden p-3 z-30 bg-white/20 rounded-lg border border-white/40"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div className="w-[20px] h-[14px] flex flex-col justify-between">
                        <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: 'white' }}></div>
                        <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: 'white' }}></div>
                        <div className="w-full h-[2px] rounded-full" style={{ backgroundColor: 'white' }}></div>
                      </div>
                    </button>


                  </div>
                </div>
              </nav>
            </div>

            {/* Hero Content - Centered Layout */}
            <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-4">
              <div className="max-w-[328px] md:max-w-[410px] w-full">
                <div className="mb-[80px] md:mb-[40px]">
                    <h1 className="mb-[24px]" style={{ color: 'white', fontSize: '48px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                    <span className="text-[48px] md:text-[60px]">Automate the<br />routine with AI</span>
                    </h1>
                  <p className="text-lg md:text-[18px]" style={{ color: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '1.8', wordWrap: 'break-word' }}>
                    AI automation for real estate agents and solo-preneurs to save time, capture leads, and close more deals without the burnout.
                  </p>
                </div>
                
                <Link
                  href="#contact"
                  className="w-full md:w-[396px] h-[56px] inline-flex justify-center items-center gap-[10px] transition-all duration-300 hover:opacity-90"
                  style={{ 
                    padding: '10px', 
                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.10)', 
                    borderRadius: '28px', 
                    outline: '1px white solid', 
                    outlineOffset: '-1px' 
                  }}
                >
                  <div className="text-white text-base font-medium" style={{ color: 'white' }}>
                    Book a Free Consultation
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="desktop-header-layout h-full w-full justify-center">

            {/* 1440px Content Container */}
            <div className="w-full max-w-[1440px] h-full flex flex-col">
              {/* Navigation - Top of 1440px container */}
              <div className="flex justify-between items-center w-full pt-[80px]">
                <Link href="/" className="flex items-center" style={{ gap: '12px' }}>
                  <Image
                    src="/Assets/Header/Logo.png"
                    alt="Vine & Branches Logo"
                    width={39}
                    height={39}
                    className="w-[39px] h-[39px]"
                    priority
                  />
                  <span className="text-white text-[22px] font-semibold font-inter" style={{ color: 'white' }}>
                    Vine & Branches
                  </span>
                </Link>

                <div className="flex items-center" style={{ gap: '32px' }}>
                  <Link href="#" className="text-white font-medium font-inter" style={{ color: 'white', fontSize: '16px' }}>
                    AI Toolkit
                  </Link>
                  <Link href="#" className="text-white font-medium font-inter" style={{ color: 'white', fontSize: '16px' }}>
                    How It Works
                  </Link>
                  <Link href="#" className="text-white font-medium font-inter" style={{ color: 'white', fontSize: '16px' }}>
                    Pricing
                  </Link>
                  <Link href="#" className="text-white font-medium font-inter" style={{ color: 'white', fontSize: '16px' }}>
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-white font-medium font-inter transition-all duration-300"
                    style={{ 
                      color: 'white',
                      fontSize: '16px',
                      width: '146px',
                      height: '49px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'transparent',
                      border: '1px solid white',
                      borderRadius: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>

              {/* Hero Content - Centered in remaining space */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <div className="flex flex-col items-start gap-10" style={{ width: '502px' }}>
                  <div className="flex flex-col items-start gap-5">
                    <h1 className="text-white font-normal font-inter leading-tight" style={{ width: '100%', color: 'white', fontSize: 72, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginBottom: '8px' }}>
                      Automate the<br/>routine with AI
                    </h1>
                    <p className="text-white font-normal font-inter leading-relaxed" style={{ color: 'white', textAlign: 'left', fontSize: '18px', marginBottom: '40px', lineHeight: '1.4' }}>
                      AI automation for real estate agents and solo-preneurs to<br/>
                      save time, capture leads, and close more deals<br/>
                      without the burnout.
                    </p>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex justify-center items-center text-white font-medium font-inter border border-white rounded-full hover:opacity-90 transition-opacity"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.10)',
                      color: 'white',
                      width: '284px',
                      height: '56px',
                      fontSize: '16px'
                    }}
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <div className="flex justify-between items-center mb-8 sm:mb-12">
              <Link href="/" className="flex items-center gap-[12px]">
                <Image
                  src="/Assets/Header/Logo.png"
                  alt="Vine & Branches Logo"
                  width={39}
                  height={39}
                  className="w-[39px] h-[39px]"
                />
                <span className="text-white text-[22px] font-semibold font-inter">
                  Vine & Branches
                </span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 sm:space-y-8 text-center text-white flex-1 justify-center">
              <Link
                href="#"
                className="text-lg sm:text-xl font-medium text-white py-2 sm:py-3 font-inter hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Toolkit
              </Link>
              <Link
                href="#"
                className="text-lg sm:text-xl font-medium text-white py-2 sm:py-3 font-inter hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="text-lg sm:text-xl font-medium text-white py-2 sm:py-3 font-inter hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-lg sm:text-xl font-medium text-white py-2 sm:py-3 font-inter hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-base sm:text-lg font-medium border border-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-center text-white mt-4 sm:mt-6 font-inter hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 