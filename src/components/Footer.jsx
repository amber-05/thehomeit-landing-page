import React from 'react';
import { Home, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--glass-border)', padding: '6rem 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                        <Home size={28} color="var(--accent-color)" />
                        <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                            homeit
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '300px' }}>
                        Elevating society living through smart management and community-first digital solutions.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                        <Twitter size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                        <Linkedin size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                        <Facebook size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Product</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <li style={{ cursor: 'pointer' }}>Features</li>
                        <li style={{ cursor: 'pointer' }}>Security</li>
                        <li style={{ cursor: 'pointer' }}>Billing</li>
                        <li style={{ cursor: 'pointer' }}>Marketplace</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <li style={{ cursor: 'pointer' }}>About Us</li>
                        <li style={{ cursor: 'pointer' }}>Careers</li>
                        <li style={{ cursor: 'pointer' }}>Investors</li>
                        <li style={{ cursor: 'pointer' }}>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Resources</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <li style={{ cursor: 'pointer' }}>Support Center</li>
                        <li style={{ cursor: 'pointer' }}>Privacy Policy</li>
                        <li style={{ cursor: 'pointer' }}>Terms of Service</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={16} /> support@thehomeit.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '0.5px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                &copy; 2026 homeit SaaS Platform. Built with passion for better communities.
            </div>
        </footer>
    );
};

export default Footer;
