import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = ({ scene }) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    if (error) {
        return (
            <div className="spline-placeholder" style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
            }} />
        );
    }

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {loading && (
                <div className="spline-loader" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                }}>
                    <div className="spinner" />
                </div>
            )}
            <Suspense fallback={null}>
                <Spline
                    scene={scene}
                    onLoad={() => setLoading(false)}
                    onError={() => setError(true)}
                />
            </Suspense>
        </div>
    );
};

export default SplineScene;
