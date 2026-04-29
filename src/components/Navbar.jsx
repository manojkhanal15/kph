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

        {/* Logo with only logo.png */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '38px', height: '38px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img 
              src="/logo.png"
              alt="Kantipur Premium Hub"
              style={{ width: '38px', height: '38px', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#e8e8f0', lineHeight: 1.1 }}>
              Kantipur Premium
            </div>
            <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hubf
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
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: '#fff', borderRadius: '8px', fontWeight: 700,
              padding: '8px 18px', fontSize: '14px', textDecoration: 'none',
              transition: 'all .2s',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat Now
          </a>
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
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              marginTop: '12px', textAlign: 'center',
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: '#fff', borderRadius: '10px', fontWeight: 700,
              padding: '12px', fontSize: '15px', textDecoration: 'none',
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
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