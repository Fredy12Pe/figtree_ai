import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function Impact() {
  return (
    <section className="bg-white h-screen px-[240px] flex flex-col justify-center">
      <div>
        <h2 className="text-[48px] font-semibold text-black font-sans mb-[80px]">
          Smart tools. Real impact.
        </h2>
        <div className="flex flex-col gap-[20px] w-full max-w-[1600px] mx-auto">
          {/* First Row */}
          <div className="grid gap-[20px]" style={{ gridTemplateColumns: '831px 1fr' }}>
            <AItoolsCard />
            <ClientsCard />
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-3 gap-[20px]">
            <TurnaroundCard />
            <LogoCard />
            <SoftwareCard />
          </div>
        </div>
      </div>
    </section>
  )
} 