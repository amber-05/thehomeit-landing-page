import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'active'
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Detect interactive elements
            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (el) {
                const isHoverable = el.closest('a, button, [role="button"], input, textarea, select, label, .hover-target');
                setCursorType(isHoverable ? 'hover' : 'default');
            }
        };

        const onMouseDown = () => setCursorType('active');
        const onMouseUp = () => setCursorType('default');

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        const animate = () => {
            const lerpFactor = 0.15;
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

            if (cursorRef.current) {
                const dx = mousePos.current.x - cursorPos.current.x;
                const dy = mousePos.current.y - cursorPos.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                
                // Speed-based stretching
                const stretch = 1 + Math.min(distance / 120, 0.4);
                
                // Cursor size based on state
                let size = 32;
                if (cursorType === 'hover') size = 64;
                if (cursorType === 'active') size = 24;

                const transform = `translate(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px) rotate(${angle}deg) scaleX(${stretch})`;
                
                cursorRef.current.style.transform = transform;
                cursorRef.current.style.width = `${size}px`;
                cursorRef.current.style.height = `${size}px`;
            }

            rafId.current = requestAnimationFrame(animate);
        };
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(rafId.current);
        };
    }, [cursorType]);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: 'white',
                pointerEvents: 'none',
                zIndex: 999999,
                mixBlendMode: 'difference',
                transition: 'width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s ease',
                willChange: 'transform, width, height',
                boxShadow: cursorType === 'hover' ? '0 0 20px rgba(255,255,255,0.4)' : 'none',
            }}
        />
    );
};

export default CustomCursor;

