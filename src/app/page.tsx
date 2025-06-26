import HeaderWrapper from '@/components/sections/HeaderWrapper'
import ImpactWrapper from '@/components/sections/Impact'
import Breakdown from '@/components/sections/Breakdown'
import AutomationExplainer from '@/components/sections/AutomationExplainer'
import VideoExplainerSection from '@/components/sections/AutomationExplainer/VideoExplainerSection'
import ScrollBanner from '@/components/sections/ScrollBanner/ScrollBanner'
import FAQ from '@/components/sections/FAQ/FAQ'
import ContactWrapper from '@/components/sections/Contact/ContactWrapper'
import Footer from '@/components/sections/Footer/Footer'

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="flex flex-col w-full">
        <HeaderWrapper />
        <ImpactWrapper />
        <div className="relative z-0 w-full overflow-visible">
          <Breakdown />
        </div>
        <AutomationExplainer />
        <VideoExplainerSection />
        <ScrollBanner />
        <FAQ />
        <ContactWrapper />
        <Footer />
      </div>
    </main>
  )
}