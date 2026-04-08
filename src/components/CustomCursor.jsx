import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'building'
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const outerPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const rafId = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };

            // Snap inner dot immediately
            if (innerRef.current) {
                innerRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            }

            // Detect element under cursor
            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (el) {
                const isInteractive = el.closest('a, button, [role="button"], input, textarea, select, label');
                const isBuilding = el.closest('.hero-section, .building-canvas');
                if (isInteractive) {
                    setCursorType('hover');
                } else if (isBuilding) {
                    setCursorType('building');
                } else {
                    setCursorType('default');
                }
            }
        };

        window.addEventListener('mousemove', onMove);

        // Smooth outer ring with lerp
        const animate = () => {
            const lerp = 0.12;
            outerPos.current.x += (pos.current.x - outerPos.current.x) * lerp;
            outerPos.current.y += (pos.current.y - outerPos.current.y) * lerp;

            if (outerRef.current) {
                const size = cursorType === 'hover' ? 52 : cursorType === 'building' ? 64 : 36;
                outerRef.current.style.transform = `translate(${outerPos.current.x - size / 2}px, ${outerPos.current.y - size / 2}px)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId.current);
        };
    }, [cursorType]);

    const outerSize = cursorType === 'hover' ? 52 : cursorType === 'building' ? 64 : 36;
    const outerBorder = cursorType === 'hover'
        ? '2px solid rgba(99, 102, 241, 0.9)'
        : cursorType === 'building'
            ? '2px solid rgba(251, 191, 36, 0.8)'
            : '1.5px solid rgba(255,255,255,0.6)';
    const outerBg = cursorType === 'hover'
        ? 'rgba(99, 102, 241, 0.12)'
        : cursorType === 'building'
            ? 'rgba(251, 191, 36, 0.08)'
            : 'transparent';
    const innerColor = cursorType === 'hover'
        ? '#6366f1'
        : cursorType === 'building'
            ? '#fbbf24'
            : 'white';

    return (
        <>
            {/* Outer ring */}
            <div
                ref={outerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: outerSize,
                    height: outerSize,
                    borderRadius: '50%',
                    border: outerBorder,
                    background: outerBg,
                    pointerEvents: 'none',
                    zIndex: 99999,
                    backdropFilter: 'blur(2px)',
                    transition: 'width 0.25s ease, height 0.25s ease, border 0.25s ease, background 0.25s ease',
                    willChange: 'transform',
                    mixBlendMode: 'normal',
                }}
            />
            {/* Inner dot */}
            <div
                ref={innerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: innerColor,
                    pointerEvents: 'none',
                    zIndex: 100000,
                    transition: 'background 0.2s ease',
                    willChange: 'transform',
                    boxShadow: `0 0 10px 2px ${innerColor}66`,
                }}
            />
        </>
    );
};

export default CustomCursor;
