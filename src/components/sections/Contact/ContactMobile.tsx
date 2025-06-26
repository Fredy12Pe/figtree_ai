'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactMobile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    message: '',
  });

  const labelStyles = "text-white text-[14px] font-inter mb-[10px]";
  const inputStyles = "w-full h-[60px] rounded-[12px] pl-[14px] pr-6 text-white text-[14px] border border-[rgba(57.61,57.61,57.61,0.40)] bg-[rgba(0,4.86,12.96,0.20)] focus:outline-none focus:border-white/20 placeholder:text-white/50 placeholder:text-[14px] caret-white";
  const textareaStyles = "w-full min-h-[120px] rounded-[12px] pl-[14px] pr-6 pt-[10px] pb-4 text-white text-[14px] border border-[rgba(57.61,57.61,57.61,0.40)] bg-[rgba(0,4.86,12.96,0.20)] focus:outline-none focus:border-white/20 resize-none placeholder:text-white/50 placeholder:text-[14px] caret-white";
  const buttonStyles = "w-full h-[48px] p-[10px] bg-white rounded-[16px] outline outline-1 outline-white -outline-offset-1 flex justify-center items-center gap-[10px] text-black text-[14px] font-inter font-medium";

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
    <div className="min-h-screen">
      {/* Video Section */}
      <div className="w-full h-[340px] overflow-hidden rounded-t-[28px]">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.80) 100%)',
              borderTopLeftRadius: '28px',
              borderTopRightRadius: '28px'
            }}
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#000000] rounded-b-[28px]">
        <div className="px-[26px] pt-12 pb-[20px]">
          {/* Heading */}
          <div className="pt-[10px]">
            <h1 className="text-[28px] font-[600] mb-4 max-w-[338px] mx-auto text-center" style={{ color: 'white' }}>
              Book a free consultation
            </h1>
            <p className="text-[16px] mb-[48px] max-w-[338px] mx-auto text-center" style={{ color: 'white' }}>
              Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div>
              <label className={labelStyles} style={{ color: 'white', marginBottom: '10px', display: 'block' }}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
                className={inputStyles}
                style={{ color: 'white' }}
              />
            </div>

            <div>
              <label className={labelStyles} style={{ color: 'white', marginBottom: '10px', display: 'block' }}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
                className={inputStyles}
                style={{ color: 'white' }}
              />
            </div>

            <div>
              <label className={labelStyles} style={{ color: 'white', marginBottom: '10px', display: 'block' }}>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="JohnDoe Real Estate Agency"
                className={inputStyles}
                style={{ color: 'white' }}
              />
            </div>

            <div>
              <label className={labelStyles} style={{ color: 'white', marginBottom: '10px', display: 'block' }}>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="(343)786-8723"
                className={inputStyles}
                style={{ color: 'white' }}
              />
            </div>

            <div>
              <label className={labelStyles} style={{ color: 'white', marginBottom: '10px', display: 'block' }}>What would you like to Automate?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Automating CRM updates...."
                className={textareaStyles}
                style={{ color: 'white' }}
              />
            </div>

            <div className="mt-[18px] mb-[40px]">
              <button
                type="submit"
                style={{ backgroundColor: 'white', borderRadius: '16px' }}
                className="w-full h-[48px] text-black text-[14px] font-medium font-inter"
              >
                Get Connected
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* White gap */}
      <div className="h-[80px] bg-white" />
    </div>
  );
} 