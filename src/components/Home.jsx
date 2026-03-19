import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ProductImpact from './ProductImpact';
import PricingContact from './Pricing';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <ProductImpact />
            <PricingContact />
        </main>
    );
};

export default Home;
