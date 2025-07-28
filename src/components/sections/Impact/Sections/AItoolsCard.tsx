import Image from 'next/image';

export default function AItoolsCard({ className = '' }) {
  // Determine tablet sizing based on className
  const isTabletLeftCard = className.includes('tablet-left-card');
  
  // Define base styles
  const baseCardStyle = {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 46, 122, 0.60) 100%), black'
  };
  
  // Define tablet-specific styles
  const tabletCardStyle = isTabletLeftCard ? {
    width: '434px',
    height: '216px',
    padding: '24px',
    borderRadius: '28px'
  } : {};
  
  return (
    <div 
      className={`
      relative overflow-hidden rounded-[28px]
        ${isTabletLeftCard ? '' : 'h-[400px] w-[400px] p-[36px]'}
        lg:h-[500px] lg:w-[500px] lg:p-[48px]
      flex flex-col
      transition-transform duration-300 ease-in-out cursor-pointer
      hover:scale-[1.02]
        ${isTabletLeftCard ? '' : 'm-[6px]'}
      ${className}
    `}
    style={{
        ...baseCardStyle,
        ...tabletCardStyle
      }}
    >
      
      {/* Heading Section */}
      <div className={isTabletLeftCard ? '' : 'mb-[20px]'} style={isTabletLeftCard ? {marginBottom: '16px'} : {}}>
        <p 
          className={`font-inter font-medium ${isTabletLeftCard ? '' : 'text-[13px] lg:text-[15px]'} mb-[8px]`}
          style={{ 
            color: '#ffffff',
            fontSize: isTabletLeftCard ? '11px' : undefined
          }}
        >
          Powered by Smart Automation
        </p>
        <h3 
          className={`font-inter font-medium ${isTabletLeftCard ? '' : 'text-[26px] lg:text-[34px]'}`}
          style={{ 
            color: '#ffffff', 
            lineHeight: '1.4',
            fontSize: isTabletLeftCard ? '22px' : undefined
          }}
        >
          Using the latest<br />
          AI tools
        </h3>
      </div>

      {/* Tools Grid */}
      <div className="flex flex-col" style={{gap: isTabletLeftCard ? '16px' : '24px'}}>
        {/* Top Row - 3 Tools */}
        <div className="flex" style={{gap: isTabletLeftCard ? '16px' : '20px'}}>
          {/* ChatGPT */}
          <div className="flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-2">
            <div 
              className="bg-[#0A1628] rounded-[20px] flex items-center justify-center"
              style={{
                width: isTabletLeftCard ? '60px' : '72px',
                height: isTabletLeftCard ? '60px' : '72px',
                marginBottom: isTabletLeftCard ? '6px' : '8px'
              }}
            >
              <Image
                src="/Assets/ImpactSections/Ai_tools/ChatGpt.png"
                alt="ChatGPT"
                width={isTabletLeftCard ? 60 : 72}
                height={isTabletLeftCard ? 60 : 72}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '72px',
                  height: isTabletLeftCard ? '60px' : '72px'
                }}
              />
            </div>
            <span 
              className="font-inter font-medium text-center"
              style={{ 
                color: 'rgba(255, 255, 255, 0.14)',
                fontSize: isTabletLeftCard ? '9px' : '10px'
              }}
            >
              Chat GPT
            </span>
          </div>

          {/* Lindy AI */}
          <div className="flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-2">
            <div 
              className="bg-[#0A1628] rounded-[20px] flex items-center justify-center"
              style={{
                width: isTabletLeftCard ? '60px' : '72px',
                height: isTabletLeftCard ? '60px' : '72px',
                marginBottom: isTabletLeftCard ? '6px' : '8px'
              }}
            >
              <Image
                src="/Assets/ImpactSections/Ai_tools/LindyAi.png"
                alt="Lindy AI"
                width={isTabletLeftCard ? 60 : 72}
                height={isTabletLeftCard ? 60 : 72}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '72px',
                  height: isTabletLeftCard ? '60px' : '72px'
                }}
              />
            </div>
            <span 
              className="font-inter font-medium text-center"
              style={{ 
                color: 'rgba(255, 255, 255, 0.14)',
                fontSize: isTabletLeftCard ? '9px' : '10px'
              }}
            >
              Lindy AI
            </span>
          </div>

          {/* Zapier */}
          <div className="flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-2">
            <div 
              className="bg-[#0A1628] rounded-[20px] flex items-center justify-center"
              style={{
                width: isTabletLeftCard ? '60px' : '72px',
                height: isTabletLeftCard ? '60px' : '72px',
                marginBottom: isTabletLeftCard ? '6px' : '8px'
              }}
            >
              <Image
                src="/Assets/ImpactSections/Ai_tools/Zapier.png"
                alt="Zapier"
                width={isTabletLeftCard ? 60 : 72}
                height={isTabletLeftCard ? 60 : 72}
                className="opacity-70"
                style={{
                  width: isTabletLeftCard ? '60px' : '72px',
                  height: isTabletLeftCard ? '60px' : '72px'
                }}
              />
            </div>
            <span 
              className="font-inter font-medium text-center"
              style={{ 
                color: 'rgba(255, 255, 255, 0.14)',
                fontSize: isTabletLeftCard ? '9px' : '10px'
              }}
            >
              Zapier
            </span>
          </div>
          
          {/* Google Gemini - Now in top row for tablet */}
          {isTabletLeftCard && (
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-2">
              <div 
                className="bg-[#0A1628] rounded-[20px] flex items-center justify-center"
                style={{
                  width: '60px',
                  height: '60px',
                  marginBottom: '6px'
                }}
              >
                <Image
                  src="/Assets/ImpactSections/Ai_tools/Gemini.png"
                  alt="Google Gemini"
                  width={60}
                  height={60}
                  className="opacity-70"
                  style={{
                    width: '60px',
                    height: '60px'
                  }}
                />
              </div>
              <span 
                className="font-inter font-medium text-center"
                style={{ 
                  color: '#ffffff',
                  fontSize: '9px'
                }}
              >
                Gemini
              </span>
            </div>
          )}
        </div>

        {/* Bottom Row - 1 Tool Left Aligned (only for non-tablet) */}
        {!isTabletLeftCard && (
        <div className="flex justify-start">
          {/* Google Gemini */}
          <div className="flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:-translate-y-2">
              <div 
                className="bg-[#0A1628] rounded-[20px] flex items-center justify-center mb-[8px]"
                style={{
                  width: '72px',
                  height: '72px'
                }}
              >
              <Image
                src="/Assets/ImpactSections/Ai_tools/Gemini.png"
                alt="Google Gemini"
                width={72}
                height={72}
                  className="opacity-70"
                  style={{
                    width: '72px',
                    height: '72px'
                  }}
              />
            </div>
            <span 
                className="font-inter font-medium text-center"
                style={{ 
                  color: '#ffffff',
                  fontSize: '10px'
                }}
            >
              Google Gemini
            </span>
          </div>
        </div>
        )}
      </div>
    </div>
  );
} 