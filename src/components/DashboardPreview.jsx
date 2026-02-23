import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Shield, CreditCard, Settings, Bell, Search, Plus } from 'lucide-react';

const DashboardPreview = () => {
    return (
        <div className="glass" style={{
            width: '1000px',
            height: '600px',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            margin: '0 auto',
        }}>
            {/* Sidebar */}
            <div style={{
                width: '240px',
                borderRight: '1px solid var(--glass-border)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                background: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--accent-color)', borderRadius: '8px' }}></div>
                    <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>homeit</span>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { icon: <LayoutDashboard size={20} />, label: 'Overview', active: true },
                        { icon: <Users size={20} />, label: 'Residents' },
                        { icon: <Shield size={20} />, label: 'Visitors' },
                        { icon: <CreditCard size={20} />, label: 'Payments' },
                        { icon: <Bell size={20} />, label: 'Notices' },
                        { icon: <Settings size={20} />, label: 'Settings' },
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            color: item.active ? 'white' : 'var(--text-secondary)',
                            background: item.active ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 500
                        }}>
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '2rem', background: 'rgba(255,255,255,0.01)' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Overview</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Search size={16} />
                            <input type="text" placeholder="Search..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none', fontSize: '0.85rem' }} />
                        </div>
                        <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Plus size={16} /> Add Unit
                        </button>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        { label: 'Today\'s Visitors', value: '42', trend: '+12%' },
                        { label: 'Pending Dues', value: '$12,450', trend: '-5%' },
                        { label: 'Active Issues', value: '7', trend: 'Critical' },
                    ].map((stat, i) => (
                        <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{stat.label}</p>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
                            <p style={{ color: stat.trend.includes('+') ? '#4ade80' : '#f87171', fontSize: '0.75rem', marginTop: '0.5rem' }}>{stat.trend}</p>
                        </div>
                    ))}
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', height: '240px' }}>
                    <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Visitor Log (Live)</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.8rem', borderBottom: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>John Doe</p>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Unit 405 • Relative</p>
                                    </div>
                                </div>
                                <span className="glass" style={{ padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.7rem', color: '#4ade80' }}>Checked In</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPreview;
