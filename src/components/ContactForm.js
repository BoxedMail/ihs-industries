import React from 'react';
import './ContactForm.css';

function ContactForm() {
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
                    <p>Phone: +61 451 779 644</p>
                    <p>Email: <a href="mailto:info@coneng.net.au">info@ihsengineeringco.com.au</a></p>
                </div>
            </div>

            {/* Form Section */}
            <div className="form-box">
                <h2 className="contact-title">LET US HANDLE YOUR NEXT PROJECT</h2>
                <form netlify>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name*" required />
                        <input type="email" name="email" placeholder="Email*" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Message*" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
