import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection';
import OurIndustries from '../OurIndustries';
import ToServices from '../ToServices';
import Logo from '../Logo';
import MiniAbout from '../MiniAbout';
import Clients from '../Clients';
import { Helmet } from 'react-helmet';

function Home () {
    return (
        <>

            <Helmet>
                <title>Home - IHS Engineering Co</title>
                <meta
                    name="description"
                    content="Construction Engineering Specialists - Delivering world-class engineering solutions tailored to your needs."
                />
            </Helmet>
            
            <HeroSection
                eyebrow="Home"
                titleLines={[
                    { text: 'Building', weight: 'light' },
                    { text: 'a better', weight: 'bold' },
                    { text: 'future', weight: 'light' },
                ]}
            />
            <Logo/>
            <MiniAbout />
            <ToServices />
            <OurIndustries />
            <Clients />
        
        </>
    );
}

export default Home;