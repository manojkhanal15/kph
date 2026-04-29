import React from 'react';

const floatingItems = [
  { emoji: '📺', name: 'Netflix',       cat: 'Streaming', bg: '#E50914' },
  { emoji: '▶',  name: 'Prime Video',   cat: 'Streaming', bg: '#00A8E0' },
  { emoji: '🎵', name: 'Spotify',       cat: 'Music',     bg: '#1DB954' },
  { emoji: '🤖', name: 'ChatGPT',       cat: 'AI Tool',   bg: '#10A37F' },
  { emoji: '✨', name: 'Canva Pro',     cat: 'Design',    bg: '#7D2AE7' },
];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 5% 80px',
    }}>
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,165,0,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 20%, rgba(255,215,0,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 40% 60% at 10% 80%, rgba(100,0,255,0.06) 0%, transparent 50%),
          linear-gradient(180deg,#0a0a0f 0%,#12121a 100%)
        `,
      }} />

      {/* Grid overlay */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,215,0,0.04) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,215,0,0.04) 1px,transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      {[
        { w:400,h:400,top:'-100px',right:'-100px', color:'rgba(255,165,0,0.08)',  delay:'0s'  },
        { w:300,h:300,bottom:'50px',left:'-50px',  color:'rgba(255,215,0,0.06)',  delay:'2s'  },
        { w:200,h:200,top:'40%',left:'40%',        color:'rgba(100,0,255,0.05)', delay:'1s'  },
      ].map((orb,i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%',
          width: orb.w, height: orb.h,
          top: orb.top, right: orb.right, bottom: orb.bottom, left: orb.left,
          background: orb.color,
          filter: 'blur(80px)',
          animation: `float-orb 4s ease-in-out ${orb.delay} infinite alternate`,
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
          fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900,
          lineHeight: 1.05, marginBottom: '20px',
        }}>
          Premium Access,<br />
          <span className="gold-text">Budget Price!</span> 💎
        </h1>

        <p className="animate-fadeUp delay-200" style={{
          fontSize: 'clamp(15px,2vw,19px)', color: '#8888aa',
          marginBottom: '36px', maxWidth: '540px',
        }}>
          Your Gateway to Premium Entertainment, AI Tools &amp; Digital Growth
          — serving Nepal since 2020.
        </p>

        <div className="animate-fadeUp delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a href="https://wa.me/9779809183247" target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg,#25d366,#128c7e)',
              color: '#fff', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '12px',
              fontWeight: 700, fontSize: '15px',
              boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
            }}>💬 Chat Now</a>

          <a href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              color: '#000', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '12px',
              fontWeight: 700, fontSize: '15px',
            }}>🚀 Our Services</a>

          <a href="#milestones"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#e8e8f0', textDecoration: 'none',
              padding: '14px 26px', borderRadius: '12px',
              fontWeight: 600, fontSize: '15px',
            }}>🏆 Our Milestones</a>
        </div>
      </div>

      {/* Floating Platform Cards */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1,
      }} className="hero-float-cards">
        {floatingItems.map((item, i) => (
          <div key={i} className="animate-floatIn" style={{
            animationDelay: `${0.4 + i * 0.15}s`,
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,215,0,0.15)',
            borderRadius: '16px', padding: '12px 18px',
            display: 'flex', alignItems: 'center', gap: '10px', width: '180px',
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: item.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>{item.emoji}</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.2 }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#8888aa' }}>{item.cat}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){ .hero-float-cards { display:none !important; } }
      `}</style>
    </section>
  );
}