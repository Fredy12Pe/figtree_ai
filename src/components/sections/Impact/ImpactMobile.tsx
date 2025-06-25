"use client";
import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function ImpactMobile() {
  return (
    <section className="bg-white w-full px-[16px] py-[80px]">
      <h2 className="text-[28px] text-black font-inter font-[600] break-words mb-[40px] text-center">
        Smart tools. Real impact.
      </h2>
      <div className="flex flex-col gap-[20px] w-full">
        <div className="w-full">
          <AItoolsCard className="w-full" />
        </div>
        <div className="w-full">
          <ClientsCard className="w-full" />
        </div>
        <div className="w-full">
          <TurnaroundCard className="w-full" />
        </div>
        <div className="w-full">
          <LogoCard className="w-full" />
        </div>
        <div className="w-full">
          <SoftwareCard className="w-full" />
        </div>
      </div>
    </section>
  );
} 