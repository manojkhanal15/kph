import React, { useState } from 'react';

const contacts = [
  {
    label: 'WhatsApp Business',
    sub: '+977 9809183247',
    href: 'https://wa.me/9779809183247',
    bg: '#1a4731',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    sub: '@kantipur.digital.store',
    href: 'https://www.instagram.com/kantipur.digital.store',
    bg: '#4a1428',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad-contact" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path fill="url(#ig-grad-contact)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    sub: 'Kantipur Premium Hub',
    href: 'https://www.facebook.com/profile.php?id=61573413692022',
    bg: '#1a2a4a',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Gmail',
    sub: 'kantipurpremiumhub@gmail.com',
    href: 'mailto:kantipurpremiumhub@gmail.com',
    bg: '#2a1a1a',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.002 8.25L12 12.5l5.998-4.25L12 4.5z" fill="#FBBC05" />
        <path d="M22 6.5c0-.828-.672-1.5-1.5-1.5h-.5v.5L12 12 4 5.5V5h-.5C2.672 5 2 5.672 2 6.5v11C2 18.328 2.672 19 3.5 19h17c.828 0 1.5-.672 1.5-1.5z" fill="#EA4335" />
        <path d="M2 6.5V17.5C2 18.328 2.672 19 3.5 19H4V8.25L2 6.5z" fill="#34A853" />
        <path d="M22 6.5L20 8.25V19h.5c.828 0 1.5-.672 1.5-1.5z" fill="#4285F4" />
        <path d="M12 12.5L4 8.25V5.5L12 11l8-5.5v2.75z" fill="#C5221F" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) { alert('Please fill all fields.'); return; }
    const url = `https://wa.me/9779809183247?text=Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" style={{ padding: '90px 5%', background: '#12121a' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{
          display: 'inline-block', fontSize: '12px', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '12px',
        }}>
          Contact Us
        </span>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: '12px' }}>
          Get in Touch
        </h2>
        <p style={{ color: '#8888aa', fontSize: '16px' }}>
          We're always available. Reach us on any platform.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px',
      }}>
        {/* Contact Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,215,0,0.15)',
                borderRadius: '16px', padding: '16px 20px',
                textDecoration: 'none', color: '#e8e8f0', transition: 'all .3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Real logo icon */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: c.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                {c.svg}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>{c.label}</div>
                <div style={{ fontSize: '13px', color: '#8888aa' }}>{c.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,215,0,0.15)',
          borderRadius: '24px', padding: '32px',
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Send a Message</h3>
          {[
            { label: 'Your Name', key: 'name',  type: 'text',  placeholder: 'Enter your name' },
            { label: 'Email',     key: 'email', type: 'email', placeholder: 'your@email.com'  },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: '18px' }}>
              <label style={{
                display: 'block', fontSize: '13px', fontWeight: 600,
                color: '#8888aa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.5px',
              }}>
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', padding: '13px 16px',
                  color: '#e8e8f0', fontSize: '15px', fontFamily: 'Outfit, sans-serif',
                  outline: 'none', transition: 'border .2s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,215,0,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          ))}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block', fontSize: '13px', fontWeight: 600,
              color: '#8888aa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.5px',
            }}>
              Message
            </label>
            <textarea
              placeholder="Tell us what service you're interested in..."
              value={form.message}
              rows={4}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px', padding: '13px 16px',
                color: '#e8e8f0', fontSize: '15px', fontFamily: 'Outfit, sans-serif',
                outline: 'none', resize: 'vertical', transition: 'border .2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,215,0,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          <button
            onClick={handleSubmit}
            style={{
              width: '100%', background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              color: '#000', border: 'none', borderRadius: '12px',
              padding: '13px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'opacity .2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '.9'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Send Message 
          </button>
        </div>
      </div>
    </section>
  );
}