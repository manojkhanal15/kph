import React, { useState } from 'react';
import { ottServices, aiTools, softwareList, socialServices } from '../data/services';

const WA = 'https://wa.me/9779809183247?text=I want ';

function LogoBox({ item }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{
        width: '72px',
        height: '72px',
        borderRadius: '18px',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '18px',
        padding: '10px',
        boxSizing: 'border-box',
        flexShrink: 0,
        boxShadow: `0 4px 20px ${item.bg}55`,
      }}
    >
      {!failed ? (
        <img
          src={item.logo}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: item.bg,
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '26px',
            fontWeight: 900,
            color: '#ffffff',
          }}
        >
          {item.name.charAt(0)}
        </div>
      )}
    </div>
  );
}

function ServiceCard({ item, btnLabel }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,215,0,0.15)',
        borderRadius: '20px',
        padding: '24px',
        transition: 'all .3s',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(255,215,0,0.45)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.45)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      }}
    >
      <LogoBox item={item} />

      <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px', color: '#e8e8f0' }}>
        {item.name}
      </div>

      <div
        style={{
          fontSize: '11px',
          color: '#8888aa',
          fontWeight: 600,
          marginBottom: '14px',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
        }}
      >
        {item.type}
      </div>

      <div style={{ fontSize: '13px', color: '#8888aa', marginBottom: '18px' }}>
        {'Starting '}
        <strong style={{ fontSize: '22px', fontWeight: 800, color: '#FFD700' }}>
          {'Rs. ' + item.price}
        </strong>
        <span style={{ fontSize: '12px' }}>{'/mo'}</span>
      </div>

      <a
        href={WA + item.name}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'center',
          background: 'linear-gradient(135deg,#FFD700,#FFA500)',
          color: '#000',
          borderRadius: '10px',
          padding: '11px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'opacity .2s',
          marginTop: 'auto',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        {btnLabel}
      </a>
    </div>
  );
}

const tabs = [
  { key: 'ott', label: '📺 OTT Platforms', data: ottServices, btn: 'Buy Now' },
  { key: 'ai', label: '🤖 AI Tools', data: aiTools, btn: 'Buy Now' },
  { key: 'software', label: '💻 Software', data: softwareList, btn: 'Buy Now' },
  { key: 'social', label: '📈 Social Media', data: socialServices, btn: 'Order Now' },
];

export default function Services() {
  const [active, setActive] = useState('ott');
  const current = tabs.find((t) => t.key === active);

  return (
    <section id="services" style={{ padding: '90px 5%', background: '#0a0a0f' }}>
      <span
        style={{
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#FFD700',
          marginBottom: '12px',
        }}
      >
        Services
      </span>

      <h2
        style={{
          fontSize: 'clamp(28px,4vw,44px)',
          fontWeight: 800,
          marginBottom: '12px',
          color: '#e8e8f0',
        }}
      >
        Premium Services
      </h2>

      <p style={{ color: '#8888aa', fontSize: '16px', marginBottom: '40px' }}>
        Browse our curated catalog of digital subscriptions at Nepal's best prices.
      </p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '36px', flexWrap: 'wrap' }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            style={{
              background: active === t.key ? 'rgba(255,215,0,0.12)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${active === t.key ? 'rgba(255,215,0,0.5)' : 'rgba(255,215,0,0.15)'}`,
              color: active === t.key ? '#FFD700' : '#8888aa',
              padding: '10px 22px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Outfit, sans-serif',
              transition: 'all .2s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}
      >
        {current.data.map((item) => (
          <ServiceCard key={item.id} item={item} btnLabel={current.btn} />
        ))}
      </div>
    </section>
  );
}