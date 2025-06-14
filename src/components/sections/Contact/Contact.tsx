'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission logic
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-8 py-20">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-snug">
              Book a Free Consultation
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-lg">
              Let us explore how AI-powered automation can save you time, reduce busywork, and scale your business.
            </p>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white text-2xl flex items-center justify-center font-bold">
                FT
              </div>
              <div>
                <p className="font-semibold text-black">Fredy P.</p>
                <p className="text-sm text-gray-500">AI Automation Specialist</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-10 space-y-6">
              <div>
                <label className="text-sm text-gray-600 mb-1 uppercase tracking-wide block">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-[#f9fafb] border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 uppercase tracking-wide block">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full bg-[#f9fafb] border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 uppercase tracking-wide block">
                  Email <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full bg-[#f9fafb] border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 uppercase tracking-wide block">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full bg-[#f9fafb] border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 uppercase tracking-wide block">
                  What would you like to automate?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your automation needs"
                  className="w-full bg-[#f9fafb] border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 rounded border border-gray-300 bg-[#f9fafb] accent-purple-500 mt-1"
                />
                <label className="text-sm text-gray-500">
                  I agree that my personal data will be processed in accordance with the privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}