import Header from '@/components/sections/Header'
import Impact from '@/components/sections/Impact'
import Breakdown from '@/components/sections/Breakdown'
import AutomationExplainer from '@/components/sections/AutomationExplainer'
import VideoExplainerSection from '@/components/sections/AutomationExplainer/VideoExplainerSection'
import ScrollBanner from '@/components/sections/ScrollBanner/ScrollBanner'
import FAQ from '@/components/sections/FAQ/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Impact />
      <Breakdown />
      <AutomationExplainer />
      <VideoExplainerSection />
      <ScrollBanner />
      <FAQ />
      <Contact />
    </main>
  )
}
