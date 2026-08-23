import React from 'react';
import SEO from './SEO';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import Features from './Features';
import AppPreview from './AppPreview';
import ProductImpact from './ProductImpact';
import PricingContact from './Pricing';

const Home = () => {
    return (
        <main>
            <SEO
                title="TheHomeIT (Homeit) — Smart Society Management & Emergency Response App"
                description="TheHomeIT (thehomeit.com / Homeit) is India's leading smart society management app. Automate visitor gate security, maintenance billing, and emergency alerts."
                canonical="https://thehomeit.com/"
            />
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

