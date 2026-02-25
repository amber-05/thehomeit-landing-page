import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Users, Bell, Phone, Map } from 'lucide-react';

const FEATURE_DATA = [
    {
        icon: <Shield size={32} />,
        title: 'Smart Security',
        description: 'AI-powered visitor management and real-time gate alerts for maximum safety.'
    },
    {
        icon: <CreditCard size={32} />,
        title: 'Automated Billing',
        description: 'Instant maintenance invoices and integrated payment gateways for residents.'
    },
    {
        icon: <Users size={32} />,
        title: 'Community Portal',
        description: 'Connect with neighbors, book amenities, and participate in society polls.'
    },
    {
        icon: <Bell size={32} />,
        title: 'Instant Notices',
        description: 'Direct push notifications for emergencies, meetings, and society updates.'
    },
    {
        icon: <Phone size={32} />,
        title: 'Digital Intercom',
        description: 'Direct app-to-gate communication without the need for hardware wiring.'
    },
    {
        icon: <Map size={32} />,
        title: 'Amenity Booking',
        description: 'Easily book clubhouses, pools, and courts with a few taps on your phone.'
    }
];

const Features = () => {
    return (
        <section id="features" className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
                >
                    Everything your society <br /><span className="gradient-text">actually needs.</span>
                </motion.h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                    The complete operating system for modern residential living, built with precision and ease of use.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {FEATURE_DATA.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass"
                        style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            transition: 'transform 0.3s ease',
                        }}
                        whileHover={{
                            translateY: -12,
                            background: 'rgba(255,255,255,0.06)',
                            borderColor: 'rgba(99, 102, 241, 0.3)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}
                    >
                        <div style={{
                            color: 'var(--accent-color)',
                            background: 'rgba(99, 102, 241, 0.1)',
                            width: 'fit-content',
                            padding: '1rem',
                            borderRadius: '16px'
                        }}>
                            {feature.icon}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
