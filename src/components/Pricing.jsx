import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PRICING_PLANS = [
    {
        name: 'Starter',
        price: '$49',
        description: 'Perfect for small societies with basic needs.',
        features: ['Visitor Management', 'Notice Board', 'Up to 50 Units', 'Mobile App Access'],
    },
    {
        name: 'Professional',
        price: '$129',
        description: 'The complete solution for growing communities.',
        features: ['Digital Billing', 'Amenity Booking', 'Up to 250 Units', '24/7 Security Support', 'Polls & Surveys'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Customized features for large townships.',
        features: ['Multi-gate sync', 'Unlimited Units', 'Custom integrations', 'Dedicated Manager', 'API Access'],
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Transparent Pricing</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Scalable solutions for societies of all sizes.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem'
            }}>
                {PRICING_PLANS.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass"
                        style={{
                            padding: '3rem',
                            borderRadius: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            border: plan.popular ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {plan.popular && (
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-35px',
                                background: 'var(--accent-color)',
                                color: 'white',
                                padding: '0.5rem 3rem',
                                transform: 'rotate(45deg)',
                                fontSize: '0.8rem',
                                fontWeight: 700
                            }}>
                                POPULAR
                            </div>
                        )}

                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
                                {plan.price !== 'Custom' && <span style={{ color: 'var(--text-secondary)' }}>/mo</span>}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>{plan.description}</p>
                        </div>

                        <div style={{ flex: 1 }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                        <Check size={18} color="var(--accent-color)" />
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className={plan.popular ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>
                            Choose {plan.name}
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
