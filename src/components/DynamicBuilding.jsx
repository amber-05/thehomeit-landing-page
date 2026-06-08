import React from 'react';

const DynamicBuilding = () => (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Dot grid */}
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />

        {/* Primary red orb — top right */}
        <div style={{
            position: 'absolute', top: '-15%', right: '-5%',
            width: '65vw', height: '65vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,64,87,0.13) 0%, transparent 65%)',
            animation: 'heroOrb1 9s ease-in-out infinite',
        }} />

        {/* Secondary orb — bottom left */}
        <div style={{
            position: 'absolute', bottom: '-10%', left: '-8%',
            width: '50vw', height: '50vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,64,87,0.07) 0%, transparent 65%)',
            animation: 'heroOrb2 13s ease-in-out infinite',
        }} />

        {/* Centre vignette to keep text readable */}
        <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(3,3,3,0.55) 0%, transparent 100%)',
        }} />
    </div>
);

export default DynamicBuilding;
