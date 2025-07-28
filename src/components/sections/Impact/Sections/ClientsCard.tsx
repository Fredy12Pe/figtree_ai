import Image from 'next/image';

export default function ClientsCard({ className = '' }) {
  // Determine tablet sizing based on className
  const isTabletRightCard = className.includes('tablet-right-card');
  
  // Define tablet-specific styles
  const tabletCardStyle = isTabletRightCard ? {
    width: '310px',
    height: '216px',
    padding: '24px',
    borderRadius: '28px'
  } : {};
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-[28px]
        ${isTabletRightCard ? '' : 'h-[320px] w-[400px] p-[36px]'}
        lg:h-[400px] lg:w-[500px] lg:p-[48px]
        flex flex-col
        transition-transform duration-300 ease-in-out cursor-pointer
        hover:scale-[1.02]
        ${isTabletRightCard ? '' : 'm-[6px]'}
        ${className}
      `}
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%),
          url(/Assets/ImpactSections/Clients/image.png)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...tabletCardStyle
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className={isTabletRightCard ? '' : 'mb-[20px]'} style={isTabletRightCard ? {marginBottom: '16px'} : {}}>
          <p 
            className={`font-inter font-medium ${isTabletRightCard ? '' : 'text-[13px] lg:text-[15px]'} mb-[8px]`}
            style={{ 
              color: '#ffffff',
              fontSize: isTabletRightCard ? '11px' : undefined
            }}
          >
            Focus On What's Really Important
          </p>
          <h3 
            className={`font-inter font-medium ${isTabletRightCard ? '' : 'text-[26px] lg:text-[34px]'}`}
            style={{ 
              color: '#ffffff', 
              lineHeight: '1.4',
              fontSize: isTabletRightCard ? '20px' : undefined
            }}
          >
            Connecting with<br />
            clients
          </h3>
        </div>
      </div>
    </div>
  );
} 