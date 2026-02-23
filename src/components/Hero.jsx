import React from 'react';
import { motion } from 'framer-motion';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
    return (
        <section className="container" style={{ textAlign: 'center', paddingTop: '12rem', position: 'relative' }}>
            {/* Background Orbs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(3, 3, 3, 0) 70%)',
                filter: 'blur(60px)',
                zIndex: -1,
            }} />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gradient-text"
                style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}
            >
                Society Management <br /> Reimagined.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem auto', fontWeight: 400 }}
            >
                The all-in-one platform for modern residential societies.
                Streamline visitor management, billing, and community engagement with a premium digital experience.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '6rem' }}
            >
                <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Schedule an Investor Demo
                </button>
                <button className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Explore Features
                </button>
            </motion.div>

            {/* Hero Mockup Preview */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                    perspective: '1000px',
                    width: '1000px',
                    margin: '0 auto',
                }}
            >
                <div style={{ transform: 'rotateX(5deg)', transformStyle: 'preserve-3d' }}>
                    <DashboardPreview />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
