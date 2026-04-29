import React, { useState } from 'react';

const contacts = [
  { icon: '💬', label: 'WhatsApp Business', sub: '+977 9809183247',              href: 'https://wa.me/9779809183247',                              bg: '#1a4731' },
  { icon: '📸', label: 'Instagram',          sub: '@kantipur.digital.store',      href: 'https://www.instagram.com/kantipur.digital.store',         bg: '#4a1428' },
  { icon: '📘', label: 'Facebook',           sub: 'Kantipur Premium Hub',         href: 'https://facebook.com/kantipurpremiumhub',                  bg: '#1a2a4a' },
  { icon: '✉️', label: 'Gmail',              sub: 'kantipurpremiumhub@gmail.com', href: 'mailto:kantipurpremiumhub@gmail.com',                      bg: '#2a1a1a' },
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
        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '12px' }}>
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
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: c.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '22px', flexShrink: 0,
              }}>{c.icon}</div>
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
            { label: 'Your Name', key: 'name',    type: 'text',  placeholder: 'Enter your name'         },
            { label: 'Email',     key: 'email',   type: 'email', placeholder: 'your@email.com'           },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600,
                color: '#8888aa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.5px' }}>
                {f.label}
              </label>
              <input type={f.type} placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                style={{
                  width: '100%', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', padding: '13px 16px',
                  color: '#e8e8f0', fontSize: '15px', fontFamily: 'Outfit, sans-serif',
                  outline: 'none', transition: 'border .2s',
                }} />
            </div>
          ))}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600,
              color: '#8888aa', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.5px' }}>
              Message
            </label>
            <textarea placeholder="Tell us what service you're interested in..."
              value={form.message} rows={4}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              style={{
                width: '100%', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px', padding: '13px 16px',
                color: '#e8e8f0', fontSize: '15px', fontFamily: 'Outfit, sans-serif',
                outline: 'none', resize: 'vertical', transition: 'border .2s',
              }} />
          </div>
          <button onClick={handleSubmit} style={{
            width: '100%', background: 'linear-gradient(135deg,#FFD700,#FFA500)',
            color: '#000', border: 'none', borderRadius: '12px',
            padding: '13px', fontSize: '15px', fontWeight: 700,
            cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'opacity .2s',
          }}
          onMouseEnter={e => e.target.style.opacity = '.9'}
          onMouseLeave={e => e.target.style.opacity = '1'}>
            Send Message 🚀
          </button>
        </div>
      </div>
    </section>
  );
}