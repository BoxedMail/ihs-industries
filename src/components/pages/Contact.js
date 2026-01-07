import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ContactForm from '../ContactForm';
import { Helmet } from 'react-helmet';

function Contact () {
    return (
        <>

            <Helmet>
                <title>Contact - IHS Engineering Co</title>
            </Helmet>

            <HeroSection
                eyebrow="Contact"
                titleLines={[
                    { text: 'Get in', weight: 'light' },
                    { text: 'Touch', weight: 'bold' },
                ]}
            />

            <ContactForm />
        </>
    );
}

export default Contact;