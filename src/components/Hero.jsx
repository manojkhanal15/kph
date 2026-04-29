import React from 'react';

const floatingItems = [
  {
    name: 'Netflix',
    cat: 'Streaming',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg',
    color: '#E50914',
  },
  {
    name: 'Prime Video',
    cat: 'Streaming',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/primevideo.svg',
    color: '#00A8E0',
  },
  {
    name: 'Spotify',
    cat: 'Music',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg',
    color: '#1DB954',
  },
  {
    name: 'ChatGPT Plus',
    cat: 'AI Tool',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    color: '#74aa9c',
  },
  {
    name: 'Canva Pro',
    cat: 'Design',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg',
    color: '#00C4CC',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 5% 80px',
      }}
    >
      {/* Background layers */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,165,0,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(255,215,0,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(100,0,255,0.06) 0%, transparent 50%),
            linear-gradient(180deg,#0a0a0f 0%,#12121a 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      {[
        { w: 400, h: 400, top: '-100px', right: '-100px', color: 'rgba(255,165,0,0.08)', delay: '0s' },
        { w: 300, h: 300, bottom: '50px', left: '-50px', color: 'rgba(255,215,0,0.06)', delay: '2s' },
        { w: 200, h: 200, top: '40%', left: '40%', color: 'rgba(100,0,255,0.05)', delay: '1s' },
      ].map((orb, i) => (
        <div
          key={i}
          style={{
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
          }}
        />
      ))}

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
        <div
          className="animate-fadeUp"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.25)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '13px',
            color: '#FFD700',
            marginBottom: '28px',
          }}
        >
          💎 Nepal's Trusted Premium Store
        </div>

        <h1
          className="animate-fadeUp delay-100"
          style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          Premium Access,
          <br />
          <span className="gold-text">Budget Price!</span> 💎
        </h1>

        <p
          className="animate-fadeUp delay-200"
          style={{
            fontSize: 'clamp(15px, 2vw, 19px)',
            color: '#8888aa',
            marginBottom: '36px',
            maxWidth: '540px',
          }}
        >
          Your Gateway to Premium Entertainment, AI Tools & Digital Growth —
          serving Nepal since 2020.
        </p>

        <div
          className="animate-fadeUp delay-300"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}
        >
          <a
            href="https://wa.me/9779809183247"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg,#25d366,#128c7e)',
              color: '#fff',
              textDecoration: 'none',
              padding: '14px 26px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
            }}
          >
             Chat Now
          </a>

          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              color: '#000',
              textDecoration: 'none',
              padding: '14px 26px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
            }}
          >
            Our Services
          </a>

          <a
            href="#milestones"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#e8e8f0',
              textDecoration: 'none',
              padding: '14px 26px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '15px',
            }}
          >
             Our Milestones
          </a>
        </div>
      </div>

      {/* Floating Platform Cards with real logos */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 1,
        }}
        className="hero-float-cards"
      >
        {floatingItems.map((item, i) => (
          <div
            key={i}
            className="animate-floatIn"
            style={{
              animationDelay: `${0.4 + i * 0.15}s`,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,215,0,0.15)',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '190px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: `${item.color}22`,
                border: `1px solid ${item.color}66`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                width="20"
                height="20"
                style={{
                  filter: `drop-shadow(0 0 2px ${item.color})`,
                  display: 'block',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  // fallback: show first letter of name
                  const parent = e.currentTarget.parentNode;
                  if (parent && !parent.querySelector('.fallback')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'fallback';
                    fallback.textContent = item.name[0];
                    fallback.style.color = item.color;
                    fallback.style.fontSize = '18px';
                    fallback.style.fontWeight = 'bold';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.2 }}>
                {item.name}
              </div>
              <div style={{ fontSize: '11px', color: '#8888aa' }}>{item.cat}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes & additional styling */}
      <style>
        {`
          @keyframes float-orb {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(-30px) scale(1.05); }
          }

          .animate-fadeUp {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUp 0.6s ease forwards;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }

          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-floatIn {
            opacity: 0;
            transform: translateX(40px);
            animation: floatIn 0.5s ease forwards;
          }

          @keyframes floatIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .gold-text {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          @media (max-width: 900px) {
            .hero-float-cards {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}