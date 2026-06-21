import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Globe } from 'lucide-react';

const VALUES = [
    { Icon: Shield, title: 'Security First', desc: 'Every feature is built with resident safety as the top priority — from gate access to data privacy.' },
    { Icon: Zap,    title: 'Simplicity',     desc: 'Complex society management reduced to a few taps. If it takes more than 3 steps, we redesign it.' },
    { Icon: Heart,  title: 'Community',      desc: 'We believe great neighbourhoods are built on trust and connection — our platform fosters both.' },
    { Icon: Globe,  title: 'Built for India', desc: 'Designed ground-up for Indian residential societies — language, payment rails, and local nuances included.' },
];

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const About = () => (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
        {/* Hero */}
        <section style={{ padding: '6rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                width: '700px', height: '500px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.08) 0%, transparent 65%)',
                pointerEvents: 'none', filter: 'blur(60px)',
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.p {...fade()} style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    About Homeit
                </motion.p>
                <motion.h1 {...fade(0.08)} style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                    We're building the OS<br />
                    <span className="gradient-text">for Indian neighbourhoods.</span>
                </motion.h1>
                <motion.p {...fade(0.16)} style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
                    Homeit started with a simple observation: managing a housing society is unnecessarily painful. We're here to fix that — one community at a time.
                </motion.p>
            </div>
        </section>

        {/* Story */}
        <section style={{ padding: '4rem 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                <motion.div {...fade()}>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        The problem we set out to solve
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1rem' }}>
                        Millions of Indian families live in managed societies — but the tools running them are outdated registers, WhatsApp groups, and Excel sheets. Committee members spend weekends collecting dues. Guards use paper logbooks. Emergencies go unnoticed.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                        We built Homeit to replace all of that with a single, beautiful platform that works for the resident, the security guard, and the committee member alike.
                    </p>
                </motion.div>

                <motion.div {...fade(0.1)} style={{
                    padding: '2.5rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(145deg, rgba(232,64,87,0.06) 0%, rgba(6,3,4,0.95) 100%)',
                    border: '1px solid rgba(232,64,87,0.15)',
                    borderTop: '1px solid rgba(232,64,87,0.3)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            ['2025', 'Homeit founded with the mission to digitise Indian societies'],
                            ['Early 2026', 'First 2 societies onboarded — 146 residents actively using the platform'],
                            ['2026 →', 'Expanding across metros — smart security, automated billing, community tools'],
                        ].map(([year, text], i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.2rem' }}>
                                <div style={{
                                    fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-color)',
                                    letterSpacing: '0.06em', minWidth: '80px', paddingTop: '2px',
                                }}>{year}</div>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '0.95rem' }}>{text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Values */}
        <section style={{ padding: '4rem 0 6rem', background: 'var(--secondary-bg)' }}>
            <div className="container">
                <motion.h2 {...fade()} style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '3.5rem' }}>
                    What we stand for
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                    {VALUES.map(({ Icon, title, desc }, i) => (
                        <motion.div key={i} {...fade(i * 0.08)} style={{
                            padding: '2rem', borderRadius: '20px',
                            background: 'linear-gradient(145deg, rgba(232,64,87,0.05) 0%, rgba(6,3,4,0.9) 100%)',
                            border: '1px solid rgba(232,64,87,0.14)',
                            borderTop: '1px solid rgba(232,64,87,0.28)',
                        }}>
                            <div style={{
                                width: 46, height: 46, borderRadius: '12px',
                                background: 'rgba(232,64,87,0.1)', border: '1px solid rgba(232,64,87,0.22)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--accent-color)', marginBottom: '1.2rem',
                            }}>
                                <Icon size={20} />
                            </div>
                            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.9rem' }}>{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.h2 {...fade()} style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                    Ready to transform your society?
                </motion.h2>
                <motion.p {...fade(0.08)} style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                    Write to us at <a href="mailto:yugverma05@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>yugverma05@gmail.com</a> or get started directly.
                </motion.p>
                <motion.button {...fade(0.16)} className="btn-primary" style={{ borderRadius: '50px', padding: '1rem 2.5rem', fontSize: '1rem' }}
                    onClick={() => { window.location.href = '/'; setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
                    Get Started Free
                </motion.button>
            </div>
        </section>
    </div>
);

export default About;
