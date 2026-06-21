import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.85rem', color: 'white' }}>{title}</h2>
        <div style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '0.95rem' }}>{children}</div>
    </div>
);

const Terms = () => (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', padding: '5rem 4rem 7rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Legal</p>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                    Terms of Service
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', fontSize: '0.9rem' }}>
                    Last updated: June 2026 · Also see our <Link to="/privacy" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Privacy Policy</Link>
                </p>

                <Section title="1. Acceptance of Terms">
                    By accessing or using the Homeit platform (thehomeit.com, admin.thehomeit.com, or the Homeit mobile app), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </Section>

                <Section title="2. Description of Service">
                    <p style={{ marginBottom: '0.75rem' }}>Homeit provides a society management platform for residential communities in India, including but not limited to:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.5rem' }}>
                        {['Visitor management and gate security logging', 'Maintenance billing and payment collection', 'Emergency alerts and community notices', 'Amenity booking and community communication', 'Admin dashboard for committee members'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                                <span style={{ color: 'var(--accent-color)', flexShrink: 0 }}>→</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="3. User Accounts">
                    You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately at yugverma05@gmail.com if you suspect any unauthorised use of your account. Homeit reserves the right to terminate accounts that violate these terms.
                </Section>

                <Section title="4. Acceptable Use">
                    <p style={{ marginBottom: '0.75rem' }}>You agree not to use Homeit to:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.5rem' }}>
                        {[
                            'Upload or share unlawful, harmful, or fraudulent content',
                            'Attempt to gain unauthorised access to other accounts or systems',
                            'Use the platform for commercial purposes not explicitly authorised',
                            'Interfere with the platform\'s normal operation',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                                <span style={{ color: 'var(--accent-color)', flexShrink: 0 }}>→</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="5. Data & Privacy">
                    We take your privacy seriously. All personal data collected through Homeit is handled in accordance with our <Link to="/privacy" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Privacy Policy</Link>. Society data is isolated — your society's data is never accessible to other societies on the platform.
                </Section>

                <Section title="6. Payments & Billing">
                    Subscription fees, if applicable, are billed as agreed at onboarding. All payments are processed via secure third-party payment gateways. Homeit does not store card details. Refund requests must be submitted within 7 days of the billing date.
                </Section>

                <Section title="7. Limitation of Liability">
                    Homeit is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount paid by you in the preceding 3 months.
                </Section>

                <Section title="8. Modifications">
                    We may update these Terms from time to time. We will notify users of significant changes via email or an in-app notice. Continued use after notification constitutes acceptance of the updated terms.
                </Section>

                <Section title="9. Governing Law">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
                </Section>

                <Section title="10. Contact">
                    For questions about these Terms, contact us at <a href="mailto:yugverma05@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>yugverma05@gmail.com</a>.
                </Section>
            </motion.div>
        </div>
    </div>
);

export default Terms;
