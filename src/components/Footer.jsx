import React from 'react';

const quickLinks = ['Home', 'Milestones', 'About Us', 'Reviews', 'FAQ', 'Contact'];

const services = [
  {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg',
    color: '#E50914',
  },
  {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg',
    color: '#1DB954',
  },
  {
    name: 'ChatGPT Plus',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    color: '#74aa9c',
  },
  {
    name: 'Canva Pro',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg',
    color: '#00C4CC',
  },
  {
    name: 'MS Office 365',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftoffice.svg',
    color: '#D83B01',
  },
  {
    name: 'VPN Premium',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/protonvpn.svg',
    color: '#6D4AFF',
  },
];

const socials = [
  {
    href: 'https://wa.me/9779809183247',
    label: 'WhatsApp',
    color: '#25D366',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/kantipur.digital.store',
    label: 'Instagram',
    color: '#E1306C',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="url(#ig-grad)" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61573413692022',
    label: 'Facebook',
    color: '#1877F2',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: 'mailto:kantipurpremiumhub@gmail.com',
    label: 'Gmail',
    color: '#EA4335',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
        <path d="M12 9.548L5.455 4.64 3.927 3.493C2.31 2.28 0 3.434 0 5.457v.668l12 9 12-9v-.668c0-2.023-2.309-3.178-3.927-1.964L18.545 4.64 12 9.548z" fill="#FBBC05" />
      </svg>
    ),
  },
];

const contactItems = [
  {
    text: '9809183247',
    href: 'https://wa.me/9779809183247',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    text: '@kantipur.digital.store',
    href: 'https://www.instagram.com/kantipur.digital.store',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="#E1306C" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    text: 'Facebook Page',
    href: 'https://www.facebook.com/profile.php?id=61573413692022',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    text: 'kantipurpremiumhub@gmail.com',
    href: 'mailto:kantipurpremiumhub@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#060609', borderTop: '1px solid rgba(255,215,0,0.12)', padding: '60px 5% 30px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px', marginBottom: '50px',
      }}>

        {/* Brand */}
        <div>
          <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '14px' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '20px', color: '#000',
            }}>K</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#e8e8f0' }}>Kantipur Premium</div>
              <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '2px' }}>HUB</div>
            </div>
          </a>
          <p style={{ fontSize: '14px', color: '#8888aa', marginBottom: '20px', lineHeight: 1.7, maxWidth: '260px' }}>
            Nepal's trusted premium digital subscription store. Premium access at budget prices — since 2020.
          </p>

          {/* Social Icons with real SVG logos */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: '38px', height: '38px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,215,0,0.15)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', transition: 'all .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px',
          }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {quickLinks.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(' ', '')}`}
                  style={{ fontSize: '14px', color: '#8888aa', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = '#FFD700'}
                  onMouseLeave={e => e.target.style.color = '#8888aa'}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services with logos */}
        <div>
          <h4 style={{
            fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px',
          }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {services.map(s => (
              <li key={s.name}>
                <a
                  href="#services"
                  style={{
                    fontSize: '14px', color: '#8888aa', textDecoration: 'none',
                    transition: 'color .2s', display: 'flex', alignItems: 'center', gap: '8px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8888aa'}
                >
                  {/* Brand logo circle */}
                  <span style={{
                    width: '22px', height: '22px', borderRadius: '6px',
                    background: s.color + '22',
                    border: `1px solid ${s.color}44`,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <img
                      src={s.logo}
                      alt={s.name}
                      width="13"
                      height="13"
                      style={{ filter: `drop-shadow(0 0 2px ${s.color})`, display: 'block' }}
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  </span>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px',
          }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactItems.map((c, i) => (
              <li key={i}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '14px', color: '#8888aa', textDecoration: 'none',
                    transition: 'color .2s', display: 'flex', alignItems: 'center', gap: '8px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8888aa'}
                >
                  <span style={{
                    width: '22px', height: '22px', borderRadius: '6px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,215,0,0.15)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {c.icon}
                  </span>
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: '24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: '#8888aa', margin: 0 }}>
          © 2025 Kantipur Premium Hub. All rights reserved. Made with 💎 in Nepal.
        </p>
        <p style={{ fontSize: '13px', color: '#8888aa', margin: 0 }}>Premium Access. Budget Prices.</p>
      </div>
    </footer>
  );
}