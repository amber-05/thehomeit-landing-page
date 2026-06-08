import { useEffect, useRef } from 'react';

const LERP = 0.11;

const CustomCursor = () => {
    const dotRef  = useRef(null);
    const ringRef = useRef(null);
    const mouse   = useRef({ x: -100, y: -100 });
    const ring    = useRef({ x: -100, y: -100 });
    const hovered = useRef(false);
    const pressed = useRef(false);
    const raf     = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const onOver = (e) => {
            hovered.current = !!e.target.closest(
                'button, a, [role="button"], input, textarea, select, label'
            );
        };

        const onDown = () => { pressed.current = true; };
        const onUp   = () => { pressed.current = false; };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver, { passive: true });
        window.addEventListener('mousedown', onDown, { passive: true });
        window.addEventListener('mouseup', onUp, { passive: true });

        const tick = () => {
            const mx = mouse.current.x;
            const my = mouse.current.y;

            // Dot — snaps exactly to cursor
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mx}px,${my}px)`;
            }

            // Ring — lerps behind
            ring.current.x += (mx - ring.current.x) * LERP;
            ring.current.y += (my - ring.current.y) * LERP;

            if (ringRef.current) {
                const scale  = pressed.current ? 0.75 : hovered.current ? 1.65 : 1;
                const border = hovered.current
                    ? 'rgba(232,64,87,0.85)'
                    : 'rgba(255,255,255,0.45)';
                const bg = hovered.current
                    ? 'rgba(232,64,87,0.07)'
                    : 'transparent';

                ringRef.current.style.transform =
                    `translate(${ring.current.x}px,${ring.current.y}px) scale(${scale})`;
                ringRef.current.style.borderColor = border;
                ringRef.current.style.background  = bg;
            }

            raf.current = requestAnimationFrame(tick);
        };

        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            cancelAnimationFrame(raf.current);
        };
    }, []); // runs once — no state, no re-renders

    return (
        <>
            {/* Ring — lags behind */}
            <div
                ref={ringRef}
                style={{
                    position: 'fixed',
                    top: -20, left: -20,
                    width: 40, height: 40,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.45)',
                    pointerEvents: 'none',
                    zIndex: 99998,
                    willChange: 'transform',
                    transition: 'border-color 0.18s ease, background 0.18s ease, transform 0.12s ease',
                }}
            />
            {/* Dot — exact position */}
            <div
                ref={dotRef}
                style={{
                    position: 'fixed',
                    top: -3, left: -3,
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: '#E84057',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    willChange: 'transform',
                }}
            />
        </>
    );
};

export default CustomCursor;
