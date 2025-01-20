import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection';
import OurIndustries from '../OurIndustries';
import ToServices from '../ToServices';
import Logo from '../Logo';
import MiniAbout from '../MiniAbout';

function Home () {
    return (
        <>
            <HeroSection />
            <Logo/>
            <MiniAbout />
            <OurIndustries />
            <ToServices />
            <OurIndustries />
        
        </>
    );
}

export default Home;