'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log(formData);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="bg-[#18192A] rounded-[16px] shadow-2xl w-[1440px] h-[833px] mx-auto grid grid-cols-2 overflow-hidden"
        style={{ color: 'white' }}>
        {/* Left Column with Video Background */}
        <div className="relative w-full h-full">
          {/* Video and overlay as background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              className="w-full h-full object-cover"
              src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          {/* Info Content */}
          <div className="absolute top-[69px] left-1/2 -translate-x-1/2 z-10 w-[400px] text-center">
            <div className="w-full">
              <div
                className="w-full text-center text-white mb-3 whitespace-nowrap overflow-visible"
                style={{ fontSize: '36px', fontFamily: 'Inter', fontWeight: 600, wordWrap: 'break-word' }}
              >
                Book a free consultation
              </div>
              <div
                className="w-full text-center text-white"
                style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}
              >
                Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
              </div>
            </div>
          </div>
        </div>
        {/* Form Column */}
        <div className="flex flex-col justify-center h-full w-full p-16"
          style={{ color: 'white', paddingLeft: '50px', paddingRight: '50px', backgroundColor: '#161618' }}>
          <form onSubmit={handleSubmit} className="w-full space-y-[38px]">
            <div className="grid grid-cols-2" style={{gap: '16px'}}>
              <div>
                <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                  First Name <span className="text-pink-400">*</span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className="w-full pr-4 py-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', height: '60px', borderRadius: '16px', paddingLeft: '24px' }}
                />
              </div>
              <div>
                <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                  Last Name
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full pr-4 py-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', height: '60px', borderRadius: '16px', paddingLeft: '24px' }}
                />
              </div>
            </div>
            <div>
              <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                Email <span className="text-pink-400">*</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="w-full pr-4 py-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', height: '60px', borderRadius: '16px', paddingLeft: '24px' }}
              />
            </div>
            <div className="grid grid-cols-2" style={{gap: '16px'}}>
              <div>
                <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                  Company Name
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full pr-4 py-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', height: '60px', borderRadius: '16px', paddingLeft: '24px' }}
                />
              </div>
              <div>
                <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                  Phone Number
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full pr-4 py-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', height: '60px', borderRadius: '16px', paddingLeft: '24px' }}
                />
              </div>
            </div>
            <div>
              <div className="mb-[14px]" style={{ width: '100%', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
                What would you like to automate?
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your automation needs"
                className="w-full pr-4 pb-3 rounded-xl border border-gray-700 bg-[#23243a] placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                style={{ color: 'white', background: 'rgba(0, 4.86, 12.96, 0.20)', border: '1px rgba(57.61, 57.61, 57.61, 0.40) solid', borderRadius: '16px', paddingLeft: '24px', paddingTop: '20px' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold hover:opacity-90 transition mt-4"
              style={{ backgroundColor: 'white', color: 'black', height: '64px', borderRadius: '16px' }}
            >
              Get Connected
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 