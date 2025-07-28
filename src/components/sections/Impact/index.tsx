import { AItoolsCard, ClientsCard, TurnaroundCard, LogoCard, SoftwareCard } from './Sections';

export default function Impact() {
  console.log('Impact component rendering - PROPER CARD SCALING');
  
  return (
    <>
      <style jsx>{`
        .impact-mobile-layout {
          display: flex !important;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          padding: 0 16px;
        }
        .impact-tablet-layout {
          display: none !important;
        }
        .impact-desktop-layout {
          display: none !important;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .impact-mobile-layout {
            display: none !important;
          }
          .impact-tablet-layout {
            display: flex !important;
          }
          .impact-desktop-layout {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .impact-mobile-layout {
            display: none !important;
          }
          .impact-tablet-layout {
            display: none !important;
          }
          .impact-desktop-layout {
            display: flex !important;
          }
        }
        
        /* Ensure only one layout is visible */
        @media (max-width: 767px) {
          .impact-tablet-layout, .impact-desktop-layout {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>
      
      <section style={{width: '100%', position: 'relative', background: 'white', paddingTop: '120px', paddingBottom: '60px'}}>
        
        {/* Mobile Layout */}
        <div className="impact-mobile-layout">
          {/* Debug indicator */}
          <div style={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            background: 'red',
            color: 'white',
            padding: '5px',
            zIndex: 1000,
            fontSize: '12px'
          }}>
            MOBILE LAYOUT ACTIVE
          </div>
          
          <h2 
            className="text-center text-[28px] w-full mb-7"
            style={{ 
              color: 'black', 
              fontFamily: 'Inter', 
              fontWeight: 600, 
              wordWrap: 'break-word' 
            }}
          >
            Smart tools. Real impact.
          </h2>
          <AItoolsCard />
          <ClientsCard />
          <TurnaroundCard />
          <LogoCard />
          <SoftwareCard />
        </div>
        
        {/* Tablet Layout - Proper Grid */}
        <div className="impact-tablet-layout" style={{
          width: '758px',
          margin: '0 auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '28px',
          display: 'flex'
        }}>
          
          {/* Debug indicator */}
          <div style={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            background: 'blue',
            color: 'white',
            padding: '5px',
            zIndex: 1000,
            fontSize: '12px'
          }}>
            TABLET LAYOUT ACTIVE
          </div>
          
          {/* Title */}
          <div style={{
            width: '238px',
            height: '94px',
            color: 'black',
            fontSize: '38px',
            fontFamily: 'Inter',
            fontWeight: '600',
            wordWrap: 'break-word'
          }}>
            Smart tools.<br/>Real impact.
          </div>
          
          {/* Cards Container */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '17px',
            display: 'flex'
          }}>
            
            {/* Top Row - 2 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'inline-flex',
              gap: '14px'
            }}>
              <AItoolsCard className="tablet-left-card" />
              <ClientsCard className="tablet-right-card" />
            </div>
            
            {/* Bottom Row - 3 Cards */}
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '14px',
              display: 'inline-flex'
            }}>
              <TurnaroundCard className="tablet-bottom-card" />
              <LogoCard className="tablet-bottom-card" />
              <SoftwareCard className="tablet-bottom-card" />
            </div>
            
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="impact-desktop-layout" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '20px',
          padding: '0 16px'
        }}>
          
          {/* Debug indicator */}
          <div style={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            background: 'green',
            color: 'white',
            padding: '5px',
            zIndex: 1000,
            fontSize: '12px'
          }}>
            DESKTOP LAYOUT ACTIVE
          </div>
          
          <h2 
            className="text-center text-[42px] w-full mb-7"
            style={{ 
              color: 'black', 
              fontFamily: 'Inter', 
              fontWeight: 600, 
              wordWrap: 'break-word' 
            }}
          >
            Smart tools. Real impact.
          </h2>
          <AItoolsCard />
          <ClientsCard />
          <TurnaroundCard />
          <LogoCard />
          <SoftwareCard />
        </div>
        
      </section>
    </>
  )
} 