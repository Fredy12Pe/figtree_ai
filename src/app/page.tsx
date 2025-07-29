'use client';

import Header from '@/components/sections/Header'
import Impact from '@/components/sections/Impact'
import Breakdown from '@/components/sections/Breakdown'
import WhatWeAutomate from '@/components/sections/WhatWeAutomate'
import WhyAi from '@/components/sections/WhyAi'
import ScrollBanner from '@/components/sections/ScrollBanner/ScrollBanner'
import FAQ from '@/components/sections/FAQ/FAQ'
import Contact from '@/components/sections/Contact/Contact'
import Footer from '@/components/sections/Footer/Footer'

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="flex flex-col w-full">
        <Header />
        <Impact />
        <div className="relative z-10 w-full overflow-visible">
          <Breakdown />
        </div>
        <div className="relative z-0">
          <div
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'black',
              borderTopLeftRadius: '28px',
              borderTopRightRadius: '28px',
            }}
          >
            <WhatWeAutomate />
          </div>
          <div
            style={{
              width: '100%',
              backgroundColor: 'black',
              padding: '12rem 1rem',
              paddingBottom: '8rem',
            }}
          >
            <div style={{ height: '560px' }}>
              <WhyAi />
            </div>
          </div>
          <ScrollBanner />
          <div className="relative z-20">
            <FAQ />
            <Contact />
            <div style={{ height: '80px', background: 'transparent' }} />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}