import React from 'react';

const floatingItems = [
  {
    name: 'Netflix',
    cat: 'Streaming',
    bg: '#E50914',
    logo: 'https://cdn.worldvectorlogo.com/logos/netflix-4.svg',
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'Prime Video',
    cat: 'Streaming',
    bg: '#00A8E0',
    logo: 'https://cdn.worldvectorlogo.com/logos/amazon-prime-video.svg',
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'Spotify',
    cat: 'Music',
    bg: '#1DB954',
    logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg',
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'ChatGPT Plus',
    cat: 'AI Tool',
    bg: '#10A37F',
    logo: 'https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg',
    logoFilter: 'brightness(0) invert(1)',
  },
  {
    name: 'Canva Pro',
    cat: 'Design',
    bg: '#7D2AE7',
    logo: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg',
    logoFilter: 'brightness(0) invert(1)',
  },
];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 5% 80px',
    }}>

      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,165,0,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 20%, rgba(255,215,0,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 40% 60% at 10% 80%, rgba(100,0,255,0.06) 0%, transparent 50%),
          linear-gradient(180deg,#0a0a0f 0%,#12121a 100%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      {[
        { w: 400, h: 400, top: '-100px', right: '-100px', color: 'rgba(255,165,0,0.08)', delay: '0s' },
        { w: 300, h: 300, bottom: '50px', left: '-50px', color: 'rgba(255,215,0,0.06)', delay: '2s' },
        { w: 200, h: 200, top: '40%', left: '40%', color: 'rgba(100,0,255,0.05)', delay: '1s' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          borderRadius: '50%',
          width: orb.w,
          height: orb.h,
          top: orb.top,
          right: orb.right,
          bottom: orb.bottom,
          left: orb.left,
          background: orb.color,
          filter: 'blur(80px)',
          animation: `float-orb 4s ease-in-out ${orb.delay} infinite alternate`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>

        <div className="animate-fadeUp" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,215,0,0.1)',
          border: '1px solid rgba(255,215,0,0.25)',
          borderRadius: '100px', padding: '6px 16px',
          fontSize: '13px', color: '#FFD700', marginBottom: '28px',
        }}>
          💎 Nepal's Trusted Premium Store
        </div>

        <h1 className="animate-fadeUp delay-100" style={{
          fontSize: 'clamp(36px,6vw,72px)',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '20px',
        }}>
          Premium Access,<br />
          <span className="gold-text">Budget Price! 💎</span>
        </h1>

        <p className="animate-fadeUp delay-200" style={{
          fontSize: 'clamp(15px,2vw,19px)',
          color: '#8888aa',
          marginBottom: '36px',
          maxWidth: '540px',
        }}>
          Your Gateway to Premium Entertainment, AI Tools &amp; Digital Growth
          — serving Nepal since 2020.
        </p>

        <div className="animate-fadeUp delay-300" style={{
          display: 'flex', flexWrap: 'wrap', gap: '14px',
        }}>
          
          <a
            href="https://wa.me/9779809183247"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg,#25d366,#128c7e)',
              color: '#fff', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '12px',
              fontWeight: 700, fontSize: '15px',
              boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)';
            }}
          >💬 Chat Now</a>

          <a href="#services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg,#FFD700,#FFA500)',
            color: '#000', textDecoration: 'none',
            padding: '14px 26px', borderRadius: '12px',
            fontWeight: 700, fontSize: '15px',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >🚀 Our Services</a>

          <a href="#milestones" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#e8e8f0', textDecoration: 'none',
            padding: '14px 26px', borderRadius: '12px',
            fontWeight: 600, fontSize: '15px',
            transition: 'transform 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          >🏆 Our Milestones</a>
        </div>
      </div>

      {/* Floating Platform Cards */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          zIndex: 1,
        }}
        className="hero-float-cards"
      >
        {floatingItems.map((item, i) => (
          <div
            key={i}
            className="animate-floatIn float-card"
            style={{
              animationDelay: `${0.4 + i * 0.15}s`,
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '18px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              width: '210px',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Logo box — white background so logos are clearly visible */}
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '7px',
              flexShrink: 0,
              boxShadow: `0 4px 14px ${item.bg}66`,
            }}>
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
                onError={e => {
                  e.currentTarget.parentNode.style.background = item.bg;
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{item.name}</div>
              <div style={{
                fontSize: '12px',
                color: '#9999bb',
                marginTop: '2px',
              }}>{item.cat}</div>
            </div>

            {/* Live dot */}
            <div style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
              flexShrink: 0,
              marginLeft: 'auto',
              boxShadow: '0 0 6px #22c55e',
            }} />
          </div>
        ))}
      </div>

      <style>{`
        /* Keyframes for animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes float-orb {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(30px);
          }
        }

        /* Animation classes */
        .animate-fadeUp {
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
        }

        .animate-floatIn {
          animation: floatIn 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
        }

        /* Delay classes */
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }

        /* Gold text gradient */
        .gold-text {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        /* Floating card hover effect */
        .float-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .float-card:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 215, 0, 0.3) !important;
          transform: translateX(-4px);
        }

        /* Responsive: hide floating cards on mobile */
        @media (max-width: 900px) {
          .hero-float-cards {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}