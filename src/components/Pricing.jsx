import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

const PricingContact = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        // Opens the user's mail client with a pre-filled subject
        const subject = encodeURIComponent('Pricing Inquiry — Homeit');
        const body = encodeURIComponent(
            `Hi Homeit team,\n\nI'm interested in learning about your pricing plans.\n\nMy email: ${email}\n\nPlease send me the details.\n\nThanks!`
        );
        window.location.href = `mailto:support@thehomeit.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section
            id="pricing"
            style={{
                padding: '8rem 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Ambient glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}
                >
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(99,102,241,0.12)',
                        border: '1px solid rgba(99,102,241,0.3)',
                        borderRadius: '999px',
                        padding: '0.4rem 1.2rem',
                        fontSize: '0.85rem',
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                        marginBottom: '2rem',
                        letterSpacing: '0.03em',
                    }}>
                        <Mail size={14} />
                        Pricing on Request
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.02em',
                    }}>
                        Tailored Pricing for<br />
                        <span style={{ color: 'var(--accent-color)' }}>Every Community</span>
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        marginBottom: '3rem',
                    }}>
                        We believe pricing should fit your society — not the other way around.
                        Drop your email and we'll send you a personalised plan, or reach us directly at{' '}
                        <a
                            href="mailto:support@thehomeit.com"
                            style={{
                                color: 'var(--accent-color)',
                                textDecoration: 'none',
                                fontWeight: 600,
                            }}
                        >
                            support@thehomeit.com
                        </a>
                    </p>

                    {/* Email form */}
                    {!submitted ? (
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                display: 'flex',
                                gap: '0.75rem',
                                maxWidth: '480px',
                                margin: '0 auto',
                                flexWrap: 'wrap',
                            }}
                        >
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                style={{
                                    flex: 1,
                                    minWidth: '200px',
                                    padding: '0.9rem 1.25rem',
                                    borderRadius: '14px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'var(--glass-bg)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'border-color 0.2s',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                            />
                            <button
                                type="submit"
                                className="btn-primary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.9rem 1.6rem',
                                    borderRadius: '14px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <Send size={16} />
                                Get Pricing
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                color: '#4ade80',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                            }}
                        >
                            <CheckCircle size={22} />
                            Opening your mail client — talk soon!
                        </motion.div>
                    )}

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        marginTop: '1.25rem',
                        opacity: 0.7,
                    }}>
                        No spam. We'll only send you pricing details.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingContact;
