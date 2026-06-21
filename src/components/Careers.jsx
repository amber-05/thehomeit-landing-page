import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Megaphone, HeartHandshake, ArrowRight } from 'lucide-react';

const ROLES = [
    {
        Icon: Code2,
        title: 'Full-Stack Engineer',
        type: 'Full-time · Remote',
        desc: 'Help us build the core platform — React, Node.js, mobile. You\'ll touch everything from visitor management to billing infrastructure.',
    },
    {
        Icon: Megaphone,
        title: 'Growth & Community',
        type: 'Full-time · India',
        desc: 'Own onboarding for new societies, run campaigns, and be the face of Homeit in residential communities across metros.',
    },
    {
        Icon: HeartHandshake,
        title: 'Customer Success',
        type: 'Full-time · India',
        desc: 'Be the first point of contact for society managers. Turn early users into champions and shape our support playbook.',
    },
];

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const Careers = () => (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
                width: '700px', height: '500px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.08) 0%, transparent 65%)',
                pointerEvents: 'none', filter: 'blur(60px)',
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.p {...fade()} style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Careers
                </motion.p>
                <motion.h1 {...fade(0.08)} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                    Build the platform that<br />
                    <span className="gradient-text">powers millions of homes.</span>
                </motion.h1>
                <motion.p {...fade(0.16)} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                    We're a small team solving a massive problem. If you want your work to matter from day one — this is where you belong.
                </motion.p>
            </div>
        </section>

        {/* Why join */}
        <section style={{ padding: '3rem 0' }}>
            <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '5rem' }}>
                    {[
                        ['Early Stage', 'You\'ll be one of the first. Your decisions shape the product and culture from the ground up.'],
                        ['Real Impact', 'Every feature you ship lands directly in the hands of real residents and security guards.'],
                        ['Remote Friendly', 'Work from anywhere in India. We care about outcomes, not office hours.'],
                    ].map(([title, desc], i) => (
                        <motion.div key={i} {...fade(i * 0.08)} style={{
                            padding: '1.75rem', borderRadius: '18px',
                            background: 'rgba(232,64,87,0.04)', border: '1px solid rgba(232,64,87,0.12)',
                            borderTop: '1px solid rgba(232,64,87,0.25)',
                        }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '0.6rem', fontSize: '1rem' }}>{title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.88rem' }}>{desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Open roles */}
                <motion.h2 {...fade()} style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                    Open Roles
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ROLES.map(({ Icon, title, type, desc }, i) => (
                        <motion.a
                            key={i}
                            {...fade(i * 0.07)}
                            href={`mailto:yugverma05@gmail.com?subject=Application — ${title}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <motion.div
                                whileHover={{ y: -3, borderColor: 'rgba(232,64,87,0.35)' }}
                                style={{
                                    padding: '1.75rem 2rem', borderRadius: '18px',
                                    background: 'linear-gradient(145deg, rgba(232,64,87,0.05) 0%, rgba(6,3,4,0.92) 100%)',
                                    border: '1px solid rgba(232,64,87,0.14)',
                                    display: 'flex', alignItems: 'center', gap: '1.5rem',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <div style={{
                                    width: 46, height: 46, borderRadius: '12px', flexShrink: 0,
                                    background: 'rgba(232,64,87,0.1)', border: '1px solid rgba(232,64,87,0.22)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-color)',
                                }}>
                                    <Icon size={20} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                                        <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{title}</h3>
                                        <span style={{
                                            fontSize: '0.72rem', padding: '0.2rem 0.65rem', borderRadius: '20px',
                                            background: 'rgba(232,64,87,0.12)', color: 'var(--accent-color)', fontWeight: 600,
                                        }}>{type}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{desc}</p>
                                </div>
                                <ArrowRight size={18} color="var(--text-secondary)" style={{ flexShrink: 0 }} />
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                <motion.p {...fade(0.2)} style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2.5rem', fontSize: '0.9rem' }}>
                    Don't see your role? Send a speculative application to{' '}
                    <a href="mailto:yugverma05@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>yugverma05@gmail.com</a>
                </motion.p>
            </div>
        </section>
    </div>
);

export default Careers;
