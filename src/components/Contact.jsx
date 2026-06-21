import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', society: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Homeit Inquiry — ${form.society || form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nSociety: ${form.society}\n\nMessage:\n${form.message}`);
        window.location.href = `mailto:yugverma05@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    const inputStyle = {
        width: '100%', padding: '0.85rem 1rem', borderRadius: '12px',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
        color: 'white', fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none',
        transition: 'border-color 0.2s',
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
            <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '600px', height: '400px',
                    background: 'radial-gradient(circle, rgba(232,64,87,0.08) 0%, transparent 65%)',
                    pointerEvents: 'none', filter: 'blur(60px)',
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <motion.p {...fade()} style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                            Contact Us
                        </motion.p>
                        <motion.h1 {...fade(0.08)} style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
                            Let's get your society<br />
                            <span className="gradient-text">on Homeit.</span>
                        </motion.h1>
                        <motion.p {...fade(0.16)} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' }}>
                            Whether you're a committee member, resident, or investor — we'd love to hear from you.
                        </motion.p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start', maxWidth: '900px', margin: '0 auto' }}>
                        {/* Info */}
                        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { Icon: Mail, label: 'Email', value: 'yugverma05@gmail.com', href: 'mailto:yugverma05@gmail.com' },
                                { Icon: MapPin, label: 'Based in', value: 'India', href: null },
                            ].map(({ Icon, label, value, href }, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: '10px',
                                        background: 'rgba(232,64,87,0.1)', border: '1px solid rgba(232,64,87,0.22)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--accent-color)', flexShrink: 0,
                                    }}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</p>
                                        {href
                                            ? <a href={href} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>{value}</a>
                                            : <p style={{ color: 'white', fontSize: '0.95rem' }}>{value}</p>
                                        }
                                    </div>
                                </div>
                            ))}

                            <div style={{
                                padding: '1.5rem', borderRadius: '16px',
                                background: 'rgba(232,64,87,0.06)', border: '1px solid rgba(232,64,87,0.15)',
                                marginTop: '1rem',
                            }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    For existing users, the fastest support is via the in-app help or email above. We typically respond within 24 hours.
                                </p>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div {...fade(0.18)}>
                            {sent ? (
                                <div style={{ textAlign: 'center', padding: '3rem', borderRadius: '24px', background: 'rgba(232,64,87,0.05)', border: '1px solid rgba(232,64,87,0.2)' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Message sent!</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you at {form.email} shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Name *</label>
                                            <input style={inputStyle} required placeholder="Your name" value={form.name}
                                                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                                onFocus={e => e.target.style.borderColor = 'rgba(232,64,87,0.5)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Email *</label>
                                            <input style={inputStyle} required type="email" placeholder="you@example.com" value={form.email}
                                                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                onFocus={e => e.target.style.borderColor = 'rgba(232,64,87,0.5)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Society / Organisation</label>
                                        <input style={inputStyle} placeholder="e.g. Sunshine Apartments" value={form.society}
                                            onChange={e => setForm(f => ({ ...f, society: e.target.value }))}
                                            onFocus={e => e.target.style.borderColor = 'rgba(232,64,87,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Message *</label>
                                        <textarea style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }} required
                                            placeholder="Tell us about your society and how we can help..."
                                            value={form.message}
                                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                            onFocus={e => e.target.style.borderColor = 'rgba(232,64,87,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ borderRadius: '12px', marginTop: '0.5rem', gap: '0.6rem' }}>
                                        <Send size={16} /> Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
