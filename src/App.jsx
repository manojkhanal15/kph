import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Milestones from './components/Milestones';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Milestones />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779809183247"
        target="_blank"
        rel="noreferrer"
        className="animate-pulse-glow"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 999,
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg,#25d366,#128c7e)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          textDecoration: 'none',
        }}
        title="Chat on WhatsApp"
      >
        <span role="img" aria-label="whatsapp">💬</span>
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '28px',
            zIndex: 999,
            width: '44px',
            height: '44px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,215,0,0.25)',
            borderRadius: '12px',
            color: '#FFD700',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          title="Scroll to top"
        >
          ▲
        </button>
      )}
    </div>
  );
}