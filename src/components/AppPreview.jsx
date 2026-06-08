import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/app-home.png';
import img2 from '../assets/app-profile.png';
import img3 from '../assets/app-qr.png';
import img4 from '../assets/app-visitors.png';
import img5 from '../assets/app-vehicle.png';
import img6 from '../assets/app-guard.png';
import img7 from '../assets/app-addvisitor.png';

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];
const N = IMAGES.length;
const RADIUS = 440;

const AppPreview = () => {
    const ringRef = useRef(null);
    const rotRef = useRef(0);
    const speedRef = useRef(0.18);
    const targetSpeedRef = useRef(0.18);
    const rafRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            // -1 (far left) → slow/reverse  |  0 (center) → normal  |  +1 (far right) → fast
            const norm = (e.clientX / window.innerWidth) * 2 - 1;
            targetSpeedRef.current = 0.15 + norm * 0.45;
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    useEffect(() => {
        const tick = () => {
            speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.04;
            rotRef.current += speedRef.current;
            if (ringRef.current) {
                ringRef.current.style.transform =
                    `rotateX(16deg) rotateY(${rotRef.current}deg)`;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <section
            id="app-preview"
            style={{
                padding: '6rem 0 9rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--secondary-bg)',
            }}
        >
            {/* Ambient center glow */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 70% 55% at 50% 65%, rgba(232,64,87,0.09) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
                        }}
                    >
                        See It In Action
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800,
                            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem',
                        }}
                    >
                        The app your residents<br />
                        <span className="gradient-text">will never want to delete.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'var(--text-secondary)', fontSize: '0.92rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        <span style={{
                            display: 'inline-block', width: 8, height: 8,
                            borderRadius: '50%', background: 'var(--accent-color)',
                            animation: 'pulse 1.8s ease-in-out infinite',
                        }} />
                        Move your cursor left or right to spin
                    </motion.p>
                </div>

                {/* 3D Carousel stage */}
                <div style={{
                    perspective: '1100px',
                    perspectiveOrigin: '50% 25%',
                    height: '500px',
                    position: 'relative',
                }}>
                    <div
                        ref={ringRef}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 0,
                            height: 0,
                            transformStyle: 'preserve-3d',
                            transform: 'rotateX(16deg) rotateY(0deg)',
                            willChange: 'transform',
                        }}
                    >
                        {IMAGES.map((src, i) => {
                            const baseAngle = (360 / N) * i;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        width: '175px',
                                        marginLeft: '-87.5px',
                                        marginTop: '-210px',
                                        transform: `rotateY(${baseAngle}deg) translateZ(${RADIUS}px)`,
                                        willChange: 'transform',
                                    }}
                                >
                                    {/* Phone bezel */}
                                    <div style={{
                                        borderRadius: '38px',
                                        border: '8px solid #161616',
                                        overflow: 'hidden',
                                        background: '#ececec',
                                        position: 'relative',
                                        boxShadow: [
                                            '0 0 0 1.5px rgba(255,255,255,0.07)',
                                            '0 0 0 2.5px rgba(0,0,0,0.5)',
                                            '0 32px 80px rgba(0,0,0,0.75)',
                                            '0 8px 20px rgba(232,64,87,0.06)',
                                        ].join(', '),
                                    }}>
                                        {/* Dynamic island / notch */}
                                        <div style={{
                                            position: 'absolute', top: '6px', left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '52px', height: '14px',
                                            background: '#161616',
                                            borderRadius: '8px',
                                            zIndex: 5,
                                        }} />
                                        <img
                                            src={src}
                                            alt={`Homeit app screen ${i + 1}`}
                                            style={{ width: '100%', display: 'block', userSelect: 'none' }}
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Floor fade */}
                <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '140px',
                    background: `linear-gradient(to top, var(--secondary-bg) 0%, transparent 100%)`,
                    pointerEvents: 'none',
                    zIndex: 2,
                }} />
            </div>
        </section>
    );
};

export default AppPreview;
