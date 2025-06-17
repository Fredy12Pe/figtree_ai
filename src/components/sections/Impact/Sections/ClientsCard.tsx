import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientsCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      className={`rounded-[28px] h-[390px] w-full relative overflow-hidden ${className}`}
    >
      <Image
        src="/Assets/ImpactSections/Clients/image.png"
        alt="Clients shaking hands"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 74, 173, 0.7) 0%, rgba(0, 46, 122, 0.9) 100%)',
        }}
      ></div>
      {/* All text content has been removed from here */}
    </motion.div>
  );
};

export default ClientsCard; 