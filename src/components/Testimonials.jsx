import React from 'react';
import { testimonials } from '../data/services';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '90px 5%', background: '#12121a' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '12px' }}>
          Testimonials
        </span>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800 }}>
          What Our Clients Say
        </h2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px',
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,215,0,0.15)',
            borderRadius: '20px', padding: '24px', transition: 'all .3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'; e.currentTarget.style.transform = 'none'; }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '12px' }}>
              ★★★★★
            </div>
            <p style={{ fontSize: '14px', color: '#8888aa', lineHeight: 1.8, marginBottom: '16px' }}>
              "{t.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'linear-gradient(135deg,#FFD700,#FFA500)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '16px', color: '#000', flexShrink: 0,
              }}>{t.initial}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: '#8888aa' }}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}