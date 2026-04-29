import React from 'react';

const quickLinks = ['Home','Milestones','About Us','Reviews','FAQ','Contact'];
const services   = ['Netflix','Spotify','ChatGPT Plus','Canva Pro','MS Office 365','VPN Premium'];

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
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { icon: '💬', href: 'https://wa.me/9779809183247' },
              { icon: '📸', href: 'https://www.instagram.com/kantipur.digital.store' },
              { icon: '📘', href: 'https://facebook.com/kantipurpremiumhub' },
              { icon: '✉️', href: 'mailto:kantipurpremiumhub@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  width: '36px', height: '36px', background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,215,0,0.15)', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', textDecoration: 'none', transition: 'all .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,215,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,215,0,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {quickLinks.map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(' ','')}`}
                style={{ fontSize: '14px', color: '#8888aa', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#FFD700'}
                onMouseLeave={e => e.target.style.color = '#8888aa'}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px' }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {services.map(s => (
              <li key={s}><a href="#services"
                style={{ fontSize: '14px', color: '#8888aa', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#FFD700'}
                onMouseLeave={e => e.target.style.color = '#8888aa'}>{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#FFD700', marginBottom: '18px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { text: '📞 9809183247',              href: 'https://wa.me/9779809183247' },
              { text: '📸 @kantipur.digital.store', href: 'https://www.instagram.com/kantipur.digital.store' },
              { text: '📘 Facebook Page',           href: 'https://facebook.com/kantipurpremiumhub' },
              { text: '✉️ Gmail',                   href: 'mailto:kantipurpremiumhub@gmail.com' },
            ].map((c, i) => (
              <li key={i}><a href={c.href} target="_blank" rel="noreferrer"
                style={{ fontSize: '14px', color: '#8888aa', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#FFD700'}
                onMouseLeave={e => e.target.style.color = '#8888aa'}>{c.text}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: '24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: '#8888aa' }}>
          © 2025 Kantipur Premium Hub. All rights reserved. Made with 💎 in Nepal.
        </p>
        <p style={{ fontSize: '13px', color: '#8888aa' }}>Premium Access. Budget Prices.</p>
      </div>
    </footer>
  );
}