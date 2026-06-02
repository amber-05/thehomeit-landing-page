import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Target, Check } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

const STAT_CONFIG = [
    { end: 50,  prefix: '$', suffix: 'B+', label: 'Market Potential', icon: <Globe size={18} />, decimals: 0 },
    { end: 98,  suffix: '%',               label: 'User Retention',    icon: <Target size={18} />, decimals: 0 },
    { end: 25,  suffix: '%',               label: 'Growth MoM',        icon: <TrendingUp size={18} />, decimals: 0 },
];

const StatCard = ({ end, prefix = '', suffix = '', label, icon, decimals }) => {
    const [value, ref] = useCountUp(end, { decimals, duration: 2000 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                padding: '1.25rem 1rem', borderRadius: '16px', textAlign: 'center',
                background: 'rgba(232,64,87,0.05)', border: '1px solid rgba(232,64,87,0.15)',
            }}
        >
            <div style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                {prefix}{decimals > 0 ? value.toFixed(decimals) : value}{suffix}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.4rem', lineHeight: 1.3 }}>{label}</div>
        </motion.div>
    );
};

const WHY_ITEMS = [
    'Scalable SaaS architecture with recurring revenue streams.',
    'Integrated marketplace for local vendor partnerships.',
    'Proprietary AI for security threat detection & predictive maintenance.',
    'Zero hardware dependency for core features.',
];

const ProductImpact = () => {
    return (
        <section id="impact" style={{ background: 'var(--secondary-bg)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.07) 0%, transparent 65%)',
                right: '-100px', top: '50%', transform: 'translateY(-50%)',
                pointerEvents: 'none', filter: 'blur(70px)',
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                {/* Left column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <p style={{
                        color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem',
                    }}>Product Impact</p>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800,
                        marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em',
                    }}>
                        Elevating <br />
                        <span className="gradient-text">Urban Living.</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)', fontSize: '1.05rem',
                        marginBottom: '3rem', lineHeight: 1.7, maxWidth: '440px',
                    }}>
                        homeit is more than software — it's the operating system for the modern neighbourhood. From effortless security to streamlined community life.
                    </p>

                    {/* Stat cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {STAT_CONFIG.map((stat, i) => <StatCard key={i} {...stat} />)}
                    </div>
                </motion.div>

                {/* Right column — Why homeit card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                    style={{
                        padding: '2.5rem',
                        borderRadius: '28px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(145deg, rgba(232,64,87,0.07) 0%, rgba(8,4,5,0.6) 100%)',
                        border: '1px solid rgba(232,64,87,0.15)',
                        borderTop: '1px solid rgba(232,64,87,0.3)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div style={{
                        position: 'absolute', top: 0, right: 0,
                        width: '200px', height: '200px',
                        background: 'radial-gradient(circle at top right, rgba(232,64,87,0.1) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />

                    <h3 style={{
                        fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem',
                        letterSpacing: '-0.02em', position: 'relative',
                    }}>Why homeit?</h3>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', position: 'relative' }}>
                        {WHY_ITEMS.map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '22px', height: '22px', borderRadius: '50%',
                                    background: 'rgba(232,64,87,0.15)',
                                    border: '1px solid rgba(232,64,87,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0, marginTop: '1px',
                                }}>
                                    <Check size={11} color="var(--accent-color)" strokeWidth={3} />
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, fontSize: '0.97rem' }}>{item}</p>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="btn-primary"
                        style={{ marginTop: '2.5rem', width: '100%', borderRadius: '14px' }}
                        onClick={() => window.location.href = 'https://admin.thehomeit.com'}
                    >
                        Get Started Free
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductImpact;
