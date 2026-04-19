import React from 'react';
import { motion } from 'framer-motion';
import DynamicBuilding from './DynamicBuilding';

const Hero = () => {
    return (
        <section id="home" className="hero-section" aria-label="Homeit — Society Management App for Residential Communities">
            {/* SEO h1 */}
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                Homeit (TheHomeIT) — Smart Society Management App for Visitor Management, Billing &amp; Emergency Response
            </h1>

            {/* Dynamic parallax building */}
            <div className="hero-3d-container">
                <DynamicBuilding />
            </div>

            {/* Foreground content */}
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hero-badge"
                >
                    🏠 India's #1 Society Management Platform
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="gradient-text hero-title"
                >
                    The OS for <br /> Modern Societies.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-subtitle"
                >
                    Homeit is India's complete society management app — visitor management,
                    automated billing, emergency alerts &amp; community tools in one platform.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-btn-group"
                >
                    <button className="btn-primary">
                        Get Started Free
                    </button>
                    <button className="btn-secondary" onClick={() => window.location.href = 'https://admin.thehomeit.com'}>
                        Admin Login
                    </button>
                </motion.div>

                {/* Trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hero-trust"
                >
                    <span>✦ 500+ Societies</span>
                    <span>✦ 50,000+ Residents</span>
                    <span>✦ 99.9% Uptime</span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
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
