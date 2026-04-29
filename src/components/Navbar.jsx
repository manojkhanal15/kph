import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Home',       href: '#home'       },
  { label: 'OTTs',       href: '#services'   },
  { label: 'AI Tools',   href: '#services'   },
  { label: 'Software',   href: '#services'   },
  { label: 'About Us',   href: '#about'      },
  { label: 'Contact Us', href: '#contact'    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    backdropFilter: 'blur(20px)',
    background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.7)',
    borderBottom: '1px solid rgba(255,215,0,0.15)',
    transition: 'background 0.3s',
    padding: '0 5%',
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg,#FFD700,#FFA500)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '20px', color: '#000',
          }}>K</div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#e8e8f0', lineHeight: 1.1 }}>
              Kantipur Premium
            </div>
            <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hub
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: '#8888aa', textDecoration: 'none', fontSize: '14px',
              fontWeight: 500, padding: '8px 14px', borderRadius: '8px',
              transition: 'all .2s',
            }}
            onMouseEnter={e => { e.target.style.color='#FFD700'; e.target.style.background='rgba(255,215,0,0.07)'; }}
            onMouseLeave={e => { e.target.style.color='#8888aa'; e.target.style.background='transparent'; }}
            >{l.label}</a>
          ))}
          <a href="https://wa.me/9779809183247" target="_blank" rel="noreferrer"
            style={{
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              color: '#000', borderRadius: '8px', fontWeight: 700,
              padding: '8px 18px', fontSize: '14px', textDecoration: 'none',
              transition: 'all .2s',
            }}>💬 Chat Now</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)}
          style={{ display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
          className="hamburger-btn">
          {[0,1,2].map(i => (
            <span key={i} style={{ width: '24px', height: '2px', background: '#e8e8f0',
              borderRadius: '2px', display: 'block' }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid rgba(255,215,0,0.1)',
          paddingBottom: '16px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', color: '#8888aa', textDecoration: 'none',
                fontSize: '15px', fontWeight: 500,
                padding: '13px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/9779809183247" target="_blank" rel="noreferrer"
            style={{
              display: 'block', marginTop: '12px', textAlign: 'center',
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              color: '#000', borderRadius: '10px', fontWeight: 700,
              padding: '12px', fontSize: '15px', textDecoration: 'none',
            }}>💬 Chat on WhatsApp</a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav { display:none !important; }
          .hamburger-btn { display:flex !important; }
        }
      `}</style>
    </nav>
  );
}