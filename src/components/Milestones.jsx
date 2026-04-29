import React, { useEffect, useRef, useState } from 'react';
import { milestones } from '../data/services';

function CountUp({ target, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count.toLocaleString()}+</span>;
}

export default function Milestones() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="milestones" ref={ref}
      style={{ padding: '90px 5%', background: '#12121a' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700',
          marginBottom: '12px' }}>Our Milestones</span>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: '12px' }}>
          Numbers That Speak
        </h2>
        <p style={{ color: '#8888aa', fontSize: '16px' }}>
          Trusted by thousands across Nepal for premium digital services.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
      }}>
        {milestones.map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,215,0,0.15)',
            borderRadius: '20px', padding: '28px 20px',
            textAlign: 'center', transition: 'all .3s', cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.borderColor = 'rgba(255,215,0,0.15)';
          }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '12px' }}>{m.icon}</span>
            <span style={{
              fontSize: '36px', fontWeight: 900, display: 'block',
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              <CountUp target={m.count} started={started} />
            </span>
            <span style={{ fontSize: '13px', color: '#8888aa', fontWeight: 500, marginTop: '4px', display: 'block' }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}