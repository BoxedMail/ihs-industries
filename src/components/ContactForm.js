import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formData = new FormData(e.target);
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      setStatus(response.ok ? 'success' : 'error');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-eyebrow">Contact</span>
          <h2>Let’s discuss your next project</h2>
          <p>
            Based in Melbourne, we work across Australia delivering
            practical, high-quality engineering solutions.
          </p>

          {/* GOOGLE MAP – AUSTRALIA VIEW */}
          <div className="map-card">
            <div className="map-embed">
            <iframe
                title="Australia Map with Melbourne Pin"
                src="https://www.google.com/maps?q=-37.8136,144.9631&z=5&output=embed"
                loading="lazy"
            />
            </div>
            <span className="map-label">Melbourne, Australia</span>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-card">
            <h4>Email</h4>
            <a href="mailto:info@ihsengineeringco.com.au">
              info@ihsengineeringco.com.au
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          {status === 'success' ? (
            <div className="success-state">
              <h3>Message sent successfully</h3>
              <p>We’ll be in touch shortly.</p>
            </div>
          ) : (
            <>
            <h3 className="form-title">Send us a message</h3>
            <p className="form-subtitle">
                If you have a project in mind or would like to discuss your requirements,
                get in touch and our team will respond promptly.
            </p>


              {status === 'error' && (
                <p className="error-message">
                  Something went wrong. Please try again.
                </p>
              )}

              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <div className="form-row">
                  <input type="text" name="name" placeholder="Name*" required />
                  <input type="email" name="email" placeholder="Email*" required />
                </div>

                <input type="text" name="phone" placeholder="Phone" />

                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                />

                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit message'}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default ContactForm;
