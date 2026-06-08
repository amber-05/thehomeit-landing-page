import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Users, Bell, Phone, Map } from 'lucide-react';

const FEATURE_DATA = [
    {
        num: '01',
        Icon: Shield,
        title: 'Smart Security',
        description: 'AI-powered visitor management and real-time gate alerts keep every entry logged and every resident safe.',
    },
    {
        num: '02',
        Icon: CreditCard,
        title: 'Automated Billing',
        description: 'Instant maintenance invoices and integrated payment gateways — zero manual follow-ups needed.',
    },
    {
        num: '03',
        Icon: Users,
        title: 'Community Portal',
        description: 'Connect with neighbours, raise complaints, book amenities, and vote on society polls — all in one place.',
    },
    {
        num: '04',
        Icon: Bell,
        title: 'Instant Notices',
        description: 'Push notifications for emergencies, meetings, and society updates reach every resident in seconds.',
    },
    {
        num: '05',
        Icon: Phone,
        title: 'Digital Intercom',
        description: 'App-to-gate communication without any hardware wiring — works on every smartphone, instantly.',
    },
    {
        num: '06',
        Icon: Map,
        title: 'Amenity Booking',
        description: 'Clubhouse, pool, gym, courts — residents book with a tap. Managers see live availability at a glance.',
    },
];

const Features = () => {
    return (
        <section id="features" style={{ position: 'relative', padding: '7rem 0', overflow: 'hidden' }}>
            {/* Ambient glows */}
            <div style={{
                position: 'absolute', width: '700px', height: '700px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.07) 0%, transparent 65%)',
                left: '-200px', top: '10%', pointerEvents: 'none', filter: 'blur(60px)',
            }} />
            <div style={{
                position: 'absolute', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.05) 0%, transparent 65%)',
                right: '-100px', bottom: '15%', pointerEvents: 'none', filter: 'blur(60px)',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
                        }}
                    >
                        Platform Features
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800,
                            marginBottom: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.1,
                        }}
                    >
                        Everything your society<br />
                        <span className="gradient-text">actually needs.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        style={{
                            color: 'var(--text-secondary)', fontSize: '1.1rem',
                            maxWidth: '520px', margin: '0 auto', lineHeight: 1.65,
                        }}
                    >
                        Built for modern Indian communities — every feature shaped by real society needs.
                    </motion.p>
                </div>

                {/* Feature grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.25rem',
                }}>
                    {FEATURE_DATA.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 48, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.08 }}
                            transition={{
                                type: 'spring',
                                stiffness: 240,
                                damping: 22,
                                delay: index * 0.09,
                            }}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 0 0 1px rgba(232,64,87,0.2), 0 16px 48px rgba(232,64,87,0.1), 0 32px 64px rgba(0,0,0,0.35)',
                            }}
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                background: 'linear-gradient(145deg, rgba(232,64,87,0.06) 0%, rgba(6,3,4,0.9) 100%)',
                                border: '1px solid rgba(232,64,87,0.14)',
                                borderTop: '1px solid rgba(232,64,87,0.28)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'border-color 0.3s ease',
                                cursor: 'default',
                            }}
                        >
                            {/* Feature number */}
                            <span style={{
                                position: 'absolute', top: '1.25rem', right: '1.5rem',
                                fontSize: '0.72rem', fontWeight: 700,
                                color: 'rgba(232,64,87,0.3)', letterSpacing: '0.04em',
                            }}>{feature.num}</span>

                            {/* Corner glow */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '130px', height: '130px',
                                background: 'radial-gradient(circle at top right, rgba(232,64,87,0.07) 0%, transparent 70%)',
                                pointerEvents: 'none',
                            }} />

                            {/* Icon */}
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '14px',
                                background: 'rgba(232,64,87,0.1)',
                                border: '1px solid rgba(232,64,87,0.22)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--accent-color)', marginBottom: '1.5rem',
                                boxShadow: '0 0 24px rgba(232,64,87,0.12)',
                            }}>
                                <feature.Icon size={22} />
                            </div>

                            <h3 style={{
                                fontSize: '1.05rem', fontWeight: 700,
                                marginBottom: '0.55rem', letterSpacing: '-0.01em',
                            }}>{feature.title}</h3>
                            <p style={{
                                color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.92rem',
                            }}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
