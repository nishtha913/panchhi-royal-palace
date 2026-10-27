import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { homeLinks } from '../links';
import { MAP_SRC } from '../map';

// TODO: replace these placeholders with real guest reviews before going live
const stats = [
  { value: '500–2000', label: 'Guest Capacity' },
  { value: '200+', label: 'Cars Parking' },
  { value: '6', label: 'Event Types' },
  { value: 'Indoor & Outdoor', label: 'Venue Spaces' },
];

const testimonials = [
  { quote: 'Attended wedding at Panchhi Royal Palace they had royal setup for mandap and catering. Food tasted pretty awesome. One of the best catering I have tasted in Rohtak. Whole banquet gives you luxury vibes. Best wedding venue to get married in Rohtak.', name: 'Hardeep Singh', event: 'Event, Month Year' },
  { quote: 'It was a fantastic arrangements and management in the Royal Palace. All staff remains cooperative spcially Hardip. We will keep in touch for the next event. Very very thanks!', name: 'Raj Singh', event: 'Event, Month Year' },
  { quote: 'It is a very nice palace for a wedding. The decoration is also very lovely and the bridal entry was also very lovely.', name: 'Sumetra Devi', event: 'Event, Month Year' },
];

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

      {/* Stats */}
      <section className="stats">
        {stats.map(stat => (
          <div key={stat.label} className="stat">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
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

      {/* Testimonials */}
      <section id="testimonials" className="section dark">
        <h2>What Our Guests Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial fade-in">
              <div className="quote-mark">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-event">{t.event}</div>
            </div>
          ))}
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
