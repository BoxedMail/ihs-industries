import React from 'react';
import '../../App.css';
import { Helmet } from 'react-helmet';
import HeroSection from '../HeroSection';

function Services () {
    return (
        <>

            <Helmet>
                <title>Services - IHS Engineering Co</title>
            </Helmet>

            <HeroSection
                eyebrow="Services"
                titleLines={[
                    { text: 'What', weight: 'bold' },
                    { text: 'We Offer', weight: 'light' },
                ]}
            />

        </>
    );
}

export default Services;