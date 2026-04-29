import React, { useState } from 'react';
import { faqs } from '../data/services';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: '90px 5%', background: '#0a0a0f' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px', alignItems: 'start',
      }}>
        <div>
          <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '12px' }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: '16px' }}>
            Common Questions
          </h2>
          <p style={{ color: '#8888aa', fontSize: '15px', marginBottom: '24px' }}>
            Can't find your answer? Chat with us on WhatsApp anytime!
          </p>
          <a href="https://wa.me/9779809183247" target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg,#25d366,#128c7e)',
              color: '#fff', textDecoration: 'none',
              padding: '13px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px',
            }}>💬 Ask on WhatsApp</a>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,215,0,0.12)', overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  color: open === i ? '#FFD700' : '#e8e8f0',
                  fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: 600,
                  padding: '20px 0', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', cursor: 'pointer', textAlign: 'left', gap: '12px',
                }}>
                {faq.q}
                <span style={{
                  color: '#FFD700', fontSize: '20px', flexShrink: 0,
                  transition: 'transform .3s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}>+</span>
              </button>
              <div style={{
                fontSize: '14px', color: '#8888aa', lineHeight: 1.8,
                maxHeight: open === i ? '200px' : '0',
                overflow: 'hidden', transition: 'max-height .35s ease',
                paddingBottom: open === i ? '20px' : '0',
              }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}