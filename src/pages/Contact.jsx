import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { contactPageLinks } from '../links';
import { MAP_SRC } from '../map';

const today = () => new Date().toISOString().split('T')[0];

/* ===============================
   ENQUIRY FORM
=============================== */

function EnquiryForm() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = formRef.current;
    form.classList.add('submitted');

    if (
      !form.elements.name.value.trim() ||
      !form.elements.phone.value.trim() ||
      !form.elements.date.value ||
      !form.elements.eventType.value ||
      !form.elements.guests.value
    ) {
      alert("Please fill all required fields marked with *");
      return;
    }

    setSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form
    )
    .then(() => {
      alert("Thank you! Your enquiry has been sent.");
      form.reset();
      form.classList.remove('submitted');
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      setSending(false);
    });
  };

  return (
    <form id="enquiryForm" ref={formRef} noValidate onSubmit={handleSubmit}>

      <div className="form-row">
        <input type="text" name="name" placeholder="Full Name *" required />
        <input type="tel" name="phone" placeholder="Mobile Number *" required />
      </div>

      <div className="form-row">
        <input type="email" name="email" placeholder="Email Address" />
        <select name="eventType" required defaultValue="">
          <option value="">Event Type *</option>
          <option>Wedding</option>
          <option>Reception</option>
          <option>Engagement</option>
          <option>Corporate Event</option>
        </select>
      </div>

      <div className="form-row">
        <input type="date" name="date" required min={today()} defaultValue={today()} />
        <input type="number" name="guests" placeholder="Expected Guests *" required />
      </div>

      <textarea name="message" placeholder="Message / Special Requirements"></textarea>

      <button type="submit" disabled={sending}>{sending ? 'Sending...' : 'Submit Enquiry'}</button>

    </form>
  );
}

export default function Contact() {
  usePageSetup('Contact Us | Panchhi Royal Palace');

  return (
    <>
      <Navbar links={contactPageLinks} cta="call" />

      {/* ================= CONTACT TITLE ================= */}

      <section className="contact-title section">
        <h2>Contact Us</h2>
      </section>

      {/* ================= ENQUIRY FORM ================= */}

      <section id="enquiry" className="enquiry">
        <div className="enquiry-box fade-in">
          <h2>Plan Your Royal Celebration</h2>
          <p>Fill out the form and our team will contact you within 24 hours</p>

          <EnquiryForm />
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}

      <section id="contact" className="contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Chamaria Road, Near Makrauli Toll Plaza, Rohtak</span>
          </p>

          <p className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>+91-84108-55000</span>
          </p>

          <p className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>palacepanchhiroyal@gmail.com</span>
          </p>
        </div>

        <div className="map-container">
          <iframe src={MAP_SRC} loading="lazy"></iframe>
        </div>
      </section>

      <Footer links={contactPageLinks} />
    </>
  );
}
