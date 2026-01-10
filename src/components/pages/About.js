import React from 'react';
import '../../App.css';
import { Helmet } from 'react-helmet';
import HeroSection from '../HeroSection';


function About () {
    return (
        <>

            <Helmet>
                <title>About - IHS Engineering Co</title>
            </Helmet>

            <HeroSection
                eyebrow="About"
                titleLines={[
                    { text: 'Who', weight: 'bold' },
                    { text: 'We Are', weight: 'light' },
                ]}
            />

        </>
    );
}

export default About;