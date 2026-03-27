import React from 'react';
import { motion } from 'framer-motion';
import SplineScene from './SplineScene';
import ErrorBoundary from './ErrorBoundary';

const Hero = () => {
    return (
        <section id="home" className="hero-section" aria-label="Homeit — Society Management App for Residential Communities">
            {/* Visually hidden h1 for SEO — tells Google exactly what this page is about */}
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                Homeit (TheHomeIT) — Smart Society Management App for Visitor Management, Billing &amp; Emergency Response
            </h1>

            <div className="hero-3d-container">
                <ErrorBoundary>
                    <SplineScene scene="https://prod.spline.design/kNRwp6uU6WfXvJm6/scene.splinecode" />
                </ErrorBoundary>
            </div>

            <div className="container hero-content">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
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
                    <button className="btn-secondary">
                        See it in Action
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
