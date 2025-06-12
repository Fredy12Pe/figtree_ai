import Header from '@/components/sections/Header'
import Impact from '@/components/sections/Impact'
import Breakdown from '@/components/sections/Breakdown'
import AutomationExplainer from '@/components/sections/AutomationExplainer'

export default function Home() {
  return (
    <>
      <Header />
      <Impact />
      <Breakdown />
      <AutomationExplainer />
      <main className="bg-white text-black min-h-screen" />
    </>
  )
}
