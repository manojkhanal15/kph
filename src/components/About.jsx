import React from 'react';

const features = [
  { icon: '🛡️', title: 'Trusted Service',   desc: 'Verified accounts & secure delivery'     },
  { icon: '⚡', title: 'Instant Delivery',  desc: 'Access within minutes of payment'         },
  { icon: '💰', title: 'Affordable Pricing', desc: "Nepal's most competitive rates"           },
  { icon: '🕐', title: '24/7 Support',      desc: 'Always here when you need us'             },
];

const stats = [
  { num: '5K+', lbl: 'Clients'     },
  { num: '4+',  lbl: 'Yrs Exp'    },
  { num: '20+', lbl: 'Services'   },
  { num: '99%', lbl: 'Satisfaction'},
];

export default function About() {
  return (
    <section id="about" style={{ padding: '90px 5%', background: '#1a1a2e' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '50px', alignItems: 'center',
      }}>
        <div>
          <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '12px' }}>
            About Us
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: '16px' }}>
            Why Kantipur Premium Hub?
          </h2>
          <p style={{ color: '#8888aa', fontSize: '15px', marginBottom: '28px', lineHeight: 1.8 }}>
            We are Nepal's most trusted digital subscription store, providing instant access to premium
            OTT platforms, AI tools, software and social media growth services — all at unbeatable prices since 2020.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,215,0,0.15)',
                borderRadius: '16px', padding: '20px', transition: 'all .3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)'; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#8888aa' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,215,0,0.15)',
          borderRadius: '24px', padding: '40px', textAlign: 'center',
          backdropFilter: 'blur(20px)',
        }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>🏆</div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Nepal's #1</h3>
          <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '28px' }}>
            Premium Digital Subscription Store
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,215,0,0.07)',
                border: '1px solid rgba(255,215,0,0.15)',
                borderRadius: '12px', padding: '16px', textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '28px', fontWeight: 900,
                  background: 'linear-gradient(135deg,#FFD700,#FFA500)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{s.num}</div>
                <div style={{ fontSize: '12px', color: '#8888aa' }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}