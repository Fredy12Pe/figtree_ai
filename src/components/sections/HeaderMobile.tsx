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
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-full min-h-screen z-[9999] transition-all duration-300 text-white ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ 
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(13, 25, 255, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div className="relative w-full h-full flex flex-col text-white" style={{ padding: '28px' }}>
          {/* Menu Header */}
          <div className="w-full flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center" style={{ gap: '16px' }}>
              <Image
                src="/Assets/Header/Logo.png"
                alt="Vine & Branches Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-[24px] font-semibold leading-none text-white">
                Vine & Branches
              </span>
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col items-center justify-center -mt-16">
            <div className="flex flex-col items-center space-y-10 text-white">
              <Link 
                href="#" 
                className="text-[32px] font-medium text-white hover:text-opacity-80 transition-colors" 
                onClick={() => setIsMenuOpen(false)}
                style={{ color: 'white' }}
              >
                AI Toolkit
              </Link>
              <Link 
                href="#" 
                className="text-[32px] font-medium text-white hover:text-opacity-80 transition-colors" 
                onClick={() => setIsMenuOpen(false)}
                style={{ color: 'white' }}
              >
                How It Works
              </Link>
              <Link 
                href="#" 
                className="text-[32px] font-medium text-white hover:text-opacity-80 transition-colors" 
                onClick={() => setIsMenuOpen(false)}
                style={{ color: 'white' }}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="text-[32px] font-medium text-white hover:text-opacity-80 transition-colors" 
                onClick={() => setIsMenuOpen(false)}
                style={{ color: 'white' }}
              >
                About
              </Link>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="w-full flex justify-center pb-8">
            <Link 
              href="#" 
              className="text-[24px] font-medium border-2 border-white text-white rounded-full w-full max-w-[280px] h-[64px] flex items-center justify-center transition-colors hover:bg-white hover:text-[#0916FF]"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: 'white' }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

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
        <div className="relative z-20 h-full" style={{ padding: '28px', color: '#fff' }}>
          {/* Navigation */}
          <nav className="w-full flex items-center justify-between" style={{ padding: '28px 0' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center" style={{ gap: '16px' }}>
              <Image
                src="/Assets/Header/Logo.png"
                alt="Vine & Branches Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-[24px] font-semibold leading-none">
                Vine & Branches
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              style={{ padding: '8px' }}
            >
              {!isMenuOpen && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </nav>

          {/* Hero Content */}
          <div style={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '160px'
          }}>
            <div style={{ 
              textAlign: 'center',
              maxWidth: '332px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <h1 className="font-normal text-[50px] leading-[1.1] tracking-[-0.02em]">
                Automate the routine with AI
              </h1>
              <p className="text-[18px]">
                AI automation for real estate agents and solo-preneurs to save time, capture leads, and close more deals without the burnout.
              </p>
              <div style={{ height: '80px' }}></div>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center gap-[10px] w-full h-[64px] text-[16px] font-medium rounded-full bg-[rgba(13,25,255,0.19)] border border-white transition hover:bg-[#0916FF]"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 