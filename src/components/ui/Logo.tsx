import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-[0.75rem]">
        {/* Main square */}
        <div className="w-[39px] h-[39px] bg-white" />
        
        {/* Small shapes */}
        <div className="flex items-center gap-[0.137rem]">
          <div className="w-[7.94px] h-[7.94px] bg-white" />
          <div className="w-[2.19px] h-[23.13px] bg-white" />
          <div className="w-[2.19px] h-[23.13px] bg-white" />
          <div className="w-[15.87px] h-[16.88px] bg-white" />
          <div className="w-[15.87px] h-[16.88px] rotate-180 origin-top-left bg-white" />
          <div className="w-[12.66px] h-[2.19px] bg-white" />
          <div className="w-[12.66px] h-[2.19px] rotate-180 origin-top-left bg-white" />
          <div className="w-[9.29px] h-[2.36px] bg-white" />
          <div className="w-[9.29px] h-[2.36px] rotate-180 origin-top-left bg-white" />
        </div>
      </div>
      
      {/* Brand name */}
      <span className="text-[1.375rem] font-semibold text-white whitespace-nowrap font-inter">
        Vine & Branches
      </span>
    </div>
  );
};

export default Logo; 