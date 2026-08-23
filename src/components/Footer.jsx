import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logoImg from '../assets/Homeit_logo_icon_safe_1024.png';

const FooterLink = ({ to, href, children }) => {
    const style = { color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s', display: 'block' };
    const hover = (e) => e.currentTarget.style.color = 'white';
    const blur  = (e) => e.currentTarget.style.color = 'var(--text-secondary)';
    if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={style} onMouseEnter={hover} onMouseLeave={blur}>{children}</a>;
    return <Link to={to} style={style} onMouseEnter={hover} onMouseLeave={blur}>{children}</Link>;
};

const Footer = () => (
    <footer style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--glass-border)', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem' }}>
            {/* Brand */}
            <div>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, overflow: 'hidden', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <img src={logoImg} alt="homeit logo" style={{ width: 30, height: 30, objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>homeit</span>
                </Link>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '280px', fontSize: '0.9rem' }}>
                    The operating system for modern Indian residential societies.
                </p>
                <a href="mailto:yugverma05@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <Mail size={15} /> yugverma05@gmail.com
                </a>
            </div>

            {/* Product */}
            <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Product</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <li><FooterLink href="/#features">Features</FooterLink></li>
                    <li><FooterLink href="/#features">Security</FooterLink></li>
                    <li><FooterLink href="/#pricing">Pricing</FooterLink></li>
                    <li><FooterLink href="https://admin.thehomeit.com">Admin Portal</FooterLink></li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Company</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <li><FooterLink to="/about">About Us</FooterLink></li>
                    <li><FooterLink to="/careers">Careers</FooterLink></li>
                    <li><FooterLink to="/contact">Contact</FooterLink></li>
                </ul>
            </div>

            {/* Resources */}
            <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Resources</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <li><FooterLink to="/support">Support Center</FooterLink></li>
                    <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
                    <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
                </ul>
            </div>
        </div>

        <div className="container" style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem' }}>
                &copy; 2026 TheHomeIT (Homeit). Built for better communities.
            </p>
            <a href="https://admin.thehomeit.com" style={{
                padding: '0.5rem 1.25rem', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 600,
                background: 'rgba(232,64,87,0.1)', border: '1px solid rgba(232,64,87,0.25)',
                color: 'var(--accent-color)', textDecoration: 'none', transition: 'all 0.2s',
            }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,64,87,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,64,87,0.1)'; }}>
                Admin Login →
            </a>
        </div>
    </footer>
);

export default Footer;
