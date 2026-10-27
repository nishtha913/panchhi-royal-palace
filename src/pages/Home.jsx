import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { homeLinks } from '../links';
import { MAP_SRC } from '../map';

export default function Home() {
  usePageSetup('Panchhi Royal Palace');

  return (
    <>
      <Navbar links={homeLinks} cta="call" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Make Your Celebration<br />Truly Royal</h1>
          <p>Where Dreams Meet Grandeur at Rohtak's Premier Wedding Destination</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary"><i className="fa-solid fa-calendar"></i> Book Your Date</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section light">
        <h2>Experience Royal Grandeur</h2>
        <p className="section-subtitle">A palace-style venue designed for your most cherished celebrations</p>

        <div className="card-grid">
          <div className="card fade-in">
            <i className="fa-solid fa-crown"></i>
            <h3>Royal Architecture</h3>
            <p>Magnificent palace-style design with grand entrance and elegant interiors</p>
          </div>
          <div className="card fade-in">
            <i className="fa-solid fa-users"></i>
            <h3>Spacious Venues</h3>
            <p>Accommodate <b>500–2000</b> guests with indoor &amp; outdoor spaces</p>
          </div>
          <div className="card fade-in">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Prime Location</h3>
            <p>Easy access from Rohtak city with parking for <b>200+</b> vehicles</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <h2>Our Stunning Venue</h2>
        <p className="section-subtitle">Explore the spaces where memories are made</p>

        <div className="gallery-grid">
          <img src="/images/hero-bg.jpeg" />
          <img src="/images/home-grid-2.jpeg" />
          <img src="/images/home-grid-4.jpeg" />
        </div>

        <div className="gallery-cta">
          <Link to="/gallery" className="cta-btn"><i className="fa-solid fa-images"></i>View Full Gallery</Link>
        </div>
      </section>

      {/* Enquiry */}
      <section className="enquiry-cta">
        <div className="enquiry-overlay">
          <h2>Plan Your Royal Celebration</h2>
          <p>Fill out the form and our team will contact you within 24 hours</p>

          <Link to="/contact" className="cta-btn">
            <i className="fa-solid fa-envelope"></i>
            Enquire Now
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-item"><i className="fa-solid fa-location-dot"></i> <span>Chamaria Road, Near Makrauli Toll Plaza, Rohtak</span></p>
          <p className="contact-item"><i className="fa-solid fa-phone"></i> <span>+91-84108-55000</span></p>
          <a href="mailto:palacepanchhiroyal@gmail.com" className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>palacepanchhiroyal@gmail.com</span>
          </a>
        </div>

        <div className="map-container">
          <iframe
            src={MAP_SRC}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <Footer links={homeLinks} />

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/917450059009"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i> Chat Now
      </a>
    </>
  );
}
