import { useState, useEffect, useRef } from 'react';

const useCountUp = (target, { duration = 2000, decimals = 0 } = {}) => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const startTime = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 4);
                        const current = eased * target;
                        setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
                        if (progress < 1) requestAnimationFrame(tick);
                        else setValue(target);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration, decimals]);

    return [value, ref];
};

export default useCountUp;
