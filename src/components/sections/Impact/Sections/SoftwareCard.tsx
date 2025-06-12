"use client";
import Image from 'next/image';
import ImpactCard from '../ImpactCard';
 
export default function SoftwareCard({ className = '' }) {
  return (
    <div 
      className={`rounded-[28px] h-[390px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102 flex flex-col overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), black',
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
          Seamless Integration
        </p>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '34px',
          color: '#ffffff',
          margin: 0,
          lineHeight: 1.2
        }}>
          Connect with your<br />
          favorite tools
        </h3>
      </div>

      {/* Software Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, max-content)',
        gap: '10px',
        justifyContent: 'start'
      }}>
        {/* Gmail */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            backgroundColor: '#0A1628',
            borderRadius: '16px',
            width: '112px',
            height: '112px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Gmail.png"
              alt="Gmail"
              width={112}
              height={112}
              style={{ opacity: 1 }}
            />
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#ffffff',
            textAlign: 'center',
            margin: 0
          }}>
            Gmail
          </p>
        </div>

        {/* Notion */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            backgroundColor: '#0A1628',
            borderRadius: '16px',
            width: '112px',
            height: '112px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Notion.png"
              alt="Notion"
              width={112}
              height={112}
              style={{ opacity: 1 }}
            />
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#ffffff',
            textAlign: 'center',
            margin: 0
          }}>
            Notion
          </p>
        </div>

        {/* Salesforce */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            backgroundColor: '#0A1628',
            borderRadius: '16px',
            width: '112px',
            height: '112px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <Image
              src="/Assets/ImpactSections/Software_connections/SalesForce.png"
              alt="Salesforce"
              width={112}
              height={112}
              style={{ opacity: 1 }}
            />
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#ffffff',
            textAlign: 'center',
            margin: 0
          }}>
            Salesforce
          </p>
        </div>

        {/* Zapier */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            backgroundColor: '#0A1628',
            borderRadius: '16px',
            width: '112px',
            height: '112px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <Image
              src="/Assets/ImpactSections/Software_connections/Zapier.png"
              alt="Zapier"
              width={112}
              height={112}
              style={{ opacity: 1 }}
            />
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#ffffff',
            textAlign: 'center',
            margin: 0
          }}>
            Zapier
          </p>
        </div>
      </div>
    </div>
  );
} 