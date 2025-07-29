'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle')
  const [responseMessage, setResponseMessage] = useState('')
  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      email: '',
    }
    let isValid = true

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error')
      setResponseMessage('Please fix the errors before submitting.')
      return
    }

    setStatus('submitting')
    setResponseMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setResponseMessage(data.message || 'Form submitted successfully!')
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        })
        setErrors({ firstName: '', email: '' })
      } else {
        setStatus('error')
        setResponseMessage(data.message || 'An error occurred.')
      }
    } catch (error) {
      setStatus('error')
      setResponseMessage('An unexpected error occurred.')
    }
  };

  return (
    <>
      <style jsx>{`
        .contact-mobile-layout {
          display: block;
        }
        .contact-tablet-layout {
          display: none;
        }
        .contact-desktop-layout {
          display: none;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-mobile-layout {
            display: none !important;
          }
          .contact-tablet-layout {
            display: block !important;
          }
          .contact-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .contact-mobile-layout {
            display: none !important;
          }
          .contact-tablet-layout {
            display: none !important;
          }
          .contact-desktop-layout {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Layout - Keep vertical for mobile */}
      <section className="contact-mobile-layout w-full bg-black">
        {/* Video Header */}
        <div className="relative w-full h-[450px] lg:h-[520px] rounded-t-[28px] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-inter mb-4">
                Book a free consultation
              </h2>
              <p className="text-white text-lg sm:text-xl font-inter font-normal max-w-2xl mx-auto">
                Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{width: '100%', background: 'black', padding: '2rem 0', borderBottomLeftRadius: 28, borderBottomRightRadius: 28}}>
          <div style={{width: '100%', height: '100%', background: 'black', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '46px', display: 'flex'}}>
              <div style={{width: 338, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Book a free consultation</div>
                  <div style={{alignSelf: 'center', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', maxWidth: '420px'}}>Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.</div>
              </div>
              <form onSubmit={handleSubmit} style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 18, display: 'flex'}}>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>First Name</label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 56, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', paddingLeft: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                      {errors.firstName && <p style={{color: 'red', fontSize: 12}}>{errors.firstName}</p>}
                  </div>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Last Name</label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 56, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', paddingLeft: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                  </div>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Company Name</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="JohnDoe Real Estate Agency"
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 56, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', paddingLeft: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                  </div>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 56, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', paddingLeft: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                       {errors.email && <p style={{color: 'red', fontSize: 12}}>{errors.email}</p>}
                  </div>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(343)786-8723"
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 56, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', paddingLeft: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                  </div>
                  <div style={{width: 378, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                      <label style={{alignSelf: 'stretch', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>What would you like to Automate?</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Automating CRM updates...."
                        className="placeholder:text-white/10"
                        style={{width: 378, height: 120, background: 'rgba(0, 4.86, 12.96, 0.20)', borderRadius: 12, border: '1px solid rgba(58, 58, 58, 0.52)', padding: '1rem', color: 'rgba(255, 255, 255, 0.8)'}}
                      />
                  </div>
                  <button
                      type="submit"
                      disabled={status === 'submitting'}
                      style={{width: 378, height: 56, padding: 10, background: 'white', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', border: 'none', cursor: 'pointer'}}
                  >
                      <div style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>
                        {status === 'submitting' ? 'Submitting...' : 'Get Connected'}
                      </div>
                  </button>
                  {responseMessage && (
                    <p
                      style={{
                        color: status === 'success' ? 'green' : 'red',
                        fontSize: 14,
                        marginTop: 10,
                      }}
                    >
                      {responseMessage}
                    </p>
                  )}
              </form>
          </div>
        </div>
      </section>

      {/* Tablet Layout - Vertical */}
      <section className="contact-tablet-layout w-full bg-black">
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Video Header */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-t-[28px]">
            <video
              className="w-full h-full object-cover"
              src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div>
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-inter mb-4">
                  Book a free consultation
                </h2>
                <p className="text-white text-lg sm:text-xl font-inter font-normal max-w-2xl mx-auto">
                  Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            width: '100%',
            background: 'black',
            padding: '3rem 0',
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
            marginTop: '-1px'
          }}>
            <div style={{
              width: '100%',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3rem'
            }}>
              <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                <div style={{
                  textAlign: 'left',
                  marginBottom: '2rem',
                  width: '100%'
                }}>
                  <h2 style={{
                    color: 'white',
                    fontSize: '28px',
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    marginBottom: '16px',
                    textAlign: 'left'
                  }}>
                    Book a free consultation
                  </h2>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontSize: '16px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    textAlign: 'left',
                    maxWidth: '500px',
                    margin: '0'
                  }}>
                    Let us show you how AI-powered automation can save you time, reduce busywork, and scale your business.
                  </p>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="placeholder:text-white/10"
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 1rem',
                        background: 'rgba(0, 4.86, 12.96, 0.20)',
                        borderRadius: '12px',
                        border: '1px solid rgba(58, 58, 58, 0.52)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px'
                      }}
                    />
                    {errors.firstName && <p style={{color: 'red', fontSize: '12px'}}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="placeholder:text-white/10"
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 1rem',
                        background: 'rgba(0, 4.86, 12.96, 0.20)',
                        borderRadius: '12px',
                        border: '1px solid rgba(58, 58, 58, 0.52)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    className="placeholder:text-white/10"
                    style={{
                      width: '100%',
                      height: '56px',
                      padding: '0 1rem',
                      background: 'rgba(0, 4.86, 12.96, 0.20)',
                      borderRadius: '12px',
                      border: '1px solid rgba(58, 58, 58, 0.52)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '16px'
                    }}
                  />
                  {errors.email && <p style={{color: 'red', fontSize: '12px'}}>{errors.email}</p>}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>Company Name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="JohnDoe Real Estate Agency"
                      className="placeholder:text-white/10"
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 1rem',
                        background: 'rgba(0, 4.86, 12.96, 0.20)',
                        borderRadius: '12px',
                        border: '1px solid rgba(58, 58, 58, 0.52)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(343)786-8723"
                      className="placeholder:text-white/10"
                      style={{
                        width: '100%',
                        height: '56px',
                        padding: '0 1rem',
                        background: 'rgba(0, 4.86, 12.96, 0.20)',
                        borderRadius: '12px',
                        border: '1px solid rgba(58, 58, 58, 0.52)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '0.75rem', display: 'block'}}>What would you like to automate?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Automating CRM updates...."
                    className="placeholder:text-white/10"
                    style={{
                      width: '100%',
                      height: '120px',
                      padding: '1rem',
                      background: 'rgba(0, 4.86, 12.96, 0.20)',
                      borderRadius: '12px',
                      border: '1px solid rgba(58, 58, 58, 0.52)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '16px',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    height: '56px',
                    background: 'white',
                    borderRadius: '12px',
                    color: 'black',
                    fontSize: '16px',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '1.5rem'
                  }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Get Connected'}
                </button>

                {responseMessage && (
                  <p
                    style={{
                      color: status === 'success' ? 'green' : 'red',
                      fontSize: '14px',
                      marginTop: '10px',
                      textAlign: 'center'
                    }}
                  >
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout - Horizontal */}
      <section className="contact-desktop-layout w-full bg-black">
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          height: '80vh',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '40px',
          overflow: 'hidden'
        }}>
          {/* Video Left Side */}
          <div style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            borderTopLeftRadius: '28px'
          }}>
            <video
              className="w-full h-full object-cover"
              src="/Assets/ImpactSections/Video_highlight/In_a_dark_202505221920.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%)',
              zIndex: 1
            }} />
            
            {/* Text overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              zIndex: 2,
              paddingTop: '68px'
            }}>
              <div style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '34px',
                fontFamily: 'Inter',
                fontWeight: '600',
                marginBottom: '6px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                whiteSpace: 'nowrap'
              }}>
                Book a free consultation
              </div>
              <div style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '400',
                maxWidth: '500px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                lineHeight: '1.4'
              }}>
                Let us show you how AI-powered automation<br/>
                can save you time, reduce busywork, and<br/>
                scale your business.
              </div>
            </div>
          </div>

          {/* Form Right Side */}
          <div style={{
            flex: 1,
            background: 'black',
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{width: '100%', maxWidth: 600, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex'}}>
              <form onSubmit={handleSubmit} style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 34, display: 'flex'}}>
                {/* First Name + Last Name Row */}
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                  <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                    <label style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="placeholder:text-white/5"
                      style={{
                        alignSelf: 'stretch', 
                        height: 65, 
                        paddingTop: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 16, 
                        paddingRight: 16, 
                        background: 'rgba(0, 4.86, 12.96, 0.20)', 
                        borderRadius: 16, 
                        outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                        outlineOffset: '-1px',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: '400'
                      }}
                    />
                    {errors.firstName && <p style={{color: 'red', fontSize: 12}}>{errors.firstName}</p>}
                  </div>
                  <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                    <label style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="placeholder:text-white/5"
                      style={{
                        alignSelf: 'stretch', 
                        height: 65, 
                        paddingTop: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 16, 
                        paddingRight: 16, 
                        background: 'rgba(0, 4.86, 12.96, 0.20)', 
                        borderRadius: 16, 
                        outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                        outlineOffset: '-1px',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: '400'
                      }}
                    />
                  </div>
                </div>

                {/* Email Row */}
                <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
                  <label style={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Johndoe@gmail.com"
                    className="placeholder:text-white/5"
                    style={{
                      alignSelf: 'stretch', 
                      height: 65, 
                      paddingTop: 10, 
                      paddingBottom: 10, 
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      background: 'rgba(0, 4.86, 12.96, 0.20)', 
                      borderRadius: 16, 
                      outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                      outlineOffset: '-1px',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: 16,
                      fontFamily: 'Inter',
                      fontWeight: '400'
                    }}
                  />
                  {errors.email && <p style={{color: 'red', fontSize: 12}}>{errors.email}</p>}
                </div>

                {/* Company Name + Phone Number Row */}
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                  <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                    <label style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Company Name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="JohnDoe Real Estate Agency"
                      className="placeholder:text-white/5"
                      style={{
                        alignSelf: 'stretch', 
                        height: 65, 
                        paddingTop: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 16, 
                        paddingRight: 16, 
                        background: 'rgba(0, 4.86, 12.96, 0.20)', 
                        borderRadius: 16, 
                        outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                        outlineOffset: '-1px',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: '400'
                      }}
                    />
                  </div>
                  <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                    <label style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(343)786-8723"
                      className="placeholder:text-white/5"
                      style={{
                        alignSelf: 'stretch', 
                        height: 65, 
                        paddingTop: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 16, 
                        paddingRight: 16, 
                        background: 'rgba(0, 4.86, 12.96, 0.20)', 
                        borderRadius: 16, 
                        outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                        outlineOffset: '-1px',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 16,
                        fontFamily: 'Inter',
                        fontWeight: '400'
                      }}
                    />
                  </div>
                </div>

                {/* Message/Textarea Row */}
                <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'flex'}}>
                  <label style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>What would you like to automate?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Automating CRM updates...."
                    className="placeholder:text-white/5"
                    style={{
                      alignSelf: 'stretch', 
                      height: 120, 
                      paddingTop: 24, 
                      paddingBottom: 10, 
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      background: 'rgba(0, 4.86, 12.96, 0.20)', 
                      borderRadius: 16, 
                      outline: '1px rgba(57.61, 57.61, 57.61, 0.56) solid', 
                      outlineOffset: '-1px',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: 16,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    alignSelf: 'stretch', 
                    height: 65, 
                    padding: 16, 
                    background: 'linear-gradient(0deg, white 0%, white 100%)', 
                    borderRadius: 20, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 10, 
                    display: 'inline-flex',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                    {status === 'submitting' ? 'Submitting...' : 'Get Connected'}
                  </div>
                </button>

                {responseMessage && (
                  <p
                    style={{
                      color: status === 'success' ? 'green' : 'red',
                      fontSize: 16,
                      marginTop: 10,
                    }}
                  >
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 