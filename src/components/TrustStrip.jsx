import React from 'react';
import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';

const STATS = [
    { end: 2,    suffix: '',   label: 'Societies Onboarded', decimals: 0 },
    { end: 146,  suffix: '+',  label: 'Residents Active',    decimals: 0 },
    { end: 99.9, suffix: '%',  label: 'Platform Uptime',     decimals: 1 },
    { end: 4.8,  suffix: '★',  label: 'User Satisfaction',   decimals: 1 },
];

const StatItem = ({ end, suffix = '', prefix = '', label, decimals }) => {
    const [value, ref] = useCountUp(end, { decimals, duration: 2200 });
    const display = decimals > 0 ? value.toFixed(decimals) : value;

    return (
        <div ref={ref} style={{ textAlign: 'center', flex: '1 1 auto' }}>
            <div style={{
                fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #fff 40%, rgba(232,64,87,0.9) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontVariantNumeric: 'tabular-nums',
            }}>
                {prefix}{display}{suffix}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.76rem', marginTop: '0.25rem', fontWeight: 500 }}>
                {label}
            </div>
        </div>
    );
};

const TrustStrip = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'rgba(255,255,255,0.015)',
            padding: '1.5rem 0',
        }}
    >
        <div className="container">
            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
            }}>
                {STATS.map((s, i) => (
                    <React.Fragment key={i}>
                        <StatItem {...s} />
                        {i < STATS.length - 1 && (
                            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </motion.div>
);

export default TrustStrip;
