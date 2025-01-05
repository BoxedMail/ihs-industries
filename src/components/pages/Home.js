import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection';
import OurIndustries from '../OurIndustries';
import ToServices from '../ToServices';


function Home () {
    return (
        <>
            <HeroSection />
            <ToServices />
            <OurIndustries />

        </>
    );
}

export default Home;