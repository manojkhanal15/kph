import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Home',       href: '#home'     },
  { label: 'OTTs',       href: '#services' },
  { label: 'AI Tools',   href: '#services' },
  { label: 'Software',   href: '#services' },
  { label: 'About Us',   href: '#about'    },
  { label: 'Contact Us', href: '#contact'  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    background: scrolled
      ? 'rgba(18, 18, 28, 0.98)'
      : 'rgba(18, 18, 28, 0.85)',
    borderBottom: scrolled
      ? '1px solid rgba(255,215,0,0.25)'
      : '1px solid rgba(255,215,0,0.12)',
    transition: 'all 0.3s ease',
    padding: '0 5%',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: 'rgba(255,215,0,0.08)',
            border: '1px solid rgba(255,215,0,0.2)',
            padding: '3px',
          }}>
            <img
              src="/logo.png"
              alt="Kantipur Premium Hub"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '0.3px',
            }}>
              Kantipur Premium
            </div>
            <div style={{
              fontSize: '10px',
              color: '#FFD700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              Hub
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: '#b0b0cc',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: '8px',
                transition: 'all .2s',
                letterSpacing: '0.2px',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#FFD700';
                e.target.style.background = 'rgba(255,215,0,0.09)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#b0b0cc';
                e.target.style.background = 'transparent';
              }}
            >
              {l.label}
            </a>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/9779809183247"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: '#fff',
              borderRadius: '9px',
              fontWeight: 700,
              padding: '9px 18px',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              marginLeft: '6px',
              boxShadow: '0 2px 16px rgba(37,211,102,0.25)',
              transition: 'all .2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Chat Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="hamburger-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          <span style={{
            width: '24px', height: '2px', background: '#e8e8f0',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
          }} />
          <span style={{
            width: '24px', height: '2px', background: '#e8e8f0',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: '24px', height: '2px', background: '#e8e8f0',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid rgba(255,215,0,0.12)',
          paddingBottom: '20px',
          background: 'rgba(18,18,28,0.99)',
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#b0b0cc',
                textDecoration: 'none',
                fontSize: '15px',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://wa.me/9779809183247"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: '#fff',
              borderRadius: '12px',
              padding: '13px',
              textDecoration: 'none',
            }}
          >
            Chat on WhatsApp
          </a>
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