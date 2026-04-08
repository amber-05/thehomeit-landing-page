import React, { useEffect, useRef, useCallback } from 'react';

const DynamicBuilding = () => {
    const containerRef = useRef(null);
    const starsRef = useRef(null);
    const bgSkylineRef = useRef(null);
    const midTowerRef = useRef(null);
    const fgBuildingsRef = useRef(null);
    const cloudsRef = useRef(null);
    const centerX = useRef(window.innerWidth / 2);
    const centerY = useRef(window.innerHeight / 2);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const rafId = useRef(null);

    const animate = useCallback(() => {
        const lerp = 0.06;
        currentX.current += (targetX.current - currentX.current) * lerp;
        currentY.current += (targetY.current - currentY.current) * lerp;

        const x = currentX.current;
        const y = currentY.current;

        if (starsRef.current) starsRef.current.style.transform = `translate(${x * 0.015}px, ${y * 0.015}px)`;
        if (cloudsRef.current) cloudsRef.current.style.transform = `translate(${x * 0.025}px, ${y * 0.01}px)`;
        if (bgSkylineRef.current) bgSkylineRef.current.style.transform = `translate(${x * 0.04}px, ${y * 0.03}px)`;
        if (midTowerRef.current) midTowerRef.current.style.transform = `translate(${x * 0.08}px, ${y * 0.06}px)`;
        if (fgBuildingsRef.current) fgBuildingsRef.current.style.transform = `translate(${x * 0.14}px, ${y * 0.1}px)`;

        rafId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetX.current = e.clientX - centerX.current;
            targetY.current = e.clientY - centerY.current;
        };
        const handleResize = () => {
            centerX.current = window.innerWidth / 2;
            centerY.current = window.innerHeight / 2;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafId.current);
        };
    }, [animate]);

    // Generate random stars
    const stars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        cx: Math.random() * 100,
        cy: Math.random() * 70,
        r: Math.random() * 1.2 + 0.3,
        delay: Math.random() * 4,
        duration: Math.random() * 2 + 2,
    }));

    // Window grid helper
    const buildingWindows = (x, y, cols, rows, winW, winH, gap, color, glowColor) =>
        Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => {
                const lit = Math.random() > 0.3;
                const animClass = `win-blink-${(row * cols + col) % 5}`;
                return (
                    <rect
                        key={`${row}-${col}`}
                        x={x + col * (winW + gap)}
                        y={y + row * (winH + gap)}
                        width={winW}
                        height={winH}
                        rx={1}
                        fill={lit ? color : 'rgba(255,255,255,0.04)'}
                        className={lit ? animClass : ''}
                        style={lit ? { filter: `drop-shadow(0 0 3px ${glowColor})` } : {}}
                    />
                );
            })
        );

    return (
        <div ref={containerRef} className="building-canvas" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {/* ── LAYER 1: Stars ── */}
            <svg
                ref={starsRef}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform' }}
            >
                <defs>
                    <radialGradient id="skyGrad" cx="50%" cy="0%" r="80%">
                        <stop offset="0%" stopColor="#0a0a1a" />
                        <stop offset="100%" stopColor="#030303" />
                    </radialGradient>
                </defs>
                <rect width="100" height="100" fill="url(#skyGrad)" />
                {stars.map(s => (
                    <circle
                        key={s.id}
                        cx={s.cx}
                        cy={s.cy}
                        r={s.r}
                        fill="white"
                        className="star-twinkle"
                        style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
                    />
                ))}
                {/* Moon */}
                <circle cx="82" cy="12" r="4.5" fill="rgba(255,245,200,0.95)" style={{ filter: 'drop-shadow(0 0 8px rgba(255,235,150,0.8))' }} />
                <circle cx="84" cy="10.5" r="3.8" fill="#0a0a1a" />
            </svg>

            {/* ── LAYER 2: Clouds ── */}
            <svg
                ref={cloudsRef}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform', opacity: 0.35 }}
            >
                <ellipse cx="15" cy="22" rx="9" ry="3.5" fill="rgba(150,160,200,0.3)" />
                <ellipse cx="18" cy="20" rx="6" ry="4" fill="rgba(150,160,200,0.2)" />
                <ellipse cx="65" cy="16" rx="12" ry="4" fill="rgba(130,140,190,0.25)" />
                <ellipse cx="69" cy="13.5" rx="7" ry="5" fill="rgba(130,140,190,0.2)" />
            </svg>

            {/* ── LAYER 3: Background Skyline ── */}
            <svg
                ref={bgSkylineRef}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform' }}
            >
                {/* Far BG buildings — muted blue/purple */}
                {[
                    [5, 55, 7, 45], [13, 50, 5, 50], [19, 60, 6, 40], [26, 45, 8, 55],
                    [35, 52, 6, 48], [72, 48, 7, 52], [80, 55, 6, 45], [87, 42, 9, 58],
                ].map(([x, y, w, h], i) => (
                    <rect key={i} x={x} y={y} width={w} height={h} fill={`rgba(60,65,120,${0.35 + i * 0.03})`} rx={0.5} />
                ))}
                {/* Horizon glow */}
                <defs>
                    <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </linearGradient>
                </defs>
                <rect x="0" y="88" width="100" height="12" fill="url(#horizonGlow)" />
            </svg>

            {/* ── LAYER 4: Main Hero Tower ── */}
            <svg
                ref={midTowerRef}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform' }}
            >
                <defs>
                    <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1a1a3e" />
                        <stop offset="50%" stopColor="#1e1e4a" />
                        <stop offset="100%" stopColor="#141430" />
                    </linearGradient>
                    <linearGradient id="towerFaceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#252560" />
                        <stop offset="100%" stopColor="#0f0f2b" />
                    </linearGradient>
                    <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.02)" />
                    </linearGradient>
                    <filter id="towerGlow">
                        <feGaussianBlur stdDeviation="0.8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="roofGlow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Tower base shadow */}
                <ellipse cx="50" cy="99" rx="14" ry="2" fill="rgba(0,0,0,0.6)" />

                {/* Main tower body */}
                <rect x="36" y="28" width="28" height="72" fill="url(#towerGrad)" rx={1} />
                {/* Glass face overlay */}
                <rect x="37" y="29" width="26" height="70" fill="url(#glassSheen)" rx={0.5} />

                {/* Left shadow side */}
                <rect x="36" y="28" width="4" height="72" fill="rgba(0,0,0,0.25)" rx={0} />

                {/* Setback tier 2 */}
                <rect x="38.5" y="20" width="23" height="10" fill="url(#towerFaceGrad)" rx={0.5} />
                <rect x="39" y="21" width="22" height="9" fill="url(#glassSheen)" rx={0.5} />

                {/* Setback tier 3 */}
                <rect x="41.5" y="13" width="17" height="9" fill="url(#towerFaceGrad)" rx={0.5} />
                <rect x="42" y="14" width="16" height="8" fill="url(#glassSheen)" rx={0.3} />

                {/* Spire */}
                <rect x="49" y="4" width="2" height="10" rx={1} fill="rgba(139,92,246,0.9)" style={{ filter: 'drop-shadow(0 0 4px rgba(139,92,246,1))' }} />
                {/* Spire tip blink */}
                <circle cx="50" cy="4" r="1.2" fill="#a78bfa" className="win-blink-0" style={{ filter: 'drop-shadow(0 0 6px #a78bfa)' }} />

                {/* Horizontal floor separators */}
                {Array.from({ length: 12 }, (_, i) => (
                    <line key={i} x1="36" y1={29 + i * 5.8} x2="64" y2={29 + i * 5.8} stroke="rgba(99,102,241,0.12)" strokeWidth={0.2} />
                ))}

                {/* Windows — main tower */}
                {buildingWindows(38.5, 31, 5, 11, 3.2, 4, 1.4, 'rgba(255,230,150,0.85)', 'rgba(255,200,80,0.6)')}

                {/* Windows — tier 2 */}
                {buildingWindows(40, 22, 4, 1, 3.2, 5, 1.4, 'rgba(180,200,255,0.8)', 'rgba(150,180,255,0.6)')}

                {/* Windows — tier 3 */}
                {buildingWindows(43, 15, 3, 1, 3.2, 5, 1.4, 'rgba(180,200,255,0.8)', 'rgba(150,180,255,0.6)')}

                {/* Antenna lights */}
                <circle cx="50" cy="4" r="0.8" fill="#f87171" className="win-blink-2" style={{ filter: 'drop-shadow(0 0 4px #ef4444)' }} />

                {/* Roof ledge accent */}
                <rect x="35" y="27.5" width="30" height="1.5" fill="rgba(99,102,241,0.5)" rx={0.5} style={{ filter: 'drop-shadow(0 0 4px rgba(99,102,241,0.8))' }} />

                {/* Ground glow under tower */}
                <defs>
                    <radialGradient id="groundGlow" cx="50%" cy="100%" r="40%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.25)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <rect x="20" y="85" width="60" height="15" fill="url(#groundGlow)" />

                {/* Street-level podium */}
                <rect x="30" y="95" width="40" height="5" fill="rgba(30,30,70,0.8)" rx={0.5} />
                <rect x="28" y="93.5" width="44" height="2.5" fill="rgba(99,102,241,0.3)" rx={0.5} style={{ filter: 'drop-shadow(0 0 3px rgba(99,102,241,0.6))' }} />

                {/* Lobby windows */}
                {[0, 1, 2, 3].map(i => (
                    <rect key={i} x={31.5 + i * 8.5} y={89} width={5.5} height={7} rx={0.5}
                        fill="rgba(99,102,241,0.2)"
                        style={{ filter: 'drop-shadow(0 0 4px rgba(99,102,241,0.5))' }} />
                ))}
            </svg>

            {/* ── LAYER 5: Foreground Buildings ── */}
            <svg
                ref={fgBuildingsRef}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform' }}
            >
                {/* Left FG building */}
                <rect x="0" y="55" width="20" height="45" fill="rgba(15,15,40,0.95)" rx={0.5} />
                <rect x="1" y="56" width="18" height="43" fill="rgba(25,25,60,0.6)" rx={0.3} />
                {buildingWindows(2, 58, 3, 7, 3.5, 4.5, 1.5, 'rgba(251,191,36,0.75)', 'rgba(251,191,36,0.5)')}

                {/* Left FG second building */}
                <rect x="16" y="65" width="14" height="35" fill="rgba(12,12,35,0.9)" rx={0.5} />
                {buildingWindows(17.5, 67, 2, 5, 3.5, 4.5, 1.5, 'rgba(167,139,250,0.7)', 'rgba(139,92,246,0.5)')}

                {/* Right FG building */}
                <rect x="80" y="58" width="20" height="42" fill="rgba(15,15,40,0.95)" rx={0.5} />
                <rect x="81" y="59" width="18" height="40" fill="rgba(25,25,60,0.6)" rx={0.3} />
                {buildingWindows(82, 61, 3, 7, 3.5, 4.5, 1.5, 'rgba(251,191,36,0.75)', 'rgba(251,191,36,0.5)')}

                {/* Right second FG building */}
                <rect x="70" y="68" width="13" height="32" fill="rgba(12,12,35,0.9)" rx={0.5} />
                {buildingWindows(71.5, 70, 2, 5, 3.5, 4.5, 1.5, 'rgba(167,139,250,0.7)', 'rgba(139,92,246,0.5)')}

                {/* Ground / street */}
                <rect x="0" y="97" width="100" height="3" fill="rgba(8,8,25,0.9)" />
                {/* Street lights */}
                {[10, 30, 68, 88].map((lx, i) => (
                    <g key={i}>
                        <rect x={lx} y={88} width={0.7} height={9} fill="rgba(180,180,220,0.4)" />
                        <circle cx={lx + 0.35} cy={88} r={1.5}
                            fill="rgba(255,235,150,0.9)"
                            style={{ filter: 'drop-shadow(0 0 5px rgba(255,235,150,0.9))' }} />
                    </g>
                ))}
            </svg>

            {/* ── Ambient overlay gradients ── */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(99,102,241,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(15,15,40,0.8) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />
        </div>
    );
};

export default DynamicBuilding;
