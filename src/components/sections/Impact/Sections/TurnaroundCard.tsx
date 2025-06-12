"use client";
import { useRef } from 'react';
import Image from 'next/image';
import ImpactCard from '../ImpactCard';
 
export default function TurnaroundCard({ className = '' }) {
  return (
    <div 
      className={`rounded-[28px] h-[390px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102 flex flex-col ${className}`}
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), 
          url('/Assets/ImpactSections/Turnaround_time/Group 7.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '44px 40px 28px 40px'
      }}
    >
      {/* Heading Section */}
      <div style={{ marginBottom: '51px' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
          color: '#ffffff',
          marginBottom: '8px',
          margin: '0 0 8px 0'
        }}>
          Delivery timeline
        </p>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '34px',
          color: '#ffffff',
          margin: 0,
          lineHeight: 1.2
        }}>
          2-4 week<br />
          turnaround time
        </h3>
      </div>
    </div>
  );
} 