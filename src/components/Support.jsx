import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, ExternalLink } from 'lucide-react';

const FAQS = [
    {
        q: 'How do I add my society to Homeit?',
        a: 'Write to us at yugverma05@gmail.com with your society name, city, and number of units. Our team will onboard you within 24 hours and guide you through the setup.',
    },
    {
        q: 'Can residents use Homeit without installing an app?',
        a: 'Core features like visitor pre-approval and notices are available via the web app. However, installing the mobile app gives full access — push notifications, digital intercom, and QR codes.',
    },
    {
        q: 'How does visitor management work?',
        a: 'Residents pre-approve guests via the app. When the guest arrives, the guard scans their QR or enters their name — the resident gets a real-time notification. All entries are logged automatically.',
    },
    {
        q: 'How is billing handled?',
        a: 'Committee admins generate monthly maintenance invoices in one click. Residents receive a notification and can pay directly via UPI or card. Dues tracking and reminders are automated.',
    },
    {
        q: 'Is our data secure?',
        a: 'Yes. All data is encrypted in transit and at rest. We do not sell or share resident data with third parties. Society data is isolated — one society can never access another\'s data.',
    },
    {
        q: 'What happens if there\'s a platform outage?',
        a: 'We maintain 99.9% uptime. In the rare event of an issue, guards can fall back to manual entry mode. We notify all admins immediately and resolve issues within the hour.',
    },
    {
        q: 'How do I access the admin dashboard?',
        a: 'Go to admin.thehomeit.com and log in with the credentials created during onboarding. Society committee members and designated admins have access.',
    },
    {
        q: 'Is there a fee to use Homeit?',
        a: 'Pricing depends on the size of your society. Contact us for a quote — we offer flexible plans designed to be affordable for Indian residential communities.',
    },
];

const FAQ = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            style={{
                borderRadius: '14px', overflow: 'hidden',
                border: `1px solid ${open ? 'rgba(232,64,87,0.25)' : 'rgba(255,255,255,0.07)'}`,
                background: open ? 'rgba(232,64,87,0.04)' : 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.2s, background 0.2s',
            }}
        >
            <button
                onClick={() => setOpen(o => !o)}
                style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.2rem 1.5rem', background: 'none', border: 'none',
                    color: 'white', fontFamily: 'inherit', fontSize: '0.97rem', fontWeight: 600,
                    textAlign: 'left', gap: '1rem',
                }}
            >
                <span>{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} color="var(--accent-color)" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ padding: '0 1.5rem 1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const Support = () => (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
        <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '400px',
                background: 'radial-gradient(circle, rgba(232,64,87,0.07) 0%, transparent 65%)',
                pointerEvents: 'none', filter: 'blur(60px)',
            }} />

            <div className="container" style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.p {...fade()} style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Support Center
                    </motion.p>
                    <motion.h1 {...fade(0.08)} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
                        How can we help?
                    </motion.h1>
                    <motion.p {...fade(0.16)} style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto' }}>
                        Find answers to common questions below, or reach out directly.
                    </motion.p>
                </div>

                {/* Quick links */}
                <motion.div {...fade(0.1)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                    <a href="mailto:yugverma05@gmail.com" style={{ textDecoration: 'none' }}>
                        <div style={{
                            padding: '1.25rem 1.5rem', borderRadius: '14px',
                            background: 'rgba(232,64,87,0.06)', border: '1px solid rgba(232,64,87,0.18)',
                            display: 'flex', alignItems: 'center', gap: '0.85rem',
                        }}>
                            <Mail size={20} color="var(--accent-color)" />
                            <div>
                                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Support</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>yugverma05@gmail.com</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://admin.thehomeit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div style={{
                            padding: '1.25rem 1.5rem', borderRadius: '14px',
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex', alignItems: 'center', gap: '0.85rem',
                        }}>
                            <ExternalLink size={20} color="var(--text-secondary)" />
                            <div>
                                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Admin Dashboard</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>admin.thehomeit.com</p>
                            </div>
                        </div>
                    </a>
                </motion.div>

                {/* FAQ */}
                <motion.h2 {...fade()} style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    Frequently Asked Questions
                </motion.h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {FAQS.map((faq, i) => (
                        <motion.div key={i} {...fade(i * 0.04)}>
                            <FAQ {...faq} />
                        </motion.div>
                    ))}
                </div>

                <motion.p {...fade(0.2)} style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.9rem' }}>
                    Still stuck? Email us at{' '}
                    <a href="mailto:yugverma05@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>yugverma05@gmail.com</a>
                    {' '}and we'll get back to you within 24 hours.
                </motion.p>
            </div>
        </section>
    </div>
);

export default Support;
