import React from 'react';

interface ImpactCardProps {
  className?: string;
}
 
export default function ImpactCard({ className = '' }: ImpactCardProps) {
  return (
    <div className={`rounded-[24px] h-[390px] bg-black ${className}`} />
  );
} 