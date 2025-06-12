import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function Impact() {
  return (
    <section className="bg-white min-h-[90vh] mx-[240px] flex flex-col">
      <div className="mt-[176px]">
        <h2 className="text-[48px] font-semibold text-black font-sans mb-[80px]">
          Smart tools. Real impact.
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-[20px] w-full max-w-[1600px] mx-auto">
          {/* Row 1 */}
          <AItoolsCard className="col-span-2 row-span-1" />
          <ClientsCard className="col-span-1 row-span-1" />
          {/* Row 2 */}
          <TurnaroundCard />
          <LogoCard />
          <SoftwareCard />
        </div>
      </div>
    </section>
  )
} 