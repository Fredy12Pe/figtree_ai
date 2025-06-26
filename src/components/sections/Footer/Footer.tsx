import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-sm h-[80px] flex items-center justify-center rounded-t-[28px]" style={{ backgroundColor: 'black' }}>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
        style={{ color: 'rgba(255, 255, 255, 0.4)'}}
      >
        {/* Copyright */}
        <div className="text-center">
          <p>&copy; 2025 FigTree AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 