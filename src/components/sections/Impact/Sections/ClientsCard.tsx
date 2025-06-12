import ImpactCard from '../ImpactCard';
 
export default function ClientsCard({ className = '' }) {
  return (
    <div 
      className={`rounded-[28px] h-[390px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102 flex flex-col ${className}`}
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), 
          url('/Assets/ImpactSections/Clients/image.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minWidth: '0',
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
          Focus On What's Really Important
        </p>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '34px',
          color: '#ffffff',
          margin: 0,
          lineHeight: 1.2
        }}>
          Connecting with<br />
          clients
        </h3>
      </div>
    </div>
  );
} 