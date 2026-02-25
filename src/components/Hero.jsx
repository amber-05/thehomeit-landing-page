import React from 'react';
import { motion } from 'framer-motion';
import SplineScene from './SplineScene';
import ErrorBoundary from './ErrorBoundary';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-3d-container">
                <ErrorBoundary>
                    <SplineScene scene="https://prod.spline.design/kNRwp6uU6WfXvJm6/scene.splinecode" />
                </ErrorBoundary>
            </div>

            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="gradient-text hero-title"
                >
                    The OS for <br /> Modern Societies.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-subtitle"
                >
                    homeit transforms your residential community into a smart ecosystem.
                    Experience seamless management, enhanced security, and true connectivity.
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
