import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Target } from 'lucide-react';

const stats = [
    { label: 'Market Potential', value: '$50B+', icon: <Globe size={24} /> },
    { label: 'User Retention', value: '98%', icon: <Target size={24} /> },
    { label: 'Growth MoM', value: '25%', icon: <TrendingUp size={24} /> },
];

const ProductImpact = () => {
    return (
        <section id="impact" style={{ background: 'var(--secondary-bg)', padding: '10rem 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Elevating <br /> <span className="gradient-text">Urban Living.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
                        homeit is more than just a software; it's a seamless ecosystem designed to enhance every aspect of society life.
                        From effortless security to streamlined community interactions, we're building the operating system for the modern neighborhood.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass"
                    style={{ padding: '3rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, transparent 0%, rgba(99, 102, 241, 0.05) 100%)',
                        zIndex: 0
                    }} />

                    <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', position: 'relative' }}>Why homeit?</h3>
                    <ul style={{ listSet: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                            <p>Scalable SaaS architecture with recurring revenue streams.</p>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                            <p>Integrated marketplace for local vendor partnerships.</p>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                            <p>Proprietary AI for security threat detection & predictive maintenance.</p>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                            <p>Zero hardware dependency for core features.</p>
                        </li>
                    </ul>

                    <button className="btn-primary" style={{ marginTop: '3rem', width: '100%' }}>
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductImpact;
