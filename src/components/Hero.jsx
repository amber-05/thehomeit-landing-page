import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DynamicBuilding from './DynamicBuilding';

const LINE_VARIANTS = {
    hidden: { y: '108%', opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.85, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
    }),
};

const Hero = () => {
    const { scrollY } = useScroll();
    const contentY = useTransform(scrollY, [0, 500], [0, -90]);
    const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);

    return (
        <section id="home" className="hero-section" aria-label="Homeit — Society Management App">
            <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', margin: -1 }}>
                Homeit — Smart Society Management App for Visitor Management, Billing & Emergency Response
            </h1>

            <div className="hero-3d-container">
                <DynamicBuilding />
            </div>

            {/* Ambient content glow */}
            <div style={{
                position: 'absolute', width: 700, height: 700,
                background: 'radial-gradient(circle, rgba(232,64,87,0.07) 0%, transparent 60%)',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                pointerEvents: 'none', filter: 'blur(40px)', zIndex: 5,
            }} />

            <motion.div
                className="container hero-content"
                style={{ y: contentY, opacity: contentOpacity, zIndex: 10 }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-badge"
                >
                    ✦ India's #1 Society Management Platform
                </motion.div>

                {/* Heading — line-by-line masked reveal */}
                <h2 className="hero-title" style={{ overflow: 'visible' }}>
                    {['The OS for', 'Modern Societies.'].map((line, i) => (
                        <div
                            key={i}
                            style={{
                                overflow: 'hidden',
                                paddingBottom: '0.05em',
                                display: 'block',
                                lineHeight: 1,
                            }}
                        >
                            <motion.span
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={LINE_VARIANTS}
                                className={i === 1 ? 'gradient-text' : ''}
                                style={{ display: 'block' }}
                            >
                                {line}
                            </motion.span>
                        </div>
                    ))}
                </h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-subtitle"
                >
                    Homeit is India's complete society management app — visitor management,
                    automated billing, emergency alerts &amp; community tools in one platform.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-btn-group"
                >
                    <button className="btn-primary" onClick={() => window.location.href = 'https://admin.thehomeit.com'}>
                        Get Started Free
                    </button>
                    <button className="btn-secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book a Demo
                    </button>
                </motion.div>

                {/* Trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    className="hero-trust"
                >
                    <span>✦ 2 Societies</span>
                    <span>✦ 146+ Residents</span>
                    <span>✦ 99.9% Uptime</span>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="scroll-line" />
            </motion.div>
        </section>
    );
};

export default Hero;
