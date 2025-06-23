'use client';

import { useState, useEffect } from 'react';

export default function ContactMobile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
  });

  const [viewportHeight, setViewportHeight] = useState('100vh')

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const inputStyles = "w-full text-white rounded-[16px] px-6 py-5 h-[56px] bg-[#00050D]/20 border border-[#3A3A3A]/40 placeholder:text-white/50 placeholder:text-[16px]";
  const textareaStyles = "w-full text-white rounded-[16px] px-6 py-5 min-h-[120px] bg-[#00050D]/20 border border-[#3A3A3A]/40 placeholder:text-white/50 placeholder:text-[16px] resize-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        message: '',
      });

      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="relative w-full bg-black min-h-screen mb-[60px]">
      <div className="w-full">
        {/* Top Section with Video Background */}
        <div className="relative w-full h-[400px]">
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none w-full h-full z-[1]"
            style={{ background: 'linear-gradient(180deg, #1B0B40 0%, #0E0E52 100%)' }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full text-white px-6 pt-[60px]">
            <div className="text-center">
              <div className="w-full text-center text-white text-[32px] font-inter font-[600] mb-4" style={{ color: 'white' }}>
                Book a free consultation
              </div>
              <div className="w-full text-center text-white text-[18px] font-inter font-normal max-w-[332px] mx-auto" style={{ color: 'white' }}>
                Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full bg-[#161618] px-6 py-10">
          <form onSubmit={handleSubmit} className="w-full space-y-[24px]">
            {/* First Name and Last Name row */}
            <div className="flex flex-col space-y-[24px]">
              <div>
                <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                  First Name
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className={inputStyles}
                />
              </div>

              <div>
                <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                  Last Name
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                Email
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="johndoe@gmail.com"
                className={inputStyles}
              />
            </div>

            {/* Company Name and Phone Number in separate rows for mobile */}
            <div className="space-y-[24px]">
              <div>
                <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                  Company Name
                </div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="JohnDoe Real Estate Agency"
                  className={inputStyles}
                />
              </div>

              <div>
                <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                  Phone Number
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="(343)786-8723"
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <div className="w-full text-white text-[18px] font-inter font-medium mb-[14px]">
                What would you like to automate?
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Automating CRM updates...."
                rows={4}
                className={textareaStyles}
              />
            </div>

            <button
              type="submit"
              style={{ backgroundColor: 'white', color: 'black' }}
              className="w-full h-[56px] rounded-[16px] font-semibold opacity-86 hover:opacity-100 transition-all"
            >
              Get Connected
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 