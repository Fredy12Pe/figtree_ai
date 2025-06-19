import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function Impact() {
  return (
    <section className="bg-white min-h-[90vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex flex-col">
      <div className="mt-24 md:mt-32 lg:mt-[176px]">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-black font-sans mb-12 md:mb-16 lg:mb-[80px] text-center lg:text-left">
          Smart tools. Real impact.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1600px] mx-auto">
          {/* Items will stack on mobile, and expand to 2 and 3 columns on larger screens */}
          <AItoolsCard className="md:col-span-2 lg:col-span-2" />
          <ClientsCard className="md:col-span-1 lg:col-span-1" />
          <TurnaroundCard className="md:col-span-1 lg:col-span-1" />
          <LogoCard className="md:col-span-1 lg:col-span-1" />
          <SoftwareCard className="md:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  )
} 