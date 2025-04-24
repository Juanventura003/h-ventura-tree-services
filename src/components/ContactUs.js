import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {
  const [fadeIn, setFadeIn] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2n97jqk',
        'template_uyzunuw',
        form.current,
        '80fvT2wv3n0M3h0Vn'
      )
      .then((result) => {
        console.log('✅ Email sent:', result.text);
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('❌ Email send error:', error.text);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className={`contact ${fadeIn ? 'fade-in' : ''}`}>
      <h1>Contact Us</h1>
      <p>Have questions or need a quote? We're here to help!</p>
      <p>
        Prefer to call? Reach us at <a href="tel:+12404577371" className="phone-link">(240) 457-7371</a>
      </p>

      {sent && <p className="success-message">✅ Message sent successfully!</p>}

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
