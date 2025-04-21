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
        'service_2n97jqk',        // ✅ Your service ID
        'template_uyzunuw',       // ✅ Updated Template ID
        form.current,
        '80fvT2wv3n0M3h0Vn'       // ✅ Your public key
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

      {sent && <p className="success-message">✅ Message sent successfully!</p>}

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
