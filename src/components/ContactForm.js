import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, sending, success, or error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;

        try {
            const formData = new FormData(form);
            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="success-message">
                <h2>Your message has been sent!</h2>
                <p>We will get back to you as soon as possible.</p>
            </div>
        );
    }

    return (
        <div className="contact-form-container">
            {/* Location and Contact Info Section */}
            <div className="contact-info-container">
                {/* Location */}
                <div className="location">
                    <h3>Located</h3>
                    <p>Melbourne, Australia</p>
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Contact Info</h3>
                    /*<p>Phone: +61 451 779 644</p>*/
                    <p>Email: <a href="mailto:info@coneng.net.au">info@ihsengineeringco.com.au</a></p>
                </div>
            </div>

            {/* Form Section */}
            <div className="form-box">
                <h2 className="contact-title">LET US HANDLE YOUR NEXT PROJECT</h2>
                {status === 'error' && (
                    <p className="error-message">Something went wrong. Please try again.</p>
                )}
                <form
                    name="contact-form"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    {/* Hidden input for form name */}
                    <input type="hidden" name="form-name" value="contact-form" />

                    {/* Spam honeypot field */}
                    <div hidden>
                        <input name="bot-field" />
                    </div>

                    {/* Form Fields */}
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name*" required />
                        <input type="email" name="email" placeholder="Email*" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Message*" required></textarea>
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
