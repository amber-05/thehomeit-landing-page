import React from 'react';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import Features from './Features';
import AppPreview from './AppPreview';
import ProductImpact from './ProductImpact';
import PricingContact from './Pricing';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustStrip />
            <Features />
            <AppPreview />
            <ProductImpact />
            <PricingContact />
        </main>
    );
};

export default Home;
