import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection';
import OurIndustries from '../OurIndustries';
import ToServices from '../ToServices';
import Logo from '../Logo';
import MiniAbout from '../MiniAbout';
import { Helmet } from 'react-helmet';

function Home () {
    return (
        <>

            <Helmet>
                <title>Home - IHS Engineering Co</title>
            </Helmet>
            
            <HeroSection />
            <Logo/>
            <MiniAbout />
            <ToServices />
            <OurIndustries />
        
        </>
    );
}

export default Home;